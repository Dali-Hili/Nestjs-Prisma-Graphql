
const { InputType,Field } = require('graphql')
import { ApiProperty } from '@nestjs/swagger';


export class CreateCustomerDto {
  @ApiProperty({required: false})
  nameAr:          string
  @ApiProperty({required: false})
  nameEng:         string
  @ApiProperty({required: false})
  idNumber:        string
  @ApiProperty({required: true})
  taxNumber:       string
  @ApiProperty({required: true})
  country:         string
  @ApiProperty({required: true})
  city:            string
  @ApiProperty({required: false})
  crNumber:        string
  @ApiProperty({required: true})
  location:        string
  @ApiProperty({required: true})
  address:         string
  @ApiProperty({required: false})
  buildingNum:     string
  @ApiProperty({required: true})
  phone:           string
  @ApiProperty({required: true})
  email:           string
  @ApiProperty({required: false})
  notes:           string

  //Company

  @ApiProperty({required: false})
  compNameEng:     string
  @ApiProperty({required: false})
  compNameAr:      string
  @ApiProperty({required: false})
  gmNameEng:       string
  @ApiProperty({required: false})
  gmNameAr:        string
  @ApiProperty({required: false})
  gmIdNumber:      string
  @ApiProperty({required: false})
  companyActiv:    string
  @ApiProperty({required: false})
  natAddress:      string

  //Goverment

  @ApiProperty({required: false})
  govNameEng:      string
  @ApiProperty({required: false})
  govNameAr:       string
  @ApiProperty({required: false})
  respPersonEng:   string
  @ApiProperty({required: false})
  respPersonAr:    string
  @ApiProperty({required: false})
  respPersonId:    string

  // International Customer

  @ApiProperty({required: false})
  intCusNameEng:   string
  @ApiProperty({required: false})
  intCusNameAr:    string

  //

  contractId:      string
  quotationId:     string
  @ApiProperty({required: true})
  type: string
}

