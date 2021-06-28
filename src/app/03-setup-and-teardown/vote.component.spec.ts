import { VoteComponent } from './vote.component'; 


describe('VoteComponent', () => {
  let vcomp:VoteComponent;

  beforeEach(()=>{
    vcomp  = new VoteComponent();
  });

  it('should increment the totalVotes when upvoted', () => {
    //Arrange
    

    //Act
     vcomp.upVote();

    //Assert

    expect(vcomp.totalVotes).toBe(1);

    
  });

  it('should decrement the totalVotes when downVoted', () => {
    //Arrange
  
    //Act
     vcomp.downVote();

    //Assert

    expect(vcomp.totalVotes).toBe(-1);

    
  });

});