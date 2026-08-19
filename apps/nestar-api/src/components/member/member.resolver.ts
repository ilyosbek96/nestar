import { Mutation, Resolver, Query, Args } from '@nestjs/graphql';
import { MemberService } from './member.service';
import { InternalServerErrorException } from '@nestjs/common';
import { LoginInput, MemberInput } from '../../libs/dto/member/member.input';
import { Member } from '../../libs/dto/member/member';

@Resolver()
export class MemberResolver {
	constructor(private readonly memberService: MemberService) {}

	/** --------------------------- signup --------------------------- **/
	@Mutation(() => Member) // @Mutation(POST)
	public async signup(@Args('input') input: MemberInput): Promise<Member> {
		console.log('Mutation: signup');
		return this.memberService.signup(input);
	}

	/** --------------------------- login --------------------------- **/
	@Mutation(() => Member) // @Mutation(POST)
	public async login(@Args('input') input: LoginInput): Promise<Member> {
		console.log('Mutation: login');
		return this.memberService.login(input);
	}

	/** --------------------------- updateMember --------------------------- **/
	// Authentication
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

	/** --------------------------- getAllMembersByAdmin --------------------------- **/
	/** =============== ADMIN ============= **/
	// Authorization: ADMIN
	@Mutation(() => String)
	public async getAllMembersByAdmin(): Promise<string> {
		return this.memberService.getAllMembersByAdmin();
	}

	/** --------------------------- updateMemberByADmin --------------------------- **/
	// Authorization: ADMIN
	@Mutation(() => String) // @Mutation(POST)
	public async updateMemberByADmin(): Promise<string> {
		console.log('updateMemberByADmin: updateMemberByADmin');
		return this.memberService.updateMemberByADmin();
	}
}
