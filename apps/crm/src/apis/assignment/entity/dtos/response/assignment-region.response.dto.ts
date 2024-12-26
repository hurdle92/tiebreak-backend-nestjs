import { AssignmentRegion } from "../../region.entity";

export class AssignmentRegionResponseDto {
  label: string;
  value: string;

  constructor(region: AssignmentRegion) {
    this.label = region.label;
    this.value = region.value;
  }
}
