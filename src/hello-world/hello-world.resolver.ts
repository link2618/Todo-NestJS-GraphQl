import { Resolver, Query, Float, Int, Args } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {

    @Query( () => String, { description: 'retorna un hola mundo', name: 'hola' } )
    helloWorld(): string {
        return 'Hola Mundo';
    }

    @Query( () => Float, {name: 'number'} )
    getRandomNumber(): number {
        return Math.random() * 100;
    }

    @Query( () => Int, { name: 'randomFromZeroTo', description: 'From zero to argument TO (default 6)' } )
    getRandomFromZeroTo( 
        @Args('to', { nullable: true, type: () => Int } ) to: number = 6
    ): number {
        return Math.floor( Math.random() * to );
    }

}
