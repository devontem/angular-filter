import Option from './option.interface';

export default interface Category {
	title:string;
	key:string;
	options:Option[];
}