import { PartialType } from '@nestjs/mapped-types';
import { CreateAdminsigninDto } from './create-adminsignin.dto';

export class UpdateAdminsigninDto extends PartialType(CreateAdminsigninDto) {}
