export class CreateKpiDto {
  readonly name: string;
  readonly description: string;
  readonly totalWeightage: number;
  readonly maxRating: number;
  readonly isDefault: boolean;
  readonly isLocked: boolean;
}
