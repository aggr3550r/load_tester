import { Inject, Injectable } from '@nestjs/common';
import SecurityUtil from '../../../utils/security.util';
import { Response } from 'express';
import { AppResponseStatus } from '../../../enums/app-response.enum';
import { User } from '../entities/user.entity';
import { UserRepository } from '../repositories/user.repository';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    @Inject(UserService) private userService: UserService,
  ) {}

  /**
   * This method creates a JWT token to be sent to the client which it will use to make subsequent request to protected routes. It also logs the user into the application in the same vein.
   * @param user
   * @param statusCode
   * @param res
   */
  async createAndSendAuthToken(user: User, statusCode: number, res: Response) {
    const token = await SecurityUtil.generateTokenWithSecretAndId(user.id);

    const cookieOptions = {
      expires: new Date(
        Date.now() +
          (Number(process.env.JWT_COOKIE_EXPIRES_IN) ?? 24) *
            24 *
            60 *
            60 *
            1000,
      ),
      httpOnly: true,
    };
    if (process.env.NODE_ENV === 'production') cookieOptions['secure'] = true;

    res.cookie('jwt', token, cookieOptions);

    // Remove password from output
    user.password = undefined;

    res.status(statusCode).json({
      status: AppResponseStatus.SUCCESS,
      token,
      data: {
        user,
      },
    });
  }

  async register() {}

  async login() {}
}
