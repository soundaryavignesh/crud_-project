import { Injectable, CanActivate, ExecutionContext, UnauthorizedException, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from './role.enum';

import { request } from 'https';
import { ROLES_KEY } from './role.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    console.log("user",user)
    
    if (!user || !user.roles){
      throw new UnauthorizedException();
    }
    
    const hasRole = user.roles.some((role: Role) =>requiredRoles.includes(role));
    if (!hasRole) {
      throw new ForbiddenException('You do not have permission to access this resource');
    } 

    return hasRole;
  }
  }
