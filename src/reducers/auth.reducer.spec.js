import reducer from './auth.reducer';

describe('auth reducer', () => {
    it('should return the initial state', () => {
    // TODO + les autres que user_logged
    });
    
    describe('USER_LOGGED', () => {
        it('should return user logged', () => {
            const state = {
                token: null,
                email: null,
                id: null
            };
            expect(
                reducer(null, {
                    type: 'USER_LOGGED',
                    user: {
                        token: 'aToken',
                        email: 'mail@mail.com',
                        iduser: 123
                    }
                })
            ).toEqual(
                {
                    token: 'aToken',
                    email: 'mail@mail.com',
                    id: 123
                }
            )
        })
    })
})