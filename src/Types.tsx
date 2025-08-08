export type Details = {
  ClientName: string;
  Status: string;
  Description: string;
  Address: string;
};

export type InputFieldProps = {
  label?: string;
  name: string;
  type?: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
};

export type FunctionalArea = {
  FunctionalAreaName: string;
  FunctionalAreaType: string;
  Definition: string;
  StartDate: string;
  EndDate: string;
  AlignedClients: string;
};

export type Role = {
  RoleName: string;
  RoleType: string;
  Definition: string;
  StartDate: string;
  EndDate: string;
  Status: string;
};

export type Permission = {
  PermissionName: string;
  Definition: string;
  Status: string;
  Client: string;
  PermissionGroup: string[];
  Roles: string[];
};

export type PermissionGroup = {
  GroupName: string;
  Definition: string;
  Status: string;
};
