# Define variables for AWS access key and secret key
variable "aws_access_key" {
  description = "AWS Access Key"
}

variable "aws_secret_key" {
  description = "AWS Secret Key"
}

# AWS provider configuration
provider "aws" {
  profile    = "default"  # Use the AWS CLI profile named "nate" for authentication
  region     = "us-west-1"
  access_key = var.aws_access_key
  secret_key = var.aws_secret_key
}

# Your other Terraform resources and configurations go here
