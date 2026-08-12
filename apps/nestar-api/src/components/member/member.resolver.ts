import { Mutation, Resolver, Query, Args } from '@nestjs/graphql';
import { MemberService } from './member.service';
import { UsePipes, ValidationPipe } from '@nestjs/common';
import { LoginInput, MemberInput } from '../../libs/dto/member/member.input';

@Resolver()
export class MemberResolver {
	constructor(private readonly memberService: MemberService) {}

	/** --------------------------- signup --------------------------- **/
	@Mutation(() => String) // @Mutation(POST)
	@UsePipes(ValidationPipe)
	public async signup(@Args('input') input: MemberInput): Promise<string> {
		console.log('Mutation: signup');
		console.log('input:', input);
		return this.memberService.signup();
	}

	/** --------------------------- login --------------------------- **/
	@Mutation(() => String) // @Mutation(POST)
	public async login(@Args('input') input: LoginInput): Promise<string> {
		console.log('Mutation: login');
		return this.memberService.login();
	}

	/** --------------------------- updateMember --------------------------- **/
	@Mutation(() => String) // @Mutation(POST)
	public async updateMember(): Promise<string> {
		console.log('Mutation: updateMember');
		return this.memberService.updateMember();
	}

	/** --------------------------- getMember --------------------------- **/
	@Query(() => String) // @Query (GET)
	public async getMember(): Promise<string> {
		console.log('Query: getMember');
		return this.memberService.getMember();
	}
}
