import { Injectable } from '@nestjs/common';

@Injectable()
export class MemberService {
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
