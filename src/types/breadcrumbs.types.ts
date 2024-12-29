export interface IBreadcrumb {
  path: string;
  label: string;
}

export interface IBreadcrumbsState {
  currentPath: string;
  breadcrumbs: IBreadcrumb[];
} 