import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import Main from '@/components/Main.vue'
import NamePrompt from '@/components/NamePrompt'
import NumberRandomizer from '@/components/NumberRandomizer'
import store from "@/store";


describe('Main.vue', () => {
    it('should start classic game mode', () => {
        const main = shallowMount(Main);

        main.vm.startGame('classic');

        expect(store.state.gameMode).to.be.equal('classic')
    });
});

describe('NamePrompt.vue', () => {
   it('should set player name', () => {
       const namePrompt = shallowMount(NamePrompt);

       namePrompt.vm.playerName = 'Player';
       namePrompt.vm.setPlayerName();

       expect(store.state.currentPlayer).to.be.equal('Player');
   })
});

describe('NumberRandomizer.vue', () => {
    it('should generate a random number', () => {
        const game = shallowMount(NumberRandomizer);

        game.vm.randomNumber = 0;
        game.vm.generateRandomNumber();

        expect(game.vm.randomNumber).to.be.not.equal(0);
    });

    it('should compare guessed number with generated number', () => {
        const game = shallowMount(NumberRandomizer);

        game.vm.guess = 500;
        game.vm.randomNumber = 100;
        game.vm.compareNumbers();

        expect(game.vm.isLower).to.be.true;
    })

    it('should return success if the number is guessed', () => {
        const game = shallowMount(NumberRandomizer);

        game.vm.guess = 10;
        game.vm.randomNumber = 10;
        game.vm.tryGuess();

        expect(game.vm.win).to.be.true;
    });

    it('should return error if the number is not guessed', () => {
        const game = shallowMount(NumberRandomizer);

        game.vm.guess = 10;
        game.vm.randomNumber = 10;
        game.vm.tryGuess();

        expect(game.vm.lose).to.be.false;
    })
});
