import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class MemberService {
	/** --------------------------- mongoose --------------------------- **/
	constructor(@InjectModel('Member') private readonly memberModel: Model<null>) {}
	/** --------------------------- signup --------------------------- **/
	public async signup(): Promise<string> {
		return 'signup executed';
	}

	/** --------------------------- login --------------------------- **/
	public async login(): Promise<string> {
		return 'login executed';
	}

	/** --------------------------- updateMember --------------------------- **/
	public async updateMember(): Promise<string> {
		return 'updateMember executed';
	}

	/** --------------------------- getMember --------------------------- **/
	public async getMember(): Promise<string> {
		return 'getMember executed';
	}
}
