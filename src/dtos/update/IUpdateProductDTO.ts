export default interface IUpdateProductDTO {
  id: string;
  category_id?: string;
  description?: string;
  value?: number;
  quantity?: number;
  status?: boolean;
  image_filename?: string;
}
