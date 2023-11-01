import { instance } from './axios';

const ENDPOINT = '/group';

const groupSearchFn = ({ keyword }: { keyword: string }) => instance.get(`${ENDPOINT}/search?keyword=${keyword}`);

export default groupSearchFn;
