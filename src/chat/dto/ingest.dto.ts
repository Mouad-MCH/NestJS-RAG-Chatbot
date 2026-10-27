import { IsArray, IsObject, IsOptional, IsString, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'

class IngestDocDto {
  @IsString()
  content: string;

  @IsOptional()
  @IsObject()
  meta?: Record<string, any>;
}

export class IngestBodyDto {
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => IngestDocDto)
  docs?: IngestDocDto[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  pdfPaths?: string[];
}
