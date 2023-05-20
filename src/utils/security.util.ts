import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';
import * as JWT from 'jsonwebtoken';
import { InvalidTokenException } from '../exceptions/InvalidTokenException';
import { User } from '../modules/user/entities/user.entity';
import { ResponseModel } from '../models/ResponseModel';
import { AppResponseStatus } from '../enums/app-response.enum';

const scrypt = promisify(_scrypt);

export default class SecurityUtil {
  static async generateTokenWithSecretAndId(id: any): Promise<string> {
    return JWT.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
  }

  static async verifyTokenWithSecret(token: any, secretKey: string) {
    try {
      const decoded = JWT.verify(token, secretKey);
      return decoded;
    } catch (error) {
      throw new InvalidTokenException('Invalid or expired token provided.');
    }
  }

  static async encryptPassword(password: string) {
    try {
      const salt = randomBytes(8).toString('hex');
      const hash = (await scrypt(password, salt, 32)) as Buffer;
      const encryptedPassword = salt.concat('.', hash.toString('hex'));

      return encryptedPassword;
    } catch (error) {
      console.log('An error occured while encrypting this password.');
      console.error(error);
    }
  }

  static async verifyPassword(person: User, clientPassword: string) {
    try {
      const personPassword = person?.password;

      if (!personPassword)
        return new ResponseModel(
          AppResponseStatus.NOT_FOUND,
          'Person not found.',
          null,
        );

      let [salt, storedHash] = personPassword.split('.');

      const hash = (await scrypt(clientPassword, salt, 32)) as Buffer;

      if (storedHash === hash.toString('hex')) {
        return new ResponseModel(
          AppResponseStatus.SUCCESS,
          'Password is correct.',
          person,
        );
      } else {
        return new ResponseModel(
          AppResponseStatus.WARNING,
          'Password is incorrect.',
          null,
        );
      }
    } catch (error) {
      console.log('verifyPassword() error \n %o', error);

      return new ResponseModel(
        AppResponseStatus.FAILED,
        'An error occured while trying to verify that password.',
        null,
      );
    }
  }
}
