LightChaser-V3

## Summary

| |Issue|Instances| Gas Savings
|-|:-|:-:|:-:|
| [[M-01](#m-01)] | Privileged functions can create points of failure | 21| 0|
| [[M-02](#m-02)] | safeMint should be used in place of mint | 2| 0|
| [[M-03](#m-03)] | ERC721 (NFT) tokens minted to a smart contract address which can't handle ERC721 tokens will be permanently stuck | 1| 0|
| [[M-04](#m-04)] | Contract can't receive NFTs sent with safeTransferFrom method | 2| 0|
| [[L-01](#l-01)] | Unchecked blocks with subtractions may underflow  | 2| 0|
| [[L-02](#l-02)] | Incorrect comparison against a max value  | 1| 0|
| [[L-03](#l-03)] | Incorrect comparison against a min value  | 1| 0|
| [[L-04](#l-04)] | Functions with array parameters should have length checks in place  | 3| 0|
| [[L-05](#l-05)] | Upgradable contracts should have a __gap variable | 6| 0|
| [[L-06](#l-06)] | The nonReentrance modifier should be first in a function declaration | 3| 0|
| [[L-07](#l-07)] | Function calls within for loops | 2| 0|
| [[L-08](#l-08)] | For loops in public or external functions should be avoided due to high gas costs and possible DOS | 1| 0|
| [[L-09](#l-09)] | No limits when setting min/max amounts | 2| 0|
| [[L-10](#l-10)] | Initializer function can be front run | 6| 0|
| [[L-11](#l-11)] | Use _disableInitializers() to ensure initialization occurs once | 6| 0|
| [[L-12](#l-12)] | Initialize functions do not emit an event | 5| 0|
| [[L-13](#l-13)] | The function decimals() is not part of the ERC20 standard | 1| 0|
| [[L-14](#l-14)] | Missing zero address check in constructor | 2| 0|
| [[L-15](#l-15)] | Use of onlyOwner functions can be lost | 6| 0|
| [[L-16](#l-16)] | Using zero as a parameter | 2| 0|
| [[L-17](#l-17)] | Primary functionality of a contract can be permanently lost | 2| 0|
| [[L-18](#l-18)] | Critical functions should be a two step procedure | 13| 0|
| [[L-19](#l-19)] | TokenURI does not revert if NFT doesn't exist | 1| 0|
| [[L-20](#l-20)] | Remaining eth may not be refunded to users | 1| 0|
| [[L-21](#l-21)] | Constant decimal values | 4| 0|
| [[L-22](#l-22)] | NFT doesn't handle hard forks | 1| 0|
| [[L-23](#l-23)] | Consider implementing a blacklist function for NFTs | 2| 0|
| [[L-24](#l-24)] | Contract uses both ERC20 and ERC721 | 1| 0|
| [[L-25](#l-25)] | Revert on Transfer to the Zero Address | 1| 0|
| [[L-26](#l-26)] | External call recipient may consume all transaction gas | 2| 0|
| [[L-27](#l-27)] | Critical functions should have a timelock | 12| 0|
| [[L-28](#l-28)] | No limits when setting price values | 1| 0|
| [[L-29](#l-29)] | Prefer skip over revert model in iteration | 2| 0|
| [[L-30](#l-30)] | Address collision possible due to upcast | 1| 0|
| [[L-31](#l-31)] | No limits when setting price amounts | 1| 0|
| [[L-32](#l-32)] | Constructors missing validation | 1| 0|
| [[L-33](#l-33)] | Functions calling contracts/addresses with transfer hooks are missing reentrancy guards | 1| 0|
| [[L-34](#l-34)] | Code injection via token name | 3| 0|
| [[L-35](#l-35)] | Inconsistent checks of address params against address(0) | 5| 0|
| [[L-36](#l-36)] | Division in comparison | 2| 0|
| [[L-37](#l-37)] | Functions calling contracts/addresses with transfer hooks are missing reentrancy guards | 1| 0|
| [[L-38](#l-38)] | Solidity version 0.8.20 won't work on all chains due to PUSH0 | 1| 0|
| [[L-39](#l-39)] | Using block.number is not fully L2 compatible | 1| 0|
| [[G-01](#g-01)] | Internal functions never used once can be removed  | 6| 0|
| [[G-02](#g-02)] | Some error strings are not descriptive  | 1| 0|
| [[G-03](#g-03)] | Consider merging sequential for loops  | 2| 0|
| [[G-04](#g-04)] | Lack of unchecked in loops  | 4| 540|
| [[G-05](#g-05)] | Avoid updating storage when the value hasn't changed  | 2| 1600|
| [[G-06](#g-06)] | Multiple accesses of the same mapping/array key/index should be cached  | 1| 42|
| [[G-07](#g-07)] | Require/revert statements regarding parameters should be first in a function  | 1| 0|
| [[G-08](#g-08)] | The result of a function call should be cached rather than re-calling the function  | 1| 100|
| [[G-09](#g-09)] | State variables which are not modified within functions should be set as constants or immutable for values set at deployment  | 1| 0|
| [[G-10](#g-10)] | Shorten the array rather than copying to a new one  | 2| 0|
| [[G-11](#g-11)] | Using bools for storage incurs overhead  | 5| 350|
| [[G-12](#g-12)] | Low level call can be optimized with assembly | 2| 0|
| [[G-13](#g-13)] | Optimize by Using Assembly for Low-Level Calls' Return Data | 2| 318|
| [[G-14](#g-14)] | Low level call can be optimized with assembly | 2| 496|
| [[G-15](#g-15)] | Consider Using Solady's Gas Optimized Lib for Math | 9| 0|
| [[G-16](#g-16)] | Optimize Gas by Splitting if() revert Statements | 3| 0|
| [[G-17](#g-17)] | x + y is more efficient than using += for state variables (likewise for -=) | 1| 5|
| [[G-18](#g-18)] | There is a 32 byte length threshold for error strings, strings longer than this consume more gas | 19| 266|
| [[G-19](#g-19)] | Public functions not used internally can be marked as external to save gas | 13| 0|
| [[G-20](#g-20)] | bytes.concat() can be used in place of abi.encodePacked | 1| 0|
| [[G-21](#g-21)] | Usage of smaller uint/int types causes overhead | 5| 275|
| [[G-22](#g-22)] | Use != 0 instead of > 0 | 19| 57|
| [[G-23](#g-23)] | Integer increments by one can be unchecked to save on gas fees | 9| 1080|
| [[G-24](#g-24)] | Use byte32 in place of string | 3| 0|
| [[G-25](#g-25)] | Mappings used within a function more than once should be cached to save gas | 1| 100|
| [[G-26](#g-26)] | Use assembly to check for the zero address | 15| 0|
| [[G-27](#g-27)] | Divisions which do not divide by -X cannot overflow or overflow so such operations can be unchecked to save gas | 8| 0|
| [[G-28](#g-28)] | Can transfer 0 | 1| 0|
| [[G-29](#g-29)] | Redundant state variable getters | 1| 0|
| [[G-30](#g-30)] | Divisions of powers of 2 can be replaced by a right shift operation to save gas | 2| 0|
| [[G-31](#g-31)] | Struct variables can be packed into fewer storage slots | 1| 2500|
| [[G-32](#g-32)] | Consider activating via-ir for deploying | 1| 250|
| [[G-33](#g-33)] | Expression `` is cheaper than new bytes(0) | 2| 518|
| [[G-34](#g-34)] | Add unchecked {} for subtractions where the operands cannot underflow | 2| 170|
| [[G-35](#g-35)] | Use bitmap to save gas | 5| 350|
| [[G-36](#g-36)] | Use assembly hashing | 1| 0|
| [[G-37](#g-37)] | Consider using OZ EnumerateSet in place of nested mappings | 1| 1000|
| [[G-38](#g-38)] | Use selfBalance() in place of address(this).balance | 2| 1600|
| [[G-39](#g-39)] | Use assembly to emit events | 28| 1064|
| [[G-40](#g-40)] | Use solady library where possible to save gas | 2| 2000|
| [[G-41](#g-41)] | Use unchecked for operations on immutable variables | 1| 0|
| [[G-42](#g-42)] | Counting down in for statements is more gas efficient | 4| 0|
| [[G-43](#g-43)] | Using private rather than public for constants and immutables, saves gas | 6| 0|
| [[G-44](#g-44)] | Mark Functions That Revert For Normal Users As payable | 24| 600|
| [[G-45](#g-45)] | Function names can be optimized | 7| 896|
| [[G-46](#g-46)] | Consider migrating require statements to custom errors | 65| 910|
| [[G-47](#g-47)] | Multiline comments should be terminated with '*/' and not '**/' | 1| 0|
| [[G-48](#g-48)] | Use assembly to validate msg.sender | 5| 0|
| [[G-49](#g-49)] | Simple checks for zero uint can be done using assembly to save gas | 16| 96|
| [[G-50](#g-50)] | Trade-offs Between Modifiers and Internal Functions | 28| 294000|
| [[G-51](#g-51)] | Using nested if to save gas | 1| 6|
| [[G-52](#g-52)] | Optimize Deployment Size by Fine-tuning IPFS Hash | 7| 74200|
| [[G-53](#g-53)] | Avoid Unnecessary Public Variables | 46| 1012000|
| [[G-54](#g-54)] | Optimize Storage with Byte Truncation for Time Related State Variables | 4| 8000|
| [[G-55](#g-55)] | Stack variable cost less than state variables while used in emiting event | 6| 54|
| [[G-56](#g-56)] | Use s.x = s.x + y instead of s.x += y for memory structs (same for -= etc) | 1| 100|
| [[G-57](#g-57)] | Time state variables can be truncated to uint32 | 2| 40000|
| [[G-58](#g-58)] | ++X costs slightly less gas than X++ (same with --) | 12| 60|
| [[G-59](#g-59)] | Variables that can be set to immutable | 2| 0|
| [[G-60](#g-60)] | The use of a logical AND in place of double if is slightly less gas efficient in instances where there isn't a corresponding else statement for the given if statement | 8| 120|
| [[G-61](#g-61)] | Calling .length in a for loop wastes gas | 2| 194|
| [[G-62](#g-62)] | Internal functions only used once can be inlined so save gas | 7| 210|
| [[G-63](#g-63)] | Constructors can be marked as payable to save deployment gas | 1| 0|
| [[G-64](#g-64)] | Order struct members to reduce size | 1| 0|
| [[G-65](#g-65)] | Merge events to save gas | 1| 375|
| [[G-66](#g-66)] | Use assembly scratch space to build calldata for external calls | 33| 7260|
| [[G-67](#g-67)] | Use assembly scratch space to build calldata for event emits | 21| 4620|
| [[G-68](#g-68)] | Consider using solady's `FixedPointMathLib` | 11| 0|
| [[G-69](#g-69)] | Same cast is done multiple times | 9| 0|
| [[G-70](#g-70)] | Assigning to structs can be more efficient | 1| 130|
| [[G-71](#g-71)] | Cache address(this) when used more than once | 1| 0|
| [[G-72](#g-72)] | Multiline comments should be terminated with '*/' and not '**/' | 1| 0|
| [[N-01](#n-01)] | Emits without msg.sender parameter  | 2| 0|
| [[N-02](#n-02)] | Local variable shadowing  | 1| 0|
| [[N-03](#n-03)] | Cyclomatic complexity in functions  | 1| 0|
| [[N-04](#n-04)] | Missing checks for address(0x0) when updating address state variables  | 1| 0|
| [[N-05](#n-05)] | Two or more functions contain the exact same code  | 10| 0|
| [[N-06](#n-06)] | Greater than comparisons made on state uints that can be set to max  | 4| 0|
| [[N-07](#n-07)] | Empty constructor body without natspec comments  | 1| 0|
| [[N-08](#n-08)] | Inconsistent comment spacing  | 3| 0|
| [[N-09](#n-09)] | Overly complicated arithmetic  | 2| 0|
| [[N-10](#n-10)] | Consider adding emergency-stop functionality  | 5| 0|
| [[N-11](#n-11)] | Duplicated revert() checks should be refactored to a modifier or function  | 1| 0|
| [[N-12](#n-12)] | Missing events in sensitive functions  | 2| 0|
| [[N-13](#n-13)] | Use assembly to write address storage values  | 1| 74|
| [[N-14](#n-14)] | Consider making private state variables internal to increase flexibility  | 1| 0|
| [[N-15](#n-15)] | File is missing NatSpec  | 1| 0|
| [[N-16](#n-16)] | Floating pragma should be avoided | 1| 0|
| [[N-17](#n-17)] | Open TODO in comments | 2| 0|
| [[N-18](#n-18)] | Empty function blocks | 1| 0|
| [[N-19](#n-19)] | Usage of ecrecover is vulnerable to signature malleability | 1| 0|
| [[N-20](#n-20)] | In functions which accept an address as a parameter, there should be a zero address check to prevent bugs | 9| 0|
| [[N-21](#n-21)] | Enum values should be used in place of constant array indexes | 3| 0|
| [[N-22](#n-22)] | Default int values are manually set | 7| 0|
| [[N-23](#n-23)] | Reverts should use customer errors instead of strings | 4| 0|
| [[N-24](#n-24)] | Functions which are either public or external should not have a preceding _ in their name | 1| 0|
| [[N-25](#n-25)] | Functions which are either private or internal should have a preceding _ in their name | 4| 0|
| [[N-26](#n-26)] | Private and internal state variables should have a preceding _ in their name unless they are constants | 3| 0|
| [[N-27](#n-27)] | Public state variables shouldn't have a preceding _ in their name | 1| 0|
| [[N-28](#n-28)] | Contract lines should not be longer than 120 characters for readability | 16| 0|
| [[N-29](#n-29)] | Setters should prevent re-setting of the same value | 12| 9600|
| [[N-30](#n-30)] | Function names should differ to make the code more readable | 6| 0|
| [[N-31](#n-31)] | Functions within contracts are not ordered according to the solidity style guide | 6| 0|
| [[N-32](#n-32)] | Use SafeCast to safely downcast variables | 1| 0|
| [[N-33](#n-33)] | Interface imports should be declared first | 6| 0|
| [[N-34](#n-34)] | Upgradable contract constructor should have the initialize modifier | 1| 0|
| [[N-35](#n-35)] | A function which defines named returns in it's declaration doesn't need to use return  | 2| 0|
| [[N-36](#n-36)] | Constant/immutable state variables defined more than once | 1| 0|
| [[N-37](#n-37)] | Multiple mappings can be replaced with a single struct mapping | 2| 0|
| [[N-38](#n-38)] | Constants should be on the left side of the  | 3| 0|
| [[N-39](#n-39)] | Both immutable and constant state variables should be CONSTANT_CASE | 10| 0|
| [[N-40](#n-40)] | Contracts do not use their OZ upgradable counterparts | 4| 0|
| [[N-41](#n-41)] | Consider using named mappings | 5| 0|
| [[N-42](#n-42)] | Use a single contract or library for system wide constants | 2| 0|
| [[N-43](#n-43)] | Consider using modifiers for address control | 4| 0|
| [[N-44](#n-44)] | Off-by-one timestamp error | 2| 0|
| [[N-45](#n-45)] | Address from parameter can cause issues | 1| 0|
| [[N-46](#n-46)] | Variables should be used in place of magic numbers to improve readability | 20| 0|
| [[N-47](#n-47)] | Mixed usage of int/uint with int256/uint256 | 6| 0|
| [[N-48](#n-48)] | Contract existence is not checked before low level call | 1| 0|
| [[N-49](#n-49)] | Employ Explicit Casting to Bytes or Bytes32 for Enhanced Code Clarity and Meaning | 1| 0|
| [[N-50](#n-50)] | Custom error has no error variables | 2| 0|
| [[N-51](#n-51)] | Event emit should emit a parameter | 3| 0|
| [[N-52](#n-52)] | Empty bytes check is missing | 2| 0|
| [[N-53](#n-53)] | Consider upgrading to ERC721A | 1| 10000|
| [[N-54](#n-54)] | No equate comparison checks between to and from address parameters | 1| 0|
| [[N-55](#n-55)] | Return bool not explicit | 1| 0|
| [[N-56](#n-56)] | Remove unnecessary solhint-disable | 2| 0|
| [[N-57](#n-57)] | Consider using SMTChecker | 9| 2250|
| [[N-58](#n-58)] | Top level declarations should be separated by two blank lines | 2| 0|
| [[N-59](#n-59)] | Contracts should have full test coverage | 7| 0|
| [[N-60](#n-60)] | Consider using SafeTransferLib.safeTransferETH() or Address.sendValue() for clearer semantic meaning | 1| 0|
| [[N-61](#n-61)] | Whitespace in expressions | 3| 0|
| [[N-62](#n-62)] | Consider using named function calls | 17| 0|
| [[N-63](#n-63)] | Public state variables should include natspec comments | 4| 0|
| [[N-64](#n-64)] | Lack of space near the operator | 2| 0|
| [[N-65](#n-65)] | Using while for unbounded loops isn’t recommended | 2| 0|
| [[N-66](#n-66)] | Common functions should be refactored to a common base contract | 4| 0|
| [[N-67](#n-67)] | Use of override is unnecessary | 27| 0|
| [[N-68](#n-68)] | If statement control structures do not comply with best practices | 23| 0|
| [[N-69](#n-69)] | Consider adding formal verification proofs | 7| 0|
| [[N-70](#n-70)] | Contract uses both require()/revert() as well as custom errors | 4| 0|
| [[N-71](#n-71)] | Unused import | 2| 0|
| [[N-72](#n-72)] | Use string.concat() on strings instead of abi.encodePacked() for clearer semantic meaning | 1| 0|
| [[N-73](#n-73)] | Duplicated require() checks should be refactored to a modifier or function | 7| 0|
| [[N-74](#n-74)] | Missing zero address check in initializer | 2| 0|
| [[N-75](#n-75)] | Consider implementing two-step procedure for updating protocol addresses | 2| 0|
| [[N-76](#n-76)] | Consider disallowing transfers to `address(this)` | 1| 0|
| [[N-77](#n-77)] | Add inline comments for unnamed variables in function declarations | 3| 0|
| [[N-78](#n-78)] | Ensure block.timestamp is only used in long time intervals | 1| 0|
| [[N-79](#n-79)] | Avoid mutating function parameters | 1| 0|
| [[N-80](#n-80)] | Don't only depend on Solidity's arithmetic ordering. | 2| 0|
| [[N-81](#n-81)] | It is best practice to use linear inheritance | 6| 0|
| [[N-82](#n-82)] | Superfluous parameter can only be one value | 4| 0|
| [[N-83](#n-83)] | Public variable declarations should have NatSpec descriptions | 3| 0|
| [[N-84](#n-84)] | Use the Modern Upgradeable Contract Paradigm | 1| 0|
| [[N-85](#n-85)] | Upgrade openzeppelin to the Latest Version - 5.0.0 | 7| 0|
| [[N-86](#n-86)] | Use a struct to encapsulate multiple function parameters | 7| 0|
| [[N-87](#n-87)] | Long numbers should include underscores to improve readability and prevent typos | 1| 0|
| [[N-88](#n-88)] | Consider using ERC20Capped | 4| 0|
| [[N-89](#n-89)] | Consider using a format prettier or forge fmt | 26| 0|
| [[N-90](#n-90)] | Use 'using' keyword when using specific imports rather than calling the specific import directly | 14| 0|
| [[N-91](#n-91)] | package.json name variable should only consist of lowercase letters and underscores | 1| 0|
| [[N-92](#n-92)] | package.json version should start at 0.1.0 or 1.0.0 not 0.0.1 or 0.0.0 | 1| 0|
| [[N-93](#n-93)] | Try catch statement without human readable error | 1| 0|
| [[N-94](#n-94)] | Avoid declaring variables with the names of defined functions within the project | 5| 0|
| [[N-95](#n-95)] | Add inline comments for unnamed variables in function declarations | 3| 0|
| [[N-96](#n-96)] | Public state variables should include natspec comments | 4| 0|
| [[N-97](#n-97)] | Public variable declarations should have NatSpec descriptions | 3| 0|
| [[N-98](#n-98)] | Incorrect NatSpec Syntax | 1| 0|
| [[N-99](#n-99)] | Use @inheritdoc rather than using a non-standard annotation | 1| 0|
| [[N-100](#n-100)] | Functions utilizing the nonReentrant modifier should have @dev comments explaining why | 6| 0|
| [[N-101](#n-101)] | No @inheritdoc on override functions | 31| 0|
| [[N-102](#n-102)] | Natspec @author is missing from contract | 5| 0|
| [[N-103](#n-103)] | Natspec comments is missing from contract | 5| 0|
| [[N-104](#n-104)] | Natspec @notice is missing from contract | 6| 0|
| [[N-105](#n-105)] | Natspec @dev is missing from contract | 6| 0|
| [[N-106](#n-106)] | Natspec @title is missing from contract | 5| 0|
| [[N-107](#n-107)] | Natspec @author is missing from abstract | 2| 0|
| [[N-108](#n-108)] | Natspec @title is missing from abstract | 2| 0|
| [[N-109](#n-109)] | Natspec @dev is missing from abstract | 2| 0|
| [[N-110](#n-110)] | Natspec @notice is missing from abstract | 1| 0|
| [[N-111](#n-111)] | Natspec comments is missing from abstract | 1| 0|
| [[N-112](#n-112)] | Error declarations should have NatSpec descriptions | 1| 0|
| [[N-113](#n-113)] | Error declarations should have @dev NatSpec comments | 1| 0|
| [[N-114](#n-114)] | Error declarations should have @notice NatSpec comments | 1| 0|
| [[N-115](#n-115)] | Natspec @dev comments are missing from modifier | 5| 0|
| [[N-116](#n-116)] | Natspec comments are missing from struct | 1| 0|
| [[N-117](#n-117)] | Natspec @params comments are missing from struct | 1| 0|
| [[N-118](#n-118)] | Natspec @dev comments are missing from struct | 1| 0|
| [[N-119](#n-119)] | Natspec @notice comments are missing from struct | 1| 0|
| [[N-120](#n-120)] | Natspec comments are missing from function | 14| 0|
| [[N-121](#n-121)] | Natspec @params comments are missing from function | 32| 0|
| [[N-122](#n-122)] | Natspec @dev comments are missing from function | 51| 0|
| [[N-123](#n-123)] | Natspec @notice comments are missing from function | 24| 0|
| [[N-124](#n-124)] | Natspec comments are missing from constructor | 2| 0|
| [[N-125](#n-125)] | Natspec @dev comments are missing from constructor | 5| 0|
| [[N-126](#n-126)] | Natspec @notice comments are missing from constructor | 4| 0|
| [[N-127](#n-127)] | Natspec @params comments are missing from constructor | 2| 0|
| [[N-128](#n-128)] | Natspec comments are missing from unchecked blocks | 2| 0|
| [[N-129](#n-129)] | Natspec comments are missing from assembly blocks | 1| 0|
| [[N-130](#n-130)] | ERC777 tokens can introduce reentrancy risks | 1| 0|
| [[D-01](#d-01)] | Low level calls in solidity versions preceding 0.8.14 can result in an optimiser bug  | 1| 0|
| [[D-02](#d-02)] | Some if-statement can be converted to a ternary  | 1| 0|
| [[D-03](#d-03)] | Some error strings are not descriptive  | 6| 0|
| [[D-04](#d-04)] | Require/revert statements regarding parameters should be first in a function  | 7| 0|
| [[D-05](#d-05)] | Functions with array parameters should have length checks in place  | 1| 0|
| [[D-06](#d-06)] | Greater than comparisons made on state uints that can be set to max  | 1| 0|
| [[D-07](#d-07)] | .call bypasses function existence check, type checking and argument packing  | 3| 0|
| [[D-08](#d-08)] | Getting a bool return value does not confirm the existence of a function in an external call  | 4| 0|
| [[D-09](#d-09)] | Return values of transfer()/transferFrom() not checked  | 1| 0|
| [[D-10](#d-10)] | Use of transferFrom() rather than safeTransferFrom() for NFTs in will lead to the loss of NFTs  | 1| 0|


 LightChaser-V3 ### Medium Risk Issues


### [M-01]<a name="m-01"></a> Privileged functions can create points of failure
Ensure such accounts are protected and consider implementing multi sig to prevent a single point of failure

*There are 21 instance(s) of this issue:*

```solidity
498:     function _setQuorumVotesBPS(uint256 newQuorumVotesBPS) external onlyOwner  // <= FOUND

```


*GitHub* : [498](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L498-L498)

```solidity
134:     function mint(address account, uint256 amount) public onlyOwner  // <= FOUND

```


*GitHub* : [134](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L134-L134)

```solidity
208:     function pause() external override onlyOwner  // <= FOUND

```


*GitHub* : [208](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L208-L208)

```solidity
265:     function unpause() external override onlyOwner  // <= FOUND

```


*GitHub* : [265](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L265-L265)

```solidity
253:     function setEntropyRateBps(uint256 _entropyRateBps) external onlyOwner  // <= FOUND

```


*GitHub* : [253](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L253-L253)

```solidity
217:     function setCreatorRateBps(uint256 _creatorRateBps) external onlyOwner  // <= FOUND

```


*GitHub* : [217](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L217-L217)

```solidity
309:     function setCreatorsAddress(address _creatorsAddress) external override onlyOwner nonReentrant  // <= FOUND

```


*GitHub* : [309](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L309-L309)

```solidity
233:     function setMinCreatorRateBps(uint256 _minCreatorRateBps) external onlyOwner  // <= FOUND

```


*GitHub* : [233](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L233-L233)

```solidity
277:     function setTimeBuffer(uint256 _timeBuffer) external override onlyOwner  // <= FOUND

```


*GitHub* : [277](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L277-L277)

```solidity
287:     function setReservePrice(uint256 _reservePrice) external override onlyOwner  // <= FOUND

```


*GitHub* : [287](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L287-L287)

```solidity
297:     function setMinBidIncrementPercentage(uint8 _minBidIncrementPercentage) external override onlyOwner  // <= FOUND

```


*GitHub* : [297](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L297-L297)

```solidity
169:     function setContractURIHash(string memory newContractURIHash) external onlyOwner  // <= FOUND

```


*GitHub* : [169](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L169-L169)

```solidity
209:     function setMinter(address _minter) external override onlyOwner nonReentrant whenMinterNotLocked  // <= FOUND

```


*GitHub* : [209](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L209-L209)

```solidity
220:     function lockMinter() external override onlyOwner whenMinterNotLocked  // <= FOUND

```


*GitHub* : [220](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L220-L220)

```solidity
230:     function setDescriptor(
231:         IDescriptorMinimal _descriptor
232:     ) external override onlyOwner nonReentrant whenDescriptorNotLocked  // <= FOUND

```


*GitHub* : [232](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L232-L232)

```solidity
242:     function lockDescriptor() external override onlyOwner whenDescriptorNotLocked  // <= FOUND

```


*GitHub* : [242](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L242-L242)

```solidity
252:     function setCultureIndex(ICultureIndex _cultureIndex) external onlyOwner whenCultureIndexNotLocked nonReentrant  // <= FOUND

```


*GitHub* : [252](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L252-L252)

```solidity
262:     function lockCultureIndex() external override onlyOwner whenCultureIndexNotLocked  // <= FOUND

```


*GitHub* : [262](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L262-L262)

```solidity
119:     function insert(uint256 itemId, uint256 value) public onlyAdmin  // <= FOUND

```


*GitHub* : [119](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L119-L119)

```solidity
136:     function updateValue(uint256 itemId, uint256 newValue) public onlyAdmin  // <= FOUND

```


*GitHub* : [136](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L136-L136)

```solidity
156:     function extractMax() external onlyAdmin returns (uint256, uint256)  // <= FOUND

```


*GitHub* : [156](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L156-L156)
### [M-02]<a name="m-02"></a> safeMint should be used in place of mint
SafeMint should be used in place of mint in Solidity contracts to enhance security and error handling during token creation. The safeMint function includes additional checks and validations compared to the basic mint function, ensuring that tokens are minted only to valid, non-zero addresses. This prevents tokens from being accidentally minted to the zero address, which would render them irretrievable and result in a loss of value.

*There are 2 instance(s) of this issue:*

```solidity
313: 
314:         try verbs.mint() returns (uint256 verbId) { // <= FOUND

```


*GitHub* : [313](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L313-L314)

```solidity
310: 
311:             _mint(to, verbId); // <= FOUND

```


*GitHub* : [310](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L310-L311)
### [M-03]<a name="m-03"></a> ERC721 (NFT) tokens minted to a smart contract address which can't handle ERC721 tokens will be permanently stuck
Both ERC721 and ERC1155 implement ERC165. Therefore the supportsInterface function present in ERC165 can be used to tell if a smart contract address of which a NFT is being minted to supports ERC721. Please refer to EIP-165 for more details.

*There are 1 instance(s) of this issue:*

```solidity
33: contract VerbsToken is
34:     IVerbsToken,
35:     VersionedContract,
36:     UUPS,
37:     Ownable2StepUpgradeable,
38:     ReentrancyGuardUpgradeable,
39:     ERC721CheckpointableUpgradeable
40: {
41:     
42:     address public minter;
43: 
45:     IDescriptorMinimal public descriptor;
46: 
48:     ICultureIndex public cultureIndex;
49: 
51:     bool public isMinterLocked;
52: 
54:     bool public isCultureIndexLocked;
55: 
57:     bool public isDescriptorLocked;
58: 
60:     uint256 private _currentVerbId;
61: 
63:     string private _contractURIHash = "QmQzDwaZ7yQxHHs7sQQenJVB89riTSacSGcJRv9jtHPuz5";
64: 
66:     mapping(uint256 => ICultureIndex.ArtPiece) public artPieces;
67: 
75:     modifier whenMinterNotLocked() {
76:         require(!isMinterLocked, "Minter is locked");
77:         _;
78:     }
79: 
83:     modifier whenCultureIndexNotLocked() {
84:         require(!isCultureIndexLocked, "CultureIndex is locked");
85:         _;
86:     }
87: 
91:     modifier whenDescriptorNotLocked() {
92:         require(!isDescriptorLocked, "Descriptor is locked");
93:         _;
94:     }
95: 
99:     modifier onlyMinter() {
100:         require(msg.sender == minter, "Sender is not the minter");
101:         _;
102:     }
103: 
109:     IRevolutionBuilder private immutable manager;
110: 
116:     constructor(address _manager) payable initializer {
117:         manager = IRevolutionBuilder(_manager);
118:     }
119: 
130:     function initialize(
131:         address _minter,
132:         address _initialOwner,
133:         address _descriptor,
134:         address _cultureIndex,
135:         IRevolutionBuilder.ERC721TokenParams memory _erc721TokenParams
136:     ) external initializer {
137:         require(msg.sender == address(manager), "Only manager can initialize");
138: 
139:         require(_minter != address(0), "Minter cannot be zero address");
140:         require(_initialOwner != address(0), "Initial owner cannot be zero address");
141: 
142:         
143:         __ReentrancyGuard_init();
144: 
145:         
146:         __Ownable_init(_initialOwner);
147: 
148:         
149:         __ERC721_init(_erc721TokenParams.name, _erc721TokenParams.symbol);
150:         _contractURIHash = _erc721TokenParams.contractURIHash;
151: 
152:         
153:         minter = _minter;
154:         descriptor = IDescriptorMinimal(_descriptor);
155:         cultureIndex = ICultureIndex(_cultureIndex);
156:     }
157: 
161:     function contractURI() public view returns (string memory) {
162:         return string(abi.encodePacked("ipfs:
163:     }
164: 
169:     function setContractURIHash(string memory newContractURIHash) external onlyOwner {
170:         _contractURIHash = newContractURIHash;
171:     }
172: 
177:     function mint() public override onlyMinter nonReentrant returns (uint256) { // <= FOUND
178:         return _mintTo(minter);
179:     }
180: 
184:     function burn(uint256 verbId) public override onlyMinter nonReentrant {
185:         _burn(verbId);
186:         emit VerbBurned(verbId);
187:     }
188: 
193:     function tokenURI(uint256 tokenId) public view override returns (string memory) {
194:         return descriptor.tokenURI(tokenId, artPieces[tokenId].metadata);
195:     }
196: 
201:     function dataURI(uint256 tokenId) public view override returns (string memory) {
202:         return descriptor.dataURI(tokenId, artPieces[tokenId].metadata);
203:     }
204: 
209:     function setMinter(address _minter) external override onlyOwner nonReentrant whenMinterNotLocked {
210:         require(_minter != address(0), "Minter cannot be zero address");
211:         minter = _minter;
212: 
213:         emit MinterUpdated(_minter);
214:     }
215: 
220:     function lockMinter() external override onlyOwner whenMinterNotLocked {
221:         isMinterLocked = true;
222: 
223:         emit MinterLocked();
224:     }
225: 
230:     function setDescriptor(
231:         IDescriptorMinimal _descriptor
232:     ) external override onlyOwner nonReentrant whenDescriptorNotLocked {
233:         descriptor = _descriptor;
234: 
235:         emit DescriptorUpdated(_descriptor);
236:     }
237: 
242:     function lockDescriptor() external override onlyOwner whenDescriptorNotLocked {
243:         isDescriptorLocked = true;
244: 
245:         emit DescriptorLocked();
246:     }
247: 
252:     function setCultureIndex(ICultureIndex _cultureIndex) external onlyOwner whenCultureIndexNotLocked nonReentrant {
253:         cultureIndex = _cultureIndex;
254: 
255:         emit CultureIndexUpdated(_cultureIndex);
256:     }
257: 
262:     function lockCultureIndex() external override onlyOwner whenCultureIndexNotLocked {
263:         isCultureIndexLocked = true;
264: 
265:         emit CultureIndexLocked();
266:     }
267: 
273:     function getArtPieceById(uint256 verbId) public view returns (ICultureIndex.ArtPiece memory) {
274:         require(verbId <= _currentVerbId, "Invalid piece ID");
275:         return artPieces[verbId];
276:     }
277: 
281:     function _mintTo(address to) internal returns (uint256) {
282:         ICultureIndex.ArtPiece memory artPiece = cultureIndex.getTopVotedPiece();
283: 
284:         
285:         
286:         require(
287:             artPiece.creators.length <= cultureIndex.MAX_NUM_CREATORS(),
288:             "Creator array must not be > MAX_NUM_CREATORS"
289:         );
290: 
291:         
292:         try cultureIndex.dropTopVotedPiece() returns (ICultureIndex.ArtPiece memory _artPiece) {
293:             artPiece = _artPiece;
294:             uint256 verbId = _currentVerbId++;
295: 
296:             ICultureIndex.ArtPiece storage newPiece = artPieces[verbId];
297: 
298:             newPiece.pieceId = artPiece.pieceId;
299:             newPiece.metadata = artPiece.metadata;
300:             newPiece.isDropped = artPiece.isDropped;
301:             newPiece.sponsor = artPiece.sponsor;
302:             newPiece.totalERC20Supply = artPiece.totalERC20Supply;
303:             newPiece.quorumVotes = artPiece.quorumVotes;
304:             newPiece.totalVotesSupply = artPiece.totalVotesSupply;
305: 
306:             for (uint i = 0; i < artPiece.creators.length; i++) {
307:                 newPiece.creators.push(artPiece.creators[i]);
308:             }
309: 
310:             _mint(to, verbId);
311: 
312:             emit VerbCreated(verbId, artPiece);
313: 
314:             return verbId;
315:         } catch {
316:             
317:             revert("dropTopVotedPiece failed");
318:         }
319:     }
320: 
328:     function _authorizeUpgrade(address _newImpl) internal view override onlyOwner {
329:         
330:         require(manager.isRegisteredUpgrade(_getImplementation(), _newImpl), "Invalid upgrade");
331:     }

```


*GitHub* : [177](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L177-L177)
### [M-04]<a name="m-04"></a> Contract can't receive NFTs sent with safeTransferFrom method
The contract under consideration is designed to receive and store ERC721 tokens. However, certain smart wallets or contracts might utilize the `safeTransferFrom` method to send an NFT. The `safeTransferFrom` method checks for the implementation of the `onERC721Received` method when the recipient is a contract. This is to ensure that the recipient contract can appropriately handle ERC721 tokens. Therefore, it's essential for the contract to extend the `ERC721Holder` contract from OpenZeppelin. The `ERC721Holder` contract has the `onERC721Received` method implemented, which allows the contract to correctly receive and store ERC721 tokens sent using `safeTransferFrom`.

*There are 2 instance(s) of this issue:*

```solidity
20: contract CultureIndex is
21:     ICultureIndex,
22:     VersionedContract,
23:     UUPS,
24:     Ownable2StepUpgradeable,
25:     ReentrancyGuardUpgradeable,
26:     EIP712Upgradeable
27: 

```


*GitHub* : [20](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L20-L20)

```solidity
33: contract VerbsToken is
34:     IVerbsToken,
35:     VersionedContract,
36:     UUPS,
37:     Ownable2StepUpgradeable,
38:     ReentrancyGuardUpgradeable,
39:     ERC721CheckpointableUpgradeable // <= FOUND
40: 

```


*GitHub* : [33](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L33-L39)### Low Risk Issues


### [L-01]<a name="l-01"></a> Unchecked blocks with subtractions may underflow 
Within unchecked blocks in Solidity, arithmetic operations bypass overflow and underflow checks. When subtractions occur without proper bounds validation, they may underflow. An underflow in an unsigned integer subtraction can wrap the value around to its maximum, leading to unintended contract behavior or potential vulnerabilities. To prevent such scenarios, developers should either avoid unchecked blocks for subtraction operations or manually implement checks to ensure operands' validity before subtraction.

*There are 2 instance(s) of this issue:*

```solidity
48:        unchecked {
49:             return pIntegral(timeSinceStart, sold + amount) - pIntegral(timeSinceStart, sold); // <= FOUND
50:         }

```


*GitHub* : [48](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L48-L49)

```solidity
56:         unchecked {
57:             return
58:                 wadMul(
59:                     perTimeUnit,
60:                     wadDiv(
61:                         wadLn(
62:                             wadDiv(
63:                                 wadMul(
64:                                     targetPrice,
65:                                     wadMul(
66:                                         perTimeUnit,
67:                                         wadExp(wadMul(soldDifference, wadDiv(decayConstant, perTimeUnit)))
68:                                     )
69:                                 ),
70:                                 wadMul(
71:                                     targetPrice,
72:                                     wadMul(
73:                                         perTimeUnit,
74:                                         wadPow(1e18 - priceDecayPercent, wadDiv(soldDifference, perTimeUnit)) // <= FOUND
75:                                     )
76:                                 ) - wadMul(amount, decayConstant) // <= FOUND
77:                             )
78:                         ),
79:                         decayConstant
80:                     )
81:                 );
82:         }

```


*GitHub* : [56](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L56-L76)
### [L-02]<a name="l-02"></a> Incorrect comparison against a max value 
Comparing a value using `>= MAX_VALUE` is conceptually incorrect when `MAX_VALUE` is defined as the upper limit that a variable can take. According to the definition of a maximum value, the condition should only revert if the variable is greater than `MAX_VALUE`, not equal to it. Using `>=` can introduce unintended behavior, as the condition will trigger a revert even when the variable reaches its legitimate upper bound. This can lead to bugs and vulnerabilities, as well as hamper the contract's intended functionality. The resolution is to strictly use `>` when making comparisons against a defined `MAX_VALUE` to align with its conceptual definition and to prevent unintended reverts or vulnerabilities.

*There are 1 instance(s) of this issue:*

```solidity
40:         if (paymentAmountWei <= minPurchaseAmount || paymentAmountWei >= maxPurchaseAmount) revert INVALID_ETH_AMOUNT(); // <= FOUND

```


*GitHub* : [40](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L40-L40)
### [L-03]<a name="l-03"></a> Incorrect comparison against a min value 
When working with a defined `MIN_VALUE` as the lower limit that a variable can take, using `<= MIN_VALUE` for comparisons is conceptually incorrect. According to the definition of a minimum value, the condition should only revert if the variable is less than `MIN_VALUE`, not equal to it. Using `<=` can introduce unintended behavior, as it will trigger a revert even when the variable reaches its legitimate lower bound. This can lead to bugs and vulnerabilities, as well as impede the contract's intended functionality. The resolution is to strictly use `<` when making comparisons against a defined `MIN_VALUE` to align with its conceptual definition and to prevent unintended reverts or vulnerabilities.

*There are 1 instance(s) of this issue:*

```solidity
40:         if (paymentAmountWei <= minPurchaseAmount || paymentAmountWei >= maxPurchaseAmount) revert INVALID_ETH_AMOUNT(); // <= FOUND

```


*GitHub* : [40](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L40-L40)
### [L-04]<a name="l-04"></a> Functions with array parameters should have length checks in place 
Functions in Solidity that accept array parameters should incorporate length checks as a security measure. This is to prevent potential overflow errors, unwanted gas consumption, and manipulation attempts. Without length checks, an attacker could pass excessively large arrays as input, causing excessive computation and potentially causing the function to exceed the block gas limit, leading to a denial-of-service. Additionally, unexpected array sizes could lead to logic errors within the function. As a resolution, always validate array length at the start of functions handling array inputs, ensuring it aligns with the expectations of the function logic. This makes the code more robust and predictable.

*There are 3 instance(s) of this issue:*

```solidity
342:     function voteForMany(uint256[] calldata pieceIds) public nonReentrant { // <= FOUND
343:         _voteForMany(pieceIds, msg.sender);
344:     }

```


*GitHub* : [342](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L342-L342)

```solidity
367:     function voteForManyWithSig(
368:         address from,
369:         uint256[] calldata pieceIds, // <= FOUND
370:         uint256 deadline,
371:         uint8 v,
372:         bytes32 r,
373:         bytes32 s
374:     ) external nonReentrant {
375:         bool success = _verifyVoteSignature(from, pieceIds, deadline, v, r, s);
376: 
377:         if (!success) revert INVALID_SIGNATURE();
378: 
379:         _voteForMany(pieceIds, from);
380:     }

```


*GitHub* : [367](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L367-L369)

```solidity
419:     function _verifyVoteSignature(
420:         address from,
421:         uint256[] calldata pieceIds, // <= FOUND
422:         uint256 deadline,
423:         uint8 v,
424:         bytes32 r,
425:         bytes32 s
426:     ) internal returns (bool success) {
427:         require(deadline >= block.timestamp, "Signature expired");
428: 
429:         bytes32 voteHash;
430: 
431:         voteHash = keccak256(abi.encode(VOTE_TYPEHASH, from, pieceIds, nonces[from]++, deadline));
432: 
433:         bytes32 digest = _hashTypedDataV4(voteHash);
434: 
435:         address recoveredAddress = ecrecover(digest, v, r, s);
436: 
437:         
438:         if (from == address(0)) revert ADDRESS_ZERO();
439: 
440:         
441:         if (recoveredAddress == address(0) || recoveredAddress != from) revert INVALID_SIGNATURE();
442: 
443:         return true;
444:     }

```


*GitHub* : [419](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L419-L421)
### [L-05]<a name="l-05"></a> Upgradable contracts should have a __gap variable
This is to ensure the team can add new state variables without compromising compatability.

*There are 6 instance(s) of this issue:*

```solidity
29: contract NontransferableERC20Votes is Initializable, ERC20VotesUpgradeable, Ownable2StepUpgradeable 

```


*GitHub* : [29](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L29-L29)

```solidity
14: contract MaxHeap is VersionedContract, UUPS, Ownable2StepUpgradeable, ReentrancyGuardUpgradeable 

```


*GitHub* : [14](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L14-L14)

```solidity
20: contract CultureIndex is
21:     ICultureIndex,
22:     VersionedContract,
23:     UUPS,
24:     Ownable2StepUpgradeable,
25:     ReentrancyGuardUpgradeable,
26:     EIP712Upgradeable
27: 

```


*GitHub* : [20](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L20-L20)

```solidity
17: contract ERC20TokenEmitter is
18:     IERC20TokenEmitter,
19:     ReentrancyGuardUpgradeable,
20:     TokenEmitterRewards,
21:     Ownable2StepUpgradeable,
22:     PausableUpgradeable
23: 

```


*GitHub* : [17](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L17-L17)

```solidity
39: contract AuctionHouse is
40:     IAuctionHouse,
41:     VersionedContract,
42:     UUPS,
43:     PausableUpgradeable,
44:     ReentrancyGuardUpgradeable,
45:     Ownable2StepUpgradeable
46: 

```


*GitHub* : [39](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L39-L39)

```solidity
33: contract VerbsToken is
34:     IVerbsToken,
35:     VersionedContract,
36:     UUPS,
37:     Ownable2StepUpgradeable,
38:     ReentrancyGuardUpgradeable,
39:     ERC721CheckpointableUpgradeable
40: 

```


*GitHub* : [33](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L33-L33)
### [L-06]<a name="l-06"></a> The nonReentrance modifier should be first in a function declaration
Not doing so can introduce reentrancy in prior modifiers called

*There are 3 instance(s) of this issue:*

```solidity
177:     function mint() public override onlyMinter nonReentrant returns (uint256) { // <= FOUND
178:         return _mintTo(minter);
179:     }

```


*GitHub* : [177](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L177-L177)

```solidity
184:     function burn(uint256 verbId) public override onlyMinter nonReentrant { // <= FOUND
185:         _burn(verbId);
186:         emit VerbBurned(verbId);
187:     }

```


*GitHub* : [184](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L184-L184)

```solidity
252:     function setCultureIndex(ICultureIndex _cultureIndex) external onlyOwner whenCultureIndexNotLocked nonReentrant { // <= FOUND
253:         cultureIndex = _cultureIndex;
254: 
255:         emit CultureIndexUpdated(_cultureIndex);
256:     }

```


*GitHub* : [252](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L252-L252)
### [L-07]<a name="l-07"></a> Function calls within for loops
Making function calls or external calls within loops in Solidity can lead to inefficient gas usage, potential bottlenecks, and increased vulnerability to attacks. Each function call or external call consumes gas, and when executed within a loop, the gas cost multiplies, potentially causing the transaction to run out of gas or exceed block gas limits. This can result in transaction failure or unpredictable behavior.

*There are 2 instance(s) of this issue:*

```solidity
355:        for (uint256 i; i < len; i++) {
356:             _vote(pieceIds[i], from); // <= FOUND
357:         }

```


*GitHub* : [355](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L355-L356)

```solidity
403:        for (uint256 i; i < len; i++) {
404:             if (!_verifyVoteSignature(from[i], pieceIds[i], deadline[i], v[i], r[i], s[i])) revert INVALID_SIGNATURE(); // <= FOUND
405:         }

```


*GitHub* : [403](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L403-L404)
### [L-08]<a name="l-08"></a> For loops in public or external functions should be avoided due to high gas costs and possible DOS
In Solidity, for loops can potentially cause Denial of Service (DoS) attacks if not handled carefully. DoS attacks can occur when an attacker intentionally exploits the gas cost of a function, causing it to run out of gas or making it too expensive for other users to call. Below are some scenarios where for loops can lead to DoS attacks: Nested for loops can become exceptionally gas expensive and should be used sparingly

*There are 1 instance(s) of this issue:*

```solidity
389:     function batchVoteForManyWithSig(
390:         address[] memory from,
391:         uint256[][] calldata pieceIds,
392:         uint256[] memory deadline,
393:         uint8[] memory v,
394:         bytes32[] memory r,
395:         bytes32[] memory s
396:     ) external nonReentrant {
397:         uint256 len = from.length;
398:         require(
399:             len == pieceIds.length && len == deadline.length && len == v.length && len == r.length && len == s.length,
400:             "Array lengths must match"
401:         );
402: 
403:         for (uint256 i; i < len; i++) { // <= FOUND
404:             if (!_verifyVoteSignature(from[i], pieceIds[i], deadline[i], v[i], r[i], s[i])) revert INVALID_SIGNATURE();
405:         }
406: 
407:         for (uint256 i; i < len; i++) { // <= FOUND
408:             _voteForMany(pieceIds[i], from[i]);
409:         }
410:     }

```


*GitHub* : [403](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L403-L407)
### [L-09]<a name="l-09"></a> No limits when setting min/max amounts
When settings min/max state variables, ensure there a require checks in place to prevent incorrect values from being set

*There are 2 instance(s) of this issue:*

```solidity
297:     function setMinBidIncrementPercentage(uint8 _minBidIncrementPercentage) external override onlyOwner {
298:         minBidIncrementPercentage = _minBidIncrementPercentage;
299: 
300:         emit AuctionMinBidIncrementPercentageUpdated(_minBidIncrementPercentage);
301:     }

```


*GitHub* : [297](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L297-L297)

```solidity
230:     function setDescriptor(
231:         IDescriptorMinimal _descriptor
232:     ) external override onlyOwner nonReentrant whenDescriptorNotLocked {
233:         descriptor = _descriptor;
234: 
235:         emit DescriptorUpdated(_descriptor);
236:     }

```


*GitHub* : [230](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L230-L230)
### [L-10]<a name="l-10"></a> Initializer function can be front run
In Solidity contract deployment, not making the initialize() function call atomic with the contract creation can leave a vulnerability window. A malicious actor could exploit this time gap and call initialize() before the intended initialization. This action could disrupt the contract's setup, potentially necessitating a full contract re-deployment to ensure proper initialization. To mitigate such risks, it's advised to use a factory contract. This factory contract can be programmed to deploy and initialize a new contract in a single atomic transaction, closing the window of vulnerability and ensuring correct and secure contract initialization.

*There are 6 instance(s) of this issue:*

```solidity
55:     function initialize(address _initialOwner, address _admin) public initializer  // <= FOUND

```


*GitHub* : [55](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L55-L55)

```solidity
109:     function initialize(
110:         address _erc20VotingToken,
111:         address _erc721VotingToken,
112:         address _initialOwner,
113:         address _maxHeap,
114:         address _dropperAdmin,
115:         IRevolutionBuilder.CultureIndexParams memory _cultureIndexParams
116:     ) external initializer  // <= FOUND

```


*GitHub* : [116](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L116-L116)

```solidity
65:     function initialize(
66:         address _initialOwner,
67:         IRevolutionBuilder.ERC20TokenParams calldata _erc20TokenParams
68:     ) external initializer  // <= FOUND

```


*GitHub* : [68](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L68-L68)

```solidity
84:     function initialize(
85:         address _initialOwner,
86:         address _erc20Token,
87:         address _treasury,
88:         address _vrgdac,
89:         address _creatorsAddress
90:     ) external initializer  // <= FOUND

```


*GitHub* : [90](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L90-L90)

```solidity
113:     function initialize(
114:         address _erc721Token,
115:         address _erc20TokenEmitter,
116:         address _initialOwner,
117:         address _weth,
118:         IRevolutionBuilder.AuctionParams calldata _auctionParams
119:     ) external initializer  // <= FOUND

```


*GitHub* : [119](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L119-L119)

```solidity
130:     function initialize(
131:         address _minter,
132:         address _initialOwner,
133:         address _descriptor,
134:         address _cultureIndex,
135:         IRevolutionBuilder.ERC721TokenParams memory _erc721TokenParams
136:     ) external initializer  // <= FOUND

```


*GitHub* : [136](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L136-L136)
### [L-11]<a name="l-11"></a> Use _disableInitializers() to ensure initialization occurs once
`disableInitializers()` should be used in upgradeable contracts to ensure the initializer functions can't be called more than once. In upgradeable contracts, initializer functions set initial state and values, but if they can be invoked multiple times, it could lead to unexpected behavior or vulnerabilities. By calling `disableInitializers()` after the initial setup, you essentially lock the initializer functions, ensuring they can only be called once during the contract's lifecycle. This prevents repeated initializations, helping to maintain the integrity and security of the contract, and providing a safeguard against potential manipulation or misuse of the initialization functions.

*There are 6 instance(s) of this issue:*

```solidity
29: contract NontransferableERC20Votes is Initializable, ERC20VotesUpgradeable, Ownable2StepUpgradeable 

```


*GitHub* : [29](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L29-L29)

```solidity
14: contract MaxHeap is VersionedContract, UUPS, Ownable2StepUpgradeable, ReentrancyGuardUpgradeable 

```


*GitHub* : [14](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L14-L14)

```solidity
20: contract CultureIndex is
21:     ICultureIndex,
22:     VersionedContract,
23:     UUPS,
24:     Ownable2StepUpgradeable,
25:     ReentrancyGuardUpgradeable,
26:     EIP712Upgradeable
27: 

```


*GitHub* : [20](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L20-L20)

```solidity
17: contract ERC20TokenEmitter is
18:     IERC20TokenEmitter,
19:     ReentrancyGuardUpgradeable,
20:     TokenEmitterRewards,
21:     Ownable2StepUpgradeable,
22:     PausableUpgradeable
23: 

```


*GitHub* : [17](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L17-L17)

```solidity
39: contract AuctionHouse is
40:     IAuctionHouse,
41:     VersionedContract,
42:     UUPS,
43:     PausableUpgradeable,
44:     ReentrancyGuardUpgradeable,
45:     Ownable2StepUpgradeable
46: 

```


*GitHub* : [39](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L39-L39)

```solidity
33: contract VerbsToken is
34:     IVerbsToken,
35:     VersionedContract,
36:     UUPS,
37:     Ownable2StepUpgradeable,
38:     ReentrancyGuardUpgradeable,
39:     ERC721CheckpointableUpgradeable
40: 

```


*GitHub* : [33](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L33-L33)
### [L-12]<a name="l-12"></a> Initialize functions do not emit an event
Emitting an event within initializer functions in Solidity is a best practice for providing transparency and traceability. Initializer functions set the initial state and values of an upgradeable contract. Emitting an event during initialization allows anyone to verify and audit the initial state of the contract via the transaction logs. This can be particularly useful for verifying the parameters set during initialization, tracking the contract's deployment, and troubleshooting or debugging. Therefore, developers should include an event emission in their initializer functions, providing a clear record of the contract's initialization and enhancing the contract's transparency and security.

*There are 5 instance(s) of this issue:*

```solidity
55:     function initialize(address _initialOwner, address _admin) public initializer { // <= FOUND
56:         require(msg.sender == address(manager), "Only manager can initialize");
57: 
58:         admin = _admin;
59: 
60:         __Ownable_init(_initialOwner);
61:         __ReentrancyGuard_init();
62:     }

```


*GitHub* : [55](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L55-L55)

```solidity
65:     function initialize( // <= FOUND
66:         address _initialOwner,
67:         IRevolutionBuilder.ERC20TokenParams calldata _erc20TokenParams
68:     ) external initializer {
69:         require(msg.sender == address(manager), "Only manager can initialize");
70: 
71:         __NontransferableERC20Votes_init(_initialOwner, _erc20TokenParams.name, _erc20TokenParams.symbol);
72:     }

```


*GitHub* : [65](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L65-L65)

```solidity
84:     function initialize( // <= FOUND
85:         address _initialOwner,
86:         address _erc20Token,
87:         address _treasury,
88:         address _vrgdac,
89:         address _creatorsAddress
90:     ) external initializer {
91:         require(msg.sender == address(manager), "Only manager can initialize");
92: 
93:         __Pausable_init();
94:         __ReentrancyGuard_init();
95: 
96:         require(_treasury != address(0), "Invalid treasury address");
97: 
98:         
99:         __Ownable_init(_initialOwner);
100: 
101:         treasury = _treasury;
102:         creatorsAddress = _creatorsAddress;
103:         vrgdac = VRGDAC(_vrgdac);
104:         token = NontransferableERC20Votes(_erc20Token);
105:         startTime = block.timestamp;
106:     }

```


*GitHub* : [84](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L84-L84)

```solidity
113:     function initialize( // <= FOUND
114:         address _erc721Token,
115:         address _erc20TokenEmitter,
116:         address _initialOwner,
117:         address _weth,
118:         IRevolutionBuilder.AuctionParams calldata _auctionParams
119:     ) external initializer {
120:         require(msg.sender == address(manager), "Only manager can initialize");
121:         require(_weth != address(0), "WETH cannot be zero address");
122: 
123:         __Pausable_init();
124:         __ReentrancyGuard_init();
125:         __Ownable_init(_initialOwner);
126: 
127:         _pause();
128: 
129:         require(
130:             _auctionParams.creatorRateBps >= _auctionParams.minCreatorRateBps,
131:             "Creator rate must be greater than or equal to the creator rate"
132:         );
133: 
134:         verbs = IVerbsToken(_erc721Token);
135:         erc20TokenEmitter = IERC20TokenEmitter(_erc20TokenEmitter);
136:         timeBuffer = _auctionParams.timeBuffer;
137:         reservePrice = _auctionParams.reservePrice;
138:         minBidIncrementPercentage = _auctionParams.minBidIncrementPercentage;
139:         duration = _auctionParams.duration;
140:         creatorRateBps = _auctionParams.creatorRateBps;
141:         entropyRateBps = _auctionParams.entropyRateBps;
142:         minCreatorRateBps = _auctionParams.minCreatorRateBps;
143:         WETH = _weth;
144:     }

```


*GitHub* : [113](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L113-L113)

```solidity
130:     function initialize( // <= FOUND
131:         address _minter,
132:         address _initialOwner,
133:         address _descriptor,
134:         address _cultureIndex,
135:         IRevolutionBuilder.ERC721TokenParams memory _erc721TokenParams
136:     ) external initializer {
137:         require(msg.sender == address(manager), "Only manager can initialize");
138: 
139:         require(_minter != address(0), "Minter cannot be zero address");
140:         require(_initialOwner != address(0), "Initial owner cannot be zero address");
141: 
142:         
143:         __ReentrancyGuard_init();
144: 
145:         
146:         __Ownable_init(_initialOwner);
147: 
148:         
149:         __ERC721_init(_erc721TokenParams.name, _erc721TokenParams.symbol);
150:         _contractURIHash = _erc721TokenParams.contractURIHash;
151: 
152:         
153:         minter = _minter;
154:         descriptor = IDescriptorMinimal(_descriptor);
155:         cultureIndex = ICultureIndex(_cultureIndex);
156:     }

```


*GitHub* : [130](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L130-L130)
### [L-13]<a name="l-13"></a> The function decimals() is not part of the ERC20 standard
The `decimals()` function in an ERC20 token contract is used to specify how many decimal places the token can be divided into. However, it should be used with caution because not all ERC20 token contracts implement `decimals()`, and the function isn't required by the ERC20 standard. Calling `decimals()` on a contract that doesn't implement it will result in a runtime error. Moreover, even when implemented, the returned value can be manipulated or artificially set, which may cause unexpected behavior. Therefore, always verify the decimal count independently if precision is crucial for your contract logic. When interacting with other ERC20 tokens, consider implementing safeguards or checks to handle potential errors from calling `decimals()`.

*There are 1 instance(s) of this issue:*

```solidity
119:         
120:         return token.decimals(); // <= FOUND

```


*GitHub* : [119](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L119-L120)
### [L-14]<a name="l-14"></a> Missing zero address check in constructor
In Solidity, constructors often take address parameters to initialize important components of a contract, such as owner or linked contracts. However, without a check, there's a risk that an address parameter could be mistakenly set to the zero address (0x0). This could occur due to a mistake or oversight during contract deployment. A zero address in a crucial role can cause serious issues, as it cannot perform actions like a normal address, and any funds sent to it are irretrievable. Therefore, it's crucial to include a zero address check in constructors to prevent such potential problems. If a zero address is detected, the constructor should revert the transaction.

*There are 2 instance(s) of this issue:*

```solidity
44:     constructor(address _manager) payable initializer { // <= FOUND
45:         manager = IRevolutionBuilder(_manager);
46:     }

```


*GitHub* : [44](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L44-L44)

```solidity
64:     constructor(
65:         address _manager, // <= FOUND
66:         address _protocolRewards, // <= FOUND
67:         address _protocolFeeRecipient // <= FOUND
68:     ) payable TokenEmitterRewards(_protocolRewards, _protocolFeeRecipient) initializer {
69:         manager = IRevolutionBuilder(_manager);
70:     }

```


*GitHub* : [65](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L65-L67)
### [L-15]<a name="l-15"></a> Use of onlyOwner functions can be lost
In Solidity, renouncing ownership of a contract essentially transfers ownership to the zero address. This is an irreversible operation and has considerable security implications. If the renounceOwnership function is used, the contract will lose the ability to perform any operations that are limited to the owner. This can be problematic if there are any bugs, flaws, or unexpected events that require owner intervention to resolve. Therefore, in some instances, it is better to disable or omit the renounceOwnership function, and instead implement a secure transferOwnership function. This way, if necessary, ownership can be transferred to a new, trusted party without losing the potential for administrative intervention.

*There are 6 instance(s) of this issue:*

```solidity
14: contract MaxHeap is VersionedContract, UUPS, Ownable2StepUpgradeable, ReentrancyGuardUpgradeable  // <= FOUND

```


*GitHub* : [14](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L14-L14)

```solidity
20: contract CultureIndex is
21:     ICultureIndex,
22:     VersionedContract,
23:     UUPS,
24:     Ownable2StepUpgradeable, // <= FOUND
25:     ReentrancyGuardUpgradeable,
26:     EIP712Upgradeable
27: 

```


*GitHub* : [24](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L24-L24)

```solidity
29: contract NontransferableERC20Votes is Initializable, ERC20VotesUpgradeable, Ownable2StepUpgradeable  // <= FOUND

```


*GitHub* : [29](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L29-L29)

```solidity
17: contract ERC20TokenEmitter is
18:     IERC20TokenEmitter,
19:     ReentrancyGuardUpgradeable,
20:     TokenEmitterRewards,
21:     Ownable2StepUpgradeable, // <= FOUND
22:     PausableUpgradeable
23: 

```


*GitHub* : [21](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L21-L21)

```solidity
39: contract AuctionHouse is
40:     IAuctionHouse,
41:     VersionedContract,
42:     UUPS,
43:     PausableUpgradeable,
44:     ReentrancyGuardUpgradeable,
45:     Ownable2StepUpgradeable // <= FOUND
46: 

```


*GitHub* : [45](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L45-L45)

```solidity
33: contract VerbsToken is
34:     IVerbsToken,
35:     VersionedContract,
36:     UUPS,
37:     Ownable2StepUpgradeable, // <= FOUND
38:     ReentrancyGuardUpgradeable,
39:     ERC721CheckpointableUpgradeable
40: 

```


*GitHub* : [37](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L37-L37)
### [L-16]<a name="l-16"></a> Using zero as a parameter
Taking 0 as a valid argument in Solidity without checks can lead to severe security issues. A historical example is the infamous 0x0 address bug where numerous tokens were lost. This happens because '0' can be interpreted as an uninitialized address, leading to transfers to the '0x0' address, effectively burning tokens. Moreover, 0 as a denominator in division operations would cause a runtime exception. It's also often indicative of a logical error in the caller's code. It's important to always validate input and handle edge cases like 0 appropriately. Use `require()` statements to enforce conditions and provide clear error messages to facilitate debugging and safer code.

*There are 2 instance(s) of this issue:*

```solidity
209:     function createPiece(
210:         ArtPieceMetadata calldata metadata,
211:         CreatorBps[] calldata creatorArray
212:     ) public returns (uint256) {
213:         uint256 creatorArrayLength = validateCreatorsArray(creatorArray);
214: 
215:         
216:         validateMediaType(metadata);
217: 
218:         uint256 pieceId = _currentPieceId++;
219: 
220:         
221:         maxHeap.insert(pieceId, 0);
222: 
223:         ArtPiece storage newPiece = pieces[pieceId];
224: 
225:         newPiece.pieceId = pieceId;
226:         newPiece.totalVotesSupply = _calculateVoteWeight(
227:             erc20VotingToken.totalSupply(),
228:             erc721VotingToken.totalSupply()
229:         );
230:         newPiece.totalERC20Supply = erc20VotingToken.totalSupply();
231:         newPiece.metadata = metadata;
232:         newPiece.sponsor = msg.sender;
233:         newPiece.creationBlock = block.number;
234:         newPiece.quorumVotes = (quorumVotesBPS * newPiece.totalVotesSupply) / 10_000;
235: 
236:         for (uint i; i < creatorArrayLength; i++) {
237:             newPiece.creators.push(creatorArray[i]);
238:         }
239: 
240:         emit PieceCreated(pieceId, msg.sender, metadata, newPiece.quorumVotes, newPiece.totalVotesSupply);
241: 
242:         
243:         for (uint i; i < creatorArrayLength; i++) {
244:             emit PieceCreatorAdded(pieceId, creatorArray[i].creator, msg.sender, creatorArray[i].bps);
245:         }
246: 
247:         return newPiece.pieceId;
248:     }

```


*GitHub* : [209](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L209-L209)

```solidity
127:     function _mint(address account, uint256 value) internal override { // <= FOUND
128:         if (account == address(0)) {
129:             revert ERC20InvalidReceiver(address(0));
130:         }
131:         _update(address(0), account, value); // <= FOUND
132:     }

```


*GitHub* : [127](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L127-L131)
### [L-17]<a name="l-17"></a> Primary functionality of a contract can be permanently lost
In Solidity, the `Ownable` and `Pausable` contract inheritances add control mechanisms that can affect functionality. If a contract using `Pausable` is paused and ownership is then renounced through `Ownable`, the ability to resume operations is permanently lost, as only the owner could call the `unpause` function. To avoid this, developers should either disable the `renounceOwnership` function entirely or implement mechanisms to ensure unpause capability before renouncing ownership. This will help to prevent irreversible contract freezing and loss of use of functions using the whenNotPaused modifier and ensure sustained control over the contract's state.

*There are 2 instance(s) of this issue:*

```solidity
17: contract ERC20TokenEmitter is
18:     IERC20TokenEmitter,
19:     ReentrancyGuardUpgradeable,
20:     TokenEmitterRewards,
21:     Ownable2StepUpgradeable, // <= FOUND
22:     PausableUpgradeable // <= FOUND
23: 

```


*GitHub* : [17](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L17-L22)

```solidity
39: contract AuctionHouse is
40:     IAuctionHouse,
41:     VersionedContract,
42:     UUPS,
43:     PausableUpgradeable, // <= FOUND
44:     ReentrancyGuardUpgradeable,
45:     Ownable2StepUpgradeable // <= FOUND
46: 

```


*GitHub* : [39](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L39-L45)
### [L-18]<a name="l-18"></a> Critical functions should be a two step procedure
Critical functions in Solidity contracts should follow a two-step procedure to enhance security, minimize human error, and ensure proper access control. By dividing sensitive operations into distinct phases, such as initiation and confirmation, developers can introduce a safeguard against unintended actions or unauthorized access.

*There are 13 instance(s) of this issue:*

```solidity
253:     function setEntropyRateBps(uint256 _entropyRateBps) external onlyOwner  // <= FOUND

```


*GitHub* : [253](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L253-L253)

```solidity
217:     function setCreatorRateBps(uint256 _creatorRateBps) external onlyOwner  // <= FOUND

```


*GitHub* : [217](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L217-L217)

```solidity
309:     function setCreatorsAddress(address _creatorsAddress) external override onlyOwner nonReentrant  // <= FOUND

```


*GitHub* : [309](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L309-L309)

```solidity
233:     function setMinCreatorRateBps(uint256 _minCreatorRateBps) external onlyOwner  // <= FOUND

```


*GitHub* : [233](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L233-L233)

```solidity
277:     function setTimeBuffer(uint256 _timeBuffer) external override onlyOwner  // <= FOUND

```


*GitHub* : [277](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L277-L277)

```solidity
287:     function setReservePrice(uint256 _reservePrice) external override onlyOwner  // <= FOUND

```


*GitHub* : [287](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L287-L287)

```solidity
297:     function setMinBidIncrementPercentage(uint8 _minBidIncrementPercentage) external override onlyOwner  // <= FOUND

```


*GitHub* : [297](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L297-L297)

```solidity
169:     function setContractURIHash(string memory newContractURIHash) external onlyOwner  // <= FOUND

```


*GitHub* : [169](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L169-L169)

```solidity
209:     function setMinter(address _minter) external override onlyOwner nonReentrant whenMinterNotLocked  // <= FOUND

```


*GitHub* : [209](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L209-L209)

```solidity
230:     function setDescriptor( // <= FOUND
231:         IDescriptorMinimal _descriptor
232:     ) external override onlyOwner nonReentrant whenDescriptorNotLocked 

```


*GitHub* : [230](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L230-L230)

```solidity
252:     function setCultureIndex(ICultureIndex _cultureIndex) external onlyOwner whenCultureIndexNotLocked nonReentrant  // <= FOUND

```


*GitHub* : [252](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L252-L252)

```solidity
498:     function _setQuorumVotesBPS(uint256 newQuorumVotesBPS) external onlyOwner  // <= FOUND

```


*GitHub* : [498](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L498-L498)

```solidity
136:     function updateValue(uint256 itemId, uint256 newValue) public onlyAdmin  // <= FOUND

```


*GitHub* : [136](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L136-L136)
### [L-19]<a name="l-19"></a> TokenURI does not revert if NFT doesn't exist
The code of tokenURI does not check is the inputted NFT data is valid and/or exists. This is against the EIP-721 standard. Implement checks to ensure inputted tokenURI parameters are valid and the NFT in question exists.

*There are 1 instance(s) of this issue:*

```solidity
193:     function tokenURI(uint256 tokenId) public view override returns (string memory) { // <= FOUND
194:         return descriptor.tokenURI(tokenId, artPieces[tokenId].metadata);
195:     }

```


*GitHub* : [193](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L193-L193)
### [L-20]<a name="l-20"></a> Remaining eth may not be refunded to users
When a contract function accepts Ethereum and executes a `.call()` or similar function that also forwards Ethereum value, it's important to check for and refund any remaining balance. This is because some of the supplied value may not be used during the call execution due to gas constraints, a revert in the called contract, or simply because not all the value was needed.

If you do not account for this remaining balance, it can become "locked" in the contract. It's crucial to either return the remaining balance to the sender or handle it in a way that ensures it is not permanently stuck. Neglecting to do so can lead to loss of funds and degradation of the contract's reliability. Furthermore, it's good practice to ensure fairness and trust with your users by returning unused funds.

*There are 1 instance(s) of this issue:*

```solidity
419:     function _safeTransferETHWithFallback(address _to, uint256 _amount) private {
420:         
421:         if (address(this).balance < _amount) revert("Insufficient balance");
422: 
423:         
424:         bool success;
425: 
426:         assembly {
427:             
428:             
429:             success := call(50000, _to, _amount, 0, 0, 0, 0)
430:         }
431: 
432:         
433:         if (!success) {
434:             
435:             IWETH(WETH).deposit{ value: _amount }(); // <= FOUND
436: 
437:             
438:             bool wethSuccess = IWETH(WETH).transfer(_to, _amount);
439: 
440:             
441:             if (!wethSuccess) revert("WETH transfer failed");
442:         }
443:     }

```


*GitHub* : [419](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L419-L435)
### [L-21]<a name="l-21"></a> Constant decimal values
The use of fixed decimal values such as 1e18 or 1e8 in Solidity contracts can lead to inaccuracies, bugs, and vulnerabilities, particularly when interacting with tokens having different decimal configurations. Not all ERC20 tokens follow the standard 18 decimal places, and assumptions about decimal places can lead to miscalculations.

Resolution: Always retrieve and use the `decimals()` function from the token contract itself when performing calculations involving token amounts. This ensures that your contract correctly handles tokens with any number of decimal places, mitigating the risk of numerical errors or under/overflows that could jeopardize contract integrity and user funds.

*There are 4 instance(s) of this issue:*

```solidity
285:         return erc20Balance + (erc721Balance * erc721VotingTokenWeight * 1e18); // <= FOUND

```


*GitHub* : [285](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L285-L285)

```solidity
35: 
36:         decayConstant = wadLn(1e18 - _priceDecayPercent); // <= FOUND

```


*GitHub* : [36](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L36-L36)

```solidity
57:             return
58:                 wadMul(
59:                     perTimeUnit,
60:                     wadDiv(
61:                         wadLn(
62:                             wadDiv(
63:                                 wadMul(
64:                                     targetPrice,
65:                                     wadMul(
66:                                         perTimeUnit,
67:                                         wadExp(wadMul(soldDifference, wadDiv(decayConstant, perTimeUnit)))
68:                                     )
69:                                 ),
70:                                 wadMul(
71:                                     targetPrice,
72:                                     wadMul(
73:                                         perTimeUnit,
74:                                         wadPow(1e18 - priceDecayPercent, wadDiv(soldDifference, perTimeUnit)) // <= FOUND
75:                                     )
76:                                 ) - wadMul(amount, decayConstant)
77:                             )
78:                         ),
79:                         decayConstant
80:                     )
81:                 );

```


*GitHub* : [74](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L74-L74)

```solidity
87:         return
88:             wadDiv(
89:                 -wadMul(
90:                     wadMul(targetPrice, perTimeUnit),
91:                     wadPow(1e18 - priceDecayPercent, timeSinceStart - unsafeWadDiv(sold, perTimeUnit)) - // <= FOUND
92:                         wadPow(1e18 - priceDecayPercent, timeSinceStart) // <= FOUND
93:                 ),
94:                 decayConstant
95:             );

```


*GitHub* : [91](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L91-L92)
### [L-22]<a name="l-22"></a> NFT doesn't handle hard forks
During hard forks in blockchain networks, users often face complexities to retain ownership control across all forked chains. This could potentially create confusion and ambiguity regarding the actual ownership of NFTs on the various chains. A recommended mitigation strategy is to hard-code the preferred chain ID into your contract functions, using a require(1 == block.chainId), or whichever chain ID you prefer. Alternatively, you can embed the chain ID within the URI of your NFT. These measures ensure clear and unambiguous ownership, as the NFTs are strictly associated with a specific chain, thereby avoiding any potential disputes or confusion arising from hard forks.

*There are 1 instance(s) of this issue:*

```solidity
193:     function tokenURI(uint256 tokenId) public view override returns (string memory) { // <= FOUND
194:         return descriptor.tokenURI(tokenId, artPieces[tokenId].metadata); // <= FOUND
195:     }

```


*GitHub* : [193](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L193-L194)
### [L-23]<a name="l-23"></a> Consider implementing a blacklist function for NFTs
In light of the recent surge in NFT thefts, adopting defensive measures against the illicit conversion of stolen NFTs into liquidity on platforms has become paramount. Currently, your platform lacks measures to prevent the trading of stolen NFTs. We recommend incorporating a blacklist function to restrict the listing and trading of compromised NFTs.

Leading marketplaces such as OpenSea have implemented blacklist features to prevent the listing of reported stolen NFTs, ensuring the integrity and security of their platform.

*There are 2 instance(s) of this issue:*

```solidity
20: contract CultureIndex is
21:     ICultureIndex,
22:     VersionedContract,
23:     UUPS,
24:     Ownable2StepUpgradeable,
25:     ReentrancyGuardUpgradeable,
26:     EIP712Upgradeable
27: 

```


*GitHub* : [20](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L20-L20)

```solidity
33: contract VerbsToken is
34:     IVerbsToken,
35:     VersionedContract,
36:     UUPS,
37:     Ownable2StepUpgradeable,
38:     ReentrancyGuardUpgradeable,
39:     ERC721CheckpointableUpgradeable // <= FOUND
40: 

```


*GitHub* : [33](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L33-L39)
### [L-24]<a name="l-24"></a> Contract uses both ERC20 and ERC721
Reason: ERC20 and ERC721 standards both define certain functions such as `transferFrom` with different semantics, causing interface collisions. This overlap of function names with different functionalities can lead to confusion, erroneous contract interaction, and unexpected behaviors. Furthermore, there could be additional collisions with other functions as both standards define their own versions of functions like `balanceOf` and `approve`, creating further potential for confusion and misuse.

Resolution: Instead of trying to accommodate both ERC20 and ERC721 standards in a single contract, consider adopting solely the ERC1155 standard. It's designed to handle both fungible (like ERC20) and non-fungible tokens (like ERC721) within the same contract, providing a unified token management system that avoids interface collisions while preserving each token type's unique properties. Implementing ERC1155, however, requires careful consideration of the trade-offs involved and a comprehensive understanding of its specifications.

*There are 1 instance(s) of this issue:*

```solidity
20: contract CultureIndex is
21:     ICultureIndex,
22:     VersionedContract,
23:     UUPS,
24:     Ownable2StepUpgradeable,
25:     ReentrancyGuardUpgradeable,
26:     EIP712Upgradeable
27: {
28:     
29:     bytes32 public constant VOTE_TYPEHASH =
30:         keccak256("Vote(address from,uint256[] pieceIds,uint256 nonce,uint256 deadline)");
31: 
33:     mapping(address => uint256) public nonces;
34: 
36:     MaxHeap public maxHeap;
37: 
39:     ERC20VotesUpgradeable public erc20VotingToken; // <= FOUND
40: 
42:     ERC721CheckpointableUpgradeable public erc721VotingToken; // <= FOUND
43: 
45:     uint256 public erc721VotingTokenWeight;
46: 
48:     uint256 public constant MAX_QUORUM_VOTES_BPS = 6_000; 
49: 
51:     uint256 public minVoteWeight;
52: 
54:     uint256 public quorumVotesBPS;
55: 
57:     string public name;
58: 
60:     string public description;
61: 
63:     mapping(uint256 => ArtPiece) public pieces;
64: 
66:     uint256 public _currentPieceId;
67: 
69:     mapping(uint256 => mapping(address => Vote)) public votes;
70: 
72:     mapping(uint256 => uint256) public totalVoteWeights;
73: 
75:     uint256 public constant MAX_NUM_CREATORS = 100;
76: 
78:     address public dropperAdmin;
79: 
85:     IRevolutionBuilder private immutable manager;
86: 
304: }

```


*GitHub* : [20](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L20-L42)
### [L-25]<a name="l-25"></a> Revert on Transfer to the Zero Address
Many ERC-20 and ERC-721 token contracts implement a safeguard that reverts transactions which attempt to transfer tokens to the zero address. This is because such transfers are often the result of programming errors. The OpenZeppelin library, a popular choice for implementing these standards, includes this safeguard. For token contract developers who want to avoid unintentional transfers to the zero address, it's good practice to include a condition that reverts the transaction if the recipient's address is the zero address.

*There are 1 instance(s) of this issue:*

```solidity
419:     function _safeTransferETHWithFallback(address _to, uint256 _amount) private {
420:         
421:         if (address(this).balance < _amount) revert("Insufficient balance");
422: 
423:         
424:         bool success;
425: 
426:         assembly {
427:             
428:             
429:             success := call(50000, _to, _amount, 0, 0, 0, 0)
430:         }
431: 
432:         
433:         if (!success) {
434:             
435:             IWETH(WETH).deposit{ value: _amount }();
436: 
437:             
438:             bool wethSuccess = IWETH(WETH).transfer(_to, _amount); // <= FOUND
439: 
440:             
441:             if (!wethSuccess) revert("WETH transfer failed");
442:         }
443:     }

```


*GitHub* : [419](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L419-L438)
### [L-26]<a name="l-26"></a> External call recipient may consume all transaction gas
When making external calls, the called contract can intentionally or unintentionally consume all provided gas, leading to unintended transaction reversion. To mitigate this risk, it's crucial to specify a gas limit when making the call. By using `addr.call{gas: <amount>}("")`, you allocate a specific amount of gas to the external call, ensuring the parent transaction has gas left for post-call operations. This approach safeguards against malevolent contracts aiming to exhaust gas and provides greater control over transaction execution.

*There are 2 instance(s) of this issue:*

```solidity
191: 
192:         
193:         (bool success, ) = treasury.call{ value: toPayTreasury }(new bytes(0)); // <= FOUND

```


*GitHub* : [191](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L191-L193)

```solidity
196:             (success, ) = creatorsAddress.call{ value: creatorDirectPayment }(new bytes(0)); // <= FOUND

```


*GitHub* : [196](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L196-L196)
### [L-27]<a name="l-27"></a> Critical functions should have a timelock
Critical functions, especially those affecting protocol parameters or user funds, are potential points of failure or exploitation. To mitigate risks, incorporating a timelock on such functions can be beneficial. A timelock requires a waiting period between the time an action is initiated and when it's executed, giving stakeholders time to react, potentially vetoing malicious or erroneous changes. To implement, integrate a smart contract like OpenZeppelin's `TimelockController` or build a custom mechanism. This ensures governance decisions or administrative changes are transparent and allows for community or multi-signature interventions, enhancing protocol security and trustworthiness.

*There are 12 instance(s) of this issue:*

```solidity
253:     function setEntropyRateBps(uint256 _entropyRateBps) external onlyOwner  // <= FOUND

```


*GitHub* : [253](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L253-L253)

```solidity
217:     function setCreatorRateBps(uint256 _creatorRateBps) external onlyOwner  // <= FOUND

```


*GitHub* : [217](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L217-L217)

```solidity
309:     function setCreatorsAddress(address _creatorsAddress) external override onlyOwner nonReentrant  // <= FOUND

```


*GitHub* : [309](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L309-L309)

```solidity
233:     function setMinCreatorRateBps(uint256 _minCreatorRateBps) external onlyOwner  // <= FOUND

```


*GitHub* : [233](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L233-L233)

```solidity
277:     function setTimeBuffer(uint256 _timeBuffer) external override onlyOwner  // <= FOUND

```


*GitHub* : [277](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L277-L277)

```solidity
287:     function setReservePrice(uint256 _reservePrice) external override onlyOwner  // <= FOUND

```


*GitHub* : [287](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L287-L287)

```solidity
297:     function setMinBidIncrementPercentage(uint8 _minBidIncrementPercentage) external override onlyOwner  // <= FOUND

```


*GitHub* : [297](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L297-L297)

```solidity
169:     function setContractURIHash(string memory newContractURIHash) external onlyOwner  // <= FOUND

```


*GitHub* : [169](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L169-L169)

```solidity
209:     function setMinter(address _minter) external override onlyOwner nonReentrant whenMinterNotLocked  // <= FOUND

```


*GitHub* : [209](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L209-L209)

```solidity
230:     function setDescriptor( // <= FOUND
231:         IDescriptorMinimal _descriptor
232:     ) external override onlyOwner nonReentrant whenDescriptorNotLocked 

```


*GitHub* : [230](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L230-L230)

```solidity
252:     function setCultureIndex(ICultureIndex _cultureIndex) external onlyOwner whenCultureIndexNotLocked nonReentrant  // <= FOUND

```


*GitHub* : [252](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L252-L252)

```solidity
498:     function _setQuorumVotesBPS(uint256 newQuorumVotesBPS) external onlyOwner  // <= FOUND

```


*GitHub* : [498](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L498-L498)
### [L-28]<a name="l-28"></a> No limits when setting price values
When setting price values without defined upper or lower bounds, it can lead to unpredictable behavior or potential vulnerabilities. For instance, overly high or low prices could be set maliciously or accidentally, disrupting platform functionality or enabling manipulative profit schemes. It's crucial to enforce constraints on price values to ensure they remain within a reasonable range. As a solution, implement checks to cap the minimum and maximum permissible price values. Additionally, consider implementing a governance mechanism or multi-signature approval process for significant price adjustments, ensuring an added layer of security and oversight.

*There are 1 instance(s) of this issue:*

```solidity
287:     function setReservePrice(uint256 _reservePrice) external override onlyOwner { // <= FOUND
288:         reservePrice = _reservePrice; // <= FOUND
289: 
290:         emit AuctionReservePriceUpdated(_reservePrice); // <= FOUND
291:     }

```


*GitHub* : [287](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L287-L290)
### [L-29]<a name="l-29"></a> Prefer skip over revert model in iteration
It is preferable to skip operations on an array index when a condition is not met rather than reverting the whole transaction as reverting can introduce the possiblity of malicous actors purposefully introducing array objects which fail conditional checks within for/while loops so group operations fail. As such it is recommended to simply skip such array indices over reverting unless there is a valid security or logic reason behind not doing so.

*There are 2 instance(s) of this issue:*

```solidity
185:        for (uint i; i < creatorArrayLength; i++) { // <= FOUND
186:             require(creatorArray[i].creator != address(0), "Invalid creator address"); // <= FOUND
187:             totalBps += creatorArray[i].bps;
188:         }

```


*GitHub* : [185](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L185-L186)

```solidity
403:        for (uint256 i; i < len; i++) { // <= FOUND
404:             if (!_verifyVoteSignature(from[i], pieceIds[i], deadline[i], v[i], r[i], s[i])) revert INVALID_SIGNATURE(); // <= FOUND
405:         }

```


*GitHub* : [403](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L403-L404)
### [L-30]<a name="l-30"></a> Address collision possible due to upcast
Upcasting addresses and comparing them to larger uint types can risk address collisions in smart contracts, potentially introducing vulnerabilities. Specifically, if a uint160 address is upcast to a uint256 and compared with larger values, the comparison may pass incorrectly if the larger value, when cast back down, matches the address. Therefore, checks designed to gate access to certain addresses might erroneously permit access when larger values are used. To mitigate this, ensure type consistency during comparisons—compare uint160 to uint160 and utilize explicit type conversions cautiously.

*There are 1 instance(s) of this issue:*

```solidity
162:         
163:         require(addresses.length == basisPointSplits.length, "Parallel arrays required"); // <= FOUND

```


*GitHub* : [162](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L162-L163)
### [L-31]<a name="l-31"></a> No limits when setting price amounts
When settings price state variables, ensure there a require checks in place to prevent incorrect values from being set. This is especially true for price values which directly influence users.

*There are 1 instance(s) of this issue:*

```solidity
287:     function setReservePrice(uint256 _reservePrice) external override onlyOwner { // <= FOUND
288:         reservePrice = _reservePrice; // <= FOUND
289: 
290:         emit AuctionReservePriceUpdated(_reservePrice); // <= FOUND
291:     }

```


*GitHub* : [287](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L287-L290)
### [L-32]<a name="l-32"></a> Constructors missing validation
In Solidity, when values are being assigned in constructors to unsigned or integer variables, it's crucial to ensure the provided values adhere to the protocol's specific operational boundaries as laid out in the project specifications and documentation. If the constructors lack appropriate validation checks, there's a risk of setting state variables with values that could cause unexpected and potentially detrimental behavior within the contract's operations, violating the intended logic of the protocol. This can compromise the contract's security and impact the maintainability and reliability of the system. In order to avoid such issues, it is recommended to incorporate rigorous validation checks in constructors. These checks should align with the project's defined rules and constraints, making use of Solidity's built-in require function to enforce these conditions. If the validation checks fail, the require function will cause the transaction to revert, ensuring the integrity and adherence to the protocol's expected behavior.

*There are 1 instance(s) of this issue:*

```solidity
28:     constructor(int256 _targetPrice, int256 _priceDecayPercent, int256 _perTimeUnit) {
29:         targetPrice = _targetPrice; // <= FOUND ' = _targetPrice;'
30: 
31:         perTimeUnit = _perTimeUnit; // <= FOUND ' = _perTimeUnit;'
32: 
33:         priceDecayPercent = _priceDecayPercent; // <= FOUND ' = _priceDecayPercent;'
34: 
35:         decayConstant = wadLn(1e18 - _priceDecayPercent);
36: 
37:         
38:         require(decayConstant < 0, "NON_NEGATIVE_DECAY_CONSTANT");
39:     }

```


*GitHub* : [28](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L28-L33)
### [L-33]<a name="l-33"></a> Functions calling contracts/addresses with transfer hooks are missing reentrancy guards
While adherence to the check-effects-interaction pattern is commendable, the absence of a reentrancy guard in functions, especially where transfer hooks might be present, can expose the protocol users to risks of read-only reentrancies. Such reentrancy vulnerabilities can be exploited to execute malicious actions even without altering the contract state. Without a reentrancy guard, the only potential mitigation would be to blocklist the entire protocol - an extreme and disruptive measure. Therefore, incorporating a reentrancy guard into these functions is vital to bolster security, as it helps protect against both traditional reentrancy attacks and read-only reentrancies, ensuring robust and safe protocol operations.

*There are 1 instance(s) of this issue:*

```solidity
419:     function _safeTransferETHWithFallback(address _to, uint256 _amount) private { // <= FOUND
420:         
421:         if (address(this).balance < _amount) revert("Insufficient balance");
422: 
423:         
424:         bool success;
425: 
426:         assembly {
427:             
428:             
429:             success := call(50000, _to, _amount, 0, 0, 0, 0)
430:         }
431: 
432:         
433:         if (!success) {
434:             
435:             IWETH(WETH).deposit{ value: _amount }();
436: 
437:             
438:             bool wethSuccess = IWETH(WETH).transfer(_to, _amount);
439: 
440:             
441:             if (!wethSuccess) revert("WETH transfer failed");
442:         }
443:     }

```


*GitHub* : [419](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L419-L419)
### [L-34]<a name="l-34"></a> Code injection via token name
Code injection via token names primarily poses a threat to frontends interacting with smart contracts, especially in scenarios where these frontends display token information fetched from the blockchain. This vulnerability arises when contracts store or transmit token names, symbols, or other string metadata that a malicious token contract might manipulate. If the frontend fails to sanitize this data properly, it could execute harmful scripts or display misleading information, leading to security breaches like phishing attacks or data theft.

**Resolution:**
To mitigate this risk, frontend applications should always treat token metadata (names, symbols, etc.) obtained from smart contracts as untrusted data. Implementing rigorous sanitization and validation routines on the frontend can prevent the execution of any embedded scripts or malicious code. This includes encoding or escaping strings before rendering them in the browser, using content security policies (CSP), and avoiding direct DOM manipulation with untrusted data. Regularly updating and auditing the frontend code for vulnerabilities related to handling external data is also crucial for maintaining robust security against potential code injection threats.

*There are 3 instance(s) of this issue:*

```solidity
109:     function initialize(
110:         address _erc20VotingToken,
111:         address _erc721VotingToken,
112:         address _initialOwner,
113:         address _maxHeap,
114:         address _dropperAdmin,
115:         IRevolutionBuilder.CultureIndexParams memory _cultureIndexParams
116:     ) external initializer {
117:         require(msg.sender == address(manager), "Only manager can initialize");
118: 
119:         require(_cultureIndexParams.quorumVotesBPS <= MAX_QUORUM_VOTES_BPS, "invalid quorum bps");
120:         require(_cultureIndexParams.erc721VotingTokenWeight > 0, "invalid erc721 voting token weight");
121:         require(_erc721VotingToken != address(0), "invalid erc721 voting token");
122:         require(_erc20VotingToken != address(0), "invalid erc20 voting token");
123: 
124:         
125:         __Ownable_init(_initialOwner);
126: 
127:         
128:         __EIP712_init(string.concat(_cultureIndexParams.name, " CultureIndex"), "1"); // <= FOUND
129: 
130:         __ReentrancyGuard_init();
131: 
132:         erc20VotingToken = ERC20VotesUpgradeable(_erc20VotingToken);
133:         erc721VotingToken = ERC721CheckpointableUpgradeable(_erc721VotingToken);
134:         erc721VotingTokenWeight = _cultureIndexParams.erc721VotingTokenWeight;
135:         name = _cultureIndexParams.name; // <= FOUND
136:         description = _cultureIndexParams.description;
137:         quorumVotesBPS = _cultureIndexParams.quorumVotesBPS;
138:         minVoteWeight = _cultureIndexParams.minVoteWeight;
139:         dropperAdmin = _dropperAdmin;
140: 
141:         emit QuorumVotesBPSSet(quorumVotesBPS, _cultureIndexParams.quorumVotesBPS);
142: 
143:         
144:         maxHeap = MaxHeap(_maxHeap);
145:     }

```


*GitHub* : [128](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L128-L135)

```solidity
65:     function initialize(
66:         address _initialOwner,
67:         IRevolutionBuilder.ERC20TokenParams calldata _erc20TokenParams
68:     ) external initializer {
69:         require(msg.sender == address(manager), "Only manager can initialize");
70: 
71:         __NontransferableERC20Votes_init(_initialOwner, _erc20TokenParams.name, _erc20TokenParams.symbol); // <= FOUND
72:     }

```


*GitHub* : [71](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L71-L71)

```solidity
130:     function initialize(
131:         address _minter,
132:         address _initialOwner,
133:         address _descriptor,
134:         address _cultureIndex,
135:         IRevolutionBuilder.ERC721TokenParams memory _erc721TokenParams
136:     ) external initializer {
137:         require(msg.sender == address(manager), "Only manager can initialize");
138: 
139:         require(_minter != address(0), "Minter cannot be zero address");
140:         require(_initialOwner != address(0), "Initial owner cannot be zero address");
141: 
142:         
143:         __ReentrancyGuard_init();
144: 
145:         
146:         __Ownable_init(_initialOwner);
147: 
148:         
149:         __ERC721_init(_erc721TokenParams.name, _erc721TokenParams.symbol); // <= FOUND
150:         _contractURIHash = _erc721TokenParams.contractURIHash;
151: 
152:         
153:         minter = _minter;
154:         descriptor = IDescriptorMinimal(_descriptor);
155:         cultureIndex = ICultureIndex(_cultureIndex);
156:     }

```


*GitHub* : [149](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L149-L149)
### [L-35]<a name="l-35"></a> Inconsistent checks of address params against address(0)
Only some address parameters are checked against address(0), to ensure consistency ensure all address parameters are checked.

*There are 5 instance(s) of this issue:*

```solidity
109:     function initialize(
110:         address _erc20VotingToken,
111:         address _erc721VotingToken,
112:         address _initialOwner, // <= FOUND 'address _initialOwner'
113:         address _maxHeap, // <= FOUND 'address _maxHeap'
114:         address _dropperAdmin, // <= FOUND 'address _dropperAdmin'
115:         IRevolutionBuilder.CultureIndexParams memory _cultureIndexParams
116:     ) external initializer {
117:         require(msg.sender == address(manager), "Only manager can initialize");
118: 
119:         require(_cultureIndexParams.quorumVotesBPS <= MAX_QUORUM_VOTES_BPS, "invalid quorum bps");
120:         require(_cultureIndexParams.erc721VotingTokenWeight > 0, "invalid erc721 voting token weight");
121:         require(_erc721VotingToken != address(0), "invalid erc721 voting token");
122:         require(_erc20VotingToken != address(0), "invalid erc20 voting token");
123: 
124:         
125:         __Ownable_init(_initialOwner);
126: 
127:         
128:         __EIP712_init(string.concat(_cultureIndexParams.name, " CultureIndex"), "1");
129: 
130:         __ReentrancyGuard_init();
131: 
132:         erc20VotingToken = ERC20VotesUpgradeable(_erc20VotingToken);
133:         erc721VotingToken = ERC721CheckpointableUpgradeable(_erc721VotingToken);
134:         erc721VotingTokenWeight = _cultureIndexParams.erc721VotingTokenWeight;
135:         name = _cultureIndexParams.name;
136:         description = _cultureIndexParams.description;
137:         quorumVotesBPS = _cultureIndexParams.quorumVotesBPS;
138:         minVoteWeight = _cultureIndexParams.minVoteWeight;
139:         dropperAdmin = _dropperAdmin;
140: 
141:         emit QuorumVotesBPSSet(quorumVotesBPS, _cultureIndexParams.quorumVotesBPS);
142: 
143:         
144:         maxHeap = MaxHeap(_maxHeap);
145:     }

```


*GitHub* : [109](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L109-L114)

```solidity
256:     function hasVoted(uint256 pieceId, address voter) external view returns (bool) { // <= FOUND '    function hasVoted(uint256 pieceId, address voter) external view returns (bool) '
257:         return votes[pieceId][voter].voterAddress != address(0);
258:     }

```


*GitHub* : [256](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L256-L256)

```solidity
84:     function initialize(
85:         address _initialOwner, // <= FOUND 'address _initialOwner'
86:         address _erc20Token, // <= FOUND 'address _erc20Token'
87:         address _treasury,
88:         address _vrgdac, // <= FOUND 'address _vrgdac'
89:         address _creatorsAddress // <= FOUND 'address _creatorsAddress'
90:     ) external initializer {
91:         require(msg.sender == address(manager), "Only manager can initialize");
92: 
93:         __Pausable_init();
94:         __ReentrancyGuard_init();
95: 
96:         require(_treasury != address(0), "Invalid treasury address");
97: 
98:         
99:         __Ownable_init(_initialOwner);
100: 
101:         treasury = _treasury;
102:         creatorsAddress = _creatorsAddress;
103:         vrgdac = VRGDAC(_vrgdac);
104:         token = NontransferableERC20Votes(_erc20Token);
105:         startTime = block.timestamp;
106:     }

```


*GitHub* : [84](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L84-L89)

```solidity
113:     function initialize(
114:         address _erc721Token, // <= FOUND 'address _erc721Token'
115:         address _erc20TokenEmitter, // <= FOUND 'address _erc20Token'
116:         address _initialOwner, // <= FOUND 'address _initialOwner'
117:         address _weth,
118:         IRevolutionBuilder.AuctionParams calldata _auctionParams
119:     ) external initializer {
120:         require(msg.sender == address(manager), "Only manager can initialize");
121:         require(_weth != address(0), "WETH cannot be zero address");
122: 
123:         __Pausable_init();
124:         __ReentrancyGuard_init();
125:         __Ownable_init(_initialOwner);
126: 
127:         _pause();
128: 
129:         require(
130:             _auctionParams.creatorRateBps >= _auctionParams.minCreatorRateBps,
131:             "Creator rate must be greater than or equal to the creator rate"
132:         );
133: 
134:         verbs = IVerbsToken(_erc721Token);
135:         erc20TokenEmitter = IERC20TokenEmitter(_erc20TokenEmitter);
136:         timeBuffer = _auctionParams.timeBuffer;
137:         reservePrice = _auctionParams.reservePrice;
138:         minBidIncrementPercentage = _auctionParams.minBidIncrementPercentage;
139:         duration = _auctionParams.duration;
140:         creatorRateBps = _auctionParams.creatorRateBps;
141:         entropyRateBps = _auctionParams.entropyRateBps;
142:         minCreatorRateBps = _auctionParams.minCreatorRateBps;
143:         WETH = _weth;
144:     }

```


*GitHub* : [113](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L113-L116)

```solidity
130:     function initialize(
131:         address _minter,
132:         address _initialOwner, // <= FOUND 'address _initialOwner'
133:         address _descriptor, // <= FOUND 'address _descriptor'
134:         address _cultureIndex, // <= FOUND 'address _cultureIndex'
135:         IRevolutionBuilder.ERC721TokenParams memory _erc721TokenParams
136:     ) external initializer {
137:         require(msg.sender == address(manager), "Only manager can initialize");
138: 
139:         require(_minter != address(0), "Minter cannot be zero address");
140:         require(_initialOwner != address(0), "Initial owner cannot be zero address");
141: 
142:         
143:         __ReentrancyGuard_init();
144: 
145:         
146:         __Ownable_init(_initialOwner);
147: 
148:         
149:         __ERC721_init(_erc721TokenParams.name, _erc721TokenParams.symbol);
150:         _contractURIHash = _erc721TokenParams.contractURIHash;
151: 
152:         
153:         minter = _minter;
154:         descriptor = IDescriptorMinimal(_descriptor);
155:         cultureIndex = ICultureIndex(_cultureIndex);
156:     }

```


*GitHub* : [130](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L130-L134)
### [L-36]<a name="l-36"></a> Division in comparison
To ensure accuracy in comparisons within programming, especially when dealing with integers, it's often more efficient to use multiplication rather than division. This approach stems from the fact that division operations are generally slower and more complex than multiplication. And in the context of solidity they can cause precision errors.

Suppose you want to compare if a/b is greater than c/d (where a, b, c, and d are integers). Instead of performing division, which is prone to precision errors, you can cross-multiply to avoid division. The comparison a/b > c/d is equivalent to a*d > b*c. This way, you only use multiplication, which is faster and avoids potential inaccuracies or complexities associated with division.

*There are 2 instance(s) of this issue:*

```solidity
102: 
103:         if (pos >= (size / 2) && pos <= size) return; // <= FOUND

```


*GitHub* : [102](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L102-L103)

```solidity
180:         require(
181:             msg.value >= _auction.amount + ((_auction.amount * minBidIncrementPercentage) / 100), // <= FOUND
182:             "Must send more than last bid by minBidIncrementPercentage amount"
183:         );

```


*GitHub* : [180](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L180-L181)
### [L-37]<a name="l-37"></a> Functions calling contracts/addresses with transfer hooks are missing reentrancy guards
While adherence to the check-effects-interaction pattern is commendable, the absence of a reentrancy guard in functions, especially where transfer hooks might be present, can expose the protocol users to risks of read-only reentrancies. Such reentrancy vulnerabilities can be exploited to execute malicious actions even without altering the contract state. Without a reentrancy guard, the only potential mitigation would be to blocklist the entire protocol - an extreme and disruptive measure. Therefore, incorporating a reentrancy guard into these functions is vital to bolster security, as it helps protect against both traditional reentrancy attacks and read-only reentrancies, ensuring robust and safe protocol operations.

*There are 1 instance(s) of this issue:*

```solidity
419:     function _safeTransferETHWithFallback(address _to, uint256 _amount) private {
420:         
421:         if (address(this).balance < _amount) revert("Insufficient balance");
422: 
423:         
424:         bool success;
425: 
426:         assembly {
427:             
428:             
429:             success := call(50000, _to, _amount, 0, 0, 0, 0)
430:         }
431: 
432:         
433:         if (!success) {
434:             
435:             IWETH(WETH).deposit{ value: _amount }();
436: 
437:             
438:             bool wethSuccess = IWETH(WETH).transfer(_to, _amount); // <= FOUND
439: 
440:             
441:             if (!wethSuccess) revert("WETH transfer failed");
442:         }
443:     }

```


*GitHub* : [419](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L419-L438)
### [L-38]<a name="l-38"></a> Solidity version 0.8.20 won't work on all chains due to PUSH0
Solidity version 0.8.20 uses the new Shanghai EVM which introduces the PUSH0 opcode, this may not be implemented on all chains and L2 thus reducing the portability and compatability of the code. Consider using a earlier solidity version.

*There are 1 instance(s) of this issue:*

```solidity
4: pragma solidity ^0.8.22; // <= FOUND

```


*GitHub* : [4](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L4-L4)
### [L-39]<a name="l-39"></a> Using block.number is not fully L2 compatible
Using block.number  can break compatibility with some L2s such as Optimism whos time between blocks differ from Ethereum and isn't constant. Consider using block.timestamp to prevent compatibility issues

*There are 1 instance(s) of this issue:*

```solidity
233:         newPiece.creationBlock = block.number; // <= FOUND

```


*GitHub* : [233](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L233-L233)### Gas Risk Issues


### [G-01]<a name="g-01"></a> Internal functions never used once can be removed 
Internal functions which are never used use unnecessary gas and should be safely removed.

*There are 6 instance(s) of this issue:*

```solidity
452:     function _authorizeUpgrade(address _newImpl) internal view override onlyOwner  // <= FOUND

```


*GitHub* : [452](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L452-L452)

```solidity
452:     function _authorizeUpgrade(address _newImpl) internal view override onlyOwner whenPaused  // <= FOUND

```


*GitHub* : [452](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L452-L452)

```solidity
101:     function _transfer(address from, address to, uint256 value) internal override  // <= FOUND

```


*GitHub* : [101](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L101-L101)

```solidity
141:     function _approve(address owner, address spender, uint256 value) internal override  // <= FOUND

```


*GitHub* : [141](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L141-L141)

```solidity
148:     function _approve(address owner, address spender, uint256 value, bool emitEvent) internal virtual override  // <= FOUND

```


*GitHub* : [148](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L148-L148)

```solidity
155:     function _spendAllowance(address owner, address spender, uint256 value) internal virtual override  // <= FOUND

```


*GitHub* : [155](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L155-L155)
### [G-02]<a name="g-02"></a> Some error strings are not descriptive 
Consider adding more detail to these error strings

*There are 1 instance(s) of this issue:*

```solidity
328:     function _authorizeUpgrade(address _newImpl) internal view override onlyOwner {
329:         
330:         require(manager.isRegisteredUpgrade(_getImplementation(), _newImpl), "Invalid upgrade"); // <= FOUND
331:     }

```


*GitHub* : [330](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L330-L330)
### [G-03]<a name="g-03"></a> Consider merging sequential for loops 
Merging multiple `for` loops within a function in Solidity can enhance efficiency and reduce gas costs, especially when they share a common iterating variable or perform related operations. By minimizing redundant iterations over the same data set, execution becomes more cost-effective. However, while merging can optimize gas usage and simplify logic, it may also increase code complexity. Therefore, careful balance between optimization and maintainability is essential, along with thorough testing to ensure the refactored code behaves as expected.

*There are 2 instance(s) of this issue:*

```solidity
209:     function createPiece(
210:         ArtPieceMetadata calldata metadata,
211:         CreatorBps[] calldata creatorArray
212:     ) public returns (uint256) {
213:         uint256 creatorArrayLength = validateCreatorsArray(creatorArray);
214: 
215:         
216:         validateMediaType(metadata);
217: 
218:         uint256 pieceId = _currentPieceId++;
219: 
220:         
221:         maxHeap.insert(pieceId, 0);
222: 
223:         ArtPiece storage newPiece = pieces[pieceId];
224: 
225:         newPiece.pieceId = pieceId;
226:         newPiece.totalVotesSupply = _calculateVoteWeight(
227:             erc20VotingToken.totalSupply(),
228:             erc721VotingToken.totalSupply()
229:         );
230:         newPiece.totalERC20Supply = erc20VotingToken.totalSupply();
231:         newPiece.metadata = metadata;
232:         newPiece.sponsor = msg.sender;
233:         newPiece.creationBlock = block.number;
234:         newPiece.quorumVotes = (quorumVotesBPS * newPiece.totalVotesSupply) / 10_000;
235: 
236:         for (uint i; i < creatorArrayLength; i++) { // <= FOUND
237:             newPiece.creators.push(creatorArray[i]);
238:         }
239: 
240:         emit PieceCreated(pieceId, msg.sender, metadata, newPiece.quorumVotes, newPiece.totalVotesSupply);
241: 
242:         
243:         for (uint i; i < creatorArrayLength; i++) { // <= FOUND
244:             emit PieceCreatorAdded(pieceId, creatorArray[i].creator, msg.sender, creatorArray[i].bps);
245:         }
246: 
247:         return newPiece.pieceId;
248:     }

```


*GitHub* : [209](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L209-L243)

```solidity
389:     function batchVoteForManyWithSig(
390:         address[] memory from,
391:         uint256[][] calldata pieceIds,
392:         uint256[] memory deadline,
393:         uint8[] memory v,
394:         bytes32[] memory r,
395:         bytes32[] memory s
396:     ) external nonReentrant {
397:         uint256 len = from.length;
398:         require(
399:             len == pieceIds.length && len == deadline.length && len == v.length && len == r.length && len == s.length,
400:             "Array lengths must match"
401:         );
402: 
403:         for (uint256 i; i < len; i++) { // <= FOUND
404:             if (!_verifyVoteSignature(from[i], pieceIds[i], deadline[i], v[i], r[i], s[i])) revert INVALID_SIGNATURE();
405:         }
406: 
407:         for (uint256 i; i < len; i++) { // <= FOUND
408:             _voteForMany(pieceIds[i], from[i]);
409:         }
410:     }

```


*GitHub* : [389](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L389-L407)
### [G-04]<a name="g-04"></a> Lack of unchecked in loops 
In Solidity, the `unchecked` block allows arithmetic operations to not revert on overflow. Without using `unchecked` in loops, extra gas is consumed due to overflow checks. If it's certain that overflows won't occur within the loop, using `unchecked` can make the loop more gas-efficient by skipping unnecessary checks.

*There are 4 instance(s) of this issue:*

```solidity
185:        for (uint i; i < creatorArrayLength; i++) {
186:             require(creatorArray[i].creator != address(0), "Invalid creator address");
187:             totalBps += creatorArray[i].bps;
188:         }

```


*GitHub* : [185](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L185-L185)

```solidity
236:        for (uint i; i < creatorArrayLength; i++) {
237:             newPiece.creators.push(creatorArray[i]);
238:         }

```


*GitHub* : [236](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L236-L236)

```solidity
355:        for (uint256 i; i < len; i++) {
356:             _vote(pieceIds[i], from);
357:         }

```


*GitHub* : [355](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L355-L355)

```solidity
403:        for (uint256 i; i < len; i++) {
404:             if (!_verifyVoteSignature(from[i], pieceIds[i], deadline[i], v[i], r[i], s[i])) revert INVALID_SIGNATURE();
405:         }

```


*GitHub* : [403](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L403-L403)
### [G-05]<a name="g-05"></a> Avoid updating storage when the value hasn't changed

*There are 2 instance(s) of this issue:*

```solidity
209:     function createPiece(
210:         ArtPieceMetadata calldata metadata,
211:         CreatorBps[] calldata creatorArray
212:     ) public returns (uint256) {
213:         uint256 creatorArrayLength = validateCreatorsArray(creatorArray);
214: 
215:         
216:         validateMediaType(metadata);
217: 
218:         uint256 pieceId = _currentPieceId++;
219: 
220:         
221:         maxHeap.insert(pieceId, 0);
222: 
223:         ArtPiece storage newPiece = pieces[pieceId];
224: 
225:         newPiece.pieceId = pieceId;
226:         newPiece.totalVotesSupply = _calculateVoteWeight(
227:             erc20VotingToken.totalSupply(),
228:             erc721VotingToken.totalSupply()
229:         );
230:         newPiece.totalERC20Supply = erc20VotingToken.totalSupply(); // <= FOUND
231:         newPiece.metadata = metadata; // <= FOUND
232:         newPiece.sponsor = msg.sender; // <= FOUND
233:         newPiece.creationBlock = block.number; // <= FOUND
234:         newPiece.quorumVotes = (quorumVotesBPS * newPiece.totalVotesSupply) / 10_000; // <= FOUND
235: 
236:         for (uint i; i < creatorArrayLength; i++) {
237:             newPiece.creators.push(creatorArray[i]);
238:         }
239: 
240:         emit PieceCreated(pieceId, msg.sender, metadata, newPiece.quorumVotes, newPiece.totalVotesSupply);
241: 
242:         
243:         for (uint i; i < creatorArrayLength; i++) {
244:             emit PieceCreatorAdded(pieceId, creatorArray[i].creator, msg.sender, creatorArray[i].bps);
245:         }
246: 
247:         return newPiece.pieceId;
248:     }

```


*GitHub* : [209](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L209-L234)

```solidity
281:     function _mintTo(address to) internal returns (uint256) { // <= FOUND
282:         ICultureIndex.ArtPiece memory artPiece = cultureIndex.getTopVotedPiece();
283: 
284:         
285:         
286:         require(
287:             artPiece.creators.length <= cultureIndex.MAX_NUM_CREATORS(),
288:             "Creator array must not be > MAX_NUM_CREATORS"
289:         );
290: 
291:         
292:         try cultureIndex.dropTopVotedPiece() returns (ICultureIndex.ArtPiece memory _artPiece) {
293:             artPiece = _artPiece;
294:             uint256 verbId = _currentVerbId++;
295: 
296:             ICultureIndex.ArtPiece storage newPiece = artPieces[verbId];
297: 
298:             newPiece.pieceId = artPiece.pieceId;
299:             newPiece.metadata = artPiece.metadata; // <= FOUND
300:             newPiece.isDropped = artPiece.isDropped; // <= FOUND
301:             newPiece.sponsor = artPiece.sponsor; // <= FOUND
302:             newPiece.totalERC20Supply = artPiece.totalERC20Supply; // <= FOUND
303:             newPiece.quorumVotes = artPiece.quorumVotes; // <= FOUND
304:             newPiece.totalVotesSupply = artPiece.totalVotesSupply; // <= FOUND
305: 
306:             for (uint i = 0; i < artPiece.creators.length; i++) {
307:                 newPiece.creators.push(artPiece.creators[i]);
308:             }
309: 
310:             _mint(to, verbId);
311: 
312:             emit VerbCreated(verbId, artPiece);
313: 
314:             return verbId;
315:         } catch {
316:             
317:             revert("dropTopVotedPiece failed");
318:         }
319:     }

```


*GitHub* : [281](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L281-L304)
### [G-06]<a name="g-06"></a> Multiple accesses of the same mapping/array key/index should be cached 
Caching repeated accesses to the same mapping or array key/index in smart contracts can lead to significant gas savings. In Solidity, each read operation from storage (like accessing a value in a mapping or array using a key or index) costs gas. By storing the accessed value in a local variable and reusing it within the function, you avoid multiple expensive storage read operations. This practice is particularly beneficial in loops or functions with multiple reads of the same data. Implementing this caching approach enhances efficiency and reduces transaction costs, which is crucial for optimizing smart contract performance and user experience on the blockchain.

*There are 1 instance(s) of this issue:*

```solidity
307:     function _vote(uint256 pieceId, address voter) internal {
308:         require(pieceId < _currentPieceId, "Invalid piece ID");
309:         require(voter != address(0), "Invalid voter address");
310:         require(!pieces[pieceId].isDropped, "Piece has already been dropped"); // <= FOUND
311:         require(!(votes[pieceId][voter].voterAddress != address(0)), "Already voted"); // <= FOUND
312: 
313:         uint256 weight = _getPastVotes(voter, pieces[pieceId].creationBlock); // <= FOUND
314:         require(weight > minVoteWeight, "Weight must be greater than minVoteWeight");
315: 
316:         votes[pieceId][voter] = Vote(voter, weight); // <= FOUND
317:         totalVoteWeights[pieceId] += weight; // <= FOUND
318: 
319:         uint256 totalWeight = totalVoteWeights[pieceId]; // <= FOUND
320: 
321:         
322:         maxHeap.updateValue(pieceId, totalWeight);
323:         emit VoteCast(pieceId, voter, weight, totalWeight);
324:     }

```


*GitHub* : [307](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L307-L319)
### [G-07]<a name="g-07"></a> Require/revert statements regarding parameters should be first in a function

*There are 1 instance(s) of this issue:*

```solidity
84:     function initialize(
85:         address _initialOwner,
86:         address _erc20Token,
87:         address _treasury,
88:         address _vrgdac,
89:         address _creatorsAddress
90:     ) external initializer {
91:         require(msg.sender == address(manager), "Only manager can initialize");
92: 
93:         __Pausable_init();
94:         __ReentrancyGuard_init();
95: 
96:         require(_treasury != address(0), "Invalid treasury address");
97: 
98:         
99:         __Ownable_init(_initialOwner);
100: 
101:         treasury = _treasury;
102:         creatorsAddress = _creatorsAddress;
103:         vrgdac = VRGDAC(_vrgdac);
104:         token = NontransferableERC20Votes(_erc20Token);
105:         startTime = block.timestamp;
106:     }

```


*GitHub* : [84](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L84-L84)
### [G-08]<a name="g-08"></a> The result of a function call should be cached rather than re-calling the function 
External calls in Solidity are costly in terms of gas usage. This can significantly impact contract efficiency and cost. Functions that make repetitive calls to fetch the same data from other contracts can cause unnecessary gas expenditure. To optimize this, it's advisable to store the returned value of these function calls in a state variable, essentially caching the data. This data can be updated at regular intervals or under specific conditions instead of fetching it from the external contract on every invocation. Be sure to analyze the frequency of data change in the external contract to balance data freshness with gas efficiency when implementing caching.

*There are 1 instance(s) of this issue:*

```solidity
209:     function createPiece(
210:         ArtPieceMetadata calldata metadata,
211:         CreatorBps[] calldata creatorArray
212:     ) public returns (uint256) {
213:         uint256 creatorArrayLength = validateCreatorsArray(creatorArray);
214: 
215:         
216:         validateMediaType(metadata);
217: 
218:         uint256 pieceId = _currentPieceId++;
219: 
220:         
221:         maxHeap.insert(pieceId, 0);
222: 
223:         ArtPiece storage newPiece = pieces[pieceId];
224: 
225:         newPiece.pieceId = pieceId;
226:         newPiece.totalVotesSupply = _calculateVoteWeight(
227:             erc20VotingToken.totalSupply(), // <= FOUND
228:             erc721VotingToken.totalSupply()
229:         );
230:         newPiece.totalERC20Supply = erc20VotingToken.totalSupply(); // <= FOUND
231:         newPiece.metadata = metadata;
232:         newPiece.sponsor = msg.sender;
233:         newPiece.creationBlock = block.number;
234:         newPiece.quorumVotes = (quorumVotesBPS * newPiece.totalVotesSupply) / 10_000;
235: 
236:         for (uint i; i < creatorArrayLength; i++) {
237:             newPiece.creators.push(creatorArray[i]);
238:         }
239: 
240:         emit PieceCreated(pieceId, msg.sender, metadata, newPiece.quorumVotes, newPiece.totalVotesSupply);
241: 
242:         
243:         for (uint i; i < creatorArrayLength; i++) {
244:             emit PieceCreatorAdded(pieceId, creatorArray[i].creator, msg.sender, creatorArray[i].bps);
245:         }
246: 
247:         return newPiece.pieceId;
248:     }

```


*GitHub* : [209](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L209-L230)
### [G-09]<a name="g-09"></a> State variables which are not modified within functions should be set as constants or immutable for values set at deployment 
Set state variables listed below as constant or immutable for values set at deployment. Ensure it is safe to do so

*There are 1 instance(s) of this issue:*

```solidity
42: ERC721CheckpointableUpgradeable public erc721VotingToken; // <= FOUND

```


*GitHub* : [42](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L42-L42)
### [G-10]<a name="g-10"></a> Shorten the array rather than copying to a new one 
Leveraging inline assembly in Solidity provides the ability to directly manipulate the length slot of an array, thereby altering its length without the need to copy the elements to a new array of the desired size. This technique is more gas-efficient as it avoids the computational expense associated with array duplication. However, this method circumvents the type-checking and safety mechanisms of high-level Solidity and should be used judiciously. Always ensure that the array doesn't contain vital data beyond the revised length, as this data will become unreachable yet still consume storage space.

*There are 2 instance(s) of this issue:*

```solidity
374: 
375:                 
376:                 uint256[] memory vrgdaSplits = new uint256[](numCreators); // <= FOUND

```


*GitHub* : [374](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L374-L376)

```solidity
375:                 address[] memory vrgdaReceivers = new address[](numCreators); // <= FOUND

```


*GitHub* : [375](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L375-L375)
### [G-11]<a name="g-11"></a> Using bools for storage incurs overhead 
Using boolean variables (`bool`) for storage in Solidity can incur overhead due to the way data is packed in Ethereum's storage layout. A `bool` takes a full storage slot, even though it represents only a true or false value. This leads to inefficient usage of storage space and potentially higher gas costs. To resolve this issue, developers can use bit fields or uint8/uint256 to pack multiple boolean values into a single storage slot. By employing such optimization techniques, it's possible to save on storage space and reduce gas costs, making the contract more efficient.

*There are 5 instance(s) of this issue:*

```solidity
191: 
192:         
193:         bool extended = _auction.endTime - block.timestamp < timeBuffer; // <= FOUND

```


*GitHub* : [191](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L191-L193)

```solidity
424: 
425:         
426:         bool success; // <= FOUND

```


*GitHub* : [424](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L424-L426)

```solidity
51: 
53:     bool public isMinterLocked; // <= FOUND

```


*GitHub* : [51](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L51-L53)

```solidity
54: 
56:     bool public isCultureIndexLocked; // <= FOUND

```


*GitHub* : [54](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L54-L56)

```solidity
57: 
59:     bool public isDescriptorLocked; // <= FOUND

```


*GitHub* : [57](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L57-L59)
### [G-12]<a name="g-12"></a> Low level call can be optimized with assembly
Low-level calls, when optimized with assembly, can save gas by avoiding unnecessary operations related to unused returndata. In a typical `.call`, Solidity automatically allocates memory and handles returndata even if it's not used, incurring extra gas costs. By using assembly, a developer can precisely control the execution, selectively ignoring or handling returndata, thereby optimizing gas usage. This specific control over the EVM allows for more efficient execution of calls by eliminating unnecessary memory operations, providing a more gas-efficient method when unused returndata is a concern. However, such optimization should be handled with care, as improper use of assembly might lead to vulnerabilities.

*There are 2 instance(s) of this issue:*

```solidity
191: 
192:         
193:         (bool success, ) = treasury.call{ value: toPayTreasury }(new bytes(0)); // <= FOUND

```


*GitHub* : [193](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L193-L193)

```solidity
196:             (success, ) = creatorsAddress.call{ value: creatorDirectPayment }(new bytes(0)); // <= FOUND

```


*GitHub* : [196](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L196-L196)
### [G-13]<a name="g-13"></a> Optimize by Using Assembly for Low-Level Calls' Return Data
Using assembly for low-level calls in Solidity can provide gas savings, especially when dealing with return data. High-level Solidity calls include overhead for decoding return data, which can be bypassed with assembly. By directly accessing return data in assembly, you can eliminate unnecessary memory allocation and data copying, leading to a more gas-efficient execution. However, this approach requires a deep understanding of the Ethereum Virtual Machine (EVM) and is prone to errors. It’s crucial to ensure security and correctness in the implementation. This technique is best suited for advanced users aiming to optimize contract performance in specific, gas-critical scenarios.

*There are 2 instance(s) of this issue:*

```solidity
191: 
192:         
193:         (bool success, ) = treasury.call{ value: toPayTreasury }(new bytes(0)); // <= FOUND

```


*GitHub* : [191](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L191-L193)

```solidity
196:             (success, ) = creatorsAddress.call{ value: creatorDirectPayment }(new bytes(0)); // <= FOUND

```


*GitHub* : [196](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L196-L196)
### [G-14]<a name="g-14"></a> Low level call can be optimized with assembly
Optimizing low-level calls using assembly in Solidity can be beneficial, particularly when dealing with function return data. Typically, even if return data from a low-level call is not used, Solidity still allocates memory to store it, which incurs gas costs. By using assembly, developers can bypass the automatic memory allocation for unused return data. This manual optimization involves handling the call at the assembly level and deliberately choosing not to store the return data in memory when it's not needed.

*There are 2 instance(s) of this issue:*

```solidity
191: 
192:         
193:         (bool success, ) = treasury.call{ value: toPayTreasury }(new bytes(0)); // <= FOUND

```


*GitHub* : [193](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L193-L193)

```solidity
196:             (success, ) = creatorsAddress.call{ value: creatorDirectPayment }(new bytes(0)); // <= FOUND

```


*GitHub* : [196](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L196-L196)
### [G-15]<a name="g-15"></a> Consider Using Solady's Gas Optimized Lib for Math
In instances where many similar mathematical operations are performed, consider using Solday's math lib to benefit from the gas saving it can introduce.

*There are 9 instance(s) of this issue:*

```solidity
234:         newPiece.quorumVotes = (quorumVotesBPS * newPiece.totalVotesSupply) / 10_000; // <= FOUND

```


*GitHub* : [234](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L234-L234)

```solidity
173: 
174:         
175:         uint256 toPayTreasury = (msgValueRemaining * (10_000 - creatorRateBps)) / 10_000; // <= FOUND

```


*GitHub* : [173](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L173-L175)

```solidity
177: 
178:         
179:         
180:         uint256 creatorDirectPayment = ((msgValueRemaining - toPayTreasury) * entropyRateBps) / 10_000; // <= FOUND

```


*GitHub* : [177](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L177-L180)

```solidity
212:                 
213:                 _mint(addresses[i], uint256((totalTokensForBuyers * int(basisPointSplits[i])) / 10_000)); // <= FOUND

```


*GitHub* : [212](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L212-L213)

```solidity
277:                 timeSinceStart: toDaysWadUnsafe(block.timestamp - startTime),
278:                 sold: emittedTokenWad,
279:                 amount: int(((paymentAmount - computeTotalReward(paymentAmount)) * (10_000 - creatorRateBps)) / 10_000) // <= FOUND
280:             });

```


*GitHub* : [277](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L277-L279)

```solidity
180:         require(
181:             msg.value >= _auction.amount + ((_auction.amount * minBidIncrementPercentage) / 100), // <= FOUND
182:             "Must send more than last bid by minBidIncrementPercentage amount"
183:         );

```


*GitHub* : [180](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L180-L181)

```solidity
365:                 
366:                 uint256 auctioneerPayment = (_auction.amount * (10_000 - creatorRateBps)) / 10_000; // <= FOUND

```


*GitHub* : [365](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L365-L366)

```solidity
390: 
391:                         
392:                         uint256 paymentAmount = (creatorsShare * entropyRateBps * creator.bps) / (10_000 * 10_000); // <= FOUND

```


*GitHub* : [390](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L390-L392)

```solidity
56:                 builderReferralReward: (paymentAmountWei * BUILDER_REWARD_BPS) / 10_000, // <= FOUND
57:                 purchaseReferralReward: (paymentAmountWei * PURCHASE_REFERRAL_BPS) / 10_000, // <= FOUND
58:                 deployerReward: (paymentAmountWei * DEPLOYER_REWARD_BPS) / 10_000, // <= FOUND
59:                 revolutionReward: (paymentAmountWei * REVOLUTION_REWARD_BPS) / 10_000 // <= FOUND
60:             }),

```


*GitHub* : [56](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L56-L59)
### [G-16]<a name="g-16"></a> Optimize Gas by Splitting if() revert Statements
Optimizing gas in smart contracts is crucial for performance and cost-effectiveness. One strategy to achieve this is splitting if() statements accompanied by revert() into separate lines, rather than chaining them with the || (OR) boolean operator. This is because, in Solidity, when conditions are chained using ||, all conditions might get evaluated even if one of them is true, resulting in unnecessary gas consumption. By breaking them into separate if() statements, the contract will exit as soon as one condition is met, saving gas.

*There are 3 instance(s) of this issue:*

```solidity
441: 
442:         
443:         if (recoveredAddress == address(0) || recoveredAddress != from) revert INVALID_SIGNATURE(); // <= FOUND

```


*GitHub* : [441](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L441-L443)

```solidity
30:         if (_protocolRewards == address(0) || _revolutionRewardRecipient == address(0)) revert("Invalid Address Zero"); // <= FOUND

```


*GitHub* : [30](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L30-L30)

```solidity
40:         if (paymentAmountWei <= minPurchaseAmount || paymentAmountWei >= maxPurchaseAmount) revert INVALID_ETH_AMOUNT(); // <= FOUND

```


*GitHub* : [40](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L40-L40)
### [G-17]<a name="g-17"></a> x + y is more efficient than using += for state variables (likewise for -=)
In instances found where either += or -= are used against state variables use x = x + y instead

*There are 1 instance(s) of this issue:*

```solidity
152:     function buyToken(
153:         address[] calldata addresses,
154:         uint[] calldata basisPointSplits,
155:         ProtocolRewardAddresses calldata protocolRewardsRecipients
156:     ) public payable nonReentrant whenNotPaused returns (uint256 tokensSoldWad) {
157:         
158:         require(msg.sender != treasury && msg.sender != creatorsAddress, "Funds recipient cannot buy tokens");
159: 
160:         require(msg.value > 0, "Must send ether");
161:         
162:         require(addresses.length == basisPointSplits.length, "Parallel arrays required");
163: 
164:         
165:         uint256 msgValueRemaining = _handleRewardsAndGetValueToSend(
166:             msg.value,
167:             protocolRewardsRecipients.builder,
168:             protocolRewardsRecipients.purchaseReferral,
169:             protocolRewardsRecipients.deployer
170:         );
171: 
172:         
173:         uint256 toPayTreasury = (msgValueRemaining * (10_000 - creatorRateBps)) / 10_000;
174: 
175:         
176:         
177:         uint256 creatorDirectPayment = ((msgValueRemaining - toPayTreasury) * entropyRateBps) / 10_000;
178:         
179:         int totalTokensForCreators = ((msgValueRemaining - toPayTreasury) - creatorDirectPayment) > 0
180:             ? getTokenQuoteForEther((msgValueRemaining - toPayTreasury) - creatorDirectPayment)
181:             : int(0);
182: 
183:         
184:         int totalTokensForBuyers = toPayTreasury > 0 ? getTokenQuoteForEther(toPayTreasury) : int(0);
185: 
186:         
187:         emittedTokenWad += totalTokensForBuyers; // <= FOUND
188:         if (totalTokensForCreators > 0) emittedTokenWad += totalTokensForCreators; // <= FOUND
189: 
190:         
191:         (bool success, ) = treasury.call{ value: toPayTreasury }(new bytes(0));
192:         require(success, "Transfer failed.");
193: 
194:         
195:         if (creatorDirectPayment > 0) {
196:             (success, ) = creatorsAddress.call{ value: creatorDirectPayment }(new bytes(0));
197:             require(success, "Transfer failed.");
198:         }
199: 
200:         
201:         if (totalTokensForCreators > 0 && creatorsAddress != address(0)) {
202:             _mint(creatorsAddress, uint256(totalTokensForCreators));
203:         }
204: 
205:         uint256 bpsSum = 0;
206: 
207:         
208: 
209:         for (uint256 i = 0; i < addresses.length; i++) {
210:             if (totalTokensForBuyers > 0) {
211:                 
212:                 _mint(addresses[i], uint256((totalTokensForBuyers * int(basisPointSplits[i])) / 10_000));
213:             }
214:             bpsSum += basisPointSplits[i];
215:         }
216: 
217:         require(bpsSum == 10_000, "bps must add up to 10_000");
218: 
219:         emit PurchaseFinalized(
220:             msg.sender,
221:             msg.value,
222:             toPayTreasury,
223:             msg.value - msgValueRemaining,
224:             uint256(totalTokensForBuyers),
225:             uint256(totalTokensForCreators),
226:             creatorDirectPayment
227:         );
228: 
229:         return uint256(totalTokensForBuyers);
230:     }

```


*GitHub* : [187](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L187-L188)
### [G-18]<a name="g-18"></a> There is a 32 byte length threshold for error strings, strings longer than this consume more gas
In require statements found which are longer than 32 characters, shorten these to 32 character or less

*There are 19 instance(s) of this issue:*

```solidity
109:     function initialize(
110:         address _erc20VotingToken,
111:         address _erc721VotingToken,
112:         address _initialOwner,
113:         address _maxHeap,
114:         address _dropperAdmin,
115:         IRevolutionBuilder.CultureIndexParams memory _cultureIndexParams
116:     ) external initializer {
117:         require(msg.sender == address(manager), "Only manager can initialize");
118: 
119:         require(_cultureIndexParams.quorumVotesBPS <= MAX_QUORUM_VOTES_BPS, "invalid quorum bps");
120:         require(_cultureIndexParams.erc721VotingTokenWeight > 0, "invalid erc721 voting token weight"); // <= FOUND
121:         require(_erc721VotingToken != address(0), "invalid erc721 voting token");
122:         require(_erc20VotingToken != address(0), "invalid erc20 voting token");
123: 
124:         
125:         __Ownable_init(_initialOwner);
126: 
127:         
128:         __EIP712_init(string.concat(_cultureIndexParams.name, " CultureIndex"), "1");
129: 
130:         __ReentrancyGuard_init();
131: 
132:         erc20VotingToken = ERC20VotesUpgradeable(_erc20VotingToken);
133:         erc721VotingToken = ERC721CheckpointableUpgradeable(_erc721VotingToken);
134:         erc721VotingTokenWeight = _cultureIndexParams.erc721VotingTokenWeight;
135:         name = _cultureIndexParams.name;
136:         description = _cultureIndexParams.description;
137:         quorumVotesBPS = _cultureIndexParams.quorumVotesBPS;
138:         minVoteWeight = _cultureIndexParams.minVoteWeight;
139:         dropperAdmin = _dropperAdmin;
140: 
141:         emit QuorumVotesBPSSet(quorumVotesBPS, _cultureIndexParams.quorumVotesBPS);
142: 
143:         
144:         maxHeap = MaxHeap(_maxHeap);
145:     }

```


*GitHub* : [120](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L120-L120)

```solidity
179:     function validateCreatorsArray(CreatorBps[] calldata creatorArray) internal pure returns (uint256) {
180:         uint256 creatorArrayLength = creatorArray.length;
181:         
182:         require(creatorArrayLength <= MAX_NUM_CREATORS, "Creator array must not be > MAX_NUM_CREATORS"); // <= FOUND
183: 
184:         uint256 totalBps;
185:         for (uint i; i < creatorArrayLength; i++) {
186:             require(creatorArray[i].creator != address(0), "Invalid creator address");
187:             totalBps += creatorArray[i].bps;
188:         }
189: 
190:         require(totalBps == 10_000, "Total BPS must sum up to 10,000");
191: 
192:         return creatorArrayLength;
193:     }

```


*GitHub* : [182](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L182-L182)

```solidity
307:     function _vote(uint256 pieceId, address voter) internal {
308:         require(pieceId < _currentPieceId, "Invalid piece ID");
309:         require(voter != address(0), "Invalid voter address");
310:         require(!pieces[pieceId].isDropped, "Piece has already been dropped");
311:         require(!(votes[pieceId][voter].voterAddress != address(0)), "Already voted");
312: 
313:         uint256 weight = _getPastVotes(voter, pieces[pieceId].creationBlock);
314:         require(weight > minVoteWeight, "Weight must be greater than minVoteWeight"); // <= FOUND
315: 
316:         votes[pieceId][voter] = Vote(voter, weight);
317:         totalVoteWeights[pieceId] += weight;
318: 
319:         uint256 totalWeight = totalVoteWeights[pieceId];
320: 
321:         
322:         maxHeap.updateValue(pieceId, totalWeight);
323:         emit VoteCast(pieceId, voter, weight, totalWeight);
324:     }

```


*GitHub* : [314](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L314-L314)

```solidity
498:     function _setQuorumVotesBPS(uint256 newQuorumVotesBPS) external onlyOwner {
499:         require(newQuorumVotesBPS <= MAX_QUORUM_VOTES_BPS, "CultureIndex::_setQuorumVotesBPS: invalid quorum bps"); // <= FOUND
500:         emit QuorumVotesBPSSet(quorumVotesBPS, newQuorumVotesBPS);
501: 
502:         quorumVotesBPS = newQuorumVotesBPS;
503:     }

```


*GitHub* : [499](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L499-L499)

```solidity
519:     function dropTopVotedPiece() public nonReentrant returns (ArtPiece memory) {
520:         require(msg.sender == dropperAdmin, "Only dropper can drop pieces");
521: 
522:         ICultureIndex.ArtPiece memory piece = getTopVotedPiece();
523:         require(totalVoteWeights[piece.pieceId] >= piece.quorumVotes, "Does not meet quorum votes to be dropped."); // <= FOUND
524: 
525:         
526:         pieces[piece.pieceId].isDropped = true;
527: 
528:         
529:         maxHeap.extractMax();
530: 
531:         emit PieceDropped(piece.pieceId, msg.sender);
532: 
533:         return pieces[piece.pieceId];
534:     }

```


*GitHub* : [523](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L523-L523)

```solidity
152:     function buyToken(
153:         address[] calldata addresses,
154:         uint[] calldata basisPointSplits,
155:         ProtocolRewardAddresses calldata protocolRewardsRecipients
156:     ) public payable nonReentrant whenNotPaused returns (uint256 tokensSoldWad) {
157:         
158:         require(msg.sender != treasury && msg.sender != creatorsAddress, "Funds recipient cannot buy tokens"); // <= FOUND
159: 
160:         require(msg.value > 0, "Must send ether");
161:         
162:         require(addresses.length == basisPointSplits.length, "Parallel arrays required");
163: 
164:         
165:         uint256 msgValueRemaining = _handleRewardsAndGetValueToSend(
166:             msg.value,
167:             protocolRewardsRecipients.builder,
168:             protocolRewardsRecipients.purchaseReferral,
169:             protocolRewardsRecipients.deployer
170:         );
171: 
172:         
173:         uint256 toPayTreasury = (msgValueRemaining * (10_000 - creatorRateBps)) / 10_000;
174: 
175:         
176:         
177:         uint256 creatorDirectPayment = ((msgValueRemaining - toPayTreasury) * entropyRateBps) / 10_000;
178:         
179:         int totalTokensForCreators = ((msgValueRemaining - toPayTreasury) - creatorDirectPayment) > 0
180:             ? getTokenQuoteForEther((msgValueRemaining - toPayTreasury) - creatorDirectPayment)
181:             : int(0);
182: 
183:         
184:         int totalTokensForBuyers = toPayTreasury > 0 ? getTokenQuoteForEther(toPayTreasury) : int(0);
185: 
186:         
187:         emittedTokenWad += totalTokensForBuyers;
188:         if (totalTokensForCreators > 0) emittedTokenWad += totalTokensForCreators;
189: 
190:         
191:         (bool success, ) = treasury.call{ value: toPayTreasury }(new bytes(0));
192:         require(success, "Transfer failed.");
193: 
194:         
195:         if (creatorDirectPayment > 0) {
196:             (success, ) = creatorsAddress.call{ value: creatorDirectPayment }(new bytes(0));
197:             require(success, "Transfer failed.");
198:         }
199: 
200:         
201:         if (totalTokensForCreators > 0 && creatorsAddress != address(0)) {
202:             _mint(creatorsAddress, uint256(totalTokensForCreators));
203:         }
204: 
205:         uint256 bpsSum = 0;
206: 
207:         

```


*GitHub* : [158](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L158-L158)

```solidity
254:     function getTokenQuoteForEther(uint256 etherAmount) public view returns (int gainedX) {
255:         require(etherAmount > 0, "Ether amount must be greater than 0"); // <= FOUND
256:         
257:         
258:         return
259:             vrgdac.yToX({
260:                 timeSinceStart: toDaysWadUnsafe(block.timestamp - startTime),
261:                 sold: emittedTokenWad,
262:                 amount: int(etherAmount)
263:             });
264:     }

```


*GitHub* : [255](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L255-L255)

```solidity
271:     function getTokenQuoteForPayment(uint256 paymentAmount) external view returns (int gainedX) {
272:         require(paymentAmount > 0, "Payment amount must be greater than 0"); // <= FOUND
273:         
274:         
275:         return
276:             vrgdac.yToX({
277:                 timeSinceStart: toDaysWadUnsafe(block.timestamp - startTime),
278:                 sold: emittedTokenWad,
279:                 amount: int(((paymentAmount - computeTotalReward(paymentAmount)) * (10_000 - creatorRateBps)) / 10_000)
280:             });
281:     }

```


*GitHub* : [272](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L272-L272)

```solidity
288:     function setEntropyRateBps(uint256 _entropyRateBps) external onlyOwner {
289:         require(_entropyRateBps <= 10_000, "Entropy rate must be less than or equal to 10_000"); // <= FOUND
290: 
291:         emit EntropyRateBpsUpdated(entropyRateBps = _entropyRateBps);
292:     }

```


*GitHub* : [289](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L289-L289)

```solidity
253:     function setEntropyRateBps(uint256 _entropyRateBps) external onlyOwner {
254:         require(_entropyRateBps <= 10_000, "Entropy rate must be less than or equal to 10_000"); // <= FOUND
255: 
256:         entropyRateBps = _entropyRateBps;
257:         emit EntropyRateBpsUpdated(_entropyRateBps);
258:     }

```


*GitHub* : [254](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L254-L254)

```solidity
299:     function setCreatorRateBps(uint256 _creatorRateBps) external onlyOwner {
300:         require(_creatorRateBps <= 10_000, "Creator rate must be less than or equal to 10_000"); // <= FOUND
301: 
302:         emit CreatorRateBpsUpdated(creatorRateBps = _creatorRateBps);
303:     }

```


*GitHub* : [300](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L300-L300)

```solidity
217:     function setCreatorRateBps(uint256 _creatorRateBps) external onlyOwner {
218:         require(
219:             _creatorRateBps >= minCreatorRateBps,
220:             "Creator rate must be greater than or equal to minCreatorRateBps"
221:         );
222:         require(_creatorRateBps <= 10_000, "Creator rate must be less than or equal to 10_000"); // <= FOUND
223:         creatorRateBps = _creatorRateBps;
224: 
225:         emit CreatorRateBpsUpdated(_creatorRateBps);
226:     }

```


*GitHub* : [222](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L222-L222)

```solidity
113:     function initialize(
114:         address _erc721Token,
115:         address _erc20TokenEmitter,
116:         address _initialOwner,
117:         address _weth,
118:         IRevolutionBuilder.AuctionParams calldata _auctionParams
119:     ) external initializer {
120:         require(msg.sender == address(manager), "Only manager can initialize");
121:         require(_weth != address(0), "WETH cannot be zero address");
122: 
123:         __Pausable_init();
124:         __ReentrancyGuard_init();
125:         __Ownable_init(_initialOwner);
126: 
127:         _pause();
128: 
129:         require(
130:             _auctionParams.creatorRateBps >= _auctionParams.minCreatorRateBps,
131:             "Creator rate must be greater than or equal to the creator rate"
132:         );
133: 
134:         verbs = IVerbsToken(_erc721Token);
135:         erc20TokenEmitter = IERC20TokenEmitter(_erc20TokenEmitter);
136:         timeBuffer = _auctionParams.timeBuffer;
137:         reservePrice = _auctionParams.reservePrice;
138:         minBidIncrementPercentage = _auctionParams.minBidIncrementPercentage;
139:         duration = _auctionParams.duration;
140:         creatorRateBps = _auctionParams.creatorRateBps;
141:         entropyRateBps = _auctionParams.entropyRateBps;
142:         minCreatorRateBps = _auctionParams.minCreatorRateBps;
143:         WETH = _weth;
144:     }

```


*GitHub* :

```solidity
171:     function createBid(uint256 verbId, address bidder) external payable override nonReentrant {
172:         IAuctionHouse.Auction memory _auction = auction;
173: 
174:         
175:         require(bidder != address(0), "Bidder cannot be zero address");
176:         require(_auction.verbId == verbId, "Verb not up for auction");
177:         
178:         require(block.timestamp < _auction.endTime, "Auction expired");
179:         require(msg.value >= reservePrice, "Must send at least reservePrice");
180:         require(
181:             msg.value >= _auction.amount + ((_auction.amount * minBidIncrementPercentage) / 100),
182:             "Must send more than last bid by minBidIncrementPercentage amount"
183:         );
184: 
185:         address payable lastBidder = _auction.bidder;
186: 
187:         auction.amount = msg.value;
188:         auction.bidder = payable(bidder);
189: 
190:         
191:         bool extended = _auction.endTime - block.timestamp < timeBuffer;
192:         if (extended) auction.endTime = _auction.endTime = block.timestamp + timeBuffer;
193: 
194:         
195:         if (lastBidder != address(0)) _safeTransferETHWithFallback(lastBidder, _auction.amount);
196: 
197:         emit AuctionBid(_auction.verbId, bidder, msg.sender, msg.value, extended);
198: 
199:         if (extended) emit AuctionExtended(_auction.verbId, _auction.endTime);
200:     }

```


*GitHub* :

```solidity
233:     function setMinCreatorRateBps(uint256 _minCreatorRateBps) external onlyOwner {
234:         require(_minCreatorRateBps <= creatorRateBps, "Min creator rate must be less than or equal to creator rate"); // <= FOUND
235:         require(_minCreatorRateBps <= 10_000, "Min creator rate must be less than or equal to 10_000"); // <= FOUND
236: 
237:         
238:         require(
239:             _minCreatorRateBps > minCreatorRateBps,
240:             "Min creator rate must be greater than previous minCreatorRateBps"
241:         );
242: 
243:         minCreatorRateBps = _minCreatorRateBps;
244: 
245:         emit MinCreatorRateBpsUpdated(_minCreatorRateBps);
246:     }

```


*GitHub* : [234](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L234-L235)

```solidity
309:     function _createAuction() internal {
310:         
311:         require(gasleft() >= MIN_TOKEN_MINT_GAS_THRESHOLD, "Insufficient gas for creating auction"); // <= FOUND
312: 
313:         try verbs.mint() returns (uint256 verbId) {
314:             uint256 startTime = block.timestamp;
315:             uint256 endTime = startTime + duration;
316: 
317:             auction = Auction({
318:                 verbId: verbId,
319:                 amount: 0,
320:                 startTime: startTime,
321:                 endTime: endTime,
322:                 bidder: payable(0),
323:                 settled: false
324:             });
325: 
326:             emit AuctionCreated(verbId, startTime, endTime);
327:         } catch {
328:             _pause();
329:         }
330:     }

```


*GitHub* : [311](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L311-L311)

```solidity
336:     function _settleAuction() internal {
337:         IAuctionHouse.Auction memory _auction = auction;
338: 
339:         require(_auction.startTime != 0, "Auction hasn't begun");
340:         require(!_auction.settled, "Auction has already been settled"); // <= FOUND
341:         
342:         require(block.timestamp >= _auction.endTime, "Auction hasn't completed");
343: 
344:         auction.settled = true;
345: 
346:         uint256 creatorTokensEmitted = 0;
347:         
348:         if (address(this).balance < reservePrice) {
349:             
350:             if (_auction.bidder != address(0)) {
351:                 _safeTransferETHWithFallback(_auction.bidder, _auction.amount);
352:             }
353: 
354:             
355:             verbs.burn(_auction.verbId);
356:         } else {
357:             
358:             if (_auction.bidder == address(0))
359:                 verbs.burn(_auction.verbId);
360:                 
361:             else verbs.transferFrom(address(this), _auction.bidder, _auction.verbId);
362: 
363:             if (_auction.amount > 0) {
364:                 
365:                 uint256 auctioneerPayment = (_auction.amount * (10_000 - creatorRateBps)) / 10_000;
366: 
367:                 
368:                 uint256 creatorsShare = _auction.amount - auctioneerPayment;
369: 
370:                 uint256 numCreators = verbs.getArtPieceById(_auction.verbId).creators.length;
371:                 address deployer = verbs.getArtPieceById(_auction.verbId).sponsor;
372: 
373:                 
374:                 uint256[] memory vrgdaSplits = new uint256[](numCreators);
375:                 address[] memory vrgdaReceivers = new address[](numCreators);
376: 
377:                 
378:                 _safeTransferETHWithFallback(owner(), auctioneerPayment);
379: 
380:                 uint256 ethPaidToCreators = 0;
381: 
382:                 
383:                 if (creatorsShare > 0 && entropyRateBps > 0) {
384:                     for (uint256 i = 0; i < numCreators; i++) {
385:                         ICultureIndex.CreatorBps memory creator = verbs.getArtPieceById(_auction.verbId).creators[i];
386:                         vrgdaReceivers[i] = creator.creator;
387:                         vrgdaSplits[i] = creator.bps;
388: 
389:                         

```


*GitHub* : [340](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L340-L340)

```solidity
130:     function initialize(
131:         address _minter,
132:         address _initialOwner,
133:         address _descriptor,
134:         address _cultureIndex,
135:         IRevolutionBuilder.ERC721TokenParams memory _erc721TokenParams
136:     ) external initializer {
137:         require(msg.sender == address(manager), "Only manager can initialize");
138: 
139:         require(_minter != address(0), "Minter cannot be zero address");
140:         require(_initialOwner != address(0), "Initial owner cannot be zero address"); // <= FOUND
141: 
142:         
143:         __ReentrancyGuard_init();
144: 
145:         
146:         __Ownable_init(_initialOwner);
147: 
148:         
149:         __ERC721_init(_erc721TokenParams.name, _erc721TokenParams.symbol);
150:         _contractURIHash = _erc721TokenParams.contractURIHash;
151: 
152:         
153:         minter = _minter;
154:         descriptor = IDescriptorMinimal(_descriptor);
155:         cultureIndex = ICultureIndex(_cultureIndex);
156:     }

```


*GitHub* : [140](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L140-L140)

```solidity
281:     function _mintTo(address to) internal returns (uint256) {
282:         ICultureIndex.ArtPiece memory artPiece = cultureIndex.getTopVotedPiece();
283: 
284:         
285:         
286:         require(
287:             artPiece.creators.length <= cultureIndex.MAX_NUM_CREATORS(),
288:             "Creator array must not be > MAX_NUM_CREATORS"
289:         );
290: 
291:         
292:         try cultureIndex.dropTopVotedPiece() returns (ICultureIndex.ArtPiece memory _artPiece) {
293:             artPiece = _artPiece;
294:             uint256 verbId = _currentVerbId++;
295: 
296:             ICultureIndex.ArtPiece storage newPiece = artPieces[verbId];
297: 
298:             newPiece.pieceId = artPiece.pieceId;
299:             newPiece.metadata = artPiece.metadata;
300:             newPiece.isDropped = artPiece.isDropped;
301:             newPiece.sponsor = artPiece.sponsor;
302:             newPiece.totalERC20Supply = artPiece.totalERC20Supply;
303:             newPiece.quorumVotes = artPiece.quorumVotes;
304:             newPiece.totalVotesSupply = artPiece.totalVotesSupply;
305: 
306:             for (uint i = 0; i < artPiece.creators.length; i++) {
307:                 newPiece.creators.push(artPiece.creators[i]);
308:             }
309: 
310:             _mint(to, verbId);
311: 
312:             emit VerbCreated(verbId, artPiece);
313: 
314:             return verbId;
315:         } catch {
316:             
317:             revert("dropTopVotedPiece failed");
318:         }
319:     }

```


*GitHub* :
### [G-19]<a name="g-19"></a> Public functions not used internally can be marked as external to save gas
Public functions that aren't used internally in Solidity contracts should be made external to optimize gas usage and improve contract efficiency. External functions can only be called from outside the contract, and their arguments are directly read from the calldata, which is more gas-efficient than loading them into memory, as is the case for public functions. By using external visibility, developers can reduce gas consumption for external calls and ensure that the contract operates more cost-effectively for users. Moreover, setting the appropriate visibility level for functions also enhances code readability and maintainability, promoting a more secure and well-structured contract design.

*There are 13 instance(s) of this issue:*

```solidity
55:     function initialize(address _initialOwner, address _admin) public initializer 

```


*GitHub* : [55](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L55-L55)

```solidity
109:     function initialize(
110:         address _erc20VotingToken,
111:         address _erc721VotingToken,
112:         address _initialOwner,
113:         address _maxHeap,
114:         address _dropperAdmin,
115:         IRevolutionBuilder.CultureIndexParams memory _cultureIndexParams
116:     ) external initializer 

```


*GitHub* : [109](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L109-L109)

```solidity
65:     function initialize(
66:         address _initialOwner,
67:         IRevolutionBuilder.ERC20TokenParams calldata _erc20TokenParams
68:     ) external initializer 

```


*GitHub* : [65](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L65-L65)

```solidity
84:     function initialize(
85:         address _initialOwner,
86:         address _erc20Token,
87:         address _treasury,
88:         address _vrgdac,
89:         address _creatorsAddress
90:     ) external initializer 

```


*GitHub* : [84](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L84-L84)

```solidity
113:     function initialize(
114:         address _erc721Token,
115:         address _erc20TokenEmitter,
116:         address _initialOwner,
117:         address _weth,
118:         IRevolutionBuilder.AuctionParams calldata _auctionParams
119:     ) external initializer 

```


*GitHub* : [113](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L113-L113)

```solidity
130:     function initialize(
131:         address _minter,
132:         address _initialOwner,
133:         address _descriptor,
134:         address _cultureIndex,
135:         IRevolutionBuilder.ERC721TokenParams memory _erc721TokenParams
136:     ) external initializer 

```


*GitHub* : [130](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L130-L130)

```solidity
209:     function createPiece(
210:         ArtPieceMetadata calldata metadata,
211:         CreatorBps[] calldata creatorArray
212:     ) public returns (uint256) 

```


*GitHub* : [209](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L209-L209)

```solidity
451:     function getPieceById(uint256 pieceId) public view returns (ArtPiece memory) 

```


*GitHub* : [451](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L451-L451)

```solidity
461:     function getVote(uint256 pieceId, address voter) public view returns (Vote memory) 

```


*GitHub* : [461](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L461-L461)

```solidity
509:     function quorumVotes() public view returns (uint256) 

```


*GitHub* : [509](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L509-L509)

```solidity
152:     function buyToken(
153:         address[] calldata addresses,
154:         uint[] calldata basisPointSplits,
155:         ProtocolRewardAddresses calldata protocolRewardsRecipients
156:     ) public payable nonReentrant whenNotPaused returns (uint256 tokensSoldWad) 

```


*GitHub* : [152](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L152-L152)

```solidity
237:     function buyTokenQuote(uint256 amount) public view returns (int spentY) 

```


*GitHub* : [237](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L237-L237)

```solidity
161:     function contractURI() public view returns (string memory) 

```


*GitHub* : [161](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L161-L161)
### [G-20]<a name="g-20"></a> bytes.concat() can be used in place of abi.encodePacked
Given concatenation is not going to be used for hashing bytes.concat is the preferred method to use as its more gas efficient

*There are 1 instance(s) of this issue:*

```solidity
161:     function contractURI() public view returns (string memory) {
162:         return string(abi.encodePacked("ipfs: // <= FOUND
163:     }

```


*GitHub* : [162](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L162-L162)
### [G-21]<a name="g-21"></a> Usage of smaller uint/int types causes overhead
When using a smaller int/uint type it first needs to be converted to it's 258 bit counterpart to be operated, this increases the gass cost and thus should be avoided. However it does make sense to use smaller int/uint values within structs provided you pack the struct properly.

*There are 5 instance(s) of this issue:*

```solidity
367:     function voteForManyWithSig(
368:         address from,
369:         uint256[] calldata pieceIds,
370:         uint256 deadline,
371:         uint8 v, // <= FOUND
372:         bytes32 r,
373:         bytes32 s
374:     ) external nonReentrant {
375:         bool success = _verifyVoteSignature(from, pieceIds, deadline, v, r, s);
376: 
377:         if (!success) revert INVALID_SIGNATURE();
378: 
379:         _voteForMany(pieceIds, from);
380:     }

```


*GitHub* : [371](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L371-L371)

```solidity
419:     function _verifyVoteSignature(
420:         address from,
421:         uint256[] calldata pieceIds,
422:         uint256 deadline,
423:         uint8 v, // <= FOUND
424:         bytes32 r,
425:         bytes32 s
426:     ) internal returns (bool success) {
427:         require(deadline >= block.timestamp, "Signature expired");
428: 
429:         bytes32 voteHash;
430: 
431:         voteHash = keccak256(abi.encode(VOTE_TYPEHASH, from, pieceIds, nonces[from]++, deadline));
432: 
433:         bytes32 digest = _hashTypedDataV4(voteHash);
434: 
435:         address recoveredAddress = ecrecover(digest, v, r, s);
436: 
437:         
438:         if (from == address(0)) revert ADDRESS_ZERO();
439: 
440:         
441:         if (recoveredAddress == address(0) || recoveredAddress != from) revert INVALID_SIGNATURE();
442: 
443:         return true;
444:     }

```


*GitHub* : [423](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L423-L423)

```solidity
297:     function setMinBidIncrementPercentage(uint8 _minBidIncrementPercentage) external override onlyOwner { // <= FOUND
298:         minBidIncrementPercentage = _minBidIncrementPercentage;
299: 
300:         emit AuctionMinBidIncrementPercentageUpdated(_minBidIncrementPercentage);
301:     }

```


*GitHub* : [297](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L297-L297)

```solidity
63: uint8 public minBidIncrementPercentage; // <= FOUND

```


*GitHub* : [63](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L63-L63)

```solidity
88: uint32 public constant MIN_TOKEN_MINT_GAS_THRESHOLD = 750_000; // <= FOUND

```


*GitHub* : [88](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L88-L88)
### [G-22]<a name="g-22"></a> Use != 0 instead of > 0
Replace spotted instances with != 0 for uints as this uses less gas

*There are 19 instance(s) of this issue:*

```solidity
157:         require(size > 0, "Heap is empty"); // <= FOUND

```


*GitHub* : [157](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L157-L157)

```solidity
120:         require(_cultureIndexParams.erc721VotingTokenWeight > 0, "invalid erc721 voting token weight"); // <= FOUND

```


*GitHub* : [120](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L120-L120)

```solidity
160:         require(uint8(metadata.mediaType) > 0 && uint8(metadata.mediaType) <= 5, "Invalid media type"); // <= FOUND

```


*GitHub* : [160](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L160-L160)

```solidity
162: 
163:         if (metadata.mediaType == MediaType.IMAGE)
164:             require(bytes(metadata.image).length > 0, "Image URL must be provided"); // <= FOUND

```


*GitHub* : [164](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L164-L164)

```solidity
164:         else if (metadata.mediaType == MediaType.ANIMATION)
165:             require(bytes(metadata.animationUrl).length > 0, "Animation URL must be provided"); // <= FOUND

```


*GitHub* : [165](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L165-L165)

```solidity
166:         else if (metadata.mediaType == MediaType.TEXT)
167:             require(bytes(metadata.text).length > 0, "Text must be provided"); // <= FOUND

```


*GitHub* : [167](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L167-L167)

```solidity
487:         require(maxHeap.size() > 0, "Culture index is empty"); // <= FOUND

```


*GitHub* : [487](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L487-L487)

```solidity
160: 
161:         require(msg.value > 0, "Must send ether"); // <= FOUND

```


*GitHub* : [161](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L161-L161)

```solidity
179:         
180:         int totalTokensForCreators = ((msgValueRemaining - toPayTreasury) - creatorDirectPayment) > 0 // <= FOUND
181:             ? getTokenQuoteForEther((msgValueRemaining - toPayTreasury) - creatorDirectPayment)
182:             : int(0);

```


*GitHub* : [180](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L180-L180)

```solidity
184: 
185:         
186:         int totalTokensForBuyers = toPayTreasury > 0 ? getTokenQuoteForEther(toPayTreasury) : int(0); // <= FOUND

```


*GitHub* : [186](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L186-L186)

```solidity
188:         if (totalTokensForCreators > 0) emittedTokenWad += totalTokensForCreators; // <= FOUND

```


*GitHub* : [188](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L188-L188)

```solidity
195: 
196:         
197:         if (creatorDirectPayment > 0) { // <= FOUND

```


*GitHub* : [197](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L197-L197)

```solidity
201: 
202:         
203:         if (totalTokensForCreators > 0 && creatorsAddress != address(0)) { // <= FOUND

```


*GitHub* : [203](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L203-L203)

```solidity
210:             if (totalTokensForBuyers > 0) { // <= FOUND

```


*GitHub* : [210](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L210-L210)

```solidity
238:         require(amount > 0, "Amount must be greater than 0"); // <= FOUND

```


*GitHub* : [238](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L238-L238)

```solidity
255:         require(etherAmount > 0, "Ether amount must be greater than 0"); // <= FOUND

```


*GitHub* : [255](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L255-L255)

```solidity
272:         require(paymentAmount > 0, "Payment amount must be greater than 0"); // <= FOUND

```


*GitHub* : [272](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L272-L272)

```solidity
363: 
364:             if (_auction.amount > 0) { // <= FOUND

```


*GitHub* : [364](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L364-L364)

```solidity
383: 
384:                 
385:                 if (creatorsShare > 0 && entropyRateBps > 0) { // <= FOUND

```


*GitHub* : [385](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L385-L385)
### [G-23]<a name="g-23"></a> Integer increments by one can be unchecked to save on gas fees
Using unchecked increments in Solidity can save on gas fees by bypassing built-in overflow checks, thus optimizing gas usage, but requires careful assessment of potential risks and edge cases to avoid unintended consequences.

*There are 9 instance(s) of this issue:*

```solidity
119:     function insert(uint256 itemId, uint256 value) public onlyAdmin {
120:         heap[size] = itemId;
121:         valueMapping[itemId] = value; 
122:         positionMapping[itemId] = size; 
123: 
124:         uint256 current = size;
125:         while (current != 0 && valueMapping[heap[current]] > valueMapping[heap[parent(current)]]) {
126:             swap(current, parent(current));
127:             current = parent(current);
128:         }
129:         size++; // <= FOUND
130:     }

```


*GitHub* : [129](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L129-L129)

```solidity
179:     function validateCreatorsArray(CreatorBps[] calldata creatorArray) internal pure returns (uint256) {
180:         uint256 creatorArrayLength = creatorArray.length;
181:         
182:         require(creatorArrayLength <= MAX_NUM_CREATORS, "Creator array must not be > MAX_NUM_CREATORS");
183: 
184:         uint256 totalBps;
185:         for (uint i; i < creatorArrayLength; i++) { // <= FOUND
186:             require(creatorArray[i].creator != address(0), "Invalid creator address");
187:             totalBps += creatorArray[i].bps;
188:         }
189: 
190:         require(totalBps == 10_000, "Total BPS must sum up to 10,000");
191: 
192:         return creatorArrayLength;
193:     }

```


*GitHub* : [185](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L185-L185)

```solidity
209:     function createPiece(
210:         ArtPieceMetadata calldata metadata,
211:         CreatorBps[] calldata creatorArray
212:     ) public returns (uint256) {
213:         uint256 creatorArrayLength = validateCreatorsArray(creatorArray);
214: 
215:         
216:         validateMediaType(metadata);
217: 
218:         uint256 pieceId = _currentPieceId++; // <= FOUND
219: 
220:         
221:         maxHeap.insert(pieceId, 0);
222: 
223:         ArtPiece storage newPiece = pieces[pieceId];
224: 
225:         newPiece.pieceId = pieceId;
226:         newPiece.totalVotesSupply = _calculateVoteWeight(
227:             erc20VotingToken.totalSupply(),
228:             erc721VotingToken.totalSupply()
229:         );
230:         newPiece.totalERC20Supply = erc20VotingToken.totalSupply();
231:         newPiece.metadata = metadata;
232:         newPiece.sponsor = msg.sender;
233:         newPiece.creationBlock = block.number;
234:         newPiece.quorumVotes = (quorumVotesBPS * newPiece.totalVotesSupply) / 10_000;
235: 
236:         for (uint i; i < creatorArrayLength; i++) { // <= FOUND
237:             newPiece.creators.push(creatorArray[i]);
238:         }
239: 
240:         emit PieceCreated(pieceId, msg.sender, metadata, newPiece.quorumVotes, newPiece.totalVotesSupply);
241: 
242:         
243:         for (uint i; i < creatorArrayLength; i++) { // <= FOUND
244:             emit PieceCreatorAdded(pieceId, creatorArray[i].creator, msg.sender, creatorArray[i].bps);
245:         }
246: 
247:         return newPiece.pieceId;
248:     }

```


*GitHub* : [218](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L218-L243)

```solidity
353:     function _voteForMany(uint256[] calldata pieceIds, address from) internal {
354:         uint256 len = pieceIds.length;
355:         for (uint256 i; i < len; i++) { // <= FOUND
356:             _vote(pieceIds[i], from);
357:         }
358:     }

```


*GitHub* : [355](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L355-L355)

```solidity
389:     function batchVoteForManyWithSig(
390:         address[] memory from,
391:         uint256[][] calldata pieceIds,
392:         uint256[] memory deadline,
393:         uint8[] memory v,
394:         bytes32[] memory r,
395:         bytes32[] memory s
396:     ) external nonReentrant {
397:         uint256 len = from.length;
398:         require(
399:             len == pieceIds.length && len == deadline.length && len == v.length && len == r.length && len == s.length,
400:             "Array lengths must match"
401:         );
402: 
403:         for (uint256 i; i < len; i++) { // <= FOUND
404:             if (!_verifyVoteSignature(from[i], pieceIds[i], deadline[i], v[i], r[i], s[i])) revert INVALID_SIGNATURE();
405:         }
406: 
407:         for (uint256 i; i < len; i++) { // <= FOUND
408:             _voteForMany(pieceIds[i], from[i]);
409:         }
410:     }

```


*GitHub* : [403](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L403-L407)

```solidity
419:     function _verifyVoteSignature(
420:         address from,
421:         uint256[] calldata pieceIds,
422:         uint256 deadline,
423:         uint8 v,
424:         bytes32 r,
425:         bytes32 s
426:     ) internal returns (bool success) {
427:         require(deadline >= block.timestamp, "Signature expired");
428: 
429:         bytes32 voteHash;
430: 
431:         voteHash = keccak256(abi.encode(VOTE_TYPEHASH, from, pieceIds, nonces[from]++, deadline)); // <= FOUND
432: 
433:         bytes32 digest = _hashTypedDataV4(voteHash);
434: 
435:         address recoveredAddress = ecrecover(digest, v, r, s);
436: 
437:         
438:         if (from == address(0)) revert ADDRESS_ZERO();
439: 
440:         
441:         if (recoveredAddress == address(0) || recoveredAddress != from) revert INVALID_SIGNATURE();
442: 
443:         return true;
444:     }

```


*GitHub* : [431](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L431-L431)

```solidity
152:     function buyToken(
153:         address[] calldata addresses,
154:         uint[] calldata basisPointSplits,
155:         ProtocolRewardAddresses calldata protocolRewardsRecipients
156:     ) public payable nonReentrant whenNotPaused returns (uint256 tokensSoldWad) {
157:         
158:         require(msg.sender != treasury && msg.sender != creatorsAddress, "Funds recipient cannot buy tokens");
159: 
160:         require(msg.value > 0, "Must send ether");
161:         
162:         require(addresses.length == basisPointSplits.length, "Parallel arrays required");
163: 
164:         
165:         uint256 msgValueRemaining = _handleRewardsAndGetValueToSend(
166:             msg.value,
167:             protocolRewardsRecipients.builder,
168:             protocolRewardsRecipients.purchaseReferral,
169:             protocolRewardsRecipients.deployer
170:         );
171: 
172:         
173:         uint256 toPayTreasury = (msgValueRemaining * (10_000 - creatorRateBps)) / 10_000;
174: 
175:         
176:         
177:         uint256 creatorDirectPayment = ((msgValueRemaining - toPayTreasury) * entropyRateBps) / 10_000;
178:         
179:         int totalTokensForCreators = ((msgValueRemaining - toPayTreasury) - creatorDirectPayment) > 0
180:             ? getTokenQuoteForEther((msgValueRemaining - toPayTreasury) - creatorDirectPayment)
181:             : int(0);
182: 
183:         
184:         int totalTokensForBuyers = toPayTreasury > 0 ? getTokenQuoteForEther(toPayTreasury) : int(0);
185: 
186:         
187:         emittedTokenWad += totalTokensForBuyers;
188:         if (totalTokensForCreators > 0) emittedTokenWad += totalTokensForCreators;
189: 
190:         
191:         (bool success, ) = treasury.call{ value: toPayTreasury }(new bytes(0));
192:         require(success, "Transfer failed.");
193: 
194:         
195:         if (creatorDirectPayment > 0) {
196:             (success, ) = creatorsAddress.call{ value: creatorDirectPayment }(new bytes(0));
197:             require(success, "Transfer failed.");
198:         }
199: 
200:         
201:         if (totalTokensForCreators > 0 && creatorsAddress != address(0)) {
202:             _mint(creatorsAddress, uint256(totalTokensForCreators));
203:         }
204: 
205:         uint256 bpsSum = 0;
206: 
207:         
208: 
209:         for (uint256 i = 0; i < addresses.length; i++) { // <= FOUND
210:             if (totalTokensForBuyers > 0) {
211:                 
212:                 _mint(addresses[i], uint256((totalTokensForBuyers * int(basisPointSplits[i])) / 10_000));
213:             }
214:             bpsSum += basisPointSplits[i];
215:         }
216: 
217:         require(bpsSum == 10_000, "bps must add up to 10_000");
218: 
219:         emit PurchaseFinalized(
220:             msg.sender,
221:             msg.value,
222:             toPayTreasury,
223:             msg.value - msgValueRemaining,
224:             uint256(totalTokensForBuyers),
225:             uint256(totalTokensForCreators),
226:             creatorDirectPayment
227:         );
228: 
229:         return uint256(totalTokensForBuyers);
230:     }

```


*GitHub* : [209](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L209-L209)

```solidity
336:     function _settleAuction() internal {
337:         IAuctionHouse.Auction memory _auction = auction;
338: 
339:         require(_auction.startTime != 0, "Auction hasn't begun");
340:         require(!_auction.settled, "Auction has already been settled");
341:         
342:         require(block.timestamp >= _auction.endTime, "Auction hasn't completed");
343: 
344:         auction.settled = true;
345: 
346:         uint256 creatorTokensEmitted = 0;
347:         
348:         if (address(this).balance < reservePrice) {
349:             
350:             if (_auction.bidder != address(0)) {
351:                 _safeTransferETHWithFallback(_auction.bidder, _auction.amount);
352:             }
353: 
354:             
355:             verbs.burn(_auction.verbId);
356:         } else {
357:             
358:             if (_auction.bidder == address(0))
359:                 verbs.burn(_auction.verbId);
360:                 
361:             else verbs.transferFrom(address(this), _auction.bidder, _auction.verbId);
362: 
363:             if (_auction.amount > 0) {
364:                 
365:                 uint256 auctioneerPayment = (_auction.amount * (10_000 - creatorRateBps)) / 10_000;
366: 
367:                 
368:                 uint256 creatorsShare = _auction.amount - auctioneerPayment;
369: 
370:                 uint256 numCreators = verbs.getArtPieceById(_auction.verbId).creators.length;
371:                 address deployer = verbs.getArtPieceById(_auction.verbId).sponsor;
372: 
373:                 
374:                 uint256[] memory vrgdaSplits = new uint256[](numCreators);
375:                 address[] memory vrgdaReceivers = new address[](numCreators);
376: 
377:                 
378:                 _safeTransferETHWithFallback(owner(), auctioneerPayment);
379: 
380:                 uint256 ethPaidToCreators = 0;
381: 
382:                 
383:                 if (creatorsShare > 0 && entropyRateBps > 0) {
384:                     for (uint256 i = 0; i < numCreators; i++) { // <= FOUND
385:                         ICultureIndex.CreatorBps memory creator = verbs.getArtPieceById(_auction.verbId).creators[i];
386:                         vrgdaReceivers[i] = creator.creator;
387:                         vrgdaSplits[i] = creator.bps;
388: 
389:                         
390:                         uint256 paymentAmount = (creatorsShare * entropyRateBps * creator.bps) / (10_000 * 10_000);
391:                         ethPaidToCreators += paymentAmount;
392: 
393:                         
394:                         _safeTransferETHWithFallback(creator.creator, paymentAmount);
395:                     }
396:                 }
397: 
398:                 
399:                 if (creatorsShare > ethPaidToCreators) {
400:                     creatorTokensEmitted = erc20TokenEmitter.buyToken{ value: creatorsShare - ethPaidToCreators }(
401:                         vrgdaReceivers,
402:                         vrgdaSplits,
403:                         IERC20TokenEmitter.ProtocolRewardAddresses({
404:                             builder: address(0),
405:                             purchaseReferral: address(0),
406:                             deployer: deployer
407:                         })
408:                     );
409:                 }
410:             }
411:         }
412: 
413:         emit AuctionSettled(_auction.verbId, _auction.bidder, _auction.amount, creatorTokensEmitted);
414:     }

```


*GitHub* : [384](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L384-L384)

```solidity
281:     function _mintTo(address to) internal returns (uint256) {
282:         ICultureIndex.ArtPiece memory artPiece = cultureIndex.getTopVotedPiece();
283: 
284:         
285:         
286:         require(
287:             artPiece.creators.length <= cultureIndex.MAX_NUM_CREATORS(),
288:             "Creator array must not be > MAX_NUM_CREATORS"
289:         );
290: 
291:         
292:         try cultureIndex.dropTopVotedPiece() returns (ICultureIndex.ArtPiece memory _artPiece) {
293:             artPiece = _artPiece;
294:             uint256 verbId = _currentVerbId++; // <= FOUND
295: 
296:             ICultureIndex.ArtPiece storage newPiece = artPieces[verbId];
297: 
298:             newPiece.pieceId = artPiece.pieceId;
299:             newPiece.metadata = artPiece.metadata;
300:             newPiece.isDropped = artPiece.isDropped;
301:             newPiece.sponsor = artPiece.sponsor;
302:             newPiece.totalERC20Supply = artPiece.totalERC20Supply;
303:             newPiece.quorumVotes = artPiece.quorumVotes;
304:             newPiece.totalVotesSupply = artPiece.totalVotesSupply;
305: 
306:             for (uint i = 0; i < artPiece.creators.length; i++) { // <= FOUND
307:                 newPiece.creators.push(artPiece.creators[i]);
308:             }
309: 
310:             _mint(to, verbId);
311: 
312:             emit VerbCreated(verbId, artPiece);
313: 
314:             return verbId;
315:         } catch {
316:             
317:             revert("dropTopVotedPiece failed");
318:         }
319:     }

```


*GitHub* : [294](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L294-L306)
### [G-24]<a name="g-24"></a> Use byte32 in place of string
For strings of 32 char strings and below you can use bytes32 instead as it's more gas efficient

*There are 3 instance(s) of this issue:*

```solidity
128: 
129:         
130:         __EIP712_init(string.concat(_cultureIndexParams.name, " CultureIndex"), "1"); // <= FOUND

```


*GitHub* : [128](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L128-L130)

```solidity
63: 
65:     string private _contractURIHash = "QmQzDwaZ7yQxHHs7sQQenJVB89riTSacSGcJRv9jtHPuz5"; // <= FOUND

```


*GitHub* : [63](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L63-L65)

```solidity
162:         return string(abi.encodePacked("ipfs: // <= FOUND
163:     }

```


*GitHub* : [162](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L162-L162)
### [G-25]<a name="g-25"></a> Mappings used within a function more than once should be cached to save gas
Cache such mappings and perform operations on them, if operations include modifications to the mapping(s) then remember to equate the mapping to it's cached counterpart at the end

*There are 1 instance(s) of this issue:*

```solidity
307:     function _vote(uint256 pieceId, address voter) internal { // <= FOUND
308:         require(pieceId < _currentPieceId, "Invalid piece ID");
309:         require(voter != address(0), "Invalid voter address");
310:         require(!pieces[pieceId].isDropped, "Piece has already been dropped");
311:         require(!(votes[pieceId][voter].voterAddress != address(0)), "Already voted"); // <= FOUND
312: 
313:         uint256 weight = _getPastVotes(voter, pieces[pieceId].creationBlock);
314:         require(weight > minVoteWeight, "Weight must be greater than minVoteWeight");
315: 
316:         votes[pieceId][voter] = Vote(voter, weight); // <= FOUND
317:         totalVoteWeights[pieceId] += weight; // <= FOUND
318: 
319:         uint256 totalWeight = totalVoteWeights[pieceId]; // <= FOUND
320: 
321:         
322:         maxHeap.updateValue(pieceId, totalWeight);
323:         emit VoteCast(pieceId, voter, weight, totalWeight);
324:     }

```


*GitHub* : [307](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L307-L319)
### [G-26]<a name="g-26"></a> Use assembly to check for the zero address

Using assembly for address comparisons in Solidity can save gas because it allows for more direct access to the Ethereum Virtual Machine (EVM), reducing the overhead of higher-level operations. Solidity's high-level abstraction simplifies coding but can introduce additional gas costs. Using assembly for simple operations like address comparisons can be more gas-efficient.

*There are 15 instance(s) of this issue:*

```solidity
109:     function initialize(
110:         address _erc20VotingToken,
111:         address _erc721VotingToken,
112:         address _initialOwner,
113:         address _maxHeap,
114:         address _dropperAdmin,
115:         IRevolutionBuilder.CultureIndexParams memory _cultureIndexParams
116:     ) external initializer {
117:         require(msg.sender == address(manager), "Only manager can initialize");
118: 
119:         require(_cultureIndexParams.quorumVotesBPS <= MAX_QUORUM_VOTES_BPS, "invalid quorum bps");
120:         require(_cultureIndexParams.erc721VotingTokenWeight > 0, "invalid erc721 voting token weight");
121:         require(_erc721VotingToken != address(0), "invalid erc721 voting token"); // <= FOUND
122:         require(_erc20VotingToken != address(0), "invalid erc20 voting token"); // <= FOUND
123: 
124:         
125:         __Ownable_init(_initialOwner);
126: 
127:         
128:         __EIP712_init(string.concat(_cultureIndexParams.name, " CultureIndex"), "1");
129: 
130:         __ReentrancyGuard_init();
131: 
132:         erc20VotingToken = ERC20VotesUpgradeable(_erc20VotingToken);
133:         erc721VotingToken = ERC721CheckpointableUpgradeable(_erc721VotingToken);
134:         erc721VotingTokenWeight = _cultureIndexParams.erc721VotingTokenWeight;
135:         name = _cultureIndexParams.name;
136:         description = _cultureIndexParams.description;
137:         quorumVotesBPS = _cultureIndexParams.quorumVotesBPS;
138:         minVoteWeight = _cultureIndexParams.minVoteWeight;
139:         dropperAdmin = _dropperAdmin;
140: 
141:         emit QuorumVotesBPSSet(quorumVotesBPS, _cultureIndexParams.quorumVotesBPS);
142: 
143:         
144:         maxHeap = MaxHeap(_maxHeap);
145:     }

```


*GitHub* : [109](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L109-L122)

```solidity
179:     function validateCreatorsArray(CreatorBps[] calldata creatorArray) internal pure returns (uint256) {
180:         uint256 creatorArrayLength = creatorArray.length;
181:         
182:         require(creatorArrayLength <= MAX_NUM_CREATORS, "Creator array must not be > MAX_NUM_CREATORS");
183: 
184:         uint256 totalBps;
185:         for (uint i; i < creatorArrayLength; i++) {
186:             require(creatorArray[i].creator != address(0), "Invalid creator address"); // <= FOUND
187:             totalBps += creatorArray[i].bps;
188:         }
189: 
190:         require(totalBps == 10_000, "Total BPS must sum up to 10,000");
191: 
192:         return creatorArrayLength;
193:     }

```


*GitHub* : [179](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L179-L186)

```solidity
256:     function hasVoted(uint256 pieceId, address voter) external view returns (bool) {
257:         return votes[pieceId][voter].voterAddress != address(0); // <= FOUND
258:     }

```


*GitHub* : [256](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L256-L257)

```solidity
307:     function _vote(uint256 pieceId, address voter) internal {
308:         require(pieceId < _currentPieceId, "Invalid piece ID");
309:         require(voter != address(0), "Invalid voter address"); // <= FOUND
310:         require(!pieces[pieceId].isDropped, "Piece has already been dropped");
311:         require(!(votes[pieceId][voter].voterAddress != address(0)), "Already voted"); // <= FOUND
312: 
313:         uint256 weight = _getPastVotes(voter, pieces[pieceId].creationBlock);
314:         require(weight > minVoteWeight, "Weight must be greater than minVoteWeight");
315: 
316:         votes[pieceId][voter] = Vote(voter, weight);
317:         totalVoteWeights[pieceId] += weight;
318: 
319:         uint256 totalWeight = totalVoteWeights[pieceId];
320: 
321:         
322:         maxHeap.updateValue(pieceId, totalWeight);
323:         emit VoteCast(pieceId, voter, weight, totalWeight);
324:     }

```


*GitHub* : [307](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L307-L311)

```solidity
419:     function _verifyVoteSignature(
420:         address from,
421:         uint256[] calldata pieceIds,
422:         uint256 deadline,
423:         uint8 v,
424:         bytes32 r,
425:         bytes32 s
426:     ) internal returns (bool success) {
427:         require(deadline >= block.timestamp, "Signature expired");
428: 
429:         bytes32 voteHash;
430: 
431:         voteHash = keccak256(abi.encode(VOTE_TYPEHASH, from, pieceIds, nonces[from]++, deadline));
432: 
433:         bytes32 digest = _hashTypedDataV4(voteHash);
434: 
435:         address recoveredAddress = ecrecover(digest, v, r, s);
436: 
437:         
438:         if (from == address(0)) revert ADDRESS_ZERO(); // <= FOUND
439: 
440:         
441:         if (recoveredAddress == address(0) || recoveredAddress != from) revert INVALID_SIGNATURE(); // <= FOUND
442: 
443:         return true;
444:     }

```


*GitHub* : [419](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L419-L441)

```solidity
127:     function _mint(address account, uint256 value) internal override {
128:         if (account == address(0)) { // <= FOUND
129:             revert ERC20InvalidReceiver(address(0));
130:         }
131:         _update(address(0), account, value);
132:     }

```


*GitHub* : [127](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L127-L128)

```solidity
84:     function initialize(
85:         address _initialOwner,
86:         address _erc20Token,
87:         address _treasury,
88:         address _vrgdac,
89:         address _creatorsAddress
90:     ) external initializer {
91:         require(msg.sender == address(manager), "Only manager can initialize");
92: 
93:         __Pausable_init();
94:         __ReentrancyGuard_init();
95: 
96:         require(_treasury != address(0), "Invalid treasury address"); // <= FOUND
97: 
98:         
99:         __Ownable_init(_initialOwner);
100: 
101:         treasury = _treasury;
102:         creatorsAddress = _creatorsAddress;
103:         vrgdac = VRGDAC(_vrgdac);
104:         token = NontransferableERC20Votes(_erc20Token);
105:         startTime = block.timestamp;
106:     }

```


*GitHub* : [84](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L84-L96)

```solidity
152:     function buyToken(
153:         address[] calldata addresses,
154:         uint[] calldata basisPointSplits,
155:         ProtocolRewardAddresses calldata protocolRewardsRecipients
156:     ) public payable nonReentrant whenNotPaused returns (uint256 tokensSoldWad) {
157:         
158:         require(msg.sender != treasury && msg.sender != creatorsAddress, "Funds recipient cannot buy tokens");
159: 
160:         require(msg.value > 0, "Must send ether");
161:         
162:         require(addresses.length == basisPointSplits.length, "Parallel arrays required");
163: 
164:         
165:         uint256 msgValueRemaining = _handleRewardsAndGetValueToSend(
166:             msg.value,
167:             protocolRewardsRecipients.builder,
168:             protocolRewardsRecipients.purchaseReferral,
169:             protocolRewardsRecipients.deployer
170:         );
171: 
172:         
173:         uint256 toPayTreasury = (msgValueRemaining * (10_000 - creatorRateBps)) / 10_000;
174: 
175:         
176:         
177:         uint256 creatorDirectPayment = ((msgValueRemaining - toPayTreasury) * entropyRateBps) / 10_000;
178:         
179:         int totalTokensForCreators = ((msgValueRemaining - toPayTreasury) - creatorDirectPayment) > 0
180:             ? getTokenQuoteForEther((msgValueRemaining - toPayTreasury) - creatorDirectPayment)
181:             : int(0);
182: 
183:         
184:         int totalTokensForBuyers = toPayTreasury > 0 ? getTokenQuoteForEther(toPayTreasury) : int(0);
185: 
186:         
187:         emittedTokenWad += totalTokensForBuyers;
188:         if (totalTokensForCreators > 0) emittedTokenWad += totalTokensForCreators;
189: 
190:         
191:         (bool success, ) = treasury.call{ value: toPayTreasury }(new bytes(0));
192:         require(success, "Transfer failed.");
193: 
194:         
195:         if (creatorDirectPayment > 0) {
196:             (success, ) = creatorsAddress.call{ value: creatorDirectPayment }(new bytes(0));
197:             require(success, "Transfer failed.");
198:         }
199: 
200:         
201:         if (totalTokensForCreators > 0 && creatorsAddress != address(0)) { // <= FOUND

```


*GitHub* : [152](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L152-L201)

```solidity
309:     function setCreatorsAddress(address _creatorsAddress) external override onlyOwner nonReentrant {
310:         require(_creatorsAddress != address(0), "Invalid address"); // <= FOUND
311: 
312:         emit CreatorsAddressUpdated(creatorsAddress = _creatorsAddress);
313:     }

```


*GitHub* : [309](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L309-L310)

```solidity
113:     function initialize(
114:         address _erc721Token,
115:         address _erc20TokenEmitter,
116:         address _initialOwner,
117:         address _weth,
118:         IRevolutionBuilder.AuctionParams calldata _auctionParams
119:     ) external initializer {
120:         require(msg.sender == address(manager), "Only manager can initialize");
121:         require(_weth != address(0), "WETH cannot be zero address"); // <= FOUND
122: 
123:         __Pausable_init();
124:         __ReentrancyGuard_init();
125:         __Ownable_init(_initialOwner);
126: 
127:         _pause();
128: 
129:         require(
130:             _auctionParams.creatorRateBps >= _auctionParams.minCreatorRateBps,
131:             "Creator rate must be greater than or equal to the creator rate"
132:         );
133: 
134:         verbs = IVerbsToken(_erc721Token);
135:         erc20TokenEmitter = IERC20TokenEmitter(_erc20TokenEmitter);
136:         timeBuffer = _auctionParams.timeBuffer;
137:         reservePrice = _auctionParams.reservePrice;
138:         minBidIncrementPercentage = _auctionParams.minBidIncrementPercentage;
139:         duration = _auctionParams.duration;
140:         creatorRateBps = _auctionParams.creatorRateBps;
141:         entropyRateBps = _auctionParams.entropyRateBps;
142:         minCreatorRateBps = _auctionParams.minCreatorRateBps;
143:         WETH = _weth;
144:     }

```


*GitHub* : [113](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L113-L121)

```solidity
171:     function createBid(uint256 verbId, address bidder) external payable override nonReentrant {
172:         IAuctionHouse.Auction memory _auction = auction;
173: 
174:         
175:         require(bidder != address(0), "Bidder cannot be zero address"); // <= FOUND
176:         require(_auction.verbId == verbId, "Verb not up for auction");
177:         
178:         require(block.timestamp < _auction.endTime, "Auction expired");
179:         require(msg.value >= reservePrice, "Must send at least reservePrice");
180:         require(
181:             msg.value >= _auction.amount + ((_auction.amount * minBidIncrementPercentage) / 100),
182:             "Must send more than last bid by minBidIncrementPercentage amount"
183:         );
184: 
185:         address payable lastBidder = _auction.bidder;
186: 
187:         auction.amount = msg.value;
188:         auction.bidder = payable(bidder);
189: 
190:         
191:         bool extended = _auction.endTime - block.timestamp < timeBuffer;
192:         if (extended) auction.endTime = _auction.endTime = block.timestamp + timeBuffer;
193: 
194:         
195:         if (lastBidder != address(0)) _safeTransferETHWithFallback(lastBidder, _auction.amount); // <= FOUND
196: 
197:         emit AuctionBid(_auction.verbId, bidder, msg.sender, msg.value, extended);
198: 
199:         if (extended) emit AuctionExtended(_auction.verbId, _auction.endTime);
200:     }

```


*GitHub* : [171](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L171-L195)

```solidity
336:     function _settleAuction() internal {
337:         IAuctionHouse.Auction memory _auction = auction;
338: 
339:         require(_auction.startTime != 0, "Auction hasn't begun");
340:         require(!_auction.settled, "Auction has already been settled");
341:         
342:         require(block.timestamp >= _auction.endTime, "Auction hasn't completed");
343: 
344:         auction.settled = true;
345: 
346:         uint256 creatorTokensEmitted = 0;
347:         
348:         if (address(this).balance < reservePrice) {
349:             
350:             if (_auction.bidder != address(0)) { // <= FOUND
351:                 _safeTransferETHWithFallback(_auction.bidder, _auction.amount);
352:             }
353: 
354:             
355:             verbs.burn(_auction.verbId);
356:         } else {
357:             
358:             if (_auction.bidder == address(0)) // <= FOUND
359:                 verbs.burn(_auction.verbId);
360:                 
361:             else verbs.transferFrom(address(this), _auction.bidder, _auction.verbId);
362: 
363:             if (_auction.amount > 0) {
364:                 
365:                 uint256 auctioneerPayment = (_auction.amount * (10_000 - creatorRateBps)) / 10_000;
366: 
367:                 
368:                 uint256 creatorsShare = _auction.amount - auctioneerPayment;
369: 
370:                 uint256 numCreators = verbs.getArtPieceById(_auction.verbId).creators.length;
371:                 address deployer = verbs.getArtPieceById(_auction.verbId).sponsor;
372: 
373:                 
374:                 uint256[] memory vrgdaSplits = new uint256[](numCreators);
375:                 address[] memory vrgdaReceivers = new address[](numCreators);
376: 
377:                 
378:                 _safeTransferETHWithFallback(owner(), auctioneerPayment);
379: 
380:                 uint256 ethPaidToCreators = 0;
381: 
382:                 
383:                 if (creatorsShare > 0 && entropyRateBps > 0) {
384:                     for (uint256 i = 0; i < numCreators; i++) {
385:                         ICultureIndex.CreatorBps memory creator = verbs.getArtPieceById(_auction.verbId).creators[i];

```


*GitHub* : [336](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L336-L358)

```solidity
130:     function initialize(
131:         address _minter,
132:         address _initialOwner,
133:         address _descriptor,
134:         address _cultureIndex,
135:         IRevolutionBuilder.ERC721TokenParams memory _erc721TokenParams
136:     ) external initializer {
137:         require(msg.sender == address(manager), "Only manager can initialize");
138: 
139:         require(_minter != address(0), "Minter cannot be zero address"); // <= FOUND
140:         require(_initialOwner != address(0), "Initial owner cannot be zero address"); // <= FOUND
141: 
142:         
143:         __ReentrancyGuard_init();
144: 
145:         
146:         __Ownable_init(_initialOwner);
147: 
148:         
149:         __ERC721_init(_erc721TokenParams.name, _erc721TokenParams.symbol);
150:         _contractURIHash = _erc721TokenParams.contractURIHash;
151: 
152:         
153:         minter = _minter;
154:         descriptor = IDescriptorMinimal(_descriptor);
155:         cultureIndex = ICultureIndex(_cultureIndex);
156:     }

```


*GitHub* : [130](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L130-L140)

```solidity
209:     function setMinter(address _minter) external override onlyOwner nonReentrant whenMinterNotLocked {
210:         require(_minter != address(0), "Minter cannot be zero address"); // <= FOUND
211:         minter = _minter;
212: 
213:         emit MinterUpdated(_minter);
214:     }

```


*GitHub* : [209](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L209-L210)

```solidity
65:     function _depositPurchaseRewards(
66:         uint256 paymentAmountWei,
67:         address builderReferral,
68:         address purchaseReferral,
69:         address deployer
70:     ) internal returns (uint256) {
71:         (RewardsSettings memory settings, uint256 totalReward) = computePurchaseRewards(paymentAmountWei);
72: 
73:         if (builderReferral == address(0)) builderReferral = revolutionRewardRecipient; // <= FOUND
74: 
75:         if (deployer == address(0)) deployer = revolutionRewardRecipient; // <= FOUND
76: 
77:         if (purchaseReferral == address(0)) purchaseReferral = revolutionRewardRecipient; // <= FOUND
78: 
79:         protocolRewards.depositRewards{ value: totalReward }(
80:             builderReferral,
81:             settings.builderReferralReward,
82:             purchaseReferral,
83:             settings.purchaseReferralReward,
84:             deployer,
85:             settings.deployerReward,
86:             revolutionRewardRecipient,
87:             settings.revolutionReward
88:         );
89: 
90:         return totalReward;
91:     }

```


*GitHub* : [65](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L65-L77)
### [G-27]<a name="g-27"></a> Divisions which do not divide by -X cannot overflow or overflow so such operations can be unchecked to save gas
Make such found divisions are unchecked when ensured it is safe to do so

*There are 8 instance(s) of this issue:*

```solidity
209:     function createPiece(
210:         ArtPieceMetadata calldata metadata,
211:         CreatorBps[] calldata creatorArray
212:     ) public returns (uint256) {
213:         uint256 creatorArrayLength = validateCreatorsArray(creatorArray);
214: 
215:         
216:         validateMediaType(metadata);
217: 
218:         uint256 pieceId = _currentPieceId++;
219: 
220:         
221:         maxHeap.insert(pieceId, 0);
222: 
223:         ArtPiece storage newPiece = pieces[pieceId];
224: 
225:         newPiece.pieceId = pieceId;
226:         newPiece.totalVotesSupply = _calculateVoteWeight(
227:             erc20VotingToken.totalSupply(),
228:             erc721VotingToken.totalSupply()
229:         );
230:         newPiece.totalERC20Supply = erc20VotingToken.totalSupply();
231:         newPiece.metadata = metadata;
232:         newPiece.sponsor = msg.sender;
233:         newPiece.creationBlock = block.number;
234:         newPiece.quorumVotes = (quorumVotesBPS * newPiece.totalVotesSupply) / 10_000; // <= FOUND
235: 
236:         for (uint i; i < creatorArrayLength; i++) {
237:             newPiece.creators.push(creatorArray[i]);
238:         }
239: 
240:         emit PieceCreated(pieceId, msg.sender, metadata, newPiece.quorumVotes, newPiece.totalVotesSupply);
241: 
242:         
243:         for (uint i; i < creatorArrayLength; i++) {
244:             emit PieceCreatorAdded(pieceId, creatorArray[i].creator, msg.sender, creatorArray[i].bps);
245:         }
246: 
247:         return newPiece.pieceId;
248:     }

```


*GitHub* : [234](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L234-L234)

```solidity
152:     function buyToken(
153:         address[] calldata addresses,
154:         uint[] calldata basisPointSplits,
155:         ProtocolRewardAddresses calldata protocolRewardsRecipients
156:     ) public payable nonReentrant whenNotPaused returns (uint256 tokensSoldWad) {
157:         
158:         require(msg.sender != treasury && msg.sender != creatorsAddress, "Funds recipient cannot buy tokens");
159: 
160:         require(msg.value > 0, "Must send ether");
161:         
162:         require(addresses.length == basisPointSplits.length, "Parallel arrays required");
163: 
164:         
165:         uint256 msgValueRemaining = _handleRewardsAndGetValueToSend(
166:             msg.value,
167:             protocolRewardsRecipients.builder,
168:             protocolRewardsRecipients.purchaseReferral,
169:             protocolRewardsRecipients.deployer
170:         );
171: 
172:         
173:         uint256 toPayTreasury = (msgValueRemaining * (10_000 - creatorRateBps)) / 10_000; // <= FOUND
174: 
175:         
176:         
177:         uint256 creatorDirectPayment = ((msgValueRemaining - toPayTreasury) * entropyRateBps) / 10_000; // <= FOUND
178:         
179:         int totalTokensForCreators = ((msgValueRemaining - toPayTreasury) - creatorDirectPayment) > 0
180:             ? getTokenQuoteForEther((msgValueRemaining - toPayTreasury) - creatorDirectPayment)
181:             : int(0);
182: 
183:         
184:         int totalTokensForBuyers = toPayTreasury > 0 ? getTokenQuoteForEther(toPayTreasury) : int(0);
185: 
186:         
187:         emittedTokenWad += totalTokensForBuyers;
188:         if (totalTokensForCreators > 0) emittedTokenWad += totalTokensForCreators;
189: 
190:         
191:         (bool success, ) = treasury.call{ value: toPayTreasury }(new bytes(0));
192:         require(success, "Transfer failed.");
193: 
194:         
195:         if (creatorDirectPayment > 0) {
196:             (success, ) = creatorsAddress.call{ value: creatorDirectPayment }(new bytes(0));
197:             require(success, "Transfer failed.");
198:         }
199: 
200:         
201:         if (totalTokensForCreators > 0 && creatorsAddress != address(0)) {
202:             _mint(creatorsAddress, uint256(totalTokensForCreators));
203:         }
204: 
205:         uint256 bpsSum = 0;
206: 
207:         
208: 
209:         for (uint256 i = 0; i < addresses.length; i++) {
210:             if (totalTokensForBuyers > 0) {
211:                 
212:                 _mint(addresses[i], uint256((totalTokensForBuyers * int(basisPointSplits[i])) / 10_000)); // <= FOUND
213:             }
214:             bpsSum += basisPointSplits[i];
215:         }
216: 
217:         require(bpsSum == 10_000, "bps must add up to 10_000");
218: 
219:         emit PurchaseFinalized(
220:             msg.sender,
221:             msg.value,
222:             toPayTreasury,
223:             msg.value - msgValueRemaining,
224:             uint256(totalTokensForBuyers),
225:             uint256(totalTokensForCreators),
226:             creatorDirectPayment
227:         );
228: 
229:         return uint256(totalTokensForBuyers);
230:     }

```


*GitHub* : [173](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L173-L212)

```solidity
271:     function getTokenQuoteForPayment(uint256 paymentAmount) external view returns (int gainedX) {
272:         require(paymentAmount > 0, "Payment amount must be greater than 0");
273:         
274:         
275:         return
276:             vrgdac.yToX({
277:                 timeSinceStart: toDaysWadUnsafe(block.timestamp - startTime),
278:                 sold: emittedTokenWad,
279:                 amount: int(((paymentAmount - computeTotalReward(paymentAmount)) * (10_000 - creatorRateBps)) / 10_000) // <= FOUND
280:             });
281:     }

```


*GitHub* : [279](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L279-L279)

```solidity
171:     function createBid(uint256 verbId, address bidder) external payable override nonReentrant {
172:         IAuctionHouse.Auction memory _auction = auction;
173: 
174:         
175:         require(bidder != address(0), "Bidder cannot be zero address");
176:         require(_auction.verbId == verbId, "Verb not up for auction");
177:         
178:         require(block.timestamp < _auction.endTime, "Auction expired");
179:         require(msg.value >= reservePrice, "Must send at least reservePrice");
180:         require(
181:             msg.value >= _auction.amount + ((_auction.amount * minBidIncrementPercentage) / 100), // <= FOUND
182:             "Must send more than last bid by minBidIncrementPercentage amount"
183:         );
184: 
185:         address payable lastBidder = _auction.bidder;
186: 
187:         auction.amount = msg.value;
188:         auction.bidder = payable(bidder);
189: 
190:         
191:         bool extended = _auction.endTime - block.timestamp < timeBuffer;
192:         if (extended) auction.endTime = _auction.endTime = block.timestamp + timeBuffer;
193: 
194:         
195:         if (lastBidder != address(0)) _safeTransferETHWithFallback(lastBidder, _auction.amount);
196: 
197:         emit AuctionBid(_auction.verbId, bidder, msg.sender, msg.value, extended);
198: 
199:         if (extended) emit AuctionExtended(_auction.verbId, _auction.endTime);
200:     }

```


*GitHub* : [181](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L181-L181)

```solidity
336:     function _settleAuction() internal {
337:         IAuctionHouse.Auction memory _auction = auction;
338: 
339:         require(_auction.startTime != 0, "Auction hasn't begun");
340:         require(!_auction.settled, "Auction has already been settled");
341:         
342:         require(block.timestamp >= _auction.endTime, "Auction hasn't completed");
343: 
344:         auction.settled = true;
345: 
346:         uint256 creatorTokensEmitted = 0;
347:         
348:         if (address(this).balance < reservePrice) {
349:             
350:             if (_auction.bidder != address(0)) {
351:                 _safeTransferETHWithFallback(_auction.bidder, _auction.amount);
352:             }
353: 
354:             
355:             verbs.burn(_auction.verbId);
356:         } else {
357:             
358:             if (_auction.bidder == address(0))
359:                 verbs.burn(_auction.verbId);
360:                 
361:             else verbs.transferFrom(address(this), _auction.bidder, _auction.verbId);
362: 
363:             if (_auction.amount > 0) {
364:                 
365:                 uint256 auctioneerPayment = (_auction.amount * (10_000 - creatorRateBps)) / 10_000; // <= FOUND
366: 
367:                 
368:                 uint256 creatorsShare = _auction.amount - auctioneerPayment;
369: 
370:                 uint256 numCreators = verbs.getArtPieceById(_auction.verbId).creators.length;
371:                 address deployer = verbs.getArtPieceById(_auction.verbId).sponsor;
372: 
373:                 
374:                 uint256[] memory vrgdaSplits = new uint256[](numCreators);
375:                 address[] memory vrgdaReceivers = new address[](numCreators);
376: 
377:                 
378:                 _safeTransferETHWithFallback(owner(), auctioneerPayment);
379: 
380:                 uint256 ethPaidToCreators = 0;
381: 
382:                 
383:                 if (creatorsShare > 0 && entropyRateBps > 0) {
384:                     for (uint256 i = 0; i < numCreators; i++) {
385:                         ICultureIndex.CreatorBps memory creator = verbs.getArtPieceById(_auction.verbId).creators[i];
386:                         vrgdaReceivers[i] = creator.creator;
387:                         vrgdaSplits[i] = creator.bps;
388: 
389:                         
390:                         uint256 paymentAmount = (creatorsShare * entropyRateBps * creator.bps) / (10_000 * 10_000);
391:                         ethPaidToCreators += paymentAmount;
392: 
393:                         
394:                         _safeTransferETHWithFallback(creator.creator, paymentAmount);
395:                     }
396:                 }
397: 
398:                 
399:                 if (creatorsShare > ethPaidToCreators) {
400:                     creatorTokensEmitted = erc20TokenEmitter.buyToken{ value: creatorsShare - ethPaidToCreators }(
401:                         vrgdaReceivers,
402:                         vrgdaSplits,
403:                         IERC20TokenEmitter.ProtocolRewardAddresses({
404:                             builder: address(0),
405:                             purchaseReferral: address(0),
406:                             deployer: deployer
407:                         })
408:                     );
409:                 }
410:             }
411:         }
412: 
413:         emit AuctionSettled(_auction.verbId, _auction.bidder, _auction.amount, creatorTokensEmitted);
414:     }

```


*GitHub* : [365](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L365-L365)

```solidity
53:     function computePurchaseRewards(uint256 paymentAmountWei) public pure returns (RewardsSettings memory, uint256) {
54:         return (
55:             RewardsSettings({
56:                 builderReferralReward: (paymentAmountWei * BUILDER_REWARD_BPS) / 10_000, // <= FOUND
57:                 purchaseReferralReward: (paymentAmountWei * PURCHASE_REFERRAL_BPS) / 10_000, // <= FOUND
58:                 deployerReward: (paymentAmountWei * DEPLOYER_REWARD_BPS) / 10_000, // <= FOUND
59:                 revolutionReward: (paymentAmountWei * REVOLUTION_REWARD_BPS) / 10_000 // <= FOUND
60:             }),
61:             computeTotalReward(paymentAmountWei)
62:         );
63:     }

```


*GitHub* : [56](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L56-L59)

```solidity
78:     function parent(uint256 pos) private pure returns (uint256) {
79:         require(pos != 0, "Position should not be zero");
80:         return (pos - 1) / 2; // <= FOUND
81:     }

```


*GitHub* : [80](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L80-L80)

```solidity
94:     function maxHeapify(uint256 pos) internal {
95:         uint256 left = 2 * pos + 1;
96:         uint256 right = 2 * pos + 2;
97: 
98:         uint256 posValue = valueMapping[heap[pos]];
99:         uint256 leftValue = valueMapping[heap[left]];
100:         uint256 rightValue = valueMapping[heap[right]];
101: 
102:         if (pos >= (size / 2) && pos <= size) return; // <= FOUND
103: 
104:         if (posValue < leftValue || posValue < rightValue) {
105:             if (leftValue > rightValue) {
106:                 swap(pos, left);
107:                 maxHeapify(left);
108:             } else {
109:                 swap(pos, right);
110:                 maxHeapify(right);
111:             }
112:         }
113:     }

```


*GitHub* : [102](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L102-L102)
### [G-28]<a name="g-28"></a> Can transfer 0
In Solidity, performing unnecessary operations can consume more gas than needed, leading to cost inefficiencies. For instance, if a `transfer` function doesn't have a zero amount check and someone calls it with a zero amount, unnecessary gas will be consumed in executing the function, even though the state of the contract remains the same. By implementing a zero amount check, such unnecessary function calls can be avoided, thereby saving gas and making the contract more efficient.

*There are 1 instance(s) of this issue:*

```solidity
419:     function _safeTransferETHWithFallback(address _to, uint256 _amount) private {
420:         
421:         if (address(this).balance < _amount) revert("Insufficient balance");
422: 
423:         
424:         bool success;
425: 
426:         assembly {
427:             
428:             
429:             success := call(50000, _to, _amount, 0, 0, 0, 0)
430:         }
431: 
432:         
433:         if (!success) {
434:             
435:             IWETH(WETH).deposit{ value: _amount }();
436: 
437:             
438:             bool wethSuccess = IWETH(WETH).transfer(_to, _amount); // <= FOUND
439: 
440:             
441:             if (!wethSuccess) revert("WETH transfer failed");
442:         }
443:     }

```


*GitHub* : [419](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L419-L438)
### [G-29]<a name="g-29"></a> Redundant state variable getters
Getters for public state variables are automatically generated so there is no need to code them manually and lose gas

*There are 1 instance(s) of this issue:*

```solidity
478:     function pieceCount() external view returns (uint256) {
479:         return _currentPieceId; // <= FOUND
480:     }

```


*GitHub* : [479](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L479-L479)
### [G-30]<a name="g-30"></a> Divisions of powers of 2 can be replaced by a right shift operation to save gas
Replace such found divisions with right shift operations when ensured it is safe to do so. NOTE: This only applies to uint variables!

*There are 2 instance(s) of this issue:*

```solidity
78:     function parent(uint256 pos) private pure returns (uint256) {
79:         require(pos != 0, "Position should not be zero");
80:         return (pos - 1) / 2; // <= FOUND
81:     }

```


*GitHub* : [80](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L80-L80)

```solidity
94:     function maxHeapify(uint256 pos) internal {
95:         uint256 left = 2 * pos + 1;
96:         uint256 right = 2 * pos + 2;
97: 
98:         uint256 posValue = valueMapping[heap[pos]];
99:         uint256 leftValue = valueMapping[heap[left]];
100:         uint256 rightValue = valueMapping[heap[right]];
101: 
102:         if (pos >= (size / 2) && pos <= size) return; // <= FOUND
103: 
104:         if (posValue < leftValue || posValue < rightValue) {
105:             if (leftValue > rightValue) {
106:                 swap(pos, left);
107:                 maxHeapify(left);
108:             } else {
109:                 swap(pos, right);
110:                 maxHeapify(right);
111:             }
112:         }
113:     }

```


*GitHub* : [102](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L102-L102)
### [G-31]<a name="g-31"></a> Struct variables can be packed into fewer storage slots
In Solidity, each storage slot has a size of 32 bytes. If a struct contains multiple uint values, it's efficient to pack these into as few storage slots as possible to optimize gas usage. The EVM (Ethereum Virtual Machine) charges gas for each storage operation, so minimizing the number of slots used can result in substantial gas savings. This can be achieved by ordering struct fields according to their size or by using smaller data types where possible. However, developers must balance these optimizations with the need for code clarity and the precision requirements of their application. Always ensure that data packing does not compromise the functionality or security of the contract.

*There are 1 instance(s) of this issue:*

```solidity
6: struct RewardsSettings {
7:     uint256 builderReferralReward; // <= FOUND
8:     uint256 purchaseReferralReward; // <= FOUND
9:     uint256 deployerReward; // <= FOUND
10:     uint256 revolutionReward; // <= FOUND
11: }

```


*GitHub* : [6](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L6-L10)
### [G-32]<a name="g-32"></a> Consider activating via-ir for deploying
The Solidity compiler's Intermediate Representation (IR) based code generator, which can be activated using --via-ir on the command line or {"viaIR": true} in the options, serves a dual purpose. Firstly, it boosts the transparency and audibility of code generation, which enhances developers' comprehension and control over the contract's final bytecode. Secondly, it enables more sophisticated optimization passes that span multiple functions, thereby potentially leading to more efficient bytecode.

It's important to note that using the IR-based code generator may lengthen compile times due to the extra optimization steps. Therefore, it's advised to test your contract with and without this option enabled to measure the performance and gas cost implications. If the IR-based code generator significantly enhances your contract's performance or reduces gas costs, consider using the --via-ir flag during deployment. This way, you can leverage more advanced compiler optimizations without hindering your development workflow.

*There are 1 instance(s) of this issue:*

```solidity
13: all

```


*GitHub* : [13](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L13-L13)
### [G-33]<a name="g-33"></a> Expression `` is cheaper than new bytes(0)
In Solidity, using an empty string (`""`) instead of `new bytes(0)` in expressions can result in cheaper gas costs. This is because `new bytes(0)` creates a dynamic byte array, leading to additional overhead. By simply using `""` when an empty bytes array is needed, you can optimize for gas efficiency.

*There are 2 instance(s) of this issue:*

```solidity
191: 
192:         
193:         (bool success, ) = treasury.call{ value: toPayTreasury }(new bytes(0)); // <= FOUND

```


*GitHub* : [193](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L193-L193)

```solidity
196:             (success, ) = creatorsAddress.call{ value: creatorDirectPayment }(new bytes(0)); // <= FOUND

```


*GitHub* : [196](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L196-L196)
### [G-34]<a name="g-34"></a> Add unchecked {} for subtractions where the operands cannot underflow
n Solidity 0.8.x and above, arithmetic operations like subtraction automatically check for underflows and overflows, and revert the transaction if such a condition is met. This built-in safety feature provides a layer of security against potential numerical errors. However, these automatic checks also come with additional gas costs.

In some situations, you may already have a guard condition, like a require() statement or an if statement, that ensures the safety of the arithmetic operation. In such cases, the automatic check becomes redundant and leads to unnecessary gas expenditure.

For example, you may have a function that subtracts a smaller number from a larger one, and you may have already verified that the smaller number is indeed smaller. In this case, you're already sure that the subtraction operation won't underflow, so there's no need for the automatic check.

In these situations, you can use the unchecked { } block around the subtraction operation to skip the automatic check. This will reduce gas costs and make your contract more efficient, without sacrificing security. However, it's critical to use unchecked { } only when you're absolutely sure that the operation is safe.

*There are 2 instance(s) of this issue:*

```solidity
191: 
192:         
193:         bool extended = _auction.endTime - block.timestamp < timeBuffer; // <= FOUND

```


*GitHub* : [191](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L191-L193)

```solidity
368: 
369:                 
370:                 uint256 creatorsShare = _auction.amount - auctioneerPayment; // <= FOUND

```


*GitHub* : [368](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L368-L370)
### [G-35]<a name="g-35"></a> Use bitmap to save gas
Bitmaps in Solidity are essentially a way of representing a set of boolean values within an integer type variable such as `uint256`. Each bit in the integer represents a true or false value (1 or 0), thus allowing efficient storage of multiple boolean values.

Bitmaps can save gas in the Ethereum network because they condense a lot of information into a small amount of storage. In Ethereum, storage is one of the most significant costs in terms of gas usage. By reducing the amount of storage space needed, you can potentially save on gas fees.

Here's a quick comparison:

If you were to represent 256 different boolean values in the traditional way, you would have to declare 256 different `bool` variables. Given that each `bool` occupies a storage slot and each storage slot costs 20,000 gas to initialize, you would end up paying a considerable amount of gas.

On the other hand, if you were to use a bitmap, you could store these 256 boolean values within a single `uint256` variable. In other words, you'd only pay for a single storage slot, resulting in significant gas savings.

However, it's important to note that while bitmaps can provide gas efficiencies, they do add complexity to the code, making it harder to read and maintain. Also, using bitmaps is efficient only when dealing with a large number of boolean variables that are frequently changed or accessed together. 

In contrast, the straightforward counterpart to bitmaps would be using arrays or mappings to store boolean values, with each `bool` value occupying its own storage slot. This approach is simpler and more readable but could potentially be more expensive in terms of gas usage.

*There are 5 instance(s) of this issue:*

```solidity
526: 
527:         
528:         pieces[piece.pieceId].isDropped = true; // <= FOUND

```


*GitHub* : [528](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L528-L528)

```solidity
344: 
345:         auction.settled = true; // <= FOUND

```


*GitHub* : [345](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L345-L345)

```solidity
221:         isMinterLocked = true; // <= FOUND

```


*GitHub* : [221](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L221-L221)

```solidity
243:         isDescriptorLocked = true; // <= FOUND

```


*GitHub* : [243](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L243-L243)

```solidity
263:         isCultureIndexLocked = true; // <= FOUND

```


*GitHub* : [263](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L263-L263)
### [G-36]<a name="g-36"></a> Use assembly hashing
From a gas standpoint, the assembly version of the keccak256 hashing function can be more efficient than the high-level Solidity version. This is because Solidity has additional overhead when handling function calls and memory management, which can increase the gas cost.

*There are 1 instance(s) of this issue:*

```solidity
431: 
432:         voteHash = keccak256(abi.encode(VOTE_TYPEHASH, from, pieceIds, nonces[from]++, deadline)); // <= FOUND

```


*GitHub* : [431](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L431-L432)
### [G-37]<a name="g-37"></a> Consider using OZ EnumerateSet in place of nested mappings
Nested mappings and multi-dimensional arrays in Solidity operate through a process of double hashing, wherein the original storage slot and the first key are concatenated and hashed, and then this hash is again concatenated with the second key and hashed. This process can be quite gas expensive due to the double-hashing operation and subsequent storage operation (sstore).

A possible optimization involves manually concatenating the keys followed by a single hash operation and an sstore. However, this technique introduces the risk of storage collision, especially when there are other nested hash maps in the contract that use the same key types. Because Solidity is unaware of the number and structure of nested hash maps in a contract, it follows a conservative approach in computing the storage slot to avoid possible collisions.

OpenZeppelin's EnumerableSet provides a potential solution to this problem. It creates a data structure that combines the benefits of set operations with the ability to enumerate stored elements, which is not natively available in Solidity. EnumerableSet handles the element uniqueness internally and can therefore provide a more gas-efficient and collision-resistant alternative to nested mappings or multi-dimensional arrays in certain scenarios.

*There are 1 instance(s) of this issue:*

```solidity
69:     mapping(uint256 => mapping(address => Vote)) public votes; // <= FOUND

```


*GitHub* : [69](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L69-L69)
### [G-38]<a name="g-38"></a> Use selfBalance() in place of address(this).balance
In Solidity, using `selfBalance` instead of `address(this).balance` is advantageous for gas optimization. `address(this).balance` performs an external call to retrieve the contract's balance, which costs extra gas. As a resolution, defining a `selfBalance` state variable that's updated accordingly provides a more gas-efficient approach. Using selfBalance instead of address(this).balance can save around 800 gas per call. This is because address(this).balance makes an EXTBAL operation, which costs 700 gas, and additionally, the operation is a SLOAD, which costs around 800 gas. Please note that these estimates are based on the Ethereum gas schedule and might vary depending on the Ethereum network state and its future upgrades.

*There are 2 instance(s) of this issue:*

```solidity
348:         
349:         if (address(this).balance < reservePrice) { // <= FOUND

```


*GitHub* : [349](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L349-L349)

```solidity
421:         
422:         if (address(this).balance < _amount) revert("Insufficient balance"); // <= FOUND

```


*GitHub* : [422](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L422-L422)
### [G-39]<a name="g-39"></a> Use assembly to emit events
With the use of inline assembly in Solidity, we can take advantage of low-level features like scratch space and the free memory pointer, offering more gas-efficient ways of emitting events. The scratch space is a certain area of memory where we can temporarily store data, and the free memory pointer indicates the next available memory slot. Using these, we can efficiently assemble event data without incurring additional memory expansion costs. However, safety is paramount: to avoid overwriting or leakage, we must cache the free memory pointer before use and restore it afterward, ensuring that it points to the correct memory location post-operation.

*There are 28 instance(s) of this issue:*

```solidity
141: 
142:         emit QuorumVotesBPSSet(quorumVotesBPS, _cultureIndexParams.quorumVotesBPS); // <= FOUND

```


*GitHub* : [142](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L142-L142)

```solidity
240: 
241:         emit PieceCreated(pieceId, msg.sender, metadata, newPiece.quorumVotes, newPiece.totalVotesSupply); // <= FOUND

```


*GitHub* : [241](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L241-L241)

```solidity
244:             emit PieceCreatorAdded(pieceId, creatorArray[i].creator, msg.sender, creatorArray[i].bps); // <= FOUND

```


*GitHub* : [244](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L244-L244)

```solidity
323:         emit VoteCast(pieceId, voter, weight, totalWeight); // <= FOUND

```


*GitHub* : [323](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L323-L323)

```solidity
500:         emit QuorumVotesBPSSet(quorumVotesBPS, newQuorumVotesBPS); // <= FOUND

```


*GitHub* : [500](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L500-L500)

```solidity
531: 
532:         emit PieceDropped(piece.pieceId, msg.sender); // <= FOUND

```


*GitHub* : [532](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L532-L532)

```solidity
219: 
220:         emit PurchaseFinalized( // <= FOUND
221:             msg.sender,
222:             msg.value,
223:             toPayTreasury,
224:             msg.value - msgValueRemaining,
225:             uint256(totalTokensForBuyers),
226:             uint256(totalTokensForCreators),
227:             creatorDirectPayment
228:         );

```


*GitHub* : [220](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L220-L220)

```solidity
291: 
292:         emit EntropyRateBpsUpdated(entropyRateBps = _entropyRateBps); // <= FOUND

```


*GitHub* : [292](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L292-L292)

```solidity
302: 
303:         emit CreatorRateBpsUpdated(creatorRateBps = _creatorRateBps); // <= FOUND

```


*GitHub* : [303](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L303-L303)

```solidity
312: 
313:         emit CreatorsAddressUpdated(creatorsAddress = _creatorsAddress); // <= FOUND

```


*GitHub* : [313](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L313-L313)

```solidity
197: 
198:         emit AuctionBid(_auction.verbId, bidder, msg.sender, msg.value, extended); // <= FOUND

```


*GitHub* : [198](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L198-L198)

```solidity
199: 
200:         if (extended) emit AuctionExtended(_auction.verbId, _auction.endTime); // <= FOUND

```


*GitHub* : [200](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L200-L200)

```solidity
225: 
226:         emit CreatorRateBpsUpdated(_creatorRateBps); // <= FOUND

```


*GitHub* : [226](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L226-L226)

```solidity
245: 
246:         emit MinCreatorRateBpsUpdated(_minCreatorRateBps); // <= FOUND

```


*GitHub* : [246](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L246-L246)

```solidity
257:         emit EntropyRateBpsUpdated(_entropyRateBps); // <= FOUND

```


*GitHub* : [257](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L257-L257)

```solidity
280: 
281:         emit AuctionTimeBufferUpdated(_timeBuffer); // <= FOUND

```


*GitHub* : [281](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L281-L281)

```solidity
290: 
291:         emit AuctionReservePriceUpdated(_reservePrice); // <= FOUND

```


*GitHub* : [291](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L291-L291)

```solidity
300: 
301:         emit AuctionMinBidIncrementPercentageUpdated(_minBidIncrementPercentage); // <= FOUND

```


*GitHub* : [301](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L301-L301)

```solidity
326: 
327:             emit AuctionCreated(verbId, startTime, endTime); // <= FOUND

```


*GitHub* : [327](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L327-L327)

```solidity
413: 
414:         emit AuctionSettled(_auction.verbId, _auction.bidder, _auction.amount, creatorTokensEmitted); // <= FOUND

```


*GitHub* : [414](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L414-L414)

```solidity
186:         emit VerbBurned(verbId); // <= FOUND

```


*GitHub* : [186](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L186-L186)

```solidity
213: 
214:         emit MinterUpdated(_minter); // <= FOUND

```


*GitHub* : [214](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L214-L214)

```solidity
223: 
224:         emit MinterLocked(); // <= FOUND

```


*GitHub* : [224](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L224-L224)

```solidity
235: 
236:         emit DescriptorUpdated(_descriptor); // <= FOUND

```


*GitHub* : [236](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L236-L236)

```solidity
245: 
246:         emit DescriptorLocked(); // <= FOUND

```


*GitHub* : [246](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L246-L246)

```solidity
255: 
256:         emit CultureIndexUpdated(_cultureIndex); // <= FOUND

```


*GitHub* : [256](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L256-L256)

```solidity
265: 
266:         emit CultureIndexLocked(); // <= FOUND

```


*GitHub* : [266](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L266-L266)

```solidity
312: 
313:             emit VerbCreated(verbId, artPiece); // <= FOUND

```


*GitHub* : [313](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L313-L313)
### [G-40]<a name="g-40"></a> Use solady library where possible to save gas
The following OpenZeppelin imports have a Solady equivalent, as such they can be used to save GAS as Solady modules have been specifically designed to be as GAS efficient as possible

*There are 2 instance(s) of this issue:*

```solidity
20: import { Ownable2StepUpgradeable } from "@openzeppelin/contracts-upgradeable/access/Ownable2StepUpgradeable.sol"; // <= FOUND

```


*GitHub* : [20](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L20-L20)

```solidity
22: import { IERC721 } from "@openzeppelin/contracts/token/ERC721/IERC721.sol"; // <= FOUND

```


*GitHub* : [22](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L22-L22)
### [G-41]<a name="g-41"></a> Use unchecked for operations on immutable variables
The `unchecked { }` block in Solidity provides a way to execute arithmetic operations without the usual automatic overflow/underflow checks, thus saving gas. When using it with immutable variables during assignment in the constructor, it's safe and efficient because these variables' values are defined at contract deployment and remain constant thereafter. You are certain of these values at compile-time, and hence the risk of unexpected overflow or underflow is eliminated. However, this optimization should be used with caution, ensuring it doesn't compromise code clarity and security.

*There are 1 instance(s) of this issue:*

```solidity
28:     constructor(int256 _targetPrice, int256 _priceDecayPercent, int256 _perTimeUnit) { // <= FOUND
29:         targetPrice = _targetPrice;
30: 
31:         perTimeUnit = _perTimeUnit;
32: 
33:         priceDecayPercent = _priceDecayPercent;
34: 
35:         decayConstant = wadLn(1e18 - _priceDecayPercent);
36: 
37:         
38:         require(decayConstant < 0, "NON_NEGATIVE_DECAY_CONSTANT");
39:     }

```


*GitHub* : [28](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L28-L28)
### [G-42]<a name="g-42"></a> Counting down in for statements is more gas efficient
Looping downwards in Solidity is more gas efficient due to how the EVM compares variables. In a 'for' loop that counts down, the end condition is usually to compare with zero, which is cheaper than comparing with another number. As such, restructure your loops to count downwards where possible.

*There are 4 instance(s) of this issue:*

```solidity
185:        for (uint i; i < creatorArrayLength; i++) { // <= FOUND
186:             require(creatorArray[i].creator != address(0), "Invalid creator address");
187:             totalBps += creatorArray[i].bps;
188:         }

```


*GitHub* : [185](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L185-L185)

```solidity
236:        for (uint i; i < creatorArrayLength; i++) { // <= FOUND
237:             newPiece.creators.push(creatorArray[i]);
238:         }

```


*GitHub* : [236](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L236-L236)

```solidity
355:        for (uint256 i; i < len; i++) { // <= FOUND
356:             _vote(pieceIds[i], from);
357:         }

```


*GitHub* : [355](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L355-L355)

```solidity
403:        for (uint256 i; i < len; i++) { // <= FOUND
404:             if (!_verifyVoteSignature(from[i], pieceIds[i], deadline[i], v[i], r[i], s[i])) revert INVALID_SIGNATURE();
405:         }

```


*GitHub* : [403](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L403-L403)
### [G-43]<a name="g-43"></a> Using private rather than public for constants and immutables, saves gas
Using private visibility for constants and immutables in Solidity instead of public can save gas. This is because private elements are not included in the contract's ABI, reducing the deployment and interaction costs. To achieve better efficiency, it is recommended to use private visibility when external access is not needed.

*There are 6 instance(s) of this issue:*

```solidity
29: bytes32 public constant VOTE_TYPEHASH = // <= FOUND

```


*GitHub* : [29](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L29-L29)

```solidity
48: uint256 public constant MAX_QUORUM_VOTES_BPS = 6_000;  // <= FOUND

```


*GitHub* : [48](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L48-L48)

```solidity
75: uint256 public constant MAX_NUM_CREATORS = 100; // <= FOUND

```


*GitHub* : [75](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L75-L75)

```solidity
88: uint32 public constant MIN_TOKEN_MINT_GAS_THRESHOLD = 750_000; // <= FOUND

```


*GitHub* : [88](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L88-L88)

```solidity
23: uint256 public constant minPurchaseAmount = 0.0000001 ether; // <= FOUND

```


*GitHub* : [23](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L23-L23)

```solidity
24: uint256 public constant maxPurchaseAmount = 50_000 ether; // <= FOUND

```


*GitHub* : [24](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L24-L24)
### [G-44]<a name="g-44"></a> Mark Functions That Revert For Normal Users As payable
In Solidity, marking functions as `payable` allows them to accept Ether. If a function is known to revert for regular users (non-admin or specific roles) but needs to be accessible to others, marking it as `payable` can be beneficial. This ensures that even if a regular user accidentally sends Ether to the function, the Ether won't be trapped, as the function reverts, returning the funds. This can save gas by avoiding unnecessary failure handling in the function itself. Resolution: Carefully assess the roles and access patterns, and mark functions that should revert for regular users as `payable` to handle accidental Ether transfers.

*There are 24 instance(s) of this issue:*

```solidity
498:     function _setQuorumVotesBPS(uint256 newQuorumVotesBPS) external onlyOwner {
499:         require(newQuorumVotesBPS <= MAX_QUORUM_VOTES_BPS, "CultureIndex::_setQuorumVotesBPS: invalid quorum bps");
500:         emit QuorumVotesBPSSet(quorumVotesBPS, newQuorumVotesBPS);
501: 
502:         quorumVotesBPS = newQuorumVotesBPS;
503:     }

```


*GitHub* : [498](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L498-L498)

```solidity
134:     function mint(address account, uint256 amount) public onlyOwner {
135:         _mint(account, amount);
136:     }

```


*GitHub* : [134](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L134-L134)

```solidity
208:     function pause() external override onlyOwner {
209:         _pause();
210:     }

```


*GitHub* : [208](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L208-L208)

```solidity
265:     function unpause() external override onlyOwner {
266:         _unpause();
267:     }

```


*GitHub* : [265](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L265-L265)

```solidity
288:     function setEntropyRateBps(uint256 _entropyRateBps) external onlyOwner {
289:         require(_entropyRateBps <= 10_000, "Entropy rate must be less than or equal to 10_000");
290: 
291:         emit EntropyRateBpsUpdated(entropyRateBps = _entropyRateBps);
292:     }

```


*GitHub* : [288](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L288-L288)

```solidity
299:     function setCreatorRateBps(uint256 _creatorRateBps) external onlyOwner {
300:         require(_creatorRateBps <= 10_000, "Creator rate must be less than or equal to 10_000");
301: 
302:         emit CreatorRateBpsUpdated(creatorRateBps = _creatorRateBps);
303:     }

```


*GitHub* : [299](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L299-L299)

```solidity
309:     function setCreatorsAddress(address _creatorsAddress) external override onlyOwner nonReentrant {
310:         require(_creatorsAddress != address(0), "Invalid address");
311: 
312:         emit CreatorsAddressUpdated(creatorsAddress = _creatorsAddress);
313:     }

```


*GitHub* : [309](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L309-L309)

```solidity
217:     function setCreatorRateBps(uint256 _creatorRateBps) external onlyOwner {
218:         require(
219:             _creatorRateBps >= minCreatorRateBps,
220:             "Creator rate must be greater than or equal to minCreatorRateBps"
221:         );
222:         require(_creatorRateBps <= 10_000, "Creator rate must be less than or equal to 10_000");
223:         creatorRateBps = _creatorRateBps;
224: 
225:         emit CreatorRateBpsUpdated(_creatorRateBps);
226:     }

```


*GitHub* : [217](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L217-L217)

```solidity
233:     function setMinCreatorRateBps(uint256 _minCreatorRateBps) external onlyOwner {
234:         require(_minCreatorRateBps <= creatorRateBps, "Min creator rate must be less than or equal to creator rate");
235:         require(_minCreatorRateBps <= 10_000, "Min creator rate must be less than or equal to 10_000");
236: 
237:         
238:         require(
239:             _minCreatorRateBps > minCreatorRateBps,
240:             "Min creator rate must be greater than previous minCreatorRateBps"
241:         );
242: 
243:         minCreatorRateBps = _minCreatorRateBps;
244: 
245:         emit MinCreatorRateBpsUpdated(_minCreatorRateBps);
246:     }

```


*GitHub* : [233](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L233-L233)

```solidity
253:     function setEntropyRateBps(uint256 _entropyRateBps) external onlyOwner {
254:         require(_entropyRateBps <= 10_000, "Entropy rate must be less than or equal to 10_000");
255: 
256:         entropyRateBps = _entropyRateBps;
257:         emit EntropyRateBpsUpdated(_entropyRateBps);
258:     }

```


*GitHub* : [253](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L253-L253)

```solidity
265:     function unpause() external override onlyOwner {
266:         _unpause();
267: 
268:         if (auction.startTime == 0 || auction.settled) {
269:             _createAuction();
270:         }
271:     }

```


*GitHub* : [265](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L265-L265)

```solidity
277:     function setTimeBuffer(uint256 _timeBuffer) external override onlyOwner {
278:         timeBuffer = _timeBuffer;
279: 
280:         emit AuctionTimeBufferUpdated(_timeBuffer);
281:     }

```


*GitHub* : [277](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L277-L277)

```solidity
287:     function setReservePrice(uint256 _reservePrice) external override onlyOwner {
288:         reservePrice = _reservePrice;
289: 
290:         emit AuctionReservePriceUpdated(_reservePrice);
291:     }

```


*GitHub* : [287](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L287-L287)

```solidity
297:     function setMinBidIncrementPercentage(uint8 _minBidIncrementPercentage) external override onlyOwner {
298:         minBidIncrementPercentage = _minBidIncrementPercentage;
299: 
300:         emit AuctionMinBidIncrementPercentageUpdated(_minBidIncrementPercentage);
301:     }

```


*GitHub* : [297](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L297-L297)

```solidity
169:     function setContractURIHash(string memory newContractURIHash) external onlyOwner {
170:         _contractURIHash = newContractURIHash;
171:     }

```


*GitHub* : [169](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L169-L169)

```solidity
209:     function setMinter(address _minter) external override onlyOwner nonReentrant whenMinterNotLocked {
210:         require(_minter != address(0), "Minter cannot be zero address");
211:         minter = _minter;
212: 
213:         emit MinterUpdated(_minter);
214:     }

```


*GitHub* : [209](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L209-L209)

```solidity
220:     function lockMinter() external override onlyOwner whenMinterNotLocked {
221:         isMinterLocked = true;
222: 
223:         emit MinterLocked();
224:     }

```


*GitHub* : [220](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L220-L220)

```solidity
230:     function setDescriptor(
231:         IDescriptorMinimal _descriptor
232:     ) external override onlyOwner nonReentrant whenDescriptorNotLocked {
233:         descriptor = _descriptor;
234: 
235:         emit DescriptorUpdated(_descriptor);
236:     }

```


*GitHub* : [230](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L230-L230)

```solidity
242:     function lockDescriptor() external override onlyOwner whenDescriptorNotLocked {
243:         isDescriptorLocked = true;
244: 
245:         emit DescriptorLocked();
246:     }

```


*GitHub* : [242](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L242-L242)

```solidity
252:     function setCultureIndex(ICultureIndex _cultureIndex) external onlyOwner whenCultureIndexNotLocked nonReentrant {
253:         cultureIndex = _cultureIndex;
254: 
255:         emit CultureIndexUpdated(_cultureIndex);
256:     }

```


*GitHub* : [252](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L252-L252)

```solidity
262:     function lockCultureIndex() external override onlyOwner whenCultureIndexNotLocked {
263:         isCultureIndexLocked = true;
264: 
265:         emit CultureIndexLocked();
266:     }

```


*GitHub* : [262](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L262-L262)

```solidity
119:     function insert(uint256 itemId, uint256 value) public onlyAdmin {
120:         heap[size] = itemId;
121:         valueMapping[itemId] = value; 
122:         positionMapping[itemId] = size; 
123: 
124:         uint256 current = size;
125:         while (current != 0 && valueMapping[heap[current]] > valueMapping[heap[parent(current)]]) {
126:             swap(current, parent(current));
127:             current = parent(current);
128:         }
129:         size++;
130:     }

```


*GitHub* : [119](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L119-L119)

```solidity
136:     function updateValue(uint256 itemId, uint256 newValue) public onlyAdmin {
137:         uint256 position = positionMapping[itemId];
138:         uint256 oldValue = valueMapping[itemId];
139: 
140:         
141:         valueMapping[itemId] = newValue;
142: 
143:         
144:         if (newValue > oldValue) {
145:             
146:             while (position != 0 && valueMapping[heap[position]] > valueMapping[heap[parent(position)]]) {
147:                 swap(position, parent(position));
148:                 position = parent(position);
149:             }
150:         } else if (newValue < oldValue) maxHeapify(position); 
151:     }

```


*GitHub* : [136](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L136-L136)

```solidity
156:     function extractMax() external onlyAdmin returns (uint256, uint256) {
157:         require(size > 0, "Heap is empty");
158: 
159:         uint256 popped = heap[0];
160:         heap[0] = heap[--size];
161:         maxHeapify(0);
162: 
163:         return (popped, valueMapping[popped]);
164:     }

```


*GitHub* : [156](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L156-L156)
### [G-45]<a name="g-45"></a> Function names can be optimized
Function names in Solidity contracts can be optimized to save gas during both deployment and execution. Method IDs are the first four bytes of the keccak256 hash of the function signature, and having two leading zero bytes can save 128 gas each during deployment. Additionally, renaming functions to have lower method IDs can save 22 gas per call, per sorted position shifted. This optimization leverages the way EVM handles data storage, making the execution more efficient. While these savings might seem minor, they can add up in contracts with numerous calls, contributing to more economical and efficient code.

*There are 7 instance(s) of this issue:*

```solidity
14: contract MaxHeap is VersionedContract, UUPS, Ownable2StepUpgradeable, ReentrancyGuardUpgradeable  // <= FOUND

```


*GitHub* : [14](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L14-L14)

```solidity
20: contract CultureIndex is // <= FOUND
21:     ICultureIndex, // <= FOUND
22:     VersionedContract, // <= FOUND
23:     UUPS, // <= FOUND
24:     Ownable2StepUpgradeable, // <= FOUND
25:     ReentrancyGuardUpgradeable, // <= FOUND
26:     EIP712Upgradeable // <= FOUND
27:  // <= FOUND

```


*GitHub* : [20](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L20-L27)

```solidity
29: contract NontransferableERC20Votes is Initializable, ERC20VotesUpgradeable, Ownable2StepUpgradeable  // <= FOUND

```


*GitHub* : [29](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L29-L29)

```solidity
17: contract ERC20TokenEmitter is // <= FOUND
18:     IERC20TokenEmitter, // <= FOUND
19:     ReentrancyGuardUpgradeable, // <= FOUND
20:     TokenEmitterRewards, // <= FOUND
21:     Ownable2StepUpgradeable, // <= FOUND
22:     PausableUpgradeable // <= FOUND
23:  // <= FOUND

```


*GitHub* : [17](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L17-L23)

```solidity
39: contract AuctionHouse is // <= FOUND
40:     IAuctionHouse, // <= FOUND
41:     VersionedContract, // <= FOUND
42:     UUPS, // <= FOUND
43:     PausableUpgradeable, // <= FOUND
44:     ReentrancyGuardUpgradeable, // <= FOUND
45:     Ownable2StepUpgradeable // <= FOUND
46:  // <= FOUND

```


*GitHub* : [39](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L39-L46)

```solidity
33: contract VerbsToken is // <= FOUND
34:     IVerbsToken, // <= FOUND
35:     VersionedContract, // <= FOUND
36:     UUPS, // <= FOUND
37:     Ownable2StepUpgradeable, // <= FOUND
38:     ReentrancyGuardUpgradeable, // <= FOUND
39:     ERC721CheckpointableUpgradeable // <= FOUND
40:  // <= FOUND

```


*GitHub* : [33](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L33-L40)

```solidity
11: contract VRGDAC  // <= FOUND

```


*GitHub* : [11](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L11-L11)
### [G-46]<a name="g-46"></a> Consider migrating require statements to custom errors
Using custom errors instead of 'require' statements in Solidity can lead to gas savings and improve developer experience. Custom errors provide explicit error messages, aiding in troubleshooting. Moreover, custom errors are cheaper as they don't require a string literal, thus saving gas. Hence, developers should replace 'require' statements with custom errors wherever possible for efficiency and readability.

*There are 65 instance(s) of this issue:*

```solidity
42:         require(msg.sender == admin, "Sender is not the admin"); // <= FOUND

```


*GitHub* : [42](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L42-L42)

```solidity
69:         require(msg.sender == address(manager), "Only manager can initialize"); // <= FOUND

```


*GitHub* : [69](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L69-L69)

```solidity
79:         require(pos != 0, "Position should not be zero"); // <= FOUND

```


*GitHub* : [79](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L79-L79)

```solidity
157:         require(size > 0, "Heap is empty"); // <= FOUND

```


*GitHub* : [157](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L157-L157)

```solidity
119: 
120:         require(_cultureIndexParams.quorumVotesBPS <= MAX_QUORUM_VOTES_BPS, "invalid quorum bps"); // <= FOUND

```


*GitHub* : [119](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L119-L120)

```solidity
120:         require(_cultureIndexParams.erc721VotingTokenWeight > 0, "invalid erc721 voting token weight"); // <= FOUND

```


*GitHub* : [120](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L120-L120)

```solidity
121:         require(_erc721VotingToken != address(0), "invalid erc721 voting token"); // <= FOUND

```


*GitHub* : [121](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L121-L121)

```solidity
122:         require(_erc20VotingToken != address(0), "invalid erc20 voting token"); // <= FOUND

```


*GitHub* : [122](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L122-L122)

```solidity
160:         require(uint8(metadata.mediaType) > 0 && uint8(metadata.mediaType) <= 5, "Invalid media type"); // <= FOUND

```


*GitHub* : [160](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L160-L160)

```solidity
162: 
163:         if (metadata.mediaType == MediaType.IMAGE)
164:             require(bytes(metadata.image).length > 0, "Image URL must be provided"); // <= FOUND

```


*GitHub* : [162](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L162-L164)

```solidity
164:         else if (metadata.mediaType == MediaType.ANIMATION)
165:             require(bytes(metadata.animationUrl).length > 0, "Animation URL must be provided"); // <= FOUND

```


*GitHub* : [164](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L164-L165)

```solidity
166:         else if (metadata.mediaType == MediaType.TEXT)
167:             require(bytes(metadata.text).length > 0, "Text must be provided"); // <= FOUND

```


*GitHub* : [166](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L166-L167)

```solidity
182:         
183:         require(creatorArrayLength <= MAX_NUM_CREATORS, "Creator array must not be > MAX_NUM_CREATORS"); // <= FOUND

```


*GitHub* : [182](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L182-L183)

```solidity
186:             require(creatorArray[i].creator != address(0), "Invalid creator address"); // <= FOUND

```


*GitHub* : [186](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L186-L186)

```solidity
190: 
191:         require(totalBps == 10_000, "Total BPS must sum up to 10,000"); // <= FOUND

```


*GitHub* : [190](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L190-L191)

```solidity
308:         require(pieceId < _currentPieceId, "Invalid piece ID"); // <= FOUND

```


*GitHub* : [308](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L308-L308)

```solidity
309:         require(voter != address(0), "Invalid voter address"); // <= FOUND

```


*GitHub* : [309](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L309-L309)

```solidity
310:         require(!pieces[pieceId].isDropped, "Piece has already been dropped"); // <= FOUND

```


*GitHub* : [310](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L310-L310)

```solidity
311:         require(!(votes[pieceId][voter].voterAddress != address(0)), "Already voted"); // <= FOUND

```


*GitHub* : [311](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L311-L311)

```solidity
314:         require(weight > minVoteWeight, "Weight must be greater than minVoteWeight"); // <= FOUND

```


*GitHub* : [314](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L314-L314)

```solidity
398:         require( // <= FOUND
399:             len == pieceIds.length && len == deadline.length && len == v.length && len == r.length && len == s.length,
400:             "Array lengths must match"
401:         ); // <= FOUND

```


*GitHub* : [398](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L398-L401)

```solidity
427:         require(deadline >= block.timestamp, "Signature expired"); // <= FOUND

```


*GitHub* : [427](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L427-L427)

```solidity
487:         require(maxHeap.size() > 0, "Culture index is empty"); // <= FOUND

```


*GitHub* : [487](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L487-L487)

```solidity
499:         require(newQuorumVotesBPS <= MAX_QUORUM_VOTES_BPS, "CultureIndex::_setQuorumVotesBPS: invalid quorum bps"); // <= FOUND

```


*GitHub* : [499](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L499-L499)

```solidity
520:         require(msg.sender == dropperAdmin, "Only dropper can drop pieces"); // <= FOUND

```


*GitHub* : [520](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L520-L520)

```solidity
523:         require(totalVoteWeights[piece.pieceId] >= piece.quorumVotes, "Does not meet quorum votes to be dropped."); // <= FOUND

```


*GitHub* : [523](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L523-L523)

```solidity
96: 
97:         require(_treasury != address(0), "Invalid treasury address"); // <= FOUND

```


*GitHub* : [96](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L96-L97)

```solidity
158:         
159:         require(msg.sender != treasury && msg.sender != creatorsAddress, "Funds recipient cannot buy tokens"); // <= FOUND

```


*GitHub* : [158](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L158-L159)

```solidity
160: 
161:         require(msg.value > 0, "Must send ether"); // <= FOUND

```


*GitHub* : [160](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L160-L161)

```solidity
162:         
163:         require(addresses.length == basisPointSplits.length, "Parallel arrays required"); // <= FOUND

```


*GitHub* : [162](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L162-L163)

```solidity
192:         require(success, "Transfer failed."); // <= FOUND

```


*GitHub* : [192](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L192-L192)

```solidity
197:             require(success, "Transfer failed."); // <= FOUND

```


*GitHub* : [197](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L197-L197)

```solidity
217: 
218:         require(bpsSum == 10_000, "bps must add up to 10_000"); // <= FOUND

```


*GitHub* : [217](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L217-L218)

```solidity
238:         require(amount > 0, "Amount must be greater than 0"); // <= FOUND

```


*GitHub* : [238](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L238-L238)

```solidity
255:         require(etherAmount > 0, "Ether amount must be greater than 0"); // <= FOUND

```


*GitHub* : [255](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L255-L255)

```solidity
272:         require(paymentAmount > 0, "Payment amount must be greater than 0"); // <= FOUND

```


*GitHub* : [272](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L272-L272)

```solidity
254:         require(_entropyRateBps <= 10_000, "Entropy rate must be less than or equal to 10_000"); // <= FOUND

```


*GitHub* : [254](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L254-L254)

```solidity
222:         require(_creatorRateBps <= 10_000, "Creator rate must be less than or equal to 10_000"); // <= FOUND

```


*GitHub* : [222](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L222-L222)

```solidity
310:         require(_creatorsAddress != address(0), "Invalid address"); // <= FOUND

```


*GitHub* : [310](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L310-L310)

```solidity
121:         require(_weth != address(0), "WETH cannot be zero address"); // <= FOUND

```


*GitHub* : [121](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L121-L121)

```solidity
129: 
130:         require( // <= FOUND
131:             _auctionParams.creatorRateBps >= _auctionParams.minCreatorRateBps,
132:             "Creator rate must be greater than or equal to the creator rate"
133:         ); // <= FOUND

```


*GitHub* : [129](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L129-L133)

```solidity
175: 
176:         
177:         require(bidder != address(0), "Bidder cannot be zero address"); // <= FOUND

```


*GitHub* : [175](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L175-L177)

```solidity
176:         require(_auction.verbId == verbId, "Verb not up for auction"); // <= FOUND

```


*GitHub* : [176](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L176-L176)

```solidity
178:         
179:         require(block.timestamp < _auction.endTime, "Auction expired"); // <= FOUND

```


*GitHub* : [178](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L178-L179)

```solidity
179:         require(msg.value >= reservePrice, "Must send at least reservePrice"); // <= FOUND

```


*GitHub* : [179](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L179-L179)

```solidity
180:         require( // <= FOUND
181:             msg.value >= _auction.amount + ((_auction.amount * minBidIncrementPercentage) / 100),
182:             "Must send more than last bid by minBidIncrementPercentage amount"
183:         ); // <= FOUND

```


*GitHub* : [180](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L180-L183)

```solidity
218:         require( // <= FOUND
219:             _creatorRateBps >= minCreatorRateBps,
220:             "Creator rate must be greater than or equal to minCreatorRateBps"
221:         ); // <= FOUND

```


*GitHub* : [218](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L218-L221)

```solidity
234:         require(_minCreatorRateBps <= creatorRateBps, "Min creator rate must be less than or equal to creator rate"); // <= FOUND

```


*GitHub* : [234](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L234-L234)

```solidity
235:         require(_minCreatorRateBps <= 10_000, "Min creator rate must be less than or equal to 10_000"); // <= FOUND

```


*GitHub* : [235](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L235-L235)

```solidity
238: 
239:         
240:         require( // <= FOUND
241:             _minCreatorRateBps > minCreatorRateBps,
242:             "Min creator rate must be greater than previous minCreatorRateBps"
243:         ); // <= FOUND

```


*GitHub* : [238](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L238-L243)

```solidity
311:         
312:         require(gasleft() >= MIN_TOKEN_MINT_GAS_THRESHOLD, "Insufficient gas for creating auction"); // <= FOUND

```


*GitHub* : [311](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L311-L312)

```solidity
339: 
340:         require(_auction.startTime != 0, "Auction hasn't begun"); // <= FOUND

```


*GitHub* : [339](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L339-L340)

```solidity
340:         require(!_auction.settled, "Auction has already been settled"); // <= FOUND

```


*GitHub* : [340](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L340-L340)

```solidity
342:         
343:         require(block.timestamp >= _auction.endTime, "Auction hasn't completed"); // <= FOUND

```


*GitHub* : [342](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L342-L343)

```solidity
76:         require(!isMinterLocked, "Minter is locked"); // <= FOUND

```


*GitHub* : [76](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L76-L76)

```solidity
84:         require(!isCultureIndexLocked, "CultureIndex is locked"); // <= FOUND

```


*GitHub* : [84](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L84-L84)

```solidity
92:         require(!isDescriptorLocked, "Descriptor is locked"); // <= FOUND

```


*GitHub* : [92](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L92-L92)

```solidity
100:         require(msg.sender == minter, "Sender is not the minter"); // <= FOUND

```


*GitHub* : [100](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L100-L100)

```solidity
139: 
140:         require(_minter != address(0), "Minter cannot be zero address"); // <= FOUND

```


*GitHub* : [139](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L139-L140)

```solidity
140:         require(_initialOwner != address(0), "Initial owner cannot be zero address"); // <= FOUND

```


*GitHub* : [140](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L140-L140)

```solidity
139:         require(_minter != address(0), "Minter cannot be zero address"); // <= FOUND

```


*GitHub* : [139](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L139-L139)

```solidity
274:         require(verbId <= _currentVerbId, "Invalid piece ID"); // <= FOUND

```


*GitHub* : [274](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L274-L274)

```solidity
286: 
287:         
288:         
289:         require( // <= FOUND
290:             artPiece.creators.length <= cultureIndex.MAX_NUM_CREATORS(),
291:             "Creator array must not be > MAX_NUM_CREATORS"
292:         ); // <= FOUND

```


*GitHub* : [286](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L286-L292)

```solidity
330:         
331:         require(manager.isRegisteredUpgrade(_getImplementation(), _newImpl), "Invalid upgrade"); // <= FOUND

```


*GitHub* : [330](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L330-L331)

```solidity
38: 
39:         
40:         require(decayConstant < 0, "NON_NEGATIVE_DECAY_CONSTANT"); // <= FOUND

```


*GitHub* : [38](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L38-L40)
### [G-47]<a name="g-47"></a> Multiline comments should be terminated with '*/' and not '**/'
https://docs.soliditylang.org/en/latest/natspec-format.html#:~:text=For%20Solidity%20you%20may%20choose%20///%20for%20single%20or%20multi%2Dline%20comments%2C%20or%20/**%20and%20ending%20with%20*/.

*There are 1 instance(s) of this issue:*

```solidity
5: /********************************* // <= FOUND
6:  * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ *
7:  * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ *
8:  * ░░░░░░█████████░░█████████░░░ *
9:  * ░░░░░░██░░░████░░██░░░████░░░ *
10:  * ░░██████░░░████████░░░████░░░ *
11:  * ░░██░░██░░░████░░██░░░████░░░ *
12:  * ░░██░░██░░░████░░██░░░████░░░ *
13:  * ░░░░░░█████████░░█████████░░░ *
14:  * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ *
15:  * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ *
16:  *********************************/ // <= FOUND

```


*GitHub* : [5](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L5-L16)
### [G-48]<a name="g-48"></a> Use assembly to validate msg.sender
Utilizing assembly for validating `msg.sender` can potentially save gas as it allows for more direct and efficient access to Ethereum’s EVM opcodes, bypassing some of the overhead introduced by Solidity’s higher-level abstractions. However, this practice requires deep expertise in EVM, as incorrect implementation can introduce critical vulnerabilities. It is a trade-off between gas efficiency and code safety.

*There are 5 instance(s) of this issue:*

```solidity
42:         require(msg.sender == admin, "Sender is not the admin"); // <= FOUND

```


*GitHub* : [42](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L42-L42)

```solidity
69:         require(msg.sender == address(manager), "Only manager can initialize"); // <= FOUND

```


*GitHub* : [69](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L69-L69)

```solidity
520:         require(msg.sender == dropperAdmin, "Only dropper can drop pieces"); // <= FOUND

```


*GitHub* : [520](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L520-L520)

```solidity
158:         
159:         require(msg.sender != treasury && msg.sender != creatorsAddress, "Funds recipient cannot buy tokens"); // <= FOUND

```


*GitHub* : [158](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L158-L159)

```solidity
100:         require(msg.sender == minter, "Sender is not the minter"); // <= FOUND

```


*GitHub* : [100](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L100-L100)
### [G-49]<a name="g-49"></a> Simple checks for zero uint can be done using assembly to save gas
Using assembly for simple zero checks on unsigned integers can save gas due to lower-level, optimized operations. 

**Resolution**: Implement inline assembly with Solidity's `assembly` block to perform zero checks. Ensure thorough testing and verification, as assembly lacks the safety checks of high-level Solidity, potentially introducing vulnerabilities if not used carefully.

*There are 16 instance(s) of this issue:*

```solidity
79:         require(pos != 0, "Position should not be zero"); // <= FOUND

```


*GitHub* : [79](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L79-L79)

```solidity
339: 
340:         require(_auction.startTime != 0, "Auction hasn't begun"); // <= FOUND

```


*GitHub* : [339](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L339-L340)

```solidity
157:         require(size > 0, "Heap is empty"); // <= FOUND

```


*GitHub* : [157](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L157-L157)

```solidity
120:         require(_cultureIndexParams.erc721VotingTokenWeight > 0, "invalid erc721 voting token weight"); // <= FOUND

```


*GitHub* : [120](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L120-L120)

```solidity
162: 
163:         if (metadata.mediaType == MediaType.IMAGE)
164:             require(bytes(metadata.image).length > 0, "Image URL must be provided"); // <= FOUND

```


*GitHub* : [162](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L162-L164)

```solidity
164:         else if (metadata.mediaType == MediaType.ANIMATION)
165:             require(bytes(metadata.animationUrl).length > 0, "Animation URL must be provided"); // <= FOUND

```


*GitHub* : [164](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L164-L165)

```solidity
166:         else if (metadata.mediaType == MediaType.TEXT)
167:             require(bytes(metadata.text).length > 0, "Text must be provided"); // <= FOUND

```


*GitHub* : [166](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L166-L167)

```solidity
487:         require(maxHeap.size() > 0, "Culture index is empty"); // <= FOUND

```


*GitHub* : [487](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L487-L487)

```solidity
160: 
161:         require(msg.value > 0, "Must send ether"); // <= FOUND

```


*GitHub* : [160](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L160-L161)

```solidity
179:         
180:         int totalTokensForCreators = ((msgValueRemaining - toPayTreasury) - creatorDirectPayment) > 0 // <= FOUND
181:             ? getTokenQuoteForEther((msgValueRemaining - toPayTreasury) - creatorDirectPayment)
182:             : int(0);

```


*GitHub* : [179](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L179-L180)

```solidity
184: 
185:         
186:         int totalTokensForBuyers = toPayTreasury > 0 ? getTokenQuoteForEther(toPayTreasury) : int(0); // <= FOUND

```


*GitHub* : [184](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L184-L186)

```solidity
188:         if (totalTokensForCreators > 0) emittedTokenWad += totalTokensForCreators; // <= FOUND

```


*GitHub* : [188](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L188-L188)

```solidity
238:         require(amount > 0, "Amount must be greater than 0"); // <= FOUND

```


*GitHub* : [238](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L238-L238)

```solidity
255:         require(etherAmount > 0, "Ether amount must be greater than 0"); // <= FOUND

```


*GitHub* : [255](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L255-L255)

```solidity
272:         require(paymentAmount > 0, "Payment amount must be greater than 0"); // <= FOUND

```


*GitHub* : [272](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L272-L272)

```solidity
38: 
39:         
40:         require(decayConstant < 0, "NON_NEGATIVE_DECAY_CONSTANT"); // <= FOUND

```


*GitHub* : [38](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L38-L40)
### [G-50]<a name="g-50"></a> Trade-offs Between Modifiers and Internal Functions
In Solidity, both modifiers and internal functions can be used to modularize and reuse code, but they have different trade-offs.

Modifiers are primarily used to augment the behavior of functions, often for checks or validations. They can access parameters of the function they modify and are integrated into the function’s code at compile time. This makes them syntactically cleaner for repetitive precondition checks. However, modifiers can sometimes lead to less readable code, especially when the logic is complex or when multiple modifiers are used on a single function.

Internal functions, on the other hand, offer more flexibility. They can contain complex logic, return values, and be called from other functions. This makes them more suitable for reusable chunks of business logic. Since internal functions are separate entities, they can be more readable and easier to test in isolation compared to modifiers.

Using internal functions can result in slightly more gas consumption, as it involves an internal function call. However, this cost is usually minimal and can be a worthwhile trade-off for increased code clarity and maintainability.

In summary, while modifiers offer a concise way to include checks and simple logic across multiple functions, internal functions provide more flexibility and are better suited for complex and reusable code. The choice between the two should be based on the specific use case, considering factors like code complexity, readability, and gas efficiency.

*There are 28 instance(s) of this issue:*

```solidity
94:     function maxHeapify(uint256 pos) internal  // <= FOUND

```


*GitHub* : [94](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L94-L94)

```solidity
452:     function _authorizeUpgrade(address _newImpl) internal view override onlyOwner  // <= FOUND

```


*GitHub* : [452](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L452-L452)

```solidity
159:     function validateMediaType(ArtPieceMetadata calldata metadata) internal pure  // <= FOUND

```


*GitHub* : [159](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L159-L159)

```solidity
179:     function validateCreatorsArray(CreatorBps[] calldata creatorArray) internal pure returns (uint256)  // <= FOUND

```


*GitHub* : [179](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L179-L179)

```solidity
284:     function _calculateVoteWeight(uint256 erc20Balance, uint256 erc721Balance) internal view returns (uint256)  // <= FOUND

```


*GitHub* : [284](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L284-L284)

```solidity
288:     function _getVotes(address account) internal view returns (uint256)  // <= FOUND

```


*GitHub* : [288](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L288-L288)

```solidity
292:     function _getPastVotes(address account, uint256 blockNumber) internal view returns (uint256)  // <= FOUND

```


*GitHub* : [292](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L292-L292)

```solidity
307:     function _vote(uint256 pieceId, address voter) internal  // <= FOUND

```


*GitHub* : [307](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L307-L307)

```solidity
353:     function _voteForMany(uint256[] calldata pieceIds, address from) internal  // <= FOUND

```


*GitHub* : [353](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L353-L353)

```solidity
419:     function _verifyVoteSignature( // <= FOUND
420:         address from, // <= FOUND
421:         uint256[] calldata pieceIds, // <= FOUND
422:         uint256 deadline, // <= FOUND
423:         uint8 v, // <= FOUND
424:         bytes32 r, // <= FOUND
425:         bytes32 s // <= FOUND
426:     ) internal returns (bool success)  // <= FOUND

```


*GitHub* : [419](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L419-L426)

```solidity
52:     function __NontransferableERC20Votes_init( // <= FOUND
53:         address _initialOwner, // <= FOUND
54:         string calldata _name, // <= FOUND
55:         string calldata _symbol // <= FOUND
56:     ) internal onlyInitializing  // <= FOUND

```


*GitHub* : [52](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L52-L56)

```solidity
101:     function _transfer(address from, address to, uint256 value) internal override  // <= FOUND

```


*GitHub* : [101](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L101-L101)

```solidity
127:     function _mint(address account, uint256 value) internal override  // <= FOUND

```


*GitHub* : [127](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L127-L127)

```solidity
141:     function _approve(address owner, address spender, uint256 value) internal override  // <= FOUND

```


*GitHub* : [141](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L141-L141)

```solidity
148:     function _approve(address owner, address spender, uint256 value, bool emitEvent) internal virtual override  // <= FOUND

```


*GitHub* : [148](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L148-L148)

```solidity
155:     function _spendAllowance(address owner, address spender, uint256 value) internal virtual override  // <= FOUND

```


*GitHub* : [155](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L155-L155)

```solidity
309:     function _createAuction() internal  // <= FOUND

```


*GitHub* : [309](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L309-L309)

```solidity
336:     function _settleAuction() internal  // <= FOUND

```


*GitHub* : [336](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L336-L336)

```solidity
452:     function _authorizeUpgrade(address _newImpl) internal view override onlyOwner whenPaused  // <= FOUND

```


*GitHub* : [452](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L452-L452)

```solidity
281:     function _mintTo(address to) internal returns (uint256)  // <= FOUND

```


*GitHub* : [281](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L281-L281)

```solidity
86:     function pIntegral(int256 timeSinceStart, int256 sold) internal view returns (int256)  // <= FOUND

```


*GitHub* : [86](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L86-L86)

```solidity
12:     function _handleRewardsAndGetValueToSend( // <= FOUND
13:         uint256 msgValue, // <= FOUND
14:         address builderReferral, // <= FOUND
15:         address purchaseReferral, // <= FOUND
16:         address deployer // <= FOUND
17:     ) internal returns (uint256)  // <= FOUND

```


*GitHub* : [12](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/TokenEmitter/TokenEmitterRewards.sol#L12-L17)

```solidity
65:     function _depositPurchaseRewards( // <= FOUND
66:         uint256 paymentAmountWei, // <= FOUND
67:         address builderReferral, // <= FOUND
68:         address purchaseReferral, // <= FOUND
69:         address deployer // <= FOUND
70:     ) internal returns (uint256)  // <= FOUND

```


*GitHub* : [65](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L65-L70)

```solidity
41:     modifier onlyAdmin()  // <= FOUND

```


*GitHub* : [41](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L41-L41)

```solidity
75:     modifier whenMinterNotLocked()  // <= FOUND

```


*GitHub* : [75](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L75-L75)

```solidity
83:     modifier whenCultureIndexNotLocked()  // <= FOUND

```


*GitHub* : [83](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L83-L83)

```solidity
91:     modifier whenDescriptorNotLocked()  // <= FOUND

```


*GitHub* : [91](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L91-L91)

```solidity
99:     modifier onlyMinter()  // <= FOUND

```


*GitHub* : [99](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L99-L99)
### [G-51]<a name="g-51"></a> Using nested if to save gas
Using nested `if` statements instead of logical AND (`&&`) operators can potentially save gas in Solidity contracts. When a series of conditions are connected with `&&`, all conditions must be evaluated even if the first one fails. In contrast, nested `if` statements allow for short-circuiting; if the first condition fails, the rest are skipped, saving gas. This approach is more gas-efficient, especially when dealing with complex or gas-intensive conditions. However, it's crucial to balance gas savings with code readability and maintainability, ensuring that the code remains clear and easy to understand.

*There are 1 instance(s) of this issue:*

```solidity
201:         if (totalTokensForCreators > 0 && creatorsAddress != address(0)) { // <= FOUND
202:             _mint(creatorsAddress, uint256(totalTokensForCreators));
203:         }

```


*GitHub* : [201](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L201-L201)
### [G-52]<a name="g-52"></a> Optimize Deployment Size by Fine-tuning IPFS Hash
Optimizing the deployment size of a smart contract is vital to minimize gas costs, and one way to achieve this is by fine-tuning the IPFS hash appended by the Solidity compiler as metadata. This metadata, consisting of 53 bytes, increases the gas required for contract deployment by approximately 10,600 gas due to bytecode costs, and additionally, up to 848 gas due to calldata costs, depending on the proportion of zero and non-zero bytes. Utilize the --no-cbor-metadata compiler flag to prevent the compiler from appending metadata. However, this approach has a drawback as it can complicate the contract verification process on block explorers like Etherscan, potentially reducing transparency.

*There are 7 instance(s) of this issue:*

```solidity
14: contract MaxHeap is VersionedContract, UUPS, Ownable2StepUpgradeable, ReentrancyGuardUpgradeable  // <= FOUND

```


*GitHub* : [14](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L14-L14)

```solidity
20: contract CultureIndex is // <= FOUND
21:     ICultureIndex,
22:     VersionedContract,
23:     UUPS,
24:     Ownable2StepUpgradeable,
25:     ReentrancyGuardUpgradeable,
26:     EIP712Upgradeable
27: 

```


*GitHub* : [20](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L20-L20)

```solidity
29: contract NontransferableERC20Votes is Initializable, ERC20VotesUpgradeable, Ownable2StepUpgradeable  // <= FOUND

```


*GitHub* : [29](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L29-L29)

```solidity
17: contract ERC20TokenEmitter is // <= FOUND
18:     IERC20TokenEmitter,
19:     ReentrancyGuardUpgradeable,
20:     TokenEmitterRewards,
21:     Ownable2StepUpgradeable,
22:     PausableUpgradeable
23: 

```


*GitHub* : [17](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L17-L17)

```solidity
39: contract AuctionHouse is // <= FOUND
40:     IAuctionHouse,
41:     VersionedContract,
42:     UUPS,
43:     PausableUpgradeable,
44:     ReentrancyGuardUpgradeable,
45:     Ownable2StepUpgradeable
46: 

```


*GitHub* : [39](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L39-L39)

```solidity
33: contract VerbsToken is // <= FOUND
34:     IVerbsToken,
35:     VersionedContract,
36:     UUPS,
37:     Ownable2StepUpgradeable,
38:     ReentrancyGuardUpgradeable,
39:     ERC721CheckpointableUpgradeable
40: 

```


*GitHub* : [33](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L33-L33)

```solidity
11: contract VRGDAC  // <= FOUND

```


*GitHub* : [11](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L11-L11)
### [G-53]<a name="g-53"></a> Avoid Unnecessary Public Variables
Public state variables in Solidity automatically generate getter functions, increasing contract size and potentially leading to higher deployment and interaction costs. To optimize gas usage and contract efficiency, minimize the use of public variables unless external access is necessary. Instead, use internal or private visibility combined with explicit getter functions when required. This practice not only reduces contract size but also provides better control over data access and manipulation, enhancing security and readability. Prioritize lean, efficient contracts to ensure cost-effectiveness and better performance on the blockchain.

*There are 46 instance(s) of this issue:*

```solidity
16: address public admin; // <= FOUND

```


*GitHub* : [16](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L16-L16)

```solidity
67: uint256 public size = 0; // <= FOUND

```


*GitHub* : [67](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L67-L67)

```solidity
29: bytes32 public constant VOTE_TYPEHASH = // <= FOUND

```


*GitHub* : [29](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L29-L29)

```solidity
36: MaxHeap public maxHeap; // <= FOUND

```


*GitHub* : [36](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L36-L36)

```solidity
39: ERC20VotesUpgradeable public erc20VotingToken; // <= FOUND

```


*GitHub* : [39](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L39-L39)

```solidity
42: ERC721CheckpointableUpgradeable public erc721VotingToken; // <= FOUND

```


*GitHub* : [42](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L42-L42)

```solidity
45: uint256 public erc721VotingTokenWeight; // <= FOUND

```


*GitHub* : [45](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L45-L45)

```solidity
48: uint256 public constant MAX_QUORUM_VOTES_BPS = 6_000;  // <= FOUND

```


*GitHub* : [48](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L48-L48)

```solidity
51: uint256 public minVoteWeight; // <= FOUND

```


*GitHub* : [51](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L51-L51)

```solidity
54: uint256 public quorumVotesBPS; // <= FOUND

```


*GitHub* : [54](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L54-L54)

```solidity
57: string public name; // <= FOUND

```


*GitHub* : [57](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L57-L57)

```solidity
60: string public description; // <= FOUND

```


*GitHub* : [60](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L60-L60)

```solidity
66: uint256 public _currentPieceId; // <= FOUND

```


*GitHub* : [66](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L66-L66)

```solidity
75: uint256 public constant MAX_NUM_CREATORS = 100; // <= FOUND

```


*GitHub* : [75](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L75-L75)

```solidity
78: address public dropperAdmin; // <= FOUND

```


*GitHub* : [78](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L78-L78)

```solidity
25: address public treasury; // <= FOUND

```


*GitHub* : [25](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L25-L25)

```solidity
28: NontransferableERC20Votes public token; // <= FOUND

```


*GitHub* : [28](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L28-L28)

```solidity
31: VRGDAC public vrgdac; // <= FOUND

```


*GitHub* : [31](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L31-L31)

```solidity
34: uint256 public startTime; // <= FOUND

```


*GitHub* : [34](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L34-L34)

```solidity
39: int256 public emittedTokenWad; // <= FOUND

```


*GitHub* : [39](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L39-L39)

```solidity
66: uint256 public creatorRateBps; // <= FOUND

```


*GitHub* : [66](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L66-L66)

```solidity
72: uint256 public entropyRateBps; // <= FOUND

```


*GitHub* : [72](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L72-L72)

```solidity
48: address public creatorsAddress; // <= FOUND

```


*GitHub* : [48](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L48-L48)

```solidity
48: IVerbsToken public verbs; // <= FOUND

```


*GitHub* : [48](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L48-L48)

```solidity
51: IERC20TokenEmitter public erc20TokenEmitter; // <= FOUND

```


*GitHub* : [51](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L51-L51)

```solidity
54: address public WETH; // <= FOUND

```


*GitHub* : [54](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L54-L54)

```solidity
57: uint256 public timeBuffer; // <= FOUND

```


*GitHub* : [57](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L57-L57)

```solidity
60: uint256 public reservePrice; // <= FOUND

```


*GitHub* : [60](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L60-L60)

```solidity
63: uint8 public minBidIncrementPercentage; // <= FOUND

```


*GitHub* : [63](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L63-L63)

```solidity
69: uint256 public minCreatorRateBps; // <= FOUND

```


*GitHub* : [69](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L69-L69)

```solidity
75: uint256 public duration; // <= FOUND

```


*GitHub* : [75](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L75-L75)

```solidity
78: IAuctionHouse.Auction public auction; // <= FOUND

```


*GitHub* : [78](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L78-L78)

```solidity
85: IRevolutionBuilder public immutable manager; // <= FOUND

```


*GitHub* : [85](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L85-L85)

```solidity
88: uint32 public constant MIN_TOKEN_MINT_GAS_THRESHOLD = 750_000; // <= FOUND

```


*GitHub* : [88](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L88-L88)

```solidity
42: address public minter; // <= FOUND

```


*GitHub* : [42](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L42-L42)

```solidity
45: IDescriptorMinimal public descriptor; // <= FOUND

```


*GitHub* : [45](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L45-L45)

```solidity
48: ICultureIndex public cultureIndex; // <= FOUND

```


*GitHub* : [48](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L48-L48)

```solidity
51: bool public isMinterLocked; // <= FOUND

```


*GitHub* : [51](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L51-L51)

```solidity
54: bool public isCultureIndexLocked; // <= FOUND

```


*GitHub* : [54](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L54-L54)

```solidity
57: bool public isDescriptorLocked; // <= FOUND

```


*GitHub* : [57](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L57-L57)

```solidity
16: int256 public immutable targetPrice; // <= FOUND

```


*GitHub* : [16](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L16-L16)

```solidity
18: int256 public immutable perTimeUnit; // <= FOUND

```


*GitHub* : [18](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L18-L18)

```solidity
20: int256 public immutable decayConstant; // <= FOUND

```


*GitHub* : [20](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L20-L20)

```solidity
22: int256 public immutable priceDecayPercent; // <= FOUND

```


*GitHub* : [22](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L22-L22)

```solidity
23: uint256 public constant minPurchaseAmount = 0.0000001 ether; // <= FOUND

```


*GitHub* : [23](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L23-L23)

```solidity
24: uint256 public constant maxPurchaseAmount = 50_000 ether; // <= FOUND

```


*GitHub* : [24](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L24-L24)
### [G-54]<a name="g-54"></a> Optimize Storage with Byte Truncation for Time Related State Variables
Storage optimization in Solidity contracts is vital for reducing gas costs, especially when storing time-related state variables. Using `uint32` for storing time values like timestamps is often sufficient, given it can represent dates up to the year 2106. By truncating larger default integer types to `uint32`, you significantly save on storage space and consequently on gas costs for deployment and state modifications. However, ensure that the truncation does not lead to overflow issues and that the variable's size is adequate for the application's expected lifespan and precision requirements. Adopting this optimization practice contributes to more efficient and cost-effective smart contract development.

*There are 4 instance(s) of this issue:*

```solidity
57: uint256 public timeBuffer; // <= FOUND

```


*GitHub* : [57](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L57-L57)

```solidity
34: uint256 public startTime; // <= FOUND

```


*GitHub* : [34](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L34-L34)

```solidity
18: int256 public immutable perTimeUnit; // <= FOUND

```


*GitHub* : [18](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L18-L18)

```solidity
75: uint256 public duration; // <= FOUND

```


*GitHub* : [75](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L75-L75)
### [G-55]<a name="g-55"></a> Stack variable cost less than state variables while used in emiting event
When emitting events in Solidity, using stack variables (local variables within a function) instead of state variables can lead to significant gas savings. Stack variables reside in memory only for the duration of the function execution and are less costly to access compared to state variables, which are stored on the blockchain. When an event is emitted, accessing these stack variables requires less gas than fetching data from state variables, which involves reading from the contract's storage - a more expensive operation. Thus, for efficiency, prefer using local variables within functions for event emission, especially in functions that are called frequently.

*There are 6 instance(s) of this issue:*

```solidity
326: 
327:             emit AuctionCreated(verbId, startTime, endTime); // <= FOUND

```


*GitHub* : [326](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L326-L327)

```solidity
141: 
142:         emit QuorumVotesBPSSet(quorumVotesBPS, _cultureIndexParams.quorumVotesBPS); // <= FOUND

```


*GitHub* : [141](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L141-L142)

```solidity
500:         emit QuorumVotesBPSSet(quorumVotesBPS, newQuorumVotesBPS); // <= FOUND

```


*GitHub* : [500](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L500-L500)

```solidity
302: 
303:         emit CreatorRateBpsUpdated(creatorRateBps = _creatorRateBps); // <= FOUND

```


*GitHub* : [302](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L302-L303)

```solidity
291: 
292:         emit EntropyRateBpsUpdated(entropyRateBps = _entropyRateBps); // <= FOUND

```


*GitHub* : [291](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L291-L292)

```solidity
312: 
313:         emit CreatorsAddressUpdated(creatorsAddress = _creatorsAddress); // <= FOUND

```


*GitHub* : [312](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L312-L313)
### [G-56]<a name="g-56"></a> Use s.x = s.x + y instead of s.x += y for memory structs (same for -= etc)
In Solidity, optimizing gas usage is crucial, particularly for frequently executed operations. For memory structs, using explicit assignment (e.g., `s.x = s.x + y`) instead of shorthand operations (e.g., `s.x += y`) can result in a minor gas saving, around 100 gas. This difference arises from the way the Solidity compiler optimizes bytecode. While such savings might seem small, they can add up in contracts with high transaction volume. This optimization applies to other compound assignment operators like `-=` and `*=` as well. It's a subtle efficiency gain that developers can leverage, especially in complex contracts where every gas unit counts.

*There are 1 instance(s) of this issue:*

```solidity
336:     function _settleAuction() internal { // <= FOUND
337:         IAuctionHouse.Auction memory _auction = auction;
338: 
339:         require(_auction.startTime != 0, "Auction hasn't begun"); // <= FOUND
340:         require(!_auction.settled, "Auction has already been settled"); // <= FOUND
341:         
342:         require(block.timestamp >= _auction.endTime, "Auction hasn't completed"); // <= FOUND
343: 
344:         auction.settled = true;
345: 
346:         uint256 creatorTokensEmitted = 0;
347:         
348:         if (address(this).balance < reservePrice) {
349:             
350:             if (_auction.bidder != address(0)) { // <= FOUND
351:                 _safeTransferETHWithFallback(_auction.bidder, _auction.amount); // <= FOUND
352:             }
353: 
354:             
355:             verbs.burn(_auction.verbId); // <= FOUND
356:         } else {
357:             
358:             if (_auction.bidder == address(0)) // <= FOUND
359:                 verbs.burn(_auction.verbId); // <= FOUND
360:                 
361:             else verbs.transferFrom(address(this), _auction.bidder, _auction.verbId); // <= FOUND
362: 
363:             if (_auction.amount > 0) { // <= FOUND
364:                 
365:                 uint256 auctioneerPayment = (_auction.amount * (10_000 - creatorRateBps)) / 10_000; // <= FOUND
366: 
367:                 
368:                 uint256 creatorsShare = _auction.amount - auctioneerPayment; // <= FOUND
369: 
370:                 uint256 numCreators = verbs.getArtPieceById(_auction.verbId).creators.length; // <= FOUND
371:                 address deployer = verbs.getArtPieceById(_auction.verbId).sponsor; // <= FOUND
372: 
373:                 
374:                 uint256[] memory vrgdaSplits = new uint256[](numCreators);
375:                 address[] memory vrgdaReceivers = new address[](numCreators);
376: 
377:                 
378:                 _safeTransferETHWithFallback(owner(), auctioneerPayment);
379: 
380:                 uint256 ethPaidToCreators = 0;
381: 
382:                 
383:                 if (creatorsShare > 0 && entropyRateBps > 0) {
384:                     for (uint256 i = 0; i < numCreators; i++) {
385:                         ICultureIndex.CreatorBps memory creator = verbs.getArtPieceById(_auction.verbId).creators[i]; // <= FOUND
386:                         vrgdaReceivers[i] = creator.creator; // <= FOUND
387:                         vrgdaSplits[i] = creator.bps; // <= FOUND
388: 
389:                         
390:                         uint256 paymentAmount = (creatorsShare * entropyRateBps * creator.bps) / (10_000 * 10_000); // <= FOUND
391:                         ethPaidToCreators += paymentAmount; // <= FOUND
392: 
393:                         
394:                         _safeTransferETHWithFallback(creator.creator, paymentAmount); // <= FOUND
395:                     }
396:                 }
397: 
398:                 
399:                 if (creatorsShare > ethPaidToCreators) {
400:                     creatorTokensEmitted = erc20TokenEmitter.buyToken{ value: creatorsShare - ethPaidToCreators }(
401:                         vrgdaReceivers,
402:                         vrgdaSplits,
403:                         IERC20TokenEmitter.ProtocolRewardAddresses({
404:                             builder: address(0),
405:                             purchaseReferral: address(0),
406:                             deployer: deployer
407:                         })
408:                     );
409:                 }
410:             }
411:         }
412: 
413:         emit AuctionSettled(_auction.verbId, _auction.bidder, _auction.amount, creatorTokensEmitted); // <= FOUND
414:     }

```


*GitHub* : [336](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L336-L413)
### [G-57]<a name="g-57"></a> Time state variables can be truncated to uint32
Truncating time-related state variables to `uint32` can be a practical optimization in Solidity contracts. Since `uint32` can represent dates far into the future (over 100 years from now), it's often sufficient for time tracking purposes. This approach reduces the storage space required, thereby saving gas costs associated with larger data types like `uint256`. This form of optimization is especially beneficial in scenarios where space efficiency is a priority and the range of `uint32` meets the application's temporal needs.

*There are 2 instance(s) of this issue:*

```solidity
57: uint256 public timeBuffer; // <= FOUND

```


*GitHub* : [57](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L57-L57)

```solidity
30: keccak256("Vote(address from,uint256[] pieceIds,uint256 nonce,uint256 deadline)"); // <= FOUND

```


*GitHub* : [30](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L30-L30)
### [G-58]<a name="g-58"></a> ++X costs slightly less gas than X++ (same with --)
Move the ++/-- action to the left of the variable

*There are 12 instance(s) of this issue:*

```solidity
218: 
219:         uint256 pieceId = _currentPieceId++; // <= FOUND

```


*GitHub* : [219](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L219-L219)

```solidity
294:             uint256 verbId = _currentVerbId++; // <= FOUND

```


*GitHub* : [294](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L294-L294)

```solidity
129:         size++; // <= FOUND

```


*GitHub* : [129](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L129-L129)

```solidity
185:         for (uint i; i < creatorArrayLength; i++) { // <= FOUND

```


*GitHub* : [185](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L185-L185)

```solidity
185: 
186:         for (uint i; i < creatorArrayLength; i++) { // <= FOUND

```


*GitHub* : [186](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L186-L186)

```solidity
185: 
186:         
187:         for (uint i; i < creatorArrayLength; i++) { // <= FOUND

```


*GitHub* : [187](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L187-L187)

```solidity
355:         for (uint256 i; i < len; i++) { // <= FOUND

```


*GitHub* : [355](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L355-L355)

```solidity
355: 
356:         for (uint256 i; i < len; i++) { // <= FOUND

```


*GitHub* : [356](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L356-L356)

```solidity
209: 
210:         
211: 
212:         for (uint256 i = 0; i < addresses.length; i++) { // <= FOUND

```


*GitHub* : [212](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L212-L212)

```solidity
384:                     for (uint256 i = 0; i < numCreators; i++) { // <= FOUND

```


*GitHub* : [384](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L384-L384)

```solidity
306: 
307:             for (uint i = 0; i < artPiece.creators.length; i++) { // <= FOUND

```


*GitHub* : [307](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L307-L307)

```solidity
431: 
432:         voteHash = keccak256(abi.encode(VOTE_TYPEHASH, from, pieceIds, nonces[from]++, deadline)); // <= FOUND

```


*GitHub* : [432](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L432-L432)
### [G-59]<a name="g-59"></a> Variables that can be set to immutable
The variables are not typically expected to change during the lifespan of the project, as such it makes sense to save gas and set these variables to immutable.

*There are 2 instance(s) of this issue:*

```solidity
57: string public name; // <= FOUND

```


*GitHub* : [57](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L57-L57)

```solidity
63: string private _contractURIHash = "QmQzDwaZ7yQxHHs7sQQenJVB89riTSacSGcJRv9jtHPuz5"; // <= FOUND

```


*GitHub* : [63](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L63-L63)
### [G-60]<a name="g-60"></a> The use of a logical AND in place of double if is slightly less gas efficient in instances where there isn't a corresponding else statement for the given if statement
Using a double if statement instead of logical AND (&&) can provide similar short-circuiting behavior whereas double if is slightly more efficient.

*There are 8 instance(s) of this issue:*

```solidity
102: 
103:         if (pos >= (size / 2) && pos <= size) return; // <= FOUND

```


*GitHub* : [103](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L103-L103)

```solidity
125:         while (current != 0 && valueMapping[heap[current]] > valueMapping[heap[parent(current)]]) { // <= FOUND

```


*GitHub* : [125](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L125-L125)

```solidity
146:             
147:             while (position != 0 && valueMapping[heap[position]] > valueMapping[heap[parent(position)]]) { // <= FOUND

```


*GitHub* : [147](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L147-L147)

```solidity
160:         require(uint8(metadata.mediaType) > 0 && uint8(metadata.mediaType) <= 5, "Invalid media type"); // <= FOUND

```


*GitHub* : [160](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L160-L160)

```solidity
398:         require(
399:             len == pieceIds.length && len == deadline.length && len == v.length && len == r.length && len == s.length, // <= FOUND
400:             "Array lengths must match"
401:         );

```


*GitHub* : [399](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L399-L399)

```solidity
158:         
159:         require(msg.sender != treasury && msg.sender != creatorsAddress, "Funds recipient cannot buy tokens"); // <= FOUND

```


*GitHub* : [159](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L159-L159)

```solidity
201: 
202:         
203:         if (totalTokensForCreators > 0 && creatorsAddress != address(0)) { // <= FOUND

```


*GitHub* : [203](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L203-L203)

```solidity
383: 
384:                 
385:                 if (creatorsShare > 0 && entropyRateBps > 0) { // <= FOUND

```


*GitHub* : [385](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L385-L385)
### [G-61]<a name="g-61"></a> Calling .length in a for loop wastes gas
Rather than calling .length for an array in a for loop declaration, it is far more gas efficient to cache this length before and use that instead. This will prevent the array length from being called every loop iteration

*There are 2 instance(s) of this issue:*

```solidity
209: for (uint256 i = 0; i < addresses.length; i++)  // <= FOUND

```


*GitHub* : [209](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L209-L209)

```solidity
306: for (uint i = 0; i < artPiece.creators.length; i++)  // <= FOUND

```


*GitHub* : [306](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L306-L306)
### [G-62]<a name="g-62"></a> Internal functions only used once can be inlined so save gas
If a internal function is only used once it doesn't make sense to modularise it unless the function which does call the function would be overly long and complex otherwise

*There are 7 instance(s) of this issue:*

```solidity
159:     function validateMediaType(ArtPieceMetadata calldata metadata) internal pure  // <= FOUND

```


*GitHub* : [159](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L159-L159)

```solidity
179:     function validateCreatorsArray(CreatorBps[] calldata creatorArray) internal pure returns (uint256)  // <= FOUND

```


*GitHub* : [179](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L179-L179)

```solidity
288:     function _getVotes(address account) internal view returns (uint256)  // <= FOUND

```


*GitHub* : [288](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L288-L288)

```solidity
52:     function __NontransferableERC20Votes_init( // <= FOUND
53:         address _initialOwner,
54:         string calldata _name,
55:         string calldata _symbol
56:     ) internal onlyInitializing 

```


*GitHub* : [52](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L52-L52)

```solidity
281:     function _mintTo(address to) internal returns (uint256)  // <= FOUND

```


*GitHub* : [281](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L281-L281)

```solidity
12:     function _handleRewardsAndGetValueToSend( // <= FOUND
13:         uint256 msgValue,
14:         address builderReferral,
15:         address purchaseReferral,
16:         address deployer
17:     ) internal returns (uint256) 

```


*GitHub* : [12](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/TokenEmitter/TokenEmitterRewards.sol#L12-L12)

```solidity
65:     function _depositPurchaseRewards( // <= FOUND
66:         uint256 paymentAmountWei,
67:         address builderReferral,
68:         address purchaseReferral,
69:         address deployer
70:     ) internal returns (uint256) 

```


*GitHub* : [65](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L65-L65)
### [G-63]<a name="g-63"></a> Constructors can be marked as payable to save deployment gas

*There are 1 instance(s) of this issue:*

```solidity
28:     constructor(int256 _targetPrice, int256 _priceDecayPercent, int256 _perTimeUnit) {
29:         targetPrice = _targetPrice;
30: 
31:         perTimeUnit = _perTimeUnit;
32: 
33:         priceDecayPercent = _priceDecayPercent;
34: 
35:         decayConstant = wadLn(1e18 - _priceDecayPercent);
36: 
37:         
38:         require(decayConstant < 0, "NON_NEGATIVE_DECAY_CONSTANT");
39:     }

```


*GitHub* : [28](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L28-L28)
### [G-64]<a name="g-64"></a> Order struct members to reduce size
Utilizing a struct in Solidity involves laying out its members in storage. Arranging these members from largest to smallest can significantly minimize gas costs by optimizing storage packing. This tactic ensures that larger members align with Solidity's 32-byte storage word boundaries, reducing padding and the number of storage slots required. This efficient use of storage slots translates directly into gas savings, particularly when struct instances are frequently read from or written to storage. Developers should prioritize this struct arrangement in their contracts to optimize for gas efficiency.

*There are 1 instance(s) of this issue:*

```solidity
6: struct RewardsSettings { // <= FOUND
7:     uint256 builderReferralReward;
8:     uint256 purchaseReferralReward;
9:     uint256 deployerReward;
10:     uint256 revolutionReward;
11: }

```


*GitHub* : [6](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L6-L6)
### [G-65]<a name="g-65"></a> Merge events to save gas
Consolidating multiple event emissions into a single event in Solidity can result in significant gas savings. Each event emission in Ethereum involves a gas cost, specifically for the topics logged with the event. By merging sequential events into a singular event, you can save on the Glogtopic cost, which is incurred for each topic of each event. This approach can save around 375 gas per additional topic. This strategy is particularly beneficial in functions where multiple related events are emitted in sequence. However, it's crucial to balance gas optimization with the clarity and utility of the event data for off-chain consumers.

*There are 1 instance(s) of this issue:*

```solidity
209:     function createPiece(
210:         ArtPieceMetadata calldata metadata,
211:         CreatorBps[] calldata creatorArray
212:     ) public returns (uint256) {
213:         uint256 creatorArrayLength = validateCreatorsArray(creatorArray);
214: 
215:         
216:         validateMediaType(metadata);
217: 
218:         uint256 pieceId = _currentPieceId++;
219: 
220:         
221:         maxHeap.insert(pieceId, 0);
222: 
223:         ArtPiece storage newPiece = pieces[pieceId];
224: 
225:         newPiece.pieceId = pieceId;
226:         newPiece.totalVotesSupply = _calculateVoteWeight(
227:             erc20VotingToken.totalSupply(),
228:             erc721VotingToken.totalSupply()
229:         );
230:         newPiece.totalERC20Supply = erc20VotingToken.totalSupply();
231:         newPiece.metadata = metadata;
232:         newPiece.sponsor = msg.sender;
233:         newPiece.creationBlock = block.number;
234:         newPiece.quorumVotes = (quorumVotesBPS * newPiece.totalVotesSupply) / 10_000;
235: 
236:         for (uint i; i < creatorArrayLength; i++) {
237:             newPiece.creators.push(creatorArray[i]);
238:         }
239: 
240:         emit PieceCreated(pieceId, msg.sender, metadata, newPiece.quorumVotes, newPiece.totalVotesSupply); // <= FOUND
241: 
242:         
243:         for (uint i; i < creatorArrayLength; i++) {
244:             emit PieceCreatorAdded(pieceId, creatorArray[i].creator, msg.sender, creatorArray[i].bps); // <= FOUND
245:         }
246: 
247:         return newPiece.pieceId;
248:     }

```


*GitHub* : [209](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L209-L244)
### [G-66]<a name="g-66"></a> Use assembly scratch space to build calldata for external calls
Using Solidity's assembly scratch space for constructing calldata in external calls with one or two arguments can be a gas-efficient approach. This method leverages the designated memory area (the first 64 bytes of memory) for temporary data storage during assembly operations. By directly writing arguments into this scratch space, it eliminates the need for additional memory allocation typically required for calldata preparation. This technique can lead to notable gas savings, especially in high-frequency or gas-sensitive operations. However, it requires careful implementation to avoid data corruption and should be used with a thorough understanding of low-level EVM operations and memory handling. Proper testing and validation are crucial when employing such optimizations.

*There are 33 instance(s) of this issue:*

```solidity
69:         require(msg.sender == address(manager), "Only manager can initialize"); // <= FOUND

```


*GitHub* : [69](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L69-L69)

```solidity
160:         require(uint8(metadata.mediaType) > 0 && uint8(metadata.mediaType) <= 5, "Invalid media type"); // <= FOUND

```


*GitHub* : [160](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L160-L160)

```solidity
162: 
163:         if (metadata.mediaType == MediaType.IMAGE) // <= FOUND
164:             require(bytes(metadata.image).length > 0, "Image URL must be provided"); // <= FOUND

```


*GitHub* : [162](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L162-L164)

```solidity
164:         else if (metadata.mediaType == MediaType.ANIMATION) // <= FOUND
165:             require(bytes(metadata.animationUrl).length > 0, "Animation URL must be provided"); // <= FOUND

```


*GitHub* : [164](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L164-L165)

```solidity
166:         else if (metadata.mediaType == MediaType.TEXT) // <= FOUND
167:             require(bytes(metadata.text).length > 0, "Text must be provided"); // <= FOUND

```


*GitHub* : [166](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L166-L167)

```solidity
221: 
222:         
223:         maxHeap.insert(pieceId, 0); // <= FOUND

```


*GitHub* : [221](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L221-L223)

```solidity
289:         return _calculateVoteWeight(erc20VotingToken.getVotes(account), erc721VotingToken.getVotes(account)); // <= FOUND

```


*GitHub* : [289](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L289-L289)

```solidity
322: 
323:         
324:         maxHeap.updateValue(pieceId, totalWeight); // <= FOUND

```


*GitHub* : [322](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L322-L324)

```solidity
109:         token.mint(_to, _amount); // <= FOUND

```


*GitHub* : [109](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L109-L109)

```solidity
180:         require( // <= FOUND
181:             msg.value >= _auction.amount + ((_auction.amount * minBidIncrementPercentage) / 100), // <= FOUND
182:             "Must send more than last bid by minBidIncrementPercentage amount"
183:         );

```


*GitHub* : [180](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L180-L181)

```solidity
438: 
439:             
440:             bool wethSuccess = IWETH(WETH).transfer(_to, _amount); // <= FOUND

```


*GitHub* : [438](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L438-L440)

```solidity
194:         return descriptor.tokenURI(tokenId, artPieces[tokenId].metadata); // <= FOUND

```


*GitHub* : [194](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L194-L194)

```solidity
202:         return descriptor.dataURI(tokenId, artPieces[tokenId].metadata); // <= FOUND

```


*GitHub* : [202](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L202-L202)

```solidity
234:         newPiece.quorumVotes = (quorumVotesBPS * newPiece.totalVotesSupply) / 10_000; // <= FOUND

```


*GitHub* : [234](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L234-L234)

```solidity
237:             newPiece.creators.push(creatorArray[i]); // <= FOUND

```


*GitHub* : [237](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L237-L237)

```solidity
124:         
125:         return token.balanceOf(_owner); // <= FOUND

```


*GitHub* : [124](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L124-L125)

```solidity
241:         
242:         
243:         return
244:             vrgdac.xToY({ // <= FOUND

```


*GitHub* : [241](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L241-L244)

```solidity
243:                 timeSinceStart: toDaysWadUnsafe(block.timestamp - startTime), // <= FOUND
244:                 sold: emittedTokenWad, // <= FOUND
245:                 amount: int(amount) // <= FOUND
246:             });

```


*GitHub* : [243](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L243-L245)

```solidity
258:         
259:         
260:         return
261:             vrgdac.yToX({ // <= FOUND

```


*GitHub* : [258](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L258-L261)

```solidity
260:                 timeSinceStart: toDaysWadUnsafe(block.timestamp - startTime), // <= FOUND
261:                 sold: emittedTokenWad, // <= FOUND
262:                 amount: int(etherAmount) // <= FOUND
263:             });

```


*GitHub* : [260](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L260-L262)

```solidity
277:                 timeSinceStart: toDaysWadUnsafe(block.timestamp - startTime), // <= FOUND
278:                 sold: emittedTokenWad, // <= FOUND
279:                 amount: int(((paymentAmount - computeTotalReward(paymentAmount)) * (10_000 - creatorRateBps)) / 10_000) // <= FOUND
280:             });

```


*GitHub* : [277](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L277-L279)

```solidity
188:         auction.bidder = payable(bidder); // <= FOUND

```


*GitHub* : [188](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L188-L188)

```solidity
355: 
356:             
357:             verbs.burn(_auction.verbId); // <= FOUND

```


*GitHub* : [355](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L355-L357)

```solidity
365:                 
366:                 uint256 auctioneerPayment = (_auction.amount * (10_000 - creatorRateBps)) / 10_000; // <= FOUND

```


*GitHub* : [365](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L365-L366)

```solidity
370: 
371:                 uint256 numCreators = verbs.getArtPieceById(_auction.verbId).creators.length; // <= FOUND

```


*GitHub* : [370](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L370-L371)

```solidity
371:                 address deployer = verbs.getArtPieceById(_auction.verbId).sponsor; // <= FOUND

```


*GitHub* : [371](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L371-L371)

```solidity
385:                         ICultureIndex.CreatorBps memory creator = verbs.getArtPieceById(_auction.verbId).creators[i]; // <= FOUND

```


*GitHub* : [385](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L385-L385)

```solidity
390: 
391:                         
392:                         uint256 paymentAmount = (creatorsShare * entropyRateBps * creator.bps) / (10_000 * 10_000); // <= FOUND

```


*GitHub* : [390](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L390-L392)

```solidity
400:                     creatorTokensEmitted = erc20TokenEmitter.buyToken{ value: creatorsShare - ethPaidToCreators }( // <= FOUND

```


*GitHub* : [400](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L400-L400)

```solidity
401:                         vrgdaReceivers, // <= FOUND
402:                         vrgdaSplits, // <= FOUND
403:                         IERC20TokenEmitter.ProtocolRewardAddresses({ // <= FOUND

```


*GitHub* : [401](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L401-L403)

```solidity
421:         
422:         if (address(this).balance < _amount) revert("Insufficient balance"); // <= FOUND

```


*GitHub* : [421](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L421-L422)

```solidity
307:                 newPiece.creators.push(artPiece.creators[i]); // <= FOUND

```


*GitHub* : [307](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L307-L307)

```solidity
79: 
80:         protocolRewards.depositRewards{ value: totalReward }( // <= FOUND

```


*GitHub* : [79](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L79-L80)
### [G-67]<a name="g-67"></a> Use assembly scratch space to build calldata for event emits
Utilizing Solidity's assembly scratch space to build calldata for emitting events with just one or two arguments can optimize gas usage. The scratch space, a designated area in the first 64 bytes of memory, is ideal for temporary storage during assembly-level operations. By directly writing the event arguments into this area, developers can bypass the standard memory allocation process required for event emission. This approach results in gas savings, particularly for contracts where events are frequently emitted. However, such low-level optimization requires a deep understanding of Ethereum Virtual Machine (EVM) mechanics and careful coding to prevent data mishandling. Rigorous testing is essential to ensure the integrity and correct functionality of the contract.

*There are 21 instance(s) of this issue:*

```solidity
291: 
292:         emit EntropyRateBpsUpdated(entropyRateBps = _entropyRateBps); // <= FOUND

```


*GitHub* : [291](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L291-L292)

```solidity
302: 
303:         emit CreatorRateBpsUpdated(creatorRateBps = _creatorRateBps); // <= FOUND

```


*GitHub* : [302](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L302-L303)

```solidity
312: 
313:         emit CreatorsAddressUpdated(creatorsAddress = _creatorsAddress); // <= FOUND

```


*GitHub* : [312](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L312-L313)

```solidity
225: 
226:         emit CreatorRateBpsUpdated(_creatorRateBps); // <= FOUND

```


*GitHub* : [225](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L225-L226)

```solidity
245: 
246:         emit MinCreatorRateBpsUpdated(_minCreatorRateBps); // <= FOUND

```


*GitHub* : [245](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L245-L246)

```solidity
257:         emit EntropyRateBpsUpdated(_entropyRateBps); // <= FOUND

```


*GitHub* : [257](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L257-L257)

```solidity
280: 
281:         emit AuctionTimeBufferUpdated(_timeBuffer); // <= FOUND

```


*GitHub* : [280](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L280-L281)

```solidity
290: 
291:         emit AuctionReservePriceUpdated(_reservePrice); // <= FOUND

```


*GitHub* : [290](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L290-L291)

```solidity
300: 
301:         emit AuctionMinBidIncrementPercentageUpdated(_minBidIncrementPercentage); // <= FOUND

```


*GitHub* : [300](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L300-L301)

```solidity
186:         emit VerbBurned(verbId); // <= FOUND

```


*GitHub* : [186](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L186-L186)

```solidity
213: 
214:         emit MinterUpdated(_minter); // <= FOUND

```


*GitHub* : [213](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L213-L214)

```solidity
223: 
224:         emit MinterLocked(); // <= FOUND

```


*GitHub* : [223](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L223-L224)

```solidity
235: 
236:         emit DescriptorUpdated(_descriptor); // <= FOUND

```


*GitHub* : [235](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L235-L236)

```solidity
245: 
246:         emit DescriptorLocked(); // <= FOUND

```


*GitHub* : [245](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L245-L246)

```solidity
255: 
256:         emit CultureIndexUpdated(_cultureIndex); // <= FOUND

```


*GitHub* : [255](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L255-L256)

```solidity
265: 
266:         emit CultureIndexLocked(); // <= FOUND

```


*GitHub* : [265](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L265-L266)

```solidity
141: 
142:         emit QuorumVotesBPSSet(quorumVotesBPS, _cultureIndexParams.quorumVotesBPS); // <= FOUND

```


*GitHub* : [141](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L141-L142)

```solidity
500:         emit QuorumVotesBPSSet(quorumVotesBPS, newQuorumVotesBPS); // <= FOUND

```


*GitHub* : [500](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L500-L500)

```solidity
531: 
532:         emit PieceDropped(piece.pieceId, msg.sender); // <= FOUND

```


*GitHub* : [531](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L531-L532)

```solidity
199: 
200:         if (extended) emit AuctionExtended(_auction.verbId, _auction.endTime); // <= FOUND

```


*GitHub* : [199](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L199-L200)

```solidity
312: 
313:             emit VerbCreated(verbId, artPiece); // <= FOUND

```


*GitHub* : [312](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L312-L313)
### [G-68]<a name="g-68"></a> Consider using solady's `FixedPointMathLib`
Using Solady's `FixedPointMathLib` for multiplication or division operations in Solidity can lead to significant gas savings. This library is designed to optimize fixed-point arithmetic operations, which are common in financial calculations involving tokens or currencies. By implementing more efficient algorithms and assembly optimizations, `FixedPointMathLib` minimizes the computational resources required for these operations. For contracts that frequently perform such calculations, integrating this library can reduce transaction costs, thereby enhancing overall performance and cost-effectiveness. However, developers must ensure compatibility with their existing codebase and thoroughly test for accuracy and expected behavior to avoid any unintended consequences.

*There are 11 instance(s) of this issue:*

```solidity
80:         return (pos - 1) / 2; // <= FOUND

```


*GitHub* : [80](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L80-L80)

```solidity
102: 
103:         if (pos >= (size / 2) && pos <= size) return; // <= FOUND

```


*GitHub* : [103](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L103-L103)

```solidity
234:         newPiece.quorumVotes = (quorumVotesBPS * newPiece.totalVotesSupply) / 10_000; // <= FOUND

```


*GitHub* : [234](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L234-L234)

```solidity
173: 
174:         
175:         uint256 toPayTreasury = (msgValueRemaining * (10_000 - creatorRateBps)) / 10_000; // <= FOUND

```


*GitHub* : [175](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L175-L175)

```solidity
177: 
178:         
179:         
180:         uint256 creatorDirectPayment = ((msgValueRemaining - toPayTreasury) * entropyRateBps) / 10_000; // <= FOUND

```


*GitHub* : [180](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L180-L180)

```solidity
212:                 
213:                 _mint(addresses[i], uint256((totalTokensForBuyers * int(basisPointSplits[i])) / 10_000)); // <= FOUND

```


*GitHub* : [213](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L213-L213)

```solidity
277:                 timeSinceStart: toDaysWadUnsafe(block.timestamp - startTime),
278:                 sold: emittedTokenWad,
279:                 amount: int(((paymentAmount - computeTotalReward(paymentAmount)) * (10_000 - creatorRateBps)) / 10_000) // <= FOUND
280:             });

```


*GitHub* : [279](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L279-L279)

```solidity
180:         require(
181:             msg.value >= _auction.amount + ((_auction.amount * minBidIncrementPercentage) / 100), // <= FOUND
182:             "Must send more than last bid by minBidIncrementPercentage amount"
183:         );

```


*GitHub* : [181](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L181-L181)

```solidity
365:                 
366:                 uint256 auctioneerPayment = (_auction.amount * (10_000 - creatorRateBps)) / 10_000; // <= FOUND

```


*GitHub* : [366](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L366-L366)

```solidity
390: 
391:                         
392:                         uint256 paymentAmount = (creatorsShare * entropyRateBps * creator.bps) / (10_000 * 10_000); // <= FOUND

```


*GitHub* : [392](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L392-L392)

```solidity
56:                 builderReferralReward: (paymentAmountWei * BUILDER_REWARD_BPS) / 10_000, // <= FOUND
57:                 purchaseReferralReward: (paymentAmountWei * PURCHASE_REFERRAL_BPS) / 10_000, // <= FOUND
58:                 deployerReward: (paymentAmountWei * DEPLOYER_REWARD_BPS) / 10_000, // <= FOUND
59:                 revolutionReward: (paymentAmountWei * REVOLUTION_REWARD_BPS) / 10_000 // <= FOUND
60:             }),

```


*GitHub* : [56](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L56-L59)
### [G-69]<a name="g-69"></a> Same cast is done multiple times
Repeatedly casting the same variable to the same type within a function is redundant and can be optimized for better gas efficiency and code readability. Each unnecessary cast operation, while minor, adds to the gas cost and clutters the code. To optimize, the best practice is to perform the cast once and store the result in a temporary variable, which can then be used wherever needed in the function.

*There are 9 instance(s) of this issue:*

```solidity
152:     function buyToken(
153:         address[] calldata addresses,
154:         uint[] calldata basisPointSplits,
155:         ProtocolRewardAddresses calldata protocolRewardsRecipients
156:     ) public payable nonReentrant whenNotPaused returns (uint256 tokensSoldWad) {
157:         
158:         require(msg.sender != treasury && msg.sender != creatorsAddress, "Funds recipient cannot buy tokens");
159: 
160:         require(msg.value > 0, "Must send ether");
161:         
162:         require(addresses.length == basisPointSplits.length, "Parallel arrays required");
163: 
164:         
165:         uint256 msgValueRemaining = _handleRewardsAndGetValueToSend(
166:             msg.value,
167:             protocolRewardsRecipients.builder,
168:             protocolRewardsRecipients.purchaseReferral,
169:             protocolRewardsRecipients.deployer
170:         );
171: 
172:         
173:         uint256 toPayTreasury = (msgValueRemaining * (10_000 - creatorRateBps)) / 10_000;
174: 
175:         
176:         
177:         uint256 creatorDirectPayment = ((msgValueRemaining - toPayTreasury) * entropyRateBps) / 10_000;
178:         
179:         int totalTokensForCreators = ((msgValueRemaining - toPayTreasury) - creatorDirectPayment) > 0
180:             ? getTokenQuoteForEther((msgValueRemaining - toPayTreasury) - creatorDirectPayment)
181:             : int(0);
182: 
183:         
184:         int totalTokensForBuyers = toPayTreasury > 0 ? getTokenQuoteForEther(toPayTreasury) : int(0);
185: 
186:         
187:         emittedTokenWad += totalTokensForBuyers;
188:         if (totalTokensForCreators > 0) emittedTokenWad += totalTokensForCreators;
189: 
190:         
191:         (bool success, ) = treasury.call{ value: toPayTreasury }(new bytes(0));
192:         require(success, "Transfer failed.");
193: 
194:         
195:         if (creatorDirectPayment > 0) {
196:             (success, ) = creatorsAddress.call{ value: creatorDirectPayment }(new bytes(0));
197:             require(success, "Transfer failed.");
198:         }
199: 
200:         
201:         if (totalTokensForCreators > 0 && creatorsAddress != address(0)) { // <= FOUND 'address(0)'
202:             _mint(creatorsAddress, uint256(totalTokensForCreators)); // <= FOUND 'int256(totalTokensForCreators)'
203:         }
204: 
205:         uint256 bpsSum = 0;
206: 
207:         
208: 
209:         for (uint256 i = 0; i < addresses.length; i++) {
210:             if (totalTokensForBuyers > 0) {
211:                 
212:                 _mint(addresses[i], uint256((totalTokensForBuyers * int(basisPointSplits[i])) / 10_000));
213:             }
214:             bpsSum += basisPointSplits[i];
215:         }
216: 
217:         require(bpsSum == 10_000, "bps must add up to 10_000");
218: 
219:         emit PurchaseFinalized(
220:             msg.sender,
221:             msg.value,
222:             toPayTreasury,
223:             msg.value - msgValueRemaining,
224:             uint256(totalTokensForBuyers), // <= FOUND 'int256(totalTokensForBuyers)'
225:             uint256(totalTokensForCreators), // <= FOUND 'int256(totalTokensForCreators)'
226:             creatorDirectPayment
227:         );
228: 
229:         return uint256(totalTokensForBuyers); // <= FOUND 'int256(totalTokensForBuyers)'
230:     }

```


*GitHub* : [152](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L152-L229)

```solidity
109:     function initialize(
110:         address _erc20VotingToken,
111:         address _erc721VotingToken,
112:         address _initialOwner,
113:         address _maxHeap,
114:         address _dropperAdmin,
115:         IRevolutionBuilder.CultureIndexParams memory _cultureIndexParams
116:     ) external initializer {
117:         require(msg.sender == address(manager), "Only manager can initialize");
118: 
119:         require(_cultureIndexParams.quorumVotesBPS <= MAX_QUORUM_VOTES_BPS, "invalid quorum bps");
120:         require(_cultureIndexParams.erc721VotingTokenWeight > 0, "invalid erc721 voting token weight");
121:         require(_erc721VotingToken != address(0), "invalid erc721 voting token"); // <= FOUND 'address(0)'
122:         require(_erc20VotingToken != address(0), "invalid erc20 voting token"); // <= FOUND 'address(0)'
123: 
124:         
125:         __Ownable_init(_initialOwner);
126: 
127:         
128:         __EIP712_init(string.concat(_cultureIndexParams.name, " CultureIndex"), "1");
129: 
130:         __ReentrancyGuard_init();
131: 
132:         erc20VotingToken = ERC20VotesUpgradeable(_erc20VotingToken);
133:         erc721VotingToken = ERC721CheckpointableUpgradeable(_erc721VotingToken);
134:         erc721VotingTokenWeight = _cultureIndexParams.erc721VotingTokenWeight;
135:         name = _cultureIndexParams.name;
136:         description = _cultureIndexParams.description;
137:         quorumVotesBPS = _cultureIndexParams.quorumVotesBPS;
138:         minVoteWeight = _cultureIndexParams.minVoteWeight;
139:         dropperAdmin = _dropperAdmin;
140: 
141:         emit QuorumVotesBPSSet(quorumVotesBPS, _cultureIndexParams.quorumVotesBPS);
142: 
143:         
144:         maxHeap = MaxHeap(_maxHeap);
145:     }

```


*GitHub* : [109](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L109-L122)

```solidity
307:     function _vote(uint256 pieceId, address voter) internal {
308:         require(pieceId < _currentPieceId, "Invalid piece ID");
309:         require(voter != address(0), "Invalid voter address"); // <= FOUND 'address(0)'
310:         require(!pieces[pieceId].isDropped, "Piece has already been dropped");
311:         require(!(votes[pieceId][voter].voterAddress != address(0)), "Already voted"); // <= FOUND 'address(0)'
312: 
313:         uint256 weight = _getPastVotes(voter, pieces[pieceId].creationBlock);
314:         require(weight > minVoteWeight, "Weight must be greater than minVoteWeight");
315: 
316:         votes[pieceId][voter] = Vote(voter, weight);
317:         totalVoteWeights[pieceId] += weight;
318: 
319:         uint256 totalWeight = totalVoteWeights[pieceId];
320: 
321:         
322:         maxHeap.updateValue(pieceId, totalWeight);
323:         emit VoteCast(pieceId, voter, weight, totalWeight);
324:     }

```


*GitHub* : [307](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L307-L311)

```solidity
419:     function _verifyVoteSignature(
420:         address from,
421:         uint256[] calldata pieceIds,
422:         uint256 deadline,
423:         uint8 v,
424:         bytes32 r,
425:         bytes32 s
426:     ) internal returns (bool success) {
427:         require(deadline >= block.timestamp, "Signature expired");
428: 
429:         bytes32 voteHash;
430: 
431:         voteHash = keccak256(abi.encode(VOTE_TYPEHASH, from, pieceIds, nonces[from]++, deadline));
432: 
433:         bytes32 digest = _hashTypedDataV4(voteHash);
434: 
435:         address recoveredAddress = ecrecover(digest, v, r, s);
436: 
437:         
438:         if (from == address(0)) revert ADDRESS_ZERO(); // <= FOUND 'address(0)'
439: 
440:         
441:         if (recoveredAddress == address(0) || recoveredAddress != from) revert INVALID_SIGNATURE(); // <= FOUND 'address(0)'
442: 
443:         return true;
444:     }

```


*GitHub* : [419](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L419-L441)

```solidity
127:     function _mint(address account, uint256 value) internal override {
128:         if (account == address(0)) { // <= FOUND 'address(0)'
129:             revert ERC20InvalidReceiver(address(0)); // <= FOUND 'address(0)'
130:         }
131:         _update(address(0), account, value); // <= FOUND 'address(0)'
132:     }

```


*GitHub* : [127](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L127-L131)

```solidity
171:     function createBid(uint256 verbId, address bidder) external payable override nonReentrant {
172:         IAuctionHouse.Auction memory _auction = auction;
173: 
174:         
175:         require(bidder != address(0), "Bidder cannot be zero address"); // <= FOUND 'address(0)'
176:         require(_auction.verbId == verbId, "Verb not up for auction");
177:         
178:         require(block.timestamp < _auction.endTime, "Auction expired");
179:         require(msg.value >= reservePrice, "Must send at least reservePrice");
180:         require(
181:             msg.value >= _auction.amount + ((_auction.amount * minBidIncrementPercentage) / 100),
182:             "Must send more than last bid by minBidIncrementPercentage amount"
183:         );
184: 
185:         address payable lastBidder = _auction.bidder;
186: 
187:         auction.amount = msg.value;
188:         auction.bidder = payable(bidder);
189: 
190:         
191:         bool extended = _auction.endTime - block.timestamp < timeBuffer;
192:         if (extended) auction.endTime = _auction.endTime = block.timestamp + timeBuffer;
193: 
194:         
195:         if (lastBidder != address(0)) _safeTransferETHWithFallback(lastBidder, _auction.amount); // <= FOUND 'address(0)'
196: 
197:         emit AuctionBid(_auction.verbId, bidder, msg.sender, msg.value, extended);
198: 
199:         if (extended) emit AuctionExtended(_auction.verbId, _auction.endTime);
200:     }

```


*GitHub* : [171](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L171-L195)

```solidity
336:     function _settleAuction() internal {
337:         IAuctionHouse.Auction memory _auction = auction;
338: 
339:         require(_auction.startTime != 0, "Auction hasn't begun");
340:         require(!_auction.settled, "Auction has already been settled");
341:         
342:         require(block.timestamp >= _auction.endTime, "Auction hasn't completed");
343: 
344:         auction.settled = true;
345: 
346:         uint256 creatorTokensEmitted = 0;
347:         
348:         if (address(this).balance < reservePrice) {
349:             
350:             if (_auction.bidder != address(0)) { // <= FOUND 'address(0)'
351:                 _safeTransferETHWithFallback(_auction.bidder, _auction.amount);
352:             }
353: 
354:             
355:             verbs.burn(_auction.verbId);
356:         } else {
357:             
358:             if (_auction.bidder == address(0)) // <= FOUND 'address(0)'
359:                 verbs.burn(_auction.verbId);
360:                 
361:             else verbs.transferFrom(address(this), _auction.bidder, _auction.verbId);
362: 
363:             if (_auction.amount > 0) {
364:                 
365:                 uint256 auctioneerPayment = (_auction.amount * (10_000 - creatorRateBps)) / 10_000;
366: 
367:                 
368:                 uint256 creatorsShare = _auction.amount - auctioneerPayment;
369: 
370:                 uint256 numCreators = verbs.getArtPieceById(_auction.verbId).creators.length;
371:                 address deployer = verbs.getArtPieceById(_auction.verbId).sponsor;
372: 
373:                 
374:                 uint256[] memory vrgdaSplits = new uint256[](numCreators);
375:                 address[] memory vrgdaReceivers = new address[](numCreators);
376: 
377:                 
378:                 _safeTransferETHWithFallback(owner(), auctioneerPayment);
379: 
380:                 uint256 ethPaidToCreators = 0;
381: 
382:                 
383:                 if (creatorsShare > 0 && entropyRateBps > 0) {
384:                     for (uint256 i = 0; i < numCreators; i++) {
385:                         ICultureIndex.CreatorBps memory creator = verbs.getArtPieceById(_auction.verbId).creators[i];
386:                         vrgdaReceivers[i] = creator.creator;
387:                         vrgdaSplits[i] = creator.bps;
388: 
389:                         
390:                         uint256 paymentAmount = (creatorsShare * entropyRateBps * creator.bps) / (10_000 * 10_000);
391:                         ethPaidToCreators += paymentAmount;
392: 
393:                         
394:                         _safeTransferETHWithFallback(creator.creator, paymentAmount);
395:                     }
396:                 }
397: 
398:                 
399:                 if (creatorsShare > ethPaidToCreators) {
400:                     creatorTokensEmitted = erc20TokenEmitter.buyToken{ value: creatorsShare - ethPaidToCreators }(
401:                         vrgdaReceivers,
402:                         vrgdaSplits,
403:                         IERC20TokenEmitter.ProtocolRewardAddresses({
404:                             builder: address(0), // <= FOUND 'address(0)'
405:                             purchaseReferral: address(0), // <= FOUND 'address(0)'
406:                             deployer: deployer
407:                         })
408:                     );
409:                 }
410:             }
411:         }
412: 
413:         emit AuctionSettled(_auction.verbId, _auction.bidder, _auction.amount, creatorTokensEmitted);
414:     }

```


*GitHub* : [336](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L336-L405)

```solidity
130:     function initialize(
131:         address _minter,
132:         address _initialOwner,
133:         address _descriptor,
134:         address _cultureIndex,
135:         IRevolutionBuilder.ERC721TokenParams memory _erc721TokenParams
136:     ) external initializer {
137:         require(msg.sender == address(manager), "Only manager can initialize");
138: 
139:         require(_minter != address(0), "Minter cannot be zero address"); // <= FOUND 'address(0)'
140:         require(_initialOwner != address(0), "Initial owner cannot be zero address"); // <= FOUND 'address(0)'
141: 
142:         
143:         __ReentrancyGuard_init();
144: 
145:         
146:         __Ownable_init(_initialOwner);
147: 
148:         
149:         __ERC721_init(_erc721TokenParams.name, _erc721TokenParams.symbol);
150:         _contractURIHash = _erc721TokenParams.contractURIHash;
151: 
152:         
153:         minter = _minter;
154:         descriptor = IDescriptorMinimal(_descriptor);
155:         cultureIndex = ICultureIndex(_cultureIndex);
156:     }

```


*GitHub* : [130](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L130-L140)

```solidity
65:     function _depositPurchaseRewards(
66:         uint256 paymentAmountWei,
67:         address builderReferral,
68:         address purchaseReferral,
69:         address deployer
70:     ) internal returns (uint256) {
71:         (RewardsSettings memory settings, uint256 totalReward) = computePurchaseRewards(paymentAmountWei);
72: 
73:         if (builderReferral == address(0)) builderReferral = revolutionRewardRecipient; // <= FOUND 'address(0)'
74: 
75:         if (deployer == address(0)) deployer = revolutionRewardRecipient; // <= FOUND 'address(0)'
76: 
77:         if (purchaseReferral == address(0)) purchaseReferral = revolutionRewardRecipient; // <= FOUND 'address(0)'
78: 
79:         protocolRewards.depositRewards{ value: totalReward }(
80:             builderReferral,
81:             settings.builderReferralReward,
82:             purchaseReferral,
83:             settings.purchaseReferralReward,
84:             deployer,
85:             settings.deployerReward,
86:             revolutionRewardRecipient,
87:             settings.revolutionReward
88:         );
89: 
90:         return totalReward;
91:     }

```


*GitHub* : [65](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L65-L77)
### [G-70]<a name="g-70"></a> Assigning to structs can be more efficient
Rather defining the struct in a single line, it is more efficient to declare an empty struct and then assign each struct element individually. This can net quite a large gas saving of 130 per instance.

*There are 1 instance(s) of this issue:*

```solidity
309:     function _createAuction() internal { // <= FOUND
310:         
311:         require(gasleft() >= MIN_TOKEN_MINT_GAS_THRESHOLD, "Insufficient gas for creating auction");
312: 
313:         try verbs.mint() returns (uint256 verbId) {
314:             uint256 startTime = block.timestamp;
315:             uint256 endTime = startTime + duration;
316: 
317:             auction = Auction({
318:                 verbId: verbId,
319:                 amount: 0,
320:                 startTime: startTime,
321:                 endTime: endTime,
322:                 bidder: payable(0),
323:                 settled: false
324:             });
325: 
326:             emit AuctionCreated(verbId, startTime, endTime);
327:         } catch {
328:             _pause();
329:         }
330:     }

```


*GitHub* : [309](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L309-L309)
### [G-71]<a name="g-71"></a> Cache address(this) when used more than once

*There are 1 instance(s) of this issue:*

```solidity
336:     function _settleAuction() internal {
337:         IAuctionHouse.Auction memory _auction = auction;
338: 
339:         require(_auction.startTime != 0, "Auction hasn't begun");
340:         require(!_auction.settled, "Auction has already been settled");
341:         
342:         require(block.timestamp >= _auction.endTime, "Auction hasn't completed");
343: 
344:         auction.settled = true;
345: 
346:         uint256 creatorTokensEmitted = 0;
347:         
348:         if (address(this).balance < reservePrice) { // <= FOUND
349:             
350:             if (_auction.bidder != address(0)) {
351:                 _safeTransferETHWithFallback(_auction.bidder, _auction.amount);
352:             }
353: 
354:             
355:             verbs.burn(_auction.verbId);
356:         } else {
357:             
358:             if (_auction.bidder == address(0))
359:                 verbs.burn(_auction.verbId);
360:                 
361:             else verbs.transferFrom(address(this), _auction.bidder, _auction.verbId); // <= FOUND
362: 
363:             if (_auction.amount > 0) {
364:                 
365:                 uint256 auctioneerPayment = (_auction.amount * (10_000 - creatorRateBps)) / 10_000;
366: 
367:                 
368:                 uint256 creatorsShare = _auction.amount - auctioneerPayment;
369: 
370:                 uint256 numCreators = verbs.getArtPieceById(_auction.verbId).creators.length;
371:                 address deployer = verbs.getArtPieceById(_auction.verbId).sponsor;
372: 
373:                 
374:                 uint256[] memory vrgdaSplits = new uint256[](numCreators);
375:                 address[] memory vrgdaReceivers = new address[](numCreators);
376: 
377:                 
378:                 _safeTransferETHWithFallback(owner(), auctioneerPayment);
379: 
380:                 uint256 ethPaidToCreators = 0;
381: 
382:                 
383:                 if (creatorsShare > 0 && entropyRateBps > 0) {
384:                     for (uint256 i = 0; i < numCreators; i++) {
385:                         ICultureIndex.CreatorBps memory creator = verbs.getArtPieceById(_auction.verbId).creators[i];
386:                         vrgdaReceivers[i] = creator.creator;
387:                         vrgdaSplits[i] = creator.bps;
388: 
389:                         
390:                         uint256 paymentAmount = (creatorsShare * entropyRateBps * creator.bps) / (10_000 * 10_000);
391:                         ethPaidToCreators += paymentAmount;
392: 
393:                         
394:                         _safeTransferETHWithFallback(creator.creator, paymentAmount);
395:                     }
396:                 }
397: 
398:                 
399:                 if (creatorsShare > ethPaidToCreators) {
400:                     creatorTokensEmitted = erc20TokenEmitter.buyToken{ value: creatorsShare - ethPaidToCreators }(
401:                         vrgdaReceivers,
402:                         vrgdaSplits,
403:                         IERC20TokenEmitter.ProtocolRewardAddresses({
404:                             builder: address(0),
405:                             purchaseReferral: address(0),
406:                             deployer: deployer
407:                         })
408:                     );
409:                 }
410:             }

```


*GitHub* : [336](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L336-L361)
### [G-72]<a name="g-72"></a> Multiline comments should be terminated with '*/' and not '**/'
https://docs.soliditylang.org/en/latest/natspec-format.html#:~:text=For%20Solidity%20you%20may%20choose%20///%20for%20single%20or%20multi%2Dline%20comments%2C%20or%20/**%20and%20ending%20with%20*/.

*There are 1 instance(s) of this issue:*

```solidity
5: /********************************* // <= FOUND
6:  * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ *
7:  * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ *
8:  * ░░░░░░█████████░░█████████░░░ *
9:  * ░░░░░░██░░░████░░██░░░████░░░ *
10:  * ░░██████░░░████████░░░████░░░ *
11:  * ░░██░░██░░░████░░██░░░████░░░ *
12:  * ░░██░░██░░░████░░██░░░████░░░ *
13:  * ░░░░░░█████████░░█████████░░░ *
14:  * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ *
15:  * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ *
16:  *********************************/ // <= FOUND

```


*GitHub* : [5](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L5-L16)### NonCritical Risk Issues


### [N-01]<a name="n-01"></a> Emits without msg.sender parameter 
In Solidity, when `msg.sender` plays a crucial role in a function's logic, it's important for transparency and auditability that any events emitted by this function include `msg.sender` as a parameter. This practice enhances the traceability and accountability of transactions, allowing users and external observers to easily track who initiated a particular action. Including `msg.sender` in event logs helps in creating a clear and verifiable record of interactions with the contract, thereby increasing user trust and facilitating easier debugging and analysis of contract behavior. It's a key aspect of writing clear, transparent, and user-friendly smart contracts.

*There are 2 instance(s) of this issue:*

```solidity
109:     function initialize(
110:         address _erc20VotingToken,
111:         address _erc721VotingToken,
112:         address _initialOwner,
113:         address _maxHeap,
114:         address _dropperAdmin,
115:         IRevolutionBuilder.CultureIndexParams memory _cultureIndexParams
116:     ) external initializer {
117:         require(msg.sender == address(manager), "Only manager can initialize"); // <= FOUND
118: 
119:         require(_cultureIndexParams.quorumVotesBPS <= MAX_QUORUM_VOTES_BPS, "invalid quorum bps");
120:         require(_cultureIndexParams.erc721VotingTokenWeight > 0, "invalid erc721 voting token weight");
121:         require(_erc721VotingToken != address(0), "invalid erc721 voting token");
122:         require(_erc20VotingToken != address(0), "invalid erc20 voting token");
123: 
124:         
125:         __Ownable_init(_initialOwner);
126: 
127:         
128:         __EIP712_init(string.concat(_cultureIndexParams.name, " CultureIndex"), "1");
129: 
130:         __ReentrancyGuard_init();
131: 
132:         erc20VotingToken = ERC20VotesUpgradeable(_erc20VotingToken);
133:         erc721VotingToken = ERC721CheckpointableUpgradeable(_erc721VotingToken);
134:         erc721VotingTokenWeight = _cultureIndexParams.erc721VotingTokenWeight;
135:         name = _cultureIndexParams.name;
136:         description = _cultureIndexParams.description;
137:         quorumVotesBPS = _cultureIndexParams.quorumVotesBPS;
138:         minVoteWeight = _cultureIndexParams.minVoteWeight;
139:         dropperAdmin = _dropperAdmin;
140: 
141:         emit QuorumVotesBPSSet(quorumVotesBPS, _cultureIndexParams.quorumVotesBPS); // <= FOUND
142: 
143:         
144:         maxHeap = MaxHeap(_maxHeap);
145:     }

```


*GitHub* : [117](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L117-L141)

```solidity
152:     function buyToken(
153:         address[] calldata addresses,
154:         uint[] calldata basisPointSplits,
155:         ProtocolRewardAddresses calldata protocolRewardsRecipients
156:     ) public payable nonReentrant whenNotPaused returns (uint256 tokensSoldWad) {
157:         
158:         require(msg.sender != treasury && msg.sender != creatorsAddress, "Funds recipient cannot buy tokens"); // <= FOUND
159: 
160:         require(msg.value > 0, "Must send ether");
161:         
162:         require(addresses.length == basisPointSplits.length, "Parallel arrays required");
163: 
164:         
165:         uint256 msgValueRemaining = _handleRewardsAndGetValueToSend(
166:             msg.value,
167:             protocolRewardsRecipients.builder,
168:             protocolRewardsRecipients.purchaseReferral,
169:             protocolRewardsRecipients.deployer
170:         );
171: 
172:         
173:         uint256 toPayTreasury = (msgValueRemaining * (10_000 - creatorRateBps)) / 10_000;
174: 
175:         
176:         
177:         uint256 creatorDirectPayment = ((msgValueRemaining - toPayTreasury) * entropyRateBps) / 10_000;
178:         
179:         int totalTokensForCreators = ((msgValueRemaining - toPayTreasury) - creatorDirectPayment) > 0
180:             ? getTokenQuoteForEther((msgValueRemaining - toPayTreasury) - creatorDirectPayment)
181:             : int(0);
182: 
183:         
184:         int totalTokensForBuyers = toPayTreasury > 0 ? getTokenQuoteForEther(toPayTreasury) : int(0);
185: 
186:         
187:         emittedTokenWad += totalTokensForBuyers; // <= FOUND
188:         if (totalTokensForCreators > 0) emittedTokenWad += totalTokensForCreators; // <= FOUND
189: 
190:         
191:         (bool success, ) = treasury.call{ value: toPayTreasury }(new bytes(0));
192:         require(success, "Transfer failed.");
193: 
194:         
195:         if (creatorDirectPayment > 0) {
196:             (success, ) = creatorsAddress.call{ value: creatorDirectPayment }(new bytes(0));
197:             require(success, "Transfer failed.");
198:         }
199: 
200:         
201:         if (totalTokensForCreators > 0 && creatorsAddress != address(0)) {
202:             _mint(creatorsAddress, uint256(totalTokensForCreators));
203:         }
204: 
205:         uint256 bpsSum = 0;
206: 
207:         
208: 
209:         for (uint256 i = 0; i < addresses.length; i++) {
210:             if (totalTokensForBuyers > 0) {
211:                 
212:                 _mint(addresses[i], uint256((totalTokensForBuyers * int(basisPointSplits[i])) / 10_000));
213:             }
214:             bpsSum += basisPointSplits[i];
215:         }
216: 
217:         require(bpsSum == 10_000, "bps must add up to 10_000");
218: 
219:         emit PurchaseFinalized( // <= FOUND
220:             msg.sender, // <= FOUND
221:             msg.value,
222:             toPayTreasury,
223:             msg.value - msgValueRemaining,
224:             uint256(totalTokensForBuyers),
225:             uint256(totalTokensForCreators),
226:             creatorDirectPayment
227:         );
228: 
229:         return uint256(totalTokensForBuyers);
230:     }

```


*GitHub* : [158](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L158-L220)
### [N-02]<a name="n-02"></a> Local variable shadowing 
Local variable shadowing in Solidity creates confusion by allowing a local variable within a function to share the same name as a state variable or another local variable in an outer scope. This confusion can lead to errors in code interpretation and execution. It's especially problematic when maintaining or modifying the code, as it may inadvertently introduce bugs. To resolve this issue, developers should avoid variable shadowing by using unique and descriptive names for variables. Leveraging development tools and linters that warn about shadowing can also be helpful. By paying careful attention to variable naming and being aware of shadowing, developers can create more readable and robust code.

*There are 1 instance(s) of this issue:*

```solidity
309:     function _createAuction() internal {
310:         
311:         require(gasleft() >= MIN_TOKEN_MINT_GAS_THRESHOLD, "Insufficient gas for creating auction");
312: 
313:         try verbs.mint() returns (uint256 verbId) {
314:             uint256 startTime = block.timestamp; // <= FOUND 'int256 startTime '
315:             uint256 endTime = startTime + duration;
316: 
317:             auction = Auction({
318:                 verbId: verbId,
319:                 amount: 0,
320:                 startTime: startTime,
321:                 endTime: endTime,
322:                 bidder: payable(0),
323:                 settled: false
324:             });
325: 
326:             emit AuctionCreated(verbId, startTime, endTime);
327:         } catch {
328:             _pause();
329:         }
330:     }

```


*GitHub* : [314](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L314-L314)
### [N-03]<a name="n-03"></a> Cyclomatic complexity in functions 
Cyclomatic complexity is a software metric used to measure the complexity of a program. It quantifies the number of linearly independent paths through a program's source code, giving an idea of how complex the control flow is. High cyclomatic complexity may indicate a higher risk of defects and can make the code harder to understand, test, and maintain. It often suggests that a function or method is trying to do too much, and a refactor might be needed. By breaking down complex functions into smaller, more focused pieces, you can improve readability, ease of testing, and overall maintainability.

*There are 1 instance(s) of this issue:*

```solidity
336:     function _settleAuction() internal { // <= FOUND
337:         IAuctionHouse.Auction memory _auction = auction;
338: 
339:         require(_auction.startTime != 0, "Auction hasn't begun");
340:         require(!_auction.settled, "Auction has already been settled");
341:         
342:         require(block.timestamp >= _auction.endTime, "Auction hasn't completed");
343: 
344:         auction.settled = true;
345: 
346:         uint256 creatorTokensEmitted = 0;
347:         
348:         if (address(this).balance < reservePrice) {
349:             
350:             if (_auction.bidder != address(0)) {
351:                 _safeTransferETHWithFallback(_auction.bidder, _auction.amount);
352:             }
353: 
354:             
355:             verbs.burn(_auction.verbId);
356:         } else {
357:             
358:             if (_auction.bidder == address(0))
359:                 verbs.burn(_auction.verbId);
360:                 
361:             else verbs.transferFrom(address(this), _auction.bidder, _auction.verbId);
362: 
363:             if (_auction.amount > 0) {
364:                 
365:                 uint256 auctioneerPayment = (_auction.amount * (10_000 - creatorRateBps)) / 10_000;
366: 
367:                 
368:                 uint256 creatorsShare = _auction.amount - auctioneerPayment;
369: 
370:                 uint256 numCreators = verbs.getArtPieceById(_auction.verbId).creators.length;
371:                 address deployer = verbs.getArtPieceById(_auction.verbId).sponsor;
372: 
373:                 
374:                 uint256[] memory vrgdaSplits = new uint256[](numCreators);
375:                 address[] memory vrgdaReceivers = new address[](numCreators);
376: 
377:                 
378:                 _safeTransferETHWithFallback(owner(), auctioneerPayment);
379: 
380:                 uint256 ethPaidToCreators = 0;
381: 
382:                 
383:                 if (creatorsShare > 0 && entropyRateBps > 0) {
384:                     for (uint256 i = 0; i < numCreators; i++) {
385:                         ICultureIndex.CreatorBps memory creator = verbs.getArtPieceById(_auction.verbId).creators[i];

```


*GitHub* : [336](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L336-L336)
### [N-04]<a name="n-04"></a> Missing checks for address(0x0) when updating address state variables

*There are 1 instance(s) of this issue:*

```solidity
55:     function initialize(address _initialOwner, address _admin) public initializer {
56:         require(msg.sender == address(manager), "Only manager can initialize");
57: 
58:         admin = _admin; // <= FOUND
59: 
60:         __Ownable_init(_initialOwner);
61:         __ReentrancyGuard_init();
62:     }

```


*GitHub* : [55](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L55-L58)
### [N-05]<a name="n-05"></a> Two or more functions contain the exact same code 
In Solidity programming, duplicate code in multiple functions introduces potential security risks and maintainability issues. It magnifies the impact of any bugs or vulnerabilities, since developers must fix these in every location where the code is replicated. Overlooking any instance of replicated code could leave vulnerabilities intact. Furthermore, code duplication leads to contract bloating, diminishing the readability and manageability of the code. Future logic changes would need to be applied in every location where the code is replicated, increasing the complexity of updates. To resolve this, it is recommended to consolidate duplicate code into a single internal function, and replace the duplicate instances with calls to this new function. This approach streamlines the code, reducing the attack surface and making it easier to maintain and update.

*There are 10 instance(s) of this issue:*

```solidity
543:     function _authorizeUpgrade(address _newImpl) internal view override onlyOwner {
544:         
545:         if (!manager.isRegisteredUpgrade(_getImplementation(), _newImpl)) revert INVALID_UPGRADE(_newImpl);
546:     }

```


*GitHub* :

```solidity
452:     function _authorizeUpgrade(address _newImpl) internal view override onlyOwner whenPaused {
453:         
454:         if (!manager.isRegisteredUpgrade(_getImplementation(), _newImpl)) revert INVALID_UPGRADE(_newImpl);
455:     }

```


*GitHub* :

```solidity
94:     function transfer(address, uint256) public virtual override returns (bool) {
95:         revert TRANSFER_NOT_ALLOWED();
96:     }

```


*GitHub* :

```solidity
101:     function _transfer(address from, address to, uint256 value) internal override {
102:         revert TRANSFER_NOT_ALLOWED();
103:     }

```


*GitHub* :

```solidity
108:     function transferFrom(address, address, uint256) public virtual override returns (bool) {
109:         revert TRANSFER_NOT_ALLOWED();
110:     }

```


*GitHub* :

```solidity
115:     function approve(address, uint256) public virtual override returns (bool) {
116:         revert TRANSFER_NOT_ALLOWED();
117:     }

```


*GitHub* :

```solidity
141:     function _approve(address owner, address spender, uint256 value) internal override {
142:         revert TRANSFER_NOT_ALLOWED();
143:     }

```


*GitHub* :

```solidity
148:     function _approve(address owner, address spender, uint256 value, bool emitEvent) internal virtual override {
149:         revert TRANSFER_NOT_ALLOWED();
150:     }

```


*GitHub* :

```solidity
155:     function _spendAllowance(address owner, address spender, uint256 value) internal virtual override {
156:         revert TRANSFER_NOT_ALLOWED();
157:     }

```


*GitHub* :

```solidity
208:     function pause() external override onlyOwner {
209:         _pause();
210:     }

```


*GitHub* :
### [N-06]<a name="n-06"></a> Greater than comparisons made on state uints that can be set to max 
When state variables (uints) that can be set to their maximum value (type(uint256).max for example) are used in "greater than" comparisons, it introduces a risk of logic errors. If the state variable ever reaches this max value, any comparison expecting it to increment further will fail. This can halt or disrupt contract functionality. To avoid this, implement checks to ensure that the state variable doesn't exceed a certain threshold below the max value.

*There are 4 instance(s) of this issue:*

```solidity
171:     function createBid(uint256 verbId, address bidder) external payable override nonReentrant {
172:         IAuctionHouse.Auction memory _auction = auction;
173: 
174:         
175:         require(bidder != address(0), "Bidder cannot be zero address");
176:         require(_auction.verbId == verbId, "Verb not up for auction");
177:         
178:         require(block.timestamp < _auction.endTime, "Auction expired");
179:         require(msg.value >= reservePrice, "Must send at least reservePrice"); // <= FOUND
180:         require(
181:             msg.value >= _auction.amount + ((_auction.amount * minBidIncrementPercentage) / 100),
182:             "Must send more than last bid by minBidIncrementPercentage amount"
183:         );
184: 
185:         address payable lastBidder = _auction.bidder;
186: 
187:         auction.amount = msg.value;
188:         auction.bidder = payable(bidder);
189: 
190:         
191:         bool extended = _auction.endTime - block.timestamp < timeBuffer;
192:         if (extended) auction.endTime = _auction.endTime = block.timestamp + timeBuffer;
193: 
194:         
195:         if (lastBidder != address(0)) _safeTransferETHWithFallback(lastBidder, _auction.amount);
196: 
197:         emit AuctionBid(_auction.verbId, bidder, msg.sender, msg.value, extended);
198: 
199:         if (extended) emit AuctionExtended(_auction.verbId, _auction.endTime);
200:     }

```


*GitHub* : [179](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L179-L179)

```solidity
217:     function setCreatorRateBps(uint256 _creatorRateBps) external onlyOwner {
218:         require(
219:             _creatorRateBps >= minCreatorRateBps, // <= FOUND
220:             "Creator rate must be greater than or equal to minCreatorRateBps"
221:         );
222:         require(_creatorRateBps <= 10_000, "Creator rate must be less than or equal to 10_000");
223:         creatorRateBps = _creatorRateBps;
224: 
225:         emit CreatorRateBpsUpdated(_creatorRateBps);
226:     }

```


*GitHub* : [219](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L219-L219)

```solidity
113:     function initialize(
114:         address _erc721Token,
115:         address _erc20TokenEmitter,
116:         address _initialOwner,
117:         address _weth,
118:         IRevolutionBuilder.AuctionParams calldata _auctionParams
119:     ) external initializer {
120:         require(msg.sender == address(manager), "Only manager can initialize");
121:         require(_weth != address(0), "WETH cannot be zero address");
122: 
123:         __Pausable_init();
124:         __ReentrancyGuard_init();
125:         __Ownable_init(_initialOwner);
126: 
127:         _pause();
128: 
129:         require(
130:             _auctionParams.creatorRateBps >= _auctionParams.minCreatorRateBps,
131:             "Creator rate must be greater than or equal to the creator rate"
132:         );
133: 
134:         verbs = IVerbsToken(_erc721Token);
135:         erc20TokenEmitter = IERC20TokenEmitter(_erc20TokenEmitter);
136:         timeBuffer = _auctionParams.timeBuffer;
137:         reservePrice = _auctionParams.reservePrice; // <= FOUND
138:         minBidIncrementPercentage = _auctionParams.minBidIncrementPercentage;
139:         duration = _auctionParams.duration;
140:         creatorRateBps = _auctionParams.creatorRateBps;
141:         entropyRateBps = _auctionParams.entropyRateBps;
142:         minCreatorRateBps = _auctionParams.minCreatorRateBps; // <= FOUND
143:         WETH = _weth;
144:     }

```


*GitHub* : [137](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L137-L142)

```solidity
287:     function setReservePrice(uint256 _reservePrice) external override onlyOwner {
288:         reservePrice = _reservePrice; // <= FOUND
289: 
290:         emit AuctionReservePriceUpdated(_reservePrice);
291:     }

```


*GitHub* : [288](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L288-L288)
### [N-07]<a name="n-07"></a> Empty constructor body without natspec comments 
A void constructor in Solidity refers to a constructor that has no logic or code within it. It can be redundant and should be avoided because it unnecessarily increases the contract's bytecode, leading to higher deployment and gas costs. In a contract, a constructor is often used to initialize state variables or set specific conditions at the time of deployment. If no such initialization or conditions are required, the empty or void constructor serves no functional purpose. The resolution is simply to omit the constructor if it is not needed, thereby optimizing the contract for efficiency and readability.

*There are 1 instance(s) of this issue:*

```solidity
7:     constructor(
8:         address _protocolRewards,
9:         address _revolutionRewardRecipient
10:     ) payable RewardSplits(_protocolRewards, _revolutionRewardRecipient) {}

```


*GitHub* : [7](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/TokenEmitter/TokenEmitterRewards.sol#L7-L7)
### [N-08]<a name="n-08"></a> Inconsistent comment spacing 
Some comments use // X and others //X Amend comments to use only use // X or //X consistently

*There are 3 instance(s) of this issue:*

```solidity
181: //Require that creatorArray is not more than MAX_NUM_CREATORS to prevent gas limit issues

```


*GitHub* : [181](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L181-L181)

```solidity
488: //slither-disable-next-line unused-return

```


*GitHub* : [488](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L488-L488)

```solidity
525: //set the piece as dropped

```


*GitHub* : [525](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L525-L525)
### [N-09]<a name="n-09"></a> Overly complicated arithmetic 
To maintain readability in code, particularly in Solidity which can involve complex mathematical operations, it is often recommended to limit the number of arithmetic operations to a maximum of 2-3 per line. Too many operations in a single line can make the code difficult to read and understand, increase the likelihood of mistakes, and complicate the process of debugging and reviewing the code. Consider splitting such operations over more than one line, take special care when dealing with division however. Try to limit the number of arithmetic operations to a maximum of 3 per line.

*There are 2 instance(s) of this issue:*

```solidity
271:     function getTokenQuoteForPayment(uint256 paymentAmount) external view returns (int gainedX) {
272:         require(paymentAmount > 0, "Payment amount must be greater than 0");
273:         
274:         
275:         return
276:             vrgdac.yToX({
277:                 timeSinceStart: toDaysWadUnsafe(block.timestamp - startTime),
278:                 sold: emittedTokenWad,
279:                 amount: int(((paymentAmount - computeTotalReward(paymentAmount)) * (10_000 - creatorRateBps)) / 10_000) // <= FOUND
280:             });
281:     }

```


*GitHub* : [279](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L279-L279)

```solidity
336:     function _settleAuction() internal {
337:         IAuctionHouse.Auction memory _auction = auction;
338: 
339:         require(_auction.startTime != 0, "Auction hasn't begun");
340:         require(!_auction.settled, "Auction has already been settled");
341:         
342:         require(block.timestamp >= _auction.endTime, "Auction hasn't completed");
343: 
344:         auction.settled = true;
345: 
346:         uint256 creatorTokensEmitted = 0;
347:         
348:         if (address(this).balance < reservePrice) {
349:             
350:             if (_auction.bidder != address(0)) {
351:                 _safeTransferETHWithFallback(_auction.bidder, _auction.amount);
352:             }
353: 
354:             
355:             verbs.burn(_auction.verbId);
356:         } else {
357:             
358:             if (_auction.bidder == address(0))
359:                 verbs.burn(_auction.verbId);
360:                 
361:             else verbs.transferFrom(address(this), _auction.bidder, _auction.verbId);
362: 
363:             if (_auction.amount > 0) {
364:                 
365:                 uint256 auctioneerPayment = (_auction.amount * (10_000 - creatorRateBps)) / 10_000;
366: 
367:                 
368:                 uint256 creatorsShare = _auction.amount - auctioneerPayment;
369: 
370:                 uint256 numCreators = verbs.getArtPieceById(_auction.verbId).creators.length;
371:                 address deployer = verbs.getArtPieceById(_auction.verbId).sponsor;
372: 
373:                 
374:                 uint256[] memory vrgdaSplits = new uint256[](numCreators);
375:                 address[] memory vrgdaReceivers = new address[](numCreators);
376: 
377:                 
378:                 _safeTransferETHWithFallback(owner(), auctioneerPayment);
379: 
380:                 uint256 ethPaidToCreators = 0;
381: 
382:                 
383:                 if (creatorsShare > 0 && entropyRateBps > 0) {
384:                     for (uint256 i = 0; i < numCreators; i++) {
385:                         ICultureIndex.CreatorBps memory creator = verbs.getArtPieceById(_auction.verbId).creators[i];
386:                         vrgdaReceivers[i] = creator.creator;
387:                         vrgdaSplits[i] = creator.bps;
388: 
389:                         
390:                         uint256 paymentAmount = (creatorsShare * entropyRateBps * creator.bps) / (10_000 * 10_000); // <= FOUND
391:                         ethPaidToCreators += paymentAmount;
392: 
393:                         
394:                         _safeTransferETHWithFallback(creator.creator, paymentAmount);
395:                     }
396:                 }
397: 
398:                 
399:                 if (creatorsShare > ethPaidToCreators) {
400:                     creatorTokensEmitted = erc20TokenEmitter.buyToken{ value: creatorsShare - ethPaidToCreators }(
401:                         vrgdaReceivers,
402:                         vrgdaSplits,
403:                         IERC20TokenEmitter.ProtocolRewardAddresses({
404:                             builder: address(0),
405:                             purchaseReferral: address(0),
406:                             deployer: deployer
407:                         })
408:                     );
409:                 }
410:             }
411:         }
412: 
413:         emit AuctionSettled(_auction.verbId, _auction.bidder, _auction.amount, creatorTokensEmitted);
414:     }

```


*GitHub* : [390](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L390-L390)
### [N-10]<a name="n-10"></a> Consider adding emergency-stop functionality 
In the event of a security breach or any unforeseen emergency, swiftly suspending all protocol operations becomes crucial. Having a mechanism in place to halt all functions collectively, instead of pausing individual contracts separately, substantially enhances the efficiency of mitigating ongoing attacks or vulnerabilities. This not only quickens the response time to potential threats but also reduces operational stress during these critical periods. Therefore, consider integrating a 'circuit breaker' or 'emergency stop' function into the smart contract system architecture. Such a feature would provide the capability to suspend the entire protocol instantly, which could prove invaluable during a time-sensitive crisis management situation.

*There are 5 instance(s) of this issue:*

```solidity
14: contract MaxHeap is VersionedContract, UUPS, Ownable2StepUpgradeable, ReentrancyGuardUpgradeable 

```


*GitHub* : [14](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L14-L14)

```solidity
contract CultureIndex is ICultureIndex, VersionedContract, UUPS, Ownable2StepUpgradeable, ReentrancyGuardUpgradeable, EIP712Upgradeable 

```


*GitHub* :

```solidity
29: contract NontransferableERC20Votes is Initializable, ERC20VotesUpgradeable, Ownable2StepUpgradeable 

```


*GitHub* : [29](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L29-L29)

```solidity
contract VerbsToken is IVerbsToken, VersionedContract, UUPS, Ownable2StepUpgradeable, ReentrancyGuardUpgradeable, ERC721CheckpointableUpgradeable 

```


*GitHub* :

```solidity
11: contract VRGDAC 

```


*GitHub* : [11](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L11-L11)
### [N-11]<a name="n-11"></a> Duplicated revert() checks should be refactored to a modifier or function

*There are 1 instance(s) of this issue:*

```solidity
454:         
455:         if (!manager.isRegisteredUpgrade(_getImplementation(), _newImpl)) revert INVALID_UPGRADE(_newImpl);

```


*GitHub* :
### [N-12]<a name="n-12"></a> Missing events in sensitive functions 
Sensitive setter functions in smart contracts often alter critical state variables. Without events emitted in these functions, external observers or dApps cannot easily track or react to these state changes. Missing events can obscure contract activity, hampering transparency and making integration more challenging. To resolve this, incorporate appropriate event emissions within these functions. Events offer an efficient way to log crucial changes, aiding in real-time tracking and post-transaction verification.

*There are 2 instance(s) of this issue:*

```solidity
169:     function setContractURIHash(string memory newContractURIHash) external onlyOwner { // <= FOUND
170:         _contractURIHash = newContractURIHash;
171:     }

```


*GitHub* : [169](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L169-L169)

```solidity
136:     function updateValue(uint256 itemId, uint256 newValue) public onlyAdmin { // <= FOUND
137:         uint256 position = positionMapping[itemId];
138:         uint256 oldValue = valueMapping[itemId];
139: 
140:         
141:         valueMapping[itemId] = newValue;
142: 
143:         
144:         if (newValue > oldValue) {
145:             
146:             while (position != 0 && valueMapping[heap[position]] > valueMapping[heap[parent(position)]]) {
147:                 swap(position, parent(position));
148:                 position = parent(position);
149:             }
150:         } else if (newValue < oldValue) maxHeapify(position); 
151:     }

```


*GitHub* : [136](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L136-L136)
### [N-13]<a name="n-13"></a> Use assembly to write address storage values 
Using assembly to directly write storage values can be a gas-saving optimization, bypassing some of Solidity's overhead. While this can lead to reduced transaction costs, it introduces risks, as assembly lacks the safety checks inherent in high-level Solidity. Incorrect use can lead to critical vulnerabilities. If opting for this gas optimization, ensure that: 1) The assembly block is well-documented, detailing its purpose and operation; 2) Thorough tests are written, covering all potential edge cases; and 3) A meticulous code review is conducted by developers experienced in Ethereum assembly to ensure there are no oversights or unintended consequences.

*There are 1 instance(s) of this issue:*

```solidity
29:     constructor(address _protocolRewards, address _revolutionRewardRecipient) payable { // <= FOUND
30:         if (_protocolRewards == address(0) || _revolutionRewardRecipient == address(0)) revert("Invalid Address Zero");
31: 
32:         protocolRewards = IRevolutionProtocolRewards(_protocolRewards);
33:         revolutionRewardRecipient = _revolutionRewardRecipient; // <= FOUND
34:     }

```


*GitHub* : [29](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L29-L33)
### [N-14]<a name="n-14"></a> Consider making private state variables internal to increase flexibility 
In Solidity, `private` state variables are strictly confined to the contract they are defined in and can't be accessed or modified by its derived contracts. While this offers strong encapsulation, it can limit contract extensibility and modification in inheritance chains. On the other hand, `internal` variables can be accessed and potentially overridden by child contracts, granting more flexibility in contract development and upgrades. Therefore, it's recommended to use `private` only when you explicitly want to prevent child contract access. Otherwise, prefer `internal` to maintain a balance between encapsulation and the flexibility offered by inheritance patterns in Solidity.

*There are 1 instance(s) of this issue:*

```solidity
63: string private _contractURIHash = "QmQzDwaZ7yQxHHs7sQQenJVB89riTSacSGcJRv9jtHPuz5"; // <= FOUND

```


*GitHub* : [63](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L63-L63)
### [N-15]<a name="n-15"></a> File is missing NatSpec

*There are 1 instance(s) of this issue:*

```solidity
1: // SPDX-License-Identifier: MIT
2: pragma solidity 0.8.22;
3: 
4: import { RewardSplits } from "../RewardSplits.sol";
5: 
6: abstract contract TokenEmitterRewards is RewardSplits {
7:     constructor(
8:         address _protocolRewards,
9:         address _revolutionRewardRecipient
10:     ) payable RewardSplits(_protocolRewards, _revolutionRewardRecipient) {}
11: 
12:     function _handleRewardsAndGetValueToSend(
13:         uint256 msgValue,
14:         address builderReferral,
15:         address purchaseReferral,
16:         address deployer
17:     ) internal returns (uint256) {
18:         if (msgValue < computeTotalReward(msgValue)) revert INVALID_ETH_AMOUNT();
19: 
20:         return msgValue - _depositPurchaseRewards(msgValue, builderReferral, purchaseReferral, deployer);
21:     }
22: }
23: 

```


*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/TokenEmitter/TokenEmitterRewards.sol#L1-L1)
### [N-16]<a name="n-16"></a> Floating pragma should be avoided

*There are 1 instance(s) of this issue:*

```solidity
4: pragma solidity ^0.8.22; // <= FOUND

```


*GitHub* : [4](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L4-L4)
### [N-17]<a name="n-17"></a> Open TODO in comments
Production code should not have open TODOs as this makes code appear incomplete at production deployment

*There are 2 instance(s) of this issue:*

```solidity
321: // TODO add security consideration here based on block created to prevent flash attacks on drops? // <= FOUND

```


*GitHub* : [321](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L321-L321)

```solidity
87: // TODO investigate this - The minimum gas threshold for creating an auction (minting VerbsToken) // <= FOUND

```


*GitHub* : [87](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L87-L87)
### [N-18]<a name="n-18"></a> Empty function blocks
Empty code blocks (i.e., {}) in a Solidity contract can be harmful as they can lead to ambiguity, misinterpretation, and unintended behavior. When developers encounter empty code blocks, it may be unclear whether the absence of code is intentional or the result of an oversight. This uncertainty can cause confusion during development, testing, and debugging, increasing the likelihood of introducing errors or vulnerabilities. Moreover, empty code blocks may give a false impression of implemented functionality or security measures, creating a misleading sense of assurance. To ensure clarity and maintainability, it is essential to avoid empty code blocks and explicitly document the intended behavior or any intentional omissions.

*There are 1 instance(s) of this issue:*

```solidity
161:     function contractURI() public view returns (string memory) {
162:         return string(abi.encodePacked("ipfs:
163:     }

```


*GitHub* : [161](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L161-L161)
### [N-19]<a name="n-19"></a> Usage of ecrecover is vulnerable to signature malleability
Avoid using ecrecovery when possible, in cases where it must be used ensure a nonce is present

*There are 1 instance(s) of this issue:*

```solidity
419:     function _verifyVoteSignature(
420:         address from,
421:         uint256[] calldata pieceIds,
422:         uint256 deadline,
423:         uint8 v,
424:         bytes32 r,
425:         bytes32 s
426:     ) internal returns (bool success) {
427:         require(deadline >= block.timestamp, "Signature expired");
428: 
429:         bytes32 voteHash;
430: 
431:         voteHash = keccak256(abi.encode(VOTE_TYPEHASH, from, pieceIds, nonces[from]++, deadline));
432: 
433:         bytes32 digest = _hashTypedDataV4(voteHash);
434: 
435:         address recoveredAddress = ecrecover(digest, v, r, s); // <= FOUND
436: 
437:         
438:         if (from == address(0)) revert ADDRESS_ZERO();
439: 
440:         
441:         if (recoveredAddress == address(0) || recoveredAddress != from) revert INVALID_SIGNATURE();
442: 
443:         return true;
444:     }

```


*GitHub* : [435](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L435-L435)
### [N-20]<a name="n-20"></a> In functions which accept an address as a parameter, there should be a zero address check to prevent bugs
Implement a zero address check to ensure input isn't the zero address

*There are 9 instance(s) of this issue:*

```solidity
265:     function getVotes(address account) external view override returns (uint256) 

```


*GitHub* : [265](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L265-L265)

```solidity
274:     function getPastVotes(address account, uint256 blockNumber) external view override returns (uint256) 

```


*GitHub* : [274](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L274-L274)

```solidity
288:     function _getVotes(address account) internal view returns (uint256) 

```


*GitHub* : [288](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L288-L288)

```solidity
292:     function _getPastVotes(address account, uint256 blockNumber) internal view returns (uint256) 

```


*GitHub* : [292](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L292-L292)

```solidity
353:     function _voteForMany(uint256[] calldata pieceIds, address from) internal 

```


*GitHub* : [353](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L353-L353)

```solidity
52:     function __NontransferableERC20Votes_init(
53:         address _initialOwner,
54:         string calldata _name,
55:         string calldata _symbol
56:     ) internal onlyInitializing 

```


*GitHub* : [52](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L52-L52)

```solidity
134:     function mint(address account, uint256 amount) public onlyOwner 

```


*GitHub* : [134](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L134-L134)

```solidity
108:     function _mint(address _to, uint256 _amount) private 

```


*GitHub* : [108](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L108-L108)

```solidity
122:     function balanceOf(address _owner) public view returns (uint) 

```


*GitHub* : [122](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L122-L122)
### [N-21]<a name="n-21"></a> Enum values should be used in place of constant array indexes
Create a commented enum value to use in place of constant array indexes, this makes the code far easier to understand

*There are 3 instance(s) of this issue:*

```solidity
159: 
160:         uint256 popped = heap[0]; // <= FOUND

```


*GitHub* : [159](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L159-L160)

```solidity
160:         heap[0] = heap[--size]; // <= FOUND

```


*GitHub* : [160](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L160-L160)

```solidity
171:         return (heap[0], valueMapping[heap[0]]); // <= FOUND

```


*GitHub* : [171](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L171-L171)
### [N-22]<a name="n-22"></a> Default int values are manually set
In instances where a new variable is defined, there is no need to set it to it's default value.

*There are 7 instance(s) of this issue:*

```solidity
67: 
68:     uint256 public size = 0; // <= FOUND

```


*GitHub* : [67](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L67-L68)

```solidity
205: 
206:         uint256 bpsSum = 0; // <= FOUND

```


*GitHub* : [205](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L205-L206)

```solidity
346: 
347:         uint256 creatorTokensEmitted = 0; // <= FOUND

```


*GitHub* : [346](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L346-L347)

```solidity
380: 
381:                 uint256 ethPaidToCreators = 0; // <= FOUND

```


*GitHub* : [380](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L380-L381)

```solidity
209: 
210:         
211: 
212:         for (uint256 i = 0; i < addresses.length; i++) { // <= FOUND

```


*GitHub* : [209](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L209-L212)

```solidity
384:                     for (uint256 i = 0; i < numCreators; i++) { // <= FOUND

```


*GitHub* : [384](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L384-L384)

```solidity
306: 
307:             for (uint i = 0; i < artPiece.creators.length; i++) { // <= FOUND

```


*GitHub* : [306](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L306-L307)
### [N-23]<a name="n-23"></a> Reverts should use customer errors instead of strings
Custom error codes should be used in place of strings for revert statements in Solidity contracts to enhance efficiency and reduce gas costs. String-based error messages consume more bytecode and storage, increasing the overall gas consumption during contract deployment and execution

*There are 4 instance(s) of this issue:*

```solidity
421:         
422:         if (address(this).balance < _amount) revert("Insufficient balance"); // <= FOUND

```


*GitHub* : [422](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L422-L422)

```solidity
441: 
442:             
443:             if (!wethSuccess) revert("WETH transfer failed"); // <= FOUND

```


*GitHub* : [443](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L443-L443)

```solidity
317:             
318:             revert("dropTopVotedPiece failed"); // <= FOUND

```


*GitHub* : [318](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L318-L318)

```solidity
30:         if (_protocolRewards == address(0) || _revolutionRewardRecipient == address(0)) revert("Invalid Address Zero"); // <= FOUND

```


*GitHub* : [30](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L30-L30)
### [N-24]<a name="n-24"></a> Functions which are either public or external should not have a preceding _ in their name
Remove the _ from the function name, ensure you also refactor where these functions are internally called

*There are 1 instance(s) of this issue:*

```solidity
498:     function _setQuorumVotesBPS(uint256 newQuorumVotesBPS) external onlyOwner  // <= FOUND

```


*GitHub* : [498](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L498-L498)
### [N-25]<a name="n-25"></a> Functions which are either private or internal should have a preceding _ in their name
Add a preceding underscore to the function name, take care to refactor where there functions are called

*There are 4 instance(s) of this issue:*

```solidity
94:     function maxHeapify(uint256 pos) internal 

```


*GitHub* : [94](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L94-L94)

```solidity
159:     function validateMediaType(ArtPieceMetadata calldata metadata) internal pure 

```


*GitHub* : [159](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L159-L159)

```solidity
179:     function validateCreatorsArray(CreatorBps[] calldata creatorArray) internal pure returns (uint256) 

```


*GitHub* : [179](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L179-L179)

```solidity
86:     function pIntegral(int256 timeSinceStart, int256 sold) internal view returns (int256) 

```


*GitHub* : [86](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L86-L86)
### [N-26]<a name="n-26"></a> Private and internal state variables should have a preceding _ in their name unless they are constants
Add a preceding underscore to the state variable name, take care to refactor where there variables are read/wrote

*There are 3 instance(s) of this issue:*

```solidity
37: IRevolutionBuilder private immutable manager; // <= FOUND

```


*GitHub* : [37](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L37-L37)

```solidity
26: address internal immutable revolutionRewardRecipient; // <= FOUND

```


*GitHub* : [26](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L26-L26)

```solidity
27: IRevolutionProtocolRewards internal immutable protocolRewards; // <= FOUND

```


*GitHub* : [27](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L27-L27)
### [N-27]<a name="n-27"></a> Public state variables shouldn't have a preceding _ in their name
Remove the _ from the state variable name, ensure you also refactor where these state variables are internally called

*There are 1 instance(s) of this issue:*

```solidity
66: uint256 public _currentPieceId; // <= FOUND

```


*GitHub* : [66](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L66-L66)
### [N-28]<a name="n-28"></a> Contract lines should not be longer than 120 characters for readability
Consider spreading these lines over multiple lines to aid in readability and the support of VIM users everywhere.

*There are 16 instance(s) of this issue:*

```solidity
7:  * @dev Extension of ERC-20 to support Compound-like voting and delegation. This version is more generic than Compound's, // <= FOUND

```


*GitHub* : [7](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L7-L7)

```solidity
149:     // Can technically reenter via cross function reentrancies in _createAuction, auction, and pause, but those are only callable by the owner. // <= FOUND

```


*GitHub* : [149](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L149-L149)

```solidity
333:      * @notice Settle an auction, finalizing the bid and paying out to the owner. Pays out to the creator and the owner based on the creatorRateBps and entropyRateBps. // <= FOUND

```


*GitHub* : [333](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L333-L333)

```solidity
382:                 //Transfer creator's share to the creator, for each creator, and build arrays for erc20TokenEmitter.buyToken // <= FOUND

```


*GitHub* : [382](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L382-L382)

```solidity
389:                         //Calculate paymentAmount for specific creator based on BPS splits - same as multiplying by creatorDirectPayment // <= FOUND

```


*GitHub* : [389](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L389-L389)

```solidity
53:     /// @notice The basis point number of votes in support of a art piece required in order for a quorum to be reached and for an art piece to be dropped. // <= FOUND

```


*GitHub* : [53](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L53-L53)

```solidity
197:      * @param metadata The metadata associated with the art piece, including name, description, image, and optional animation URL. // <= FOUND

```


*GitHub* : [197](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L197-L197)

```solidity
198:      * @param creatorArray An array of creators who contributed to the piece, along with their respective basis points that must sum up to 10,000. // <= FOUND

```


*GitHub* : [198](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L198-L198)

```solidity
304:      * @dev Requires that the pieceId is valid, the voter has not already voted on this piece, and the weight is greater than the minimum vote weight. // <= FOUND

```


*GitHub* : [304](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L304-L304)

```solidity
339:      * @dev Requires that the pieceIds are valid, the voter has not already voted on this piece, and the weight is greater than the minimum vote weight. // <= FOUND

```


*GitHub* : [339](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L339-L339)

```solidity
146:      * @notice A payable function that allows a user to buy tokens for a list of addresses and a list of basis points to split the token purchase between. // <= FOUND

```


*GitHub* : [146](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L146-L146)

```solidity
233:      * @notice Returns the amount of wei that would be spent to buy an amount of tokens. Does not take into account the protocol rewards. // <= FOUND

```


*GitHub* : [233](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L233-L233)

```solidity
239:         // Note: By using toDaysWadUnsafe(block.timestamp - startTime) we are establishing that 1 "unit of time" is 1 day. // <= FOUND

```


*GitHub* : [239](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L239-L239)

```solidity
250:      * @notice Returns the amount of tokens that would be emitted for an amount of wei. Does not take into account the protocol rewards. // <= FOUND

```


*GitHub* : [250](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L250-L250)

```solidity
267:      * @notice Returns the amount of tokens that would be emitted for the payment amount, taking into account the protocol rewards. // <= FOUND

```


*GitHub* : [267](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L267-L267)

```solidity
279:      * @notice Mint a Verb with `verbId` to the provided `to` address. Pulls the top voted art piece from the CultureIndex. // <= FOUND

```


*GitHub* : [279](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L279-L279)
### [N-29]<a name="n-29"></a> Setters should prevent re-setting of the same value
In Solidity, manipulating contract storage comes with significant gas costs. One can optimize gas usage by preventing unnecessary storage updates when the new value is the same as the existing one. If an existing value is the same as the new one, not reassigning it to the storage could potentially save substantial amounts of gas, notably 2900 gas for a 'Gsreset'. This saving may come at the expense of a cold storage load operation ('Gcoldsload'), which costs 2100 gas, or a warm storage access operation ('Gwarmaccess'), which costs 100 gas. Therefore, the gas efficiency of your contract can be significantly improved by adding a check that compares the new value with the current one before any storage update operation. If the values are the same, you can bypass the storage operation, thereby saving gas.

*There are 12 instance(s) of this issue:*

```solidity
288:     function setEntropyRateBps(uint256 _entropyRateBps) external onlyOwner {
289:         require(_entropyRateBps <= 10_000, "Entropy rate must be less than or equal to 10_000");
290: 
291:         emit EntropyRateBpsUpdated(entropyRateBps = _entropyRateBps);
292:     }

```


*GitHub* : [288](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L288-L288)

```solidity
299:     function setCreatorRateBps(uint256 _creatorRateBps) external onlyOwner {
300:         require(_creatorRateBps <= 10_000, "Creator rate must be less than or equal to 10_000");
301: 
302:         emit CreatorRateBpsUpdated(creatorRateBps = _creatorRateBps);
303:     }

```


*GitHub* : [299](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L299-L299)

```solidity
217:     function setCreatorRateBps(uint256 _creatorRateBps) external onlyOwner {
218:         require(
219:             _creatorRateBps >= minCreatorRateBps,
220:             "Creator rate must be greater than or equal to minCreatorRateBps"
221:         );
222:         require(_creatorRateBps <= 10_000, "Creator rate must be less than or equal to 10_000");
223:         creatorRateBps = _creatorRateBps;
224: 
225:         emit CreatorRateBpsUpdated(_creatorRateBps);
226:     }

```


*GitHub* : [217](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L217-L217)

```solidity
233:     function setMinCreatorRateBps(uint256 _minCreatorRateBps) external onlyOwner {
234:         require(_minCreatorRateBps <= creatorRateBps, "Min creator rate must be less than or equal to creator rate");
235:         require(_minCreatorRateBps <= 10_000, "Min creator rate must be less than or equal to 10_000");
236: 
237:         
238:         require(
239:             _minCreatorRateBps > minCreatorRateBps,
240:             "Min creator rate must be greater than previous minCreatorRateBps"
241:         );
242: 
243:         minCreatorRateBps = _minCreatorRateBps;
244: 
245:         emit MinCreatorRateBpsUpdated(_minCreatorRateBps);
246:     }

```


*GitHub* : [233](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L233-L233)

```solidity
253:     function setEntropyRateBps(uint256 _entropyRateBps) external onlyOwner {
254:         require(_entropyRateBps <= 10_000, "Entropy rate must be less than or equal to 10_000");
255: 
256:         entropyRateBps = _entropyRateBps;
257:         emit EntropyRateBpsUpdated(_entropyRateBps);
258:     }

```


*GitHub* : [253](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L253-L253)

```solidity
277:     function setTimeBuffer(uint256 _timeBuffer) external override onlyOwner {
278:         timeBuffer = _timeBuffer;
279: 
280:         emit AuctionTimeBufferUpdated(_timeBuffer);
281:     }

```


*GitHub* : [277](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L277-L277)

```solidity
287:     function setReservePrice(uint256 _reservePrice) external override onlyOwner {
288:         reservePrice = _reservePrice;
289: 
290:         emit AuctionReservePriceUpdated(_reservePrice);
291:     }

```


*GitHub* : [287](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L287-L287)

```solidity
297:     function setMinBidIncrementPercentage(uint8 _minBidIncrementPercentage) external override onlyOwner {
298:         minBidIncrementPercentage = _minBidIncrementPercentage;
299: 
300:         emit AuctionMinBidIncrementPercentageUpdated(_minBidIncrementPercentage);
301:     }

```


*GitHub* : [297](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L297-L297)

```solidity
169:     function setContractURIHash(string memory newContractURIHash) external onlyOwner {
170:         _contractURIHash = newContractURIHash;
171:     }

```


*GitHub* : [169](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L169-L169)

```solidity
230:     function setDescriptor(
231:         IDescriptorMinimal _descriptor
232:     ) external override onlyOwner nonReentrant whenDescriptorNotLocked {
233:         descriptor = _descriptor;
234: 
235:         emit DescriptorUpdated(_descriptor);
236:     }

```


*GitHub* : [230](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L230-L230)

```solidity
252:     function setCultureIndex(ICultureIndex _cultureIndex) external onlyOwner whenCultureIndexNotLocked nonReentrant {
253:         cultureIndex = _cultureIndex;
254: 
255:         emit CultureIndexUpdated(_cultureIndex);
256:     }

```


*GitHub* : [252](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L252-L252)

```solidity
498:     function _setQuorumVotesBPS(uint256 newQuorumVotesBPS) external onlyOwner {
499:         require(newQuorumVotesBPS <= MAX_QUORUM_VOTES_BPS, "CultureIndex::_setQuorumVotesBPS: invalid quorum bps");
500:         emit QuorumVotesBPSSet(quorumVotesBPS, newQuorumVotesBPS);
501: 
502:         quorumVotesBPS = newQuorumVotesBPS;
503:     }

```


*GitHub* : [498](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L498-L498)
### [N-30]<a name="n-30"></a> Function names should differ to make the code more readable
In Solidity, while function overriding allows for functions with the same name to coexist, it is advisable to avoid this practice to enhance code readability and maintainability. Having multiple functions with the same name, even with different parameters or in inherited contracts, can cause confusion and increase the likelihood of errors during development, testing, and debugging. Using distinct and descriptive function names not only clarifies the purpose and behavior of each function, but also helps prevent unintended function calls or incorrect overriding. By adopting a clear and consistent naming convention, developers can create more comprehensible and maintainable smart contracts.

*There are 6 instance(s) of this issue:*

```solidity
452:     function _authorizeUpgrade(address _newImpl) internal view override onlyOwner  // <= FOUND

```


*GitHub* : [452](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L452-L452)

```solidity
452:     function _authorizeUpgrade(address _newImpl) internal view override onlyOwner whenPaused  // <= FOUND

```


*GitHub* : [452](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L452-L452)

```solidity
87:     function decimals() public view virtual override returns (uint8)  // <= FOUND

```


*GitHub* : [87](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L87-L87)

```solidity
117:     function decimals() public view returns (uint8)  // <= FOUND

```


*GitHub* : [117](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L117-L117)

```solidity
217:     function setCreatorRateBps(uint256 _creatorRateBps) external onlyOwner  // <= FOUND

```


*GitHub* : [217](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L217-L217)

```solidity
253:     function setEntropyRateBps(uint256 _entropyRateBps) external onlyOwner  // <= FOUND

```


*GitHub* : [253](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L253-L253)
### [N-31]<a name="n-31"></a> Functions within contracts are not ordered according to the solidity style guide
The following order should be used within contracts

constructor

receive function (if exists)

fallback function (if exists)

external

public

internal

private

Rearrange the contract functions and contructors to fit this ordering

*There are 6 instance(s) of this issue:*

```solidity
14: contract MaxHeap is VersionedContract, UUPS, Ownable2StepUpgradeable, ReentrancyGuardUpgradeable  // <= FOUND

```


*GitHub* : [14](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L14-L14)

```solidity
20: contract CultureIndex is
21:     ICultureIndex,
22:     VersionedContract,
23:     UUPS,
24:     Ownable2StepUpgradeable,
25:     ReentrancyGuardUpgradeable,
26:     EIP712Upgradeable
27: 

```


*GitHub* :

```solidity
29: contract NontransferableERC20Votes is Initializable, ERC20VotesUpgradeable, Ownable2StepUpgradeable  // <= FOUND

```


*GitHub* : [29](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L29-L29)

```solidity
17: contract ERC20TokenEmitter is
18:     IERC20TokenEmitter,
19:     ReentrancyGuardUpgradeable,
20:     TokenEmitterRewards,
21:     Ownable2StepUpgradeable,
22:     PausableUpgradeable
23: 

```


*GitHub* :

```solidity
39: contract AuctionHouse is
40:     IAuctionHouse,
41:     VersionedContract,
42:     UUPS,
43:     PausableUpgradeable,
44:     ReentrancyGuardUpgradeable,
45:     Ownable2StepUpgradeable
46: 

```


*GitHub* :

```solidity
33: contract VerbsToken is
34:     IVerbsToken,
35:     VersionedContract,
36:     UUPS,
37:     Ownable2StepUpgradeable,
38:     ReentrancyGuardUpgradeable,
39:     ERC721CheckpointableUpgradeable
40: 

```


*GitHub* :
### [N-32]<a name="n-32"></a> Use SafeCast to safely downcast variables
Downcasting int/uints in Solidity can be unsafe due to the potential for data loss and unintended behavior. When downcasting a larger integer type to a smaller one (e.g., uint256 to uint128), the value may exceed the range of the target type, leading to truncation and loss of significant digits. This data loss can result in unexpected state changes, incorrect calculations, or other contract vulnerabilities, ultimately compromising the contracts functionality and reliability. To prevent these risks, developers should carefully consider the range of values their variables may hold and ensure that proper checks are in place to prevent out-of-range values before performing downcasting. Also consider using OZ SafeCast functionality.

*There are 1 instance(s) of this issue:*

```solidity
159:     function validateMediaType(ArtPieceMetadata calldata metadata) internal pure {
160:         require(uint8(metadata.mediaType) > 0 && uint8(metadata.mediaType) <= 5, "Invalid media type"); // <= FOUND
161: 
162:         if (metadata.mediaType == MediaType.IMAGE)
163:             require(bytes(metadata.image).length > 0, "Image URL must be provided");
164:         else if (metadata.mediaType == MediaType.ANIMATION)
165:             require(bytes(metadata.animationUrl).length > 0, "Animation URL must be provided");
166:         else if (metadata.mediaType == MediaType.TEXT)
167:             require(bytes(metadata.text).length > 0, "Text must be provided");
168:     }

```


*GitHub* : [160](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L160-L160)
### [N-33]<a name="n-33"></a> Interface imports should be declared first
Amend the ordering of imports to import interfaces first followed by other imports

*There are 6 instance(s) of this issue:*

```solidity
4: 
7: pragma solidity ^0.8.22;
8: 
23: import { Ownable2StepUpgradeable } from "@openzeppelin/contracts-upgradeable/access/Ownable2StepUpgradeable.sol"; // <= FOUND
24: import { PausableUpgradeable } from "@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol"; // <= FOUND
25: import { Initializable } from "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol"; // <= FOUND
26: 
27: import { ERC20VotesUpgradeable } from "./base/erc20/ERC20VotesUpgradeable.sol"; // <= FOUND
28: import { EIP712Upgradeable } from "@openzeppelin/contracts-upgradeable/utils/cryptography/EIP712Upgradeable.sol"; // <= FOUND
29: 
30: import { IRevolutionBuilder } from "./interfaces/IRevolutionBuilder.sol"; // <= FOUND
31: 
32: contract NontransferableERC20Votes is Initializable, ERC20VotesUpgradeable, Ownable2StepUpgradeable {
33:     error TRANSFER_NOT_ALLOWED();
34: 
40:     IRevolutionBuilder private immutable manager;
41: 
47:     constructor(address _manager) payable initializer {
48:         manager = IRevolutionBuilder(_manager);
49:     }
50: 
55:     function __NontransferableERC20Votes_init(
56:         address _initialOwner,
57:         string calldata _name,
58:         string calldata _symbol
59:     ) internal onlyInitializing {
60:         __Ownable_init(_initialOwner);
61:         __ERC20_init(_name, _symbol);
62:         __EIP712_init(_name, "1");
63:     }
64: 
68:     function initialize(
69:         address _initialOwner,
70:         IRevolutionBuilder.ERC20TokenParams calldata _erc20TokenParams
71:     ) external initializer {
72:         require(msg.sender == address(manager), "Only manager can initialize");
73: 
74:         __NontransferableERC20Votes_init(_initialOwner, _erc20TokenParams.name, _erc20TokenParams.symbol);
75:     }
76: 
90:     function decimals() public view virtual override returns (uint8) {
91:         return 18;
92:     }
93: 
97:     function transfer(address, uint256) public virtual override returns (bool) {
98:         revert TRANSFER_NOT_ALLOWED();
99:     }
100: 
104:     function _transfer(address from, address to, uint256 value) internal override {
105:         revert TRANSFER_NOT_ALLOWED();
106:     }
107: 
111:     function transferFrom(address, address, uint256) public virtual override returns (bool) {
112:         revert TRANSFER_NOT_ALLOWED();
113:     }
114: 
118:     function approve(address, uint256) public virtual override returns (bool) {
119:         revert TRANSFER_NOT_ALLOWED();
120:     }
121: 
130:     function _mint(address account, uint256 value) internal override {
131:         if (account == address(0)) {
132:             revert ERC20InvalidReceiver(address(0));
133:         }
134:         _update(address(0), account, value);
135:     }
136: 
137:     function mint(address account, uint256 amount) public onlyOwner {
138:         _mint(account, amount);
139:     }
140: 
144:     function _approve(address owner, address spender, uint256 value) internal override {
145:         revert TRANSFER_NOT_ALLOWED();
146:     }
147: 
151:     function _approve(address owner, address spender, uint256 value, bool emitEvent) internal virtual override {

```


*GitHub* : [23](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L23-L30)

```solidity
24: 
47: pragma solidity ^0.8.22;
48: 
49: import { PausableUpgradeable } from "@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol"; // <= FOUND
50: import { ReentrancyGuardUpgradeable } from "@openzeppelin/contracts-upgradeable/utils/ReentrancyGuardUpgradeable.sol"; // <= FOUND
51: import { IAuctionHouse } from "./interfaces/IAuctionHouse.sol"; // <= FOUND
52: import { IVerbsToken } from "./interfaces/IVerbsToken.sol"; // <= FOUND
53: import { IWETH } from "./interfaces/IWETH.sol"; // <= FOUND
54: import { IERC20TokenEmitter } from "./interfaces/IERC20TokenEmitter.sol"; // <= FOUND
55: import { ICultureIndex } from "./interfaces/ICultureIndex.sol"; // <= FOUND
56: import { IRevolutionBuilder } from "./interfaces/IRevolutionBuilder.sol"; // <= FOUND
57: import { Ownable2StepUpgradeable } from "@openzeppelin/contracts-upgradeable/access/Ownable2StepUpgradeable.sol"; // <= FOUND
58: 
59: import { UUPS } from "./libs/proxy/UUPS.sol"; // <= FOUND
60: import { VersionedContract } from "./version/VersionedContract.sol"; // <= FOUND
61: 
62: contract AuctionHouse is
63:     IAuctionHouse,
64:     VersionedContract,
65:     UUPS,
66:     PausableUpgradeable,
67:     ReentrancyGuardUpgradeable,
68:     Ownable2StepUpgradeable
69: {
70:     
71:     IVerbsToken public verbs;
72: 
74:     IERC20TokenEmitter public erc20TokenEmitter;
75: 
77:     address public WETH;
78: 
80:     uint256 public timeBuffer;
81: 
83:     uint256 public reservePrice;
84: 
86:     uint8 public minBidIncrementPercentage;
87: 
89:     uint256 public creatorRateBps;
90: 
92:     uint256 public minCreatorRateBps;
93: 
95:     uint256 public entropyRateBps;
96: 
98:     uint256 public duration;
99: 
101:     IAuctionHouse.Auction public auction;
102: 
108:     IRevolutionBuilder public immutable manager;
109: 
111:     uint32 public constant MIN_TOKEN_MINT_GAS_THRESHOLD = 750_000;
112: 
118:     constructor(address _manager) payable initializer {
119:         manager = IRevolutionBuilder(_manager);
120:     }
121: 
136:     function initialize(
137:         address _erc721Token,
138:         address _erc20TokenEmitter,
139:         address _initialOwner,
140:         address _weth,
141:         IRevolutionBuilder.AuctionParams calldata _auctionParams
142:     ) external initializer {
143:         require(msg.sender == address(manager), "Only manager can initialize");
144:         require(_weth != address(0), "WETH cannot be zero address");
145: 
146:         __Pausable_init();
147:         __ReentrancyGuard_init();
148:         __Ownable_init(_initialOwner);
149: 
150:         _pause();
151: 
152:         require(
153:             _auctionParams.creatorRateBps >= _auctionParams.minCreatorRateBps,
154:             "Creator rate must be greater than or equal to the creator rate"
155:         );
156: 
157:         verbs = IVerbsToken(_erc721Token);
158:         erc20TokenEmitter = IERC20TokenEmitter(_erc20TokenEmitter);
159:         timeBuffer = _auctionParams.timeBuffer;
160:         reservePrice = _auctionParams.reservePrice;
161:         minBidIncrementPercentage = _auctionParams.minBidIncrementPercentage;
162:         duration = _auctionParams.duration;
163:         creatorRateBps = _auctionParams.creatorRateBps;
164:         entropyRateBps = _auctionParams.entropyRateBps;
165:         minCreatorRateBps = _auctionParams.minCreatorRateBps;
166:         WETH = _weth;

```


*GitHub* : [49](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L49-L60)

```solidity
2: 
3: pragma solidity ^0.8.22;
4: 
5: import { Ownable2StepUpgradeable } from "@openzeppelin/contracts-upgradeable/access/Ownable2StepUpgradeable.sol"; // <= FOUND
6: import { ReentrancyGuardUpgradeable } from "@openzeppelin/contracts-upgradeable/utils/ReentrancyGuardUpgradeable.sol"; // <= FOUND
7: 
8: import { UUPS } from "./libs/proxy/UUPS.sol"; // <= FOUND
9: import { VersionedContract } from "./version/VersionedContract.sol"; // <= FOUND
10: 
11: import { IRevolutionBuilder } from "./interfaces/IRevolutionBuilder.sol"; // <= FOUND
12: 
13: import { ERC20VotesUpgradeable } from "./base/erc20/ERC20VotesUpgradeable.sol"; // <= FOUND
14: import { MaxHeap } from "./MaxHeap.sol"; // <= FOUND
15: import { ICultureIndex } from "./interfaces/ICultureIndex.sol"; // <= FOUND
16: 
17: import { ERC721CheckpointableUpgradeable } from "./base/ERC721CheckpointableUpgradeable.sol"; // <= FOUND
18: import { EIP712Upgradeable } from "@openzeppelin/contracts-upgradeable/utils/cryptography/EIP712Upgradeable.sol"; // <= FOUND
19: import { Strings } from "@openzeppelin/contracts/utils/Strings.sol"; // <= FOUND
20: 
21: contract CultureIndex is
22:     ICultureIndex,
23:     VersionedContract,
24:     UUPS,
25:     Ownable2StepUpgradeable,
26:     ReentrancyGuardUpgradeable,
27:     EIP712Upgradeable
28: {
29:     
30:     bytes32 public constant VOTE_TYPEHASH =
31:         keccak256("Vote(address from,uint256[] pieceIds,uint256 nonce,uint256 deadline)");
32: 
34:     mapping(address => uint256) public nonces;
35: 
37:     MaxHeap public maxHeap;
38: 
40:     ERC20VotesUpgradeable public erc20VotingToken;
41: 
43:     ERC721CheckpointableUpgradeable public erc721VotingToken;
44: 
46:     uint256 public erc721VotingTokenWeight;
47: 
49:     uint256 public constant MAX_QUORUM_VOTES_BPS = 6_000; 
50: 
52:     uint256 public minVoteWeight;
53: 
55:     uint256 public quorumVotesBPS;
56: 
58:     string public name;
59: 
61:     string public description;
62: 
64:     mapping(uint256 => ArtPiece) public pieces;
65: 
67:     uint256 public _currentPieceId;
68: 
70:     mapping(uint256 => mapping(address => Vote)) public votes;
71: 
73:     mapping(uint256 => uint256) public totalVoteWeights;
74: 
76:     uint256 public constant MAX_NUM_CREATORS = 100;
77: 
79:     address public dropperAdmin;
80: 
86:     IRevolutionBuilder private immutable manager;
87: 
93:     constructor(address _manager) payable initializer {
94:         manager = IRevolutionBuilder(_manager);

```


*GitHub* : [5](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L5-L19)

```solidity
2: 
3: pragma solidity ^0.8.22;
4: 
5: import { ReentrancyGuardUpgradeable } from "@openzeppelin/contracts-upgradeable/utils/ReentrancyGuardUpgradeable.sol"; // <= FOUND
6: import { TokenEmitterRewards } from "@collectivexyz/protocol-rewards/src/abstract/TokenEmitter/TokenEmitterRewards.sol"; // <= FOUND
7: import { Ownable2StepUpgradeable } from "@openzeppelin/contracts-upgradeable/access/Ownable2StepUpgradeable.sol"; // <= FOUND
8: import { PausableUpgradeable } from "@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol"; // <= FOUND
9: 
10: import { VRGDAC } from "./libs/VRGDAC.sol"; // <= FOUND
11: import { toDaysWadUnsafe } from "./libs/SignedWadMath.sol"; // <= FOUND
12: import { Strings } from "@openzeppelin/contracts/utils/Strings.sol"; // <= FOUND
13: import { NontransferableERC20Votes } from "./NontransferableERC20Votes.sol"; // <= FOUND
14: import { IERC20TokenEmitter } from "./interfaces/IERC20TokenEmitter.sol"; // <= FOUND
15: 
16: import { IRevolutionBuilder } from "./interfaces/IRevolutionBuilder.sol"; // <= FOUND
17: 
18: contract ERC20TokenEmitter is
19:     IERC20TokenEmitter,
20:     ReentrancyGuardUpgradeable,
21:     TokenEmitterRewards,
22:     Ownable2StepUpgradeable,
23:     PausableUpgradeable
24: {
25:     
26:     address public treasury;
27: 
29:     NontransferableERC20Votes public token;
30: 
32:     VRGDAC public vrgdac;
33: 
35:     uint256 public startTime;
36: 
40:     int256 public emittedTokenWad;
41: 
43:     uint256 public creatorRateBps;
44: 
46:     uint256 public entropyRateBps;
47: 
49:     address public creatorsAddress;
50: 
56:     IRevolutionBuilder private immutable manager;
57: 
65:     constructor(
66:         address _manager,
67:         address _protocolRewards,
68:         address _protocolFeeRecipient
69:     ) payable TokenEmitterRewards(_protocolRewards, _protocolFeeRecipient) initializer {
70:         manager = IRevolutionBuilder(_manager);
71:     }
72: 
85:     function initialize(
86:         address _initialOwner,
87:         address _erc20Token,
88:         address _treasury,
89:         address _vrgdac,
90:         address _creatorsAddress
91:     ) external initializer {
92:         require(msg.sender == address(manager), "Only manager can initialize");
93: 
94:         __Pausable_init();
95:         __ReentrancyGuard_init();
96: 
97:         require(_treasury != address(0), "Invalid treasury address");
98: 

```


*GitHub* : [5](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L5-L16)

```solidity
18: 
35: pragma solidity ^0.8.22;
36: 
37: import { Ownable2StepUpgradeable } from "@openzeppelin/contracts-upgradeable/access/Ownable2StepUpgradeable.sol"; // <= FOUND
38: import { ReentrancyGuardUpgradeable } from "@openzeppelin/contracts-upgradeable/utils/ReentrancyGuardUpgradeable.sol"; // <= FOUND
39: import { IERC721 } from "@openzeppelin/contracts/token/ERC721/IERC721.sol"; // <= FOUND
40: 
41: import { UUPS } from "./libs/proxy/UUPS.sol"; // <= FOUND
42: import { VersionedContract } from "./version/VersionedContract.sol"; // <= FOUND
43: 
44: import { ERC721CheckpointableUpgradeable } from "./base/ERC721CheckpointableUpgradeable.sol"; // <= FOUND
45: import { IDescriptorMinimal } from "./interfaces/IDescriptorMinimal.sol"; // <= FOUND
46: import { ICultureIndex } from "./interfaces/ICultureIndex.sol"; // <= FOUND
47: import { IVerbsToken } from "./interfaces/IVerbsToken.sol"; // <= FOUND
48: import { IRevolutionBuilder } from "./interfaces/IRevolutionBuilder.sol"; // <= FOUND
49: 
50: contract VerbsToken is
51:     IVerbsToken,
52:     VersionedContract,
53:     UUPS,
54:     Ownable2StepUpgradeable,
55:     ReentrancyGuardUpgradeable,
56:     ERC721CheckpointableUpgradeable
57: {
58:     
59:     address public minter;
60: 
62:     IDescriptorMinimal public descriptor;
63: 
65:     ICultureIndex public cultureIndex;
66: 
68:     bool public isMinterLocked;
69: 
71:     bool public isCultureIndexLocked;
72: 
74:     bool public isDescriptorLocked;
75: 
77:     uint256 private _currentVerbId;
78: 
80:     string private _contractURIHash = "QmQzDwaZ7yQxHHs7sQQenJVB89riTSacSGcJRv9jtHPuz5";
81: 
83:     mapping(uint256 => ICultureIndex.ArtPiece) public artPieces;
84: 
92:     modifier whenMinterNotLocked() {
93:         require(!isMinterLocked, "Minter is locked");
94:         _;
95:     }
96: 
100:     modifier whenCultureIndexNotLocked() {
101:         require(!isCultureIndexLocked, "CultureIndex is locked");
102:         _;
103:     }
104: 
108:     modifier whenDescriptorNotLocked() {
109:         require(!isDescriptorLocked, "Descriptor is locked");
110:         _;
111:     }
112: 
116:     modifier onlyMinter() {
117:         require(msg.sender == minter, "Sender is not the minter");
118:         _;
119:     }
120: 
126:     IRevolutionBuilder private immutable manager;
127: 
133:     constructor(address _manager) payable initializer {
134:         manager = IRevolutionBuilder(_manager);
135:     }
136: 
147:     function initialize(
148:         address _minter,
149:         address _initialOwner,
150:         address _descriptor,
151:         address _cultureIndex,
152:         IRevolutionBuilder.ERC721TokenParams memory _erc721TokenParams
153:     ) external initializer {
154:         require(msg.sender == address(manager), "Only manager can initialize");
155: 
156:         require(_minter != address(0), "Minter cannot be zero address");
157:         require(_initialOwner != address(0), "Initial owner cannot be zero address");

```


*GitHub* : [37](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L37-L48)

```solidity
2: 
3: pragma solidity ^0.8.22;
4: 
5: import { Ownable2StepUpgradeable } from "@openzeppelin/contracts-upgradeable/access/Ownable2StepUpgradeable.sol"; // <= FOUND
6: import { ReentrancyGuardUpgradeable } from "@openzeppelin/contracts-upgradeable/utils/ReentrancyGuardUpgradeable.sol"; // <= FOUND
7: import { IRevolutionBuilder } from "./interfaces/IRevolutionBuilder.sol"; // <= FOUND
8: 
9: import { UUPS } from "./libs/proxy/UUPS.sol"; // <= FOUND
10: import { VersionedContract } from "./version/VersionedContract.sol"; // <= FOUND
11: 
15: contract MaxHeap is VersionedContract, UUPS, Ownable2StepUpgradeable, ReentrancyGuardUpgradeable {
16:     
17:     address public admin;
18: 
24:     IRevolutionBuilder private immutable manager;
25: 
31:     constructor(address _manager) payable initializer {
32:         manager = IRevolutionBuilder(_manager);
33:     }
34: 
42:     modifier onlyAdmin() {
43:         require(msg.sender == admin, "Sender is not the admin");
44:         _;
45:     }
46: 
56:     function initialize(address _initialOwner, address _admin) public initializer {
57:         require(msg.sender == address(manager), "Only manager can initialize");
58: 
59:         admin = _admin;
60: 
61:         __Ownable_init(_initialOwner);
62:         __ReentrancyGuard_init();
63:     }
64: 
66:     mapping(uint256 => uint256) public heap;
67: 
68:     uint256 public size = 0;
69: 
71:     mapping(uint256 => uint256) public valueMapping;
72: 
74:     mapping(uint256 => uint256) public positionMapping;
75: 
79:     function parent(uint256 pos) private pure returns (uint256) {
80:         require(pos != 0, "Position should not be zero");
81:         return (pos - 1) / 2;
82:     }
83: 
87:     function swap(uint256 fpos, uint256 spos) private {
88:         (heap[fpos], heap[spos]) = (heap[spos], heap[fpos]);
89:         (positionMapping[heap[fpos]], positionMapping[heap[spos]]) = (fpos, spos);
90:     }
91: 
95:     function maxHeapify(uint256 pos) internal {
96:         uint256 left = 2 * pos + 1;
97:         uint256 right = 2 * pos + 2;
98: 
99:         uint256 posValue = valueMapping[heap[pos]];
100:         uint256 leftValue = valueMapping[heap[left]];

```


*GitHub* : [5](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L5-L10)
### [N-34]<a name="n-34"></a> Upgradable contract constructor should have the initialize modifier

*There are 1 instance(s) of this issue:*

```solidity
17: contract ERC20TokenEmitter is
18:     IERC20TokenEmitter,
19:     ReentrancyGuardUpgradeable,
20:     TokenEmitterRewards,
21:     Ownable2StepUpgradeable,
22:     PausableUpgradeable
23: {
24:     
25:     address public treasury;
26: 
28:     NontransferableERC20Votes public token;
29: 
31:     VRGDAC public vrgdac;
32: 
34:     uint256 public startTime;
35: 
39:     int256 public emittedTokenWad;
40: 
42:     uint256 public creatorRateBps;
43: 
45:     uint256 public entropyRateBps;
46: 
48:     address public creatorsAddress;
49: 
55:     IRevolutionBuilder private immutable manager;
56: 
64:     constructor( // <= FOUND
65:         address _manager,
66:         address _protocolRewards,
67:         address _protocolFeeRecipient
68:     ) payable TokenEmitterRewards(_protocolRewards, _protocolFeeRecipient) initializer {
69:         manager = IRevolutionBuilder(_manager);
70:     }
71: 
84:     function initialize(
85:         address _initialOwner,
86:         address _erc20Token,
87:         address _treasury,
88:         address _vrgdac,
89:         address _creatorsAddress
90:     ) external initializer {
91:         require(msg.sender == address(manager), "Only manager can initialize");
92: 
93:         __Pausable_init();
94:         __ReentrancyGuard_init();
95: 
96:         require(_treasury != address(0), "Invalid treasury address");
97: 
98:         
99:         __Ownable_init(_initialOwner);
100: 
101:         treasury = _treasury;
102:         creatorsAddress = _creatorsAddress;
103:         vrgdac = VRGDAC(_vrgdac);
104:         token = NontransferableERC20Votes(_erc20Token);
105:         startTime = block.timestamp;
106:     }
107: 
108:     function _mint(address _to, uint256 _amount) private {
109:         token.mint(_to, _amount);
110:     }
111: 
112:     function totalSupply() public view returns (uint) {
113:         
114:         return token.totalSupply();
115:     }
116: 
117:     function decimals() public view returns (uint8) {
118:         
119:         return token.decimals();
120:     }
121: 
122:     function balanceOf(address _owner) public view returns (uint) {
123:         
124:         return token.balanceOf(_owner);
125:     }
126: 
132:     function pause() external override onlyOwner {
133:         _pause();
134:     }
135: 
141:     function unpause() external override onlyOwner {
142:         _unpause();
143:     }
144: 
152:     function buyToken(
153:         address[] calldata addresses,
154:         uint[] calldata basisPointSplits,
155:         ProtocolRewardAddresses calldata protocolRewardsRecipients
156:     ) public payable nonReentrant whenNotPaused returns (uint256 tokensSoldWad) {
157:         
158:         require(msg.sender != treasury && msg.sender != creatorsAddress, "Funds recipient cannot buy tokens");
159: 
160:         require(msg.value > 0, "Must send ether");
161:         
162:         require(addresses.length == basisPointSplits.length, "Parallel arrays required");
163: 

```


*GitHub* : [64](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L64-L64)
### [N-35]<a name="n-35"></a> A function which defines named returns in it's declaration doesn't need to use return 
Remove the return statement once ensuring it is safe to do so

*There are 2 instance(s) of this issue:*

```solidity
419:     function _verifyVoteSignature(
420:         address from,
421:         uint256[] calldata pieceIds,
422:         uint256 deadline,
423:         uint8 v,
424:         bytes32 r,
425:         bytes32 s
426:     ) internal returns (bool success) {
427:         require(deadline >= block.timestamp, "Signature expired");
428: 
429:         bytes32 voteHash;
430: 
431:         voteHash = keccak256(abi.encode(VOTE_TYPEHASH, from, pieceIds, nonces[from]++, deadline));
432: 
433:         bytes32 digest = _hashTypedDataV4(voteHash);
434: 
435:         address recoveredAddress = ecrecover(digest, v, r, s);
436: 
437:         
438:         if (from == address(0)) revert ADDRESS_ZERO();
439: 
440:         
441:         if (recoveredAddress == address(0) || recoveredAddress != from) revert INVALID_SIGNATURE();
442: 
443:         return true; // <= FOUND
444:     }

```


*GitHub* : [443](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L443-L443)

```solidity
152:     function buyToken(
153:         address[] calldata addresses,
154:         uint[] calldata basisPointSplits,
155:         ProtocolRewardAddresses calldata protocolRewardsRecipients
156:     ) public payable nonReentrant whenNotPaused returns (uint256 tokensSoldWad) {
157:         
158:         require(msg.sender != treasury && msg.sender != creatorsAddress, "Funds recipient cannot buy tokens");
159: 
160:         require(msg.value > 0, "Must send ether");
161:         
162:         require(addresses.length == basisPointSplits.length, "Parallel arrays required");
163: 
164:         
165:         uint256 msgValueRemaining = _handleRewardsAndGetValueToSend(
166:             msg.value,
167:             protocolRewardsRecipients.builder,
168:             protocolRewardsRecipients.purchaseReferral,
169:             protocolRewardsRecipients.deployer
170:         );
171: 
172:         
173:         uint256 toPayTreasury = (msgValueRemaining * (10_000 - creatorRateBps)) / 10_000;
174: 
175:         
176:         
177:         uint256 creatorDirectPayment = ((msgValueRemaining - toPayTreasury) * entropyRateBps) / 10_000;
178:         
179:         int totalTokensForCreators = ((msgValueRemaining - toPayTreasury) - creatorDirectPayment) > 0
180:             ? getTokenQuoteForEther((msgValueRemaining - toPayTreasury) - creatorDirectPayment)
181:             : int(0);
182: 
183:         
184:         int totalTokensForBuyers = toPayTreasury > 0 ? getTokenQuoteForEther(toPayTreasury) : int(0);
185: 
186:         
187:         emittedTokenWad += totalTokensForBuyers;
188:         if (totalTokensForCreators > 0) emittedTokenWad += totalTokensForCreators;
189: 
190:         
191:         (bool success, ) = treasury.call{ value: toPayTreasury }(new bytes(0));
192:         require(success, "Transfer failed.");
193: 
194:         
195:         if (creatorDirectPayment > 0) {
196:             (success, ) = creatorsAddress.call{ value: creatorDirectPayment }(new bytes(0));
197:             require(success, "Transfer failed.");
198:         }
199: 
200:         
201:         if (totalTokensForCreators > 0 && creatorsAddress != address(0)) {
202:             _mint(creatorsAddress, uint256(totalTokensForCreators));
203:         }
204: 
205:         uint256 bpsSum = 0;
206: 
207:         
208: 
209:         for (uint256 i = 0; i < addresses.length; i++) {
210:             if (totalTokensForBuyers > 0) {
211:                 
212:                 _mint(addresses[i], uint256((totalTokensForBuyers * int(basisPointSplits[i])) / 10_000));
213:             }
214:             bpsSum += basisPointSplits[i];
215:         }
216: 
217:         require(bpsSum == 10_000, "bps must add up to 10_000");
218: 
219:         emit PurchaseFinalized(
220:             msg.sender,
221:             msg.value,
222:             toPayTreasury,
223:             msg.value - msgValueRemaining,
224:             uint256(totalTokensForBuyers),
225:             uint256(totalTokensForCreators),
226:             creatorDirectPayment
227:         );
228: 
229:         return uint256(totalTokensForBuyers); // <= FOUND
230:     }

```


*GitHub* : [229](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L229-L229)
### [N-36]<a name="n-36"></a> Constant/immutable state variables defined more than once
Rather than redefining state variable constant/immutable, consider utilising a library to store all constants as this will prevent data redundancy

*There are 1 instance(s) of this issue:*

```solidity
37: IRevolutionBuilder private immutable manager; // <= FOUND

```


*GitHub* : [37](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L37-L37)
### [N-37]<a name="n-37"></a> Multiple mappings can be replaced with a single struct mapping
Using a single struct mapping in place of multiple defined mappings in a Solidity contract can lead to improved code organization, better readability, and easier maintainability. By consolidating related data into a single struct, developers can create a more cohesive data structure that logically groups together relevant pieces of information, thus reducing redundancy and clutter. This approach simplifies the codebase, making it easier to understand, navigate, and modify. Additionally, it can result in more efficient gas usage when accessing or updating multiple related data points simultaneously.

*There are 2 instance(s) of this issue:*

```solidity
14: contract MaxHeap is VersionedContract, UUPS, Ownable2StepUpgradeable, ReentrancyGuardUpgradeable {
15:     
16:     address public admin;
17: 
23:     IRevolutionBuilder private immutable manager;
24: 
53:     mapping(uint256 => uint256) public heap; // <= FOUND
54: 
55:     uint256 public size = 0;
56: 
58:     mapping(uint256 => uint256) public valueMapping; // <= FOUND
59: 
61:     mapping(uint256 => uint256) public positionMapping; // <= FOUND
62: 
108: }

```


*GitHub* : [53](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L53-L61)

```solidity
20: contract CultureIndex is
21:     ICultureIndex,
22:     VersionedContract,
23:     UUPS,
24:     Ownable2StepUpgradeable,
25:     ReentrancyGuardUpgradeable,
26:     EIP712Upgradeable
27: {
28:     
29:     bytes32 public constant VOTE_TYPEHASH =
30:         keccak256("Vote(address from,uint256[] pieceIds,uint256 nonce,uint256 deadline)");
31: 
33:     mapping(address => uint256) public nonces; // <= FOUND
34: 
36:     MaxHeap public maxHeap;
37: 
39:     ERC20VotesUpgradeable public erc20VotingToken;
40: 
42:     ERC721CheckpointableUpgradeable public erc721VotingToken;
43: 
45:     uint256 public erc721VotingTokenWeight;
46: 
48:     uint256 public constant MAX_QUORUM_VOTES_BPS = 6_000; 
49: 
51:     uint256 public minVoteWeight;
52: 
54:     uint256 public quorumVotesBPS;
55: 
57:     string public name;
58: 
60:     string public description;
61: 
63:     mapping(uint256 => ArtPiece) public pieces; // <= FOUND
64: 
66:     uint256 public _currentPieceId;
67: 
69:     mapping(uint256 => mapping(address => Vote)) public votes; // <= FOUND
70: 
72:     mapping(uint256 => uint256) public totalVoteWeights; // <= FOUND
73: 
75:     uint256 public constant MAX_NUM_CREATORS = 100;
76: 
78:     address public dropperAdmin;
79: 
85:     IRevolutionBuilder private immutable manager;
86: 
304: }

```


*GitHub* : [33](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L33-L72)
### [N-38]<a name="n-38"></a> Constants should be on the left side of the 
Putting constants on the left side of a comparison operator like `==` or `<` is a best practice known as "Yoda conditions", which can help prevent accidental assignment instead of comparison. In some programming languages, if a variable is mistakenly put on the left with a single `=` instead of `==`, it assigns the constant's value to the variable without any compiler error. However, doing this with the constant on the left would generate an error, as constants cannot be assigned values. Although Solidity's static typing system prevents accidental assignments within conditionals, adopting this practice enhances code readability and consistency, especially when developers are working across multiple languages that support this convention.

*There are 3 instance(s) of this issue:*

```solidity
268:         if (auction.startTime == 0 || auction.settled)  // <= FOUND

```


*GitHub* : [268](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L268-L268)

```solidity
201:         if (totalTokensForCreators > 0 && creatorsAddress != address(0))  // <= FOUND

```


*GitHub* : [201](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L201-L201)

```solidity
195:         if (creatorDirectPayment > 0)  // <= FOUND

```


*GitHub* : [195](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L195-L195)
### [N-39]<a name="n-39"></a> Both immutable and constant state variables should be CONSTANT_CASE
Make found instants CAPITAL_CASE

*There are 10 instance(s) of this issue:*

```solidity
23: uint256 public constant minPurchaseAmount = 0.0000001 ether; // <= FOUND

```


*GitHub* : [23](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L23-L23)

```solidity
24: uint256 public constant maxPurchaseAmount = 50_000 ether; // <= FOUND

```


*GitHub* : [24](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L24-L24)

```solidity
37: IRevolutionBuilder private immutable manager; // <= FOUND

```


*GitHub* : [37](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L37-L37)

```solidity
85: IRevolutionBuilder public immutable manager; // <= FOUND

```


*GitHub* : [85](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L85-L85)

```solidity
16: int256 public immutable targetPrice; // <= FOUND

```


*GitHub* : [16](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L16-L16)

```solidity
20: int256 public immutable decayConstant; // <= FOUND

```


*GitHub* : [20](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L20-L20)

```solidity
22: int256 public immutable priceDecayPercent; // <= FOUND

```


*GitHub* : [22](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L22-L22)

```solidity
26: address internal immutable revolutionRewardRecipient; // <= FOUND

```


*GitHub* : [26](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L26-L26)

```solidity
27: IRevolutionProtocolRewards internal immutable protocolRewards; // <= FOUND

```


*GitHub* : [27](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L27-L27)

```solidity
18: int256 public immutable perTimeUnit; // <= FOUND

```


*GitHub* : [18](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L18-L18)
### [N-40]<a name="n-40"></a> Contracts do not use their OZ upgradable counterparts
Using the upgradeable counterpart of the OpenZeppelin (OZ) library in Solidity is beneficial for creating contracts that can be updated in the future. OpenZeppelin's upgradeable contracts library is designed with proxy patterns in mind, which allow the logic of contracts to be upgraded while preserving the contract's state and address. This can be crucial for long-lived contracts where future requirements or improvements may not be fully known at the time of deployment. The upgradeable OZ contracts also include protection against a class of vulnerabilities related to initialization of storage variables in upgradeable contracts. Hence, it's a good idea to use them when developing contracts that may need to be upgraded in the future, as they provide a solid foundation for secure and upgradeable smart contracts.

*There are 4 instance(s) of this issue:*

```solidity
14: contract MaxHeap is VersionedContract, UUPS, Ownable2StepUpgradeable, ReentrancyGuardUpgradeable  // <= FOUND

```


*GitHub* : [14](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L14-L14)

```solidity
20: contract CultureIndex is
21:     ICultureIndex,
22:     VersionedContract,
23:     UUPS, // <= FOUND
24:     Ownable2StepUpgradeable,
25:     ReentrancyGuardUpgradeable,
26:     EIP712Upgradeable
27: 

```


*GitHub* : [20](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L20-L23)

```solidity
39: contract AuctionHouse is
40:     IAuctionHouse,
41:     VersionedContract,
42:     UUPS, // <= FOUND
43:     PausableUpgradeable,
44:     ReentrancyGuardUpgradeable,
45:     Ownable2StepUpgradeable
46: 

```


*GitHub* : [39](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L39-L42)

```solidity
33: contract VerbsToken is
34:     IVerbsToken,
35:     VersionedContract,
36:     UUPS, // <= FOUND
37:     Ownable2StepUpgradeable,
38:     ReentrancyGuardUpgradeable,
39:     ERC721CheckpointableUpgradeable
40: 

```


*GitHub* : [33](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L33-L36)
### [N-41]<a name="n-41"></a> Consider using named mappings
In Solidity version 0.8.18 and beyond mapping parameters can be named. This makes the purpose and function of a given mapping far clearer which in turn improves readability.

*There are 5 instance(s) of this issue:*

```solidity
65:     mapping(uint256 => uint256) public heap; // <= FOUND

```


*GitHub* : [65](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L65-L65)

```solidity
70:     mapping(uint256 => uint256) public valueMapping; // <= FOUND

```


*GitHub* : [70](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L70-L70)

```solidity
73:     mapping(uint256 => uint256) public positionMapping; // <= FOUND

```


*GitHub* : [73](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L73-L73)

```solidity
33:     mapping(address => uint256) public nonces; // <= FOUND

```


*GitHub* : [33](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L33-L33)

```solidity
72:     mapping(uint256 => uint256) public totalVoteWeights; // <= FOUND

```


*GitHub* : [72](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L72-L72)
### [N-42]<a name="n-42"></a> Use a single contract or library for system wide constants

*There are 2 instance(s) of this issue:*

```solidity
20: contract CultureIndex is
21:     ICultureIndex,
22:     VersionedContract,
23:     UUPS,
24:     Ownable2StepUpgradeable,
25:     ReentrancyGuardUpgradeable,
26:     EIP712Upgradeable
27: {
28:     
29:     bytes32 public constant VOTE_TYPEHASH = // <= FOUND
30:         keccak256("Vote(address from,uint256[] pieceIds,uint256 nonce,uint256 deadline)");
31: 
33:     mapping(address => uint256) public nonces;
34: 
36:     MaxHeap public maxHeap;
37: 
39:     ERC20VotesUpgradeable public erc20VotingToken;
40: 
42:     ERC721CheckpointableUpgradeable public erc721VotingToken;
43: 
45:     uint256 public erc721VotingTokenWeight;
46: 
48:     uint256 public constant MAX_QUORUM_VOTES_BPS = 6_000;  // <= FOUND
49: 
51:     uint256 public minVoteWeight;
52: 
54:     uint256 public quorumVotesBPS;
55: 
57:     string public name;
58: 
60:     string public description;
61: 
63:     mapping(uint256 => ArtPiece) public pieces;
64: 
66:     uint256 public _currentPieceId;
67: 
69:     mapping(uint256 => mapping(address => Vote)) public votes;
70: 
72:     mapping(uint256 => uint256) public totalVoteWeights;
73: 
75:     uint256 public constant MAX_NUM_CREATORS = 100; // <= FOUND
76: 
78:     address public dropperAdmin;
79: 
85:     IRevolutionBuilder private immutable manager;
86: 
304: }

```


*GitHub* : [29](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L29-L75)

```solidity
39: contract AuctionHouse is
40:     IAuctionHouse,
41:     VersionedContract,
42:     UUPS,
43:     PausableUpgradeable,
44:     ReentrancyGuardUpgradeable,
45:     Ownable2StepUpgradeable
46: {
47:     
48:     IVerbsToken public verbs;
49: 
51:     IERC20TokenEmitter public erc20TokenEmitter;
52: 
54:     address public WETH;
55: 
57:     uint256 public timeBuffer;
58: 
60:     uint256 public reservePrice;
61: 
63:     uint8 public minBidIncrementPercentage;
64: 
66:     uint256 public creatorRateBps;
67: 
69:     uint256 public minCreatorRateBps;
70: 
72:     uint256 public entropyRateBps;
73: 
75:     uint256 public duration;
76: 
78:     IAuctionHouse.Auction public auction;
79: 
85:     IRevolutionBuilder public immutable manager;
86: 
88:     uint32 public constant MIN_TOKEN_MINT_GAS_THRESHOLD = 750_000; // <= FOUND
89: 
216: }

```


*GitHub* : [88](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L88-L88)
### [N-43]<a name="n-43"></a> Consider using modifiers for address control
Modifiers in Solidity can improve code readability and modularity by encapsulating repetitive checks, such as address validity checks, into a reusable construct. For example, an `onlyOwner` modifier can be used to replace repetitive `require(msg.sender == owner)` checks across several functions, reducing code redundancy and enhancing maintainability. To implement, define a modifier with the check, then apply the modifier to relevant functions.

*There are 4 instance(s) of this issue:*

```solidity
42:         require(msg.sender == admin, "Sender is not the admin"); // <= FOUND

```


*GitHub* : [42](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L42-L42)

```solidity
69:         require(msg.sender == address(manager), "Only manager can initialize"); // <= FOUND

```


*GitHub* : [69](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L69-L69)

```solidity
520:         require(msg.sender == dropperAdmin, "Only dropper can drop pieces"); // <= FOUND

```


*GitHub* : [520](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L520-L520)

```solidity
100:         require(msg.sender == minter, "Sender is not the minter"); // <= FOUND

```


*GitHub* : [100](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L100-L100)
### [N-44]<a name="n-44"></a> Off-by-one timestamp error
In Solidity, using `>=` or `<=` to compare against `block.timestamp` (alias `now`) may introduce off-by-one errors due to the fact that `block.timestamp` is only updated once per block and its value remains constant throughout the block's execution. If an operation happens at the exact second when `block.timestamp` changes, it could result in unexpected behavior. To avoid this, it's safer to use strict inequality operators (`>` or `<`). For instance, if a condition should only be met after a certain time, use `block.timestamp > time` rather than `block.timestamp >= time`. This way, potential off-by-one errors due to the exact timing of block mining are mitigated, leading to safer, more predictable contract behavior.

*There are 2 instance(s) of this issue:*

```solidity
419:     function _verifyVoteSignature(
420:         address from,
421:         uint256[] calldata pieceIds,
422:         uint256 deadline,
423:         uint8 v,
424:         bytes32 r,
425:         bytes32 s
426:     ) internal returns (bool success) {
427:         require(deadline >= block.timestamp, "Signature expired");
428: 
429:         bytes32 voteHash;
430: 
431:         voteHash = keccak256(abi.encode(VOTE_TYPEHASH, from, pieceIds, nonces[from]++, deadline));
432: 
433:         bytes32 digest = _hashTypedDataV4(voteHash);
434: 
435:         address recoveredAddress = ecrecover(digest, v, r, s);
436: 
437:         
438:         if (from == address(0)) revert ADDRESS_ZERO();
439: 
440:         
441:         if (recoveredAddress == address(0) || recoveredAddress != from) revert INVALID_SIGNATURE();
442: 
443:         return true;
444:     }

```


*GitHub* : [419](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L419-L419)

```solidity
336:     function _settleAuction() internal { // <= FOUND
337:         IAuctionHouse.Auction memory _auction = auction;
338: 
339:         require(_auction.startTime != 0, "Auction hasn't begun");
340:         require(!_auction.settled, "Auction has already been settled");
341:         
342:         require(block.timestamp >= _auction.endTime, "Auction hasn't completed");
343: 
344:         auction.settled = true;
345: 
346:         uint256 creatorTokensEmitted = 0;
347:         
348:         if (address(this).balance < reservePrice) {
349:             
350:             if (_auction.bidder != address(0)) {
351:                 _safeTransferETHWithFallback(_auction.bidder, _auction.amount);
352:             }
353: 
354:             
355:             verbs.burn(_auction.verbId);
356:         } else {
357:             
358:             if (_auction.bidder == address(0))
359:                 verbs.burn(_auction.verbId);
360:                 
361:             else verbs.transferFrom(address(this), _auction.bidder, _auction.verbId);
362: 
363:             if (_auction.amount > 0) {
364:                 
365:                 uint256 auctioneerPayment = (_auction.amount * (10_000 - creatorRateBps)) / 10_000;
366: 
367:                 
368:                 uint256 creatorsShare = _auction.amount - auctioneerPayment;
369: 
370:                 uint256 numCreators = verbs.getArtPieceById(_auction.verbId).creators.length;
371:                 address deployer = verbs.getArtPieceById(_auction.verbId).sponsor;
372: 
373:                 
374:                 uint256[] memory vrgdaSplits = new uint256[](numCreators);
375:                 address[] memory vrgdaReceivers = new address[](numCreators);
376: 
377:                 
378:                 _safeTransferETHWithFallback(owner(), auctioneerPayment);
379: 
380:                 uint256 ethPaidToCreators = 0;
381: 
382:                 
383:                 if (creatorsShare > 0 && entropyRateBps > 0) {
384:                     for (uint256 i = 0; i < numCreators; i++) {
385:                         ICultureIndex.CreatorBps memory creator = verbs.getArtPieceById(_auction.verbId).creators[i];

```


*GitHub* : [336](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L336-L336)
### [N-45]<a name="n-45"></a> Address from parameter can cause issues
In Solidity, accepting the 'from' address as a public/external function parameter in a non-view/pure function can potentially be misused by an attacker to perform operations on behalf of another user. If not properly checked, an attacker could call the function, pass another user's address as the 'from' parameter, and perform actions like transferring tokens on their behalf. To mitigate this, it's preferable to use 'msg.sender' which refers to the address of the caller of the current function, ensuring that actions are performed by the actual owner of an account or contract. This significantly reduces the risk of unauthorized actions.

*There are 1 instance(s) of this issue:*

```solidity
367:     function voteForManyWithSig(
368:         address from,
369:         uint256[] calldata pieceIds,
370:         uint256 deadline,
371:         uint8 v,
372:         bytes32 r,
373:         bytes32 s
374:     ) external nonReentrant {
375:         bool success = _verifyVoteSignature(from, pieceIds, deadline, v, r, s);
376: 
377:         if (!success) revert INVALID_SIGNATURE();
378: 
379:         _voteForMany(pieceIds, from);
380:     }

```


*GitHub* : [367](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L367-L367)
### [N-46]<a name="n-46"></a> Variables should be used in place of magic numbers to improve readability
Magic numbers should be avoided in Solidity code to enhance readability, maintainability, and reduce the likelihood of errors. Magic numbers are hard-coded values with no clear meaning or context, which can create confusion and make the code harder to understand for developers. Using well-defined constants or variables with descriptive names instead of magic numbers not only clarifies the purpose and significance of the value but also simplifies code updates and modifications.

*There are 20 instance(s) of this issue:*

```solidity
190: 
191:         require(totalBps == 10_000, "Total BPS must sum up to 10,000"); // <= FOUND

```


*GitHub* : [190](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L190-L191)

```solidity
234:         newPiece.quorumVotes = (quorumVotesBPS * newPiece.totalVotesSupply) / 10_000; // <= FOUND

```


*GitHub* : [234](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L234-L234)

```solidity
510:         return
511:             (quorumVotesBPS * _calculateVoteWeight(erc20VotingToken.totalSupply(), erc721VotingToken.totalSupply())) /
512:             10_000; // <= FOUND

```


*GitHub* : [510](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L510-L512)

```solidity
88:         return 18; // <= FOUND

```


*GitHub* : [88](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L88-L88)

```solidity
173: 
174:         
175:         uint256 toPayTreasury = (msgValueRemaining * (10_000 - creatorRateBps)) / 10_000; // <= FOUND

```


*GitHub* : [173](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L173-L175)

```solidity
177: 
178:         
179:         
180:         uint256 creatorDirectPayment = ((msgValueRemaining - toPayTreasury) * entropyRateBps) / 10_000; // <= FOUND

```


*GitHub* : [177](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L177-L180)

```solidity
212:                 
213:                 _mint(addresses[i], uint256((totalTokensForBuyers * int(basisPointSplits[i])) / 10_000)); // <= FOUND

```


*GitHub* : [212](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L212-L213)

```solidity
217: 
218:         require(bpsSum == 10_000, "bps must add up to 10_000"); // <= FOUND

```


*GitHub* : [217](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L217-L218)

```solidity
277:                 timeSinceStart: toDaysWadUnsafe(block.timestamp - startTime),
278:                 sold: emittedTokenWad,
279:                 amount: int(((paymentAmount - computeTotalReward(paymentAmount)) * (10_000 - creatorRateBps)) / 10_000) // <= FOUND
280:             });

```


*GitHub* : [277](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L277-L279)

```solidity
254:         require(_entropyRateBps <= 10_000, "Entropy rate must be less than or equal to 10_000"); // <= FOUND

```


*GitHub* : [254](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L254-L254)

```solidity
222:         require(_creatorRateBps <= 10_000, "Creator rate must be less than or equal to 10_000"); // <= FOUND

```


*GitHub* : [222](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L222-L222)

```solidity
180:         require(
181:             msg.value >= _auction.amount + ((_auction.amount * minBidIncrementPercentage) / 100), // <= FOUND
182:             "Must send more than last bid by minBidIncrementPercentage amount"
183:         );

```


*GitHub* : [180](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L180-L181)

```solidity
235:         require(_minCreatorRateBps <= 10_000, "Min creator rate must be less than or equal to 10_000"); // <= FOUND

```


*GitHub* : [235](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L235-L235)

```solidity
365:                 
366:                 uint256 auctioneerPayment = (_auction.amount * (10_000 - creatorRateBps)) / 10_000; // <= FOUND

```


*GitHub* : [365](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L365-L366)

```solidity
390: 
391:                         
392:                         uint256 paymentAmount = (creatorsShare * entropyRateBps * creator.bps) / (10_000 * 10_000); // <= FOUND

```


*GitHub* : [390](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L390-L392)

```solidity
42: 
43:         return
44:             (paymentAmountWei * BUILDER_REWARD_BPS) /
45:             10_000 + // <= FOUND
46:             (paymentAmountWei * PURCHASE_REFERRAL_BPS) /
47:             10_000 + // <= FOUND
48:             (paymentAmountWei * DEPLOYER_REWARD_BPS) /
49:             10_000 + // <= FOUND
50:             (paymentAmountWei * REVOLUTION_REWARD_BPS) /
51:             10_000; // <= FOUND

```


*GitHub* : [42](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L42-L51)

```solidity
56:                 builderReferralReward: (paymentAmountWei * BUILDER_REWARD_BPS) / 10_000, // <= FOUND
57:                 purchaseReferralReward: (paymentAmountWei * PURCHASE_REFERRAL_BPS) / 10_000, // <= FOUND
58:                 deployerReward: (paymentAmountWei * DEPLOYER_REWARD_BPS) / 10_000, // <= FOUND
59:                 revolutionReward: (paymentAmountWei * REVOLUTION_REWARD_BPS) / 10_000 // <= FOUND
60:             }),

```


*GitHub* : [56](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L56-L59)

```solidity
80:         return (pos - 1) / 2; // <= FOUND

```


*GitHub* : [80](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L80-L80)

```solidity
102: 
103:         if (pos >= (size / 2) && pos <= size) return; // <= FOUND

```


*GitHub* : [102](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L102-L103)

```solidity
160:         require(uint8(metadata.mediaType) > 0 && uint8(metadata.mediaType) <= 5, "Invalid media type"); // <= FOUND

```


*GitHub* : [160](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L160-L160)
### [N-47]<a name="n-47"></a> Mixed usage of int/uint with int256/uint256
Use uint256/int256 in place of uint/int to prevent ambiguity

*There are 6 instance(s) of this issue:*

```solidity
185:         for (uint i; i < creatorArrayLength; i++) { // <= FOUND

```


*GitHub* : [185](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L185-L185)

```solidity
185: 
186:         for (uint i; i < creatorArrayLength; i++) { // <= FOUND

```


*GitHub* : [186](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L186-L186)

```solidity
185: 
186:         
187:         for (uint i; i < creatorArrayLength; i++) { // <= FOUND

```


*GitHub* : [187](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L187-L187)

```solidity
306: 
307:             for (uint i = 0; i < artPiece.creators.length; i++) { // <= FOUND

```


*GitHub* : [307](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L307-L307)

```solidity
112: 
113:     function totalSupply() public view returns (uint) { // <= FOUND

```


*GitHub* : [113](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L113-L113)

```solidity
122: 
123:     function balanceOf(address _owner) public view returns (uint) { // <= FOUND

```


*GitHub* : [123](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L123-L123)
### [N-48]<a name="n-48"></a> Contract existence is not checked before low level call
Low-level assembly calls, such as call, can return a successful status even when the target address contains no executable code. This is due to the fact that a call operation merely checks if the call operation itself was successful, not whether the call was made to an address with code. As a result, these calls might lead to false positives when assessing the success of an operation. To prevent potential issues, consider using Solidity's extcodesize function to check the size of the contract code at the target address. If extcodesize returns zero, this indicates that there is no code at the specified address, and the function can safely revert.

*There are 1 instance(s) of this issue:*

```solidity
426:         assembly {
427:             
428:             
429:             success := call(50000, _to, _amount, 0, 0, 0, 0) // <= FOUND
430:         }

```


*GitHub* : [426](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L426-L429)
### [N-49]<a name="n-49"></a> Employ Explicit Casting to Bytes or Bytes32 for Enhanced Code Clarity and Meaning
Smart contracts are complex entities, and clarity in their operations is fundamental to ensure that they function as intended. Casting a single argument instead of utilizing 'abi.encodePacked()' improves the transparency of the operation. It elucidates the intent of the code, reducing ambiguity and making it easier for auditors and developers to understand the code’s purpose. Such practices promote readability and maintainability, thus reducing the likelihood of errors and misunderstandings. Therefore, it's recommended to employ explicit casts for single arguments where possible, to increase the contract's comprehensibility and ensure a smoother review process.

*There are 1 instance(s) of this issue:*

```solidity
161:     function contractURI() public view returns (string memory) {
162:         return string(abi.encodePacked("ipfs: // <= FOUND
163:     }

```


*GitHub* : [162](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L162-L162)
### [N-50]<a name="n-50"></a> Custom error has no error variables
In Solidity, the use of custom error messages provides a valuable method of conveying meaningful information about failures during execution. In the current implementation, the custom errors lack specifics, making it challenging to understand the root cause of a failure. It's advisable to incorporate parameters into your error messages to indicate which user action or specific value caused the exception. This not only enhances error transparency but also aids debugging and fosters a more robust and maintainable codebase. Providing such precise error context greatly helps developers identify and resolve issues faster.

*There are 2 instance(s) of this issue:*

```solidity
30: error TRANSFER_NOT_ALLOWED(); // <= FOUND

```


*GitHub* : [30](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L30-L30)

```solidity
15: error INVALID_ETH_AMOUNT(); // <= FOUND

```


*GitHub* : [15](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L15-L15)
### [N-51]<a name="n-51"></a> Event emit should emit a parameter
Events in Solidity offer valuable insight into the contract's execution as they log specific instances of state changes or value transfers. However, if events do not include any parameters, their usefulness can be significantly reduced. Events without parameters can provide limited information, mainly signaling that a specific operation occurred, but lacking the context of what exactly changed. It's generally recommended to include relevant parameters, such as state changes or value modifications, in the emitted events.

*There are 3 instance(s) of this issue:*

```solidity
223: 
224:         emit MinterLocked(); // <= FOUND

```


*GitHub* : [223](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L223-L224)

```solidity
245: 
246:         emit DescriptorLocked(); // <= FOUND

```


*GitHub* : [245](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L245-L246)

```solidity
265: 
266:         emit CultureIndexLocked(); // <= FOUND

```


*GitHub* : [265](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L265-L266)
### [N-52]<a name="n-52"></a> Empty bytes check is missing
When developing smart contracts in Solidity, it's crucial to validate the inputs of your functions. This includes ensuring that the bytes parameters are not empty, especially when they represent crucial data such as addresses, identifiers, or raw data that the contract needs to process.

Missing empty bytes checks can lead to unexpected behaviour in your contract. For instance, certain operations might fail, produce incorrect results, or consume unnecessary gas when performed with empty bytes. Moreover, missing input validation can potentially expose your contract to malicious activity, including exploitation of unhandled edge cases.

To mitigate these issues, always validate that bytes parameters are not empty when the logic of your contract requires it.

*There are 2 instance(s) of this issue:*

```solidity
367:     function voteForManyWithSig(
368:         address from,
369:         uint256[] calldata pieceIds,
370:         uint256 deadline,
371:         uint8 v,
372:         bytes32 r,
373:         bytes32 s
374:     ) external nonReentrant {
375:         bool success = _verifyVoteSignature(from, pieceIds, deadline, v, r, s);
376: 
377:         if (!success) revert INVALID_SIGNATURE();
378: 
379:         _voteForMany(pieceIds, from);
380:     }

```


*GitHub* : [367](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L367-L367)

```solidity
419:     function _verifyVoteSignature(
420:         address from,
421:         uint256[] calldata pieceIds,
422:         uint256 deadline,
423:         uint8 v,
424:         bytes32 r,
425:         bytes32 s
426:     ) internal returns (bool success) {
427:         require(deadline >= block.timestamp, "Signature expired");
428: 
429:         bytes32 voteHash;
430: 
431:         voteHash = keccak256(abi.encode(VOTE_TYPEHASH, from, pieceIds, nonces[from]++, deadline));
432: 
433:         bytes32 digest = _hashTypedDataV4(voteHash);
434: 
435:         address recoveredAddress = ecrecover(digest, v, r, s);
436: 
437:         
438:         if (from == address(0)) revert ADDRESS_ZERO();
439: 
440:         
441:         if (recoveredAddress == address(0) || recoveredAddress != from) revert INVALID_SIGNATURE();
442: 
443:         return true;
444:     }

```


*GitHub* : [419](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L419-L419)
### [N-53]<a name="n-53"></a> Consider upgrading to ERC721A
ERC721A is an enhanced variant of the original ERC721 standard, introducing new features that increase efficiency and broaden functionality. It preserves the features of the original ERC721 standard while incorporating support for batch minting, allowing for multiple NFTs to be minted in a single transaction. This reduces the amount of gas required compared to minting each token individually. Additionally, ERC721A introduces mechanisms to track the ownership of numerous NFTs concurrently, providing an optimized way to manage multiple NFT assets for a single owner. This can result in streamlined ownership tracking and potentially more efficient contract interactions.

*There are 1 instance(s) of this issue:*

```solidity
33: contract VerbsToken is
34:     IVerbsToken,
35:     VersionedContract,
36:     UUPS,
37:     Ownable2StepUpgradeable,
38:     ReentrancyGuardUpgradeable,
39:     ERC721CheckpointableUpgradeable // <= FOUND
40: 

```


*GitHub* : [33](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L33-L39)
### [N-54]<a name="n-54"></a> No equate comparison checks between to and from address parameters
The function lacks a standard check: it does not validate if the 'to' and 'from' addresses are identical. This omission can lead to unintended outcomes if the same address is used in both parameters. To rectify this, we recommend implementing a comparison check at the beginning of the function. In the context of Solidity, the command `require(to != from, "To and From addresses can't be the same");` could be utilized. This addition will generate an error if the 'to' and 'from' addresses are the same, thereby fortifying the function's robustness and security.

*There are 1 instance(s) of this issue:*

```solidity
101:     function _transfer(address from, address to, uint256 value) internal override { // <= FOUND
102:         revert TRANSFER_NOT_ALLOWED();
103:     }

```


*GitHub* : [101](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L101-L101)
### [N-55]<a name="n-55"></a> Return bool not explicit
In Solidity, when designing functions that return boolean values, it's crucial for clarity and maintainability to explicitly handle both `true` and `false` return scenarios. If a function is intended to return `true` under certain conditions, it should also explicitly return `false` when these conditions are not met, and vice versa. This approach eliminates ambiguity and makes the code's intent more transparent. Explicitly handling all possible outcomes of a boolean function ensures that future modifications or extensions of the contract do not unintentionally alter its logic. It contributes to better readability, easier debugging, and reduces the risk of bugs related to unintended fall-through cases.

*There are 1 instance(s) of this issue:*

```solidity
419:     function _verifyVoteSignature(
420:         address from,
421:         uint256[] calldata pieceIds,
422:         uint256 deadline,
423:         uint8 v,
424:         bytes32 r,
425:         bytes32 s
426:     ) internal returns (bool success) {
427:         require(deadline >= block.timestamp, "Signature expired");
428: 
429:         bytes32 voteHash;
430: 
431:         voteHash = keccak256(abi.encode(VOTE_TYPEHASH, from, pieceIds, nonces[from]++, deadline));
432: 
433:         bytes32 digest = _hashTypedDataV4(voteHash);
434: 
435:         address recoveredAddress = ecrecover(digest, v, r, s);
436: 
437:         
438:         if (from == address(0)) revert ADDRESS_ZERO();
439: 
440:         
441:         if (recoveredAddress == address(0) || recoveredAddress != from) revert INVALID_SIGNATURE();
442: 
443:         return true; // <= FOUND
444:     }

```


*GitHub* : [419](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L419-L443)
### [N-56]<a name="n-56"></a> Remove unnecessary solhint-disable

*There are 2 instance(s) of this issue:*

```solidity
33:     // solhint-disable-next-line not-rely-on-time // <= FOUND

```


*GitHub* : [33](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L33-L33)

```solidity
240:         // solhint-disable-next-line not-rely-on-time // <= FOUND

```


*GitHub* : [240](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L240-L240)
### [N-57]<a name="n-57"></a> Consider using SMTChecker
The SMTChecker is a valuable tool for Solidity developers as it helps detect potential vulnerabilities and logical errors in the contract's code. By utilizing Satisfiability Modulo Theories (SMT) solvers, it can reason about the potential states a contract can be in, and therefore, identify conditions that could lead to undesirable behavior. This automatic formal verification can catch issues that might otherwise be missed in manual code reviews or standard testing, enhancing the overall contract's security and reliability.

*There are 9 instance(s) of this issue:*

```solidity
1: // SPDX-License-Identifier: MIT
2: // OpenZeppelin Contracts (last updated v4.8.0) (token/ERC20/ERC20.sol)
3: 
4: pragma solidity ^0.8.22;
5: 
6: /**
7:  * @dev Extension of ERC-20 to support Compound-like voting and delegation. This version is more generic than Compound's,
8:  * and supports token supply up to 2^208^ - 1, while COMP is limited to 2^96^ - 1. The token is also nontransferable.
9:  *
10:  * NOTE: This contract does not provide interface compatibility with Compound's COMP token.
11:  *
12:  * This extension keeps a history (checkpoints) of each account's vote power. Vote power can be delegated either
13:  * by calling the {delegate} function directly, or by providing a signature to be used with {delegateBySig}. Voting
14:  * power can be queried through the public accessors {getVotes} and {getPastVotes}.
15:  *
16:  * By default, token balance does not account for voting power. This makes transfers cheaper. The downside is that it
17:  * requires users to delegate to themselves in order to activate checkpoints and have their voting power tracked.
18:  */
19: 
20: import { Ownable2StepUpgradeable } from "@openzeppelin/contracts-upgradeable/access/Ownable2StepUpgradeable.sol";
21: import { PausableUpgradeable } from "@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol";
22: import { Initializable } from "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
23: 
24: import { ERC20VotesUpgradeable } from "./base/erc20/ERC20VotesUpgradeable.sol";
25: import { EIP712Upgradeable } from "@openzeppelin/contracts-upgradeable/utils/cryptography/EIP712Upgradeable.sol";
26: 
27: import { IRevolutionBuilder } from "./interfaces/IRevolutionBuilder.sol";
28: 
29: contract NontransferableERC20Votes is Initializable, ERC20VotesUpgradeable, Ownable2StepUpgradeable {
30:     error TRANSFER_NOT_ALLOWED();
31: 
32:     ///                                                          ///
33:     ///                         IMMUTABLES                       ///
34:     ///                                                          ///
35: 
36:     /// @notice The contract upgrade manager
37:     IRevolutionBuilder private immutable manager;
38: 
39:     ///                                                          ///
40:     ///                         CONSTRUCTOR                      ///
41:     ///                                                          ///
42: 
43:     /// @param _manager The contract upgrade manager address
44:     constructor(address _manager) payable initializer {
45:         manager = IRevolutionBuilder(_manager);
46:     }
47: 
48:     ///                                                          ///
49:     ///                         INITIALIZER                      ///
50:     ///                                                          ///
51: 
52:     function __NontransferableERC20Votes_init(
53:         address _initialOwner,
54:         string calldata _name,
55:         string calldata _symbol
56:     ) internal onlyInitializing {
57:         __Ownable_init(_initialOwner);
58:         __ERC20_init(_name, _symbol);
59:         __EIP712_init(_name, "1");
60:     }
61: 
62:     /// @notice Initializes a DAO's ERC-20 governance token contract
63:     /// @param _initialOwner The address of the initial owner
64:     /// @param _erc20TokenParams The params of the token
65:     function initialize(
66:         address _initialOwner,
67:         IRevolutionBuilder.ERC20TokenParams calldata _erc20TokenParams
68:     ) external initializer {
69:         require(msg.sender == address(manager), "Only manager can initialize");
70: 
71:         __NontransferableERC20Votes_init(_initialOwner, _erc20TokenParams.name, _erc20TokenParams.symbol);
72:     }
73: 
74:     /**
75:      * @dev Returns the number of decimals used to get its user representation.
76:      * For example, if `decimals` equals `2`, a balance of `505` tokens should
77:      * be displayed to a user as `5.05` (`505 / 10 ** 2`).
78:      *
79:      * Tokens usually opt for a value of 18, imitating the relationship between
80:      * Ether and Wei. This is the default value returned by this function, unless
81:      * it's overridden.
82:      *
83:      * NOTE: This information is only used for _display_ purposes: it in
84:      * no way affects any of the arithmetic of the contract, including
85:      * {IERC20-balanceOf} and {IERC20-transfer}.
86:      */
87:     function decimals() public view virtual override returns (uint8) {
88:         return 18;
89:     }
90: 
91:     /**
92:      * @dev Not allowed
93:      */
94:     function transfer(address, uint256) public virtual override returns (bool) {
95:         revert TRANSFER_NOT_ALLOWED();
96:     }
97: 
98:     /**
99:      * @dev Not allowed
100:      */
101:     function _transfer(address from, address to, uint256 value) internal override {
102:         revert TRANSFER_NOT_ALLOWED();
103:     }
104: 
105:     /**
106:      * @dev Not allowed
107:      */
108:     function transferFrom(address, address, uint256) public virtual override returns (bool) {
109:         revert TRANSFER_NOT_ALLOWED();
110:     }
111: 
112:     /**
113:      * @dev Not allowed
114:      */
115:     function approve(address, uint256) public virtual override returns (bool) {
116:         revert TRANSFER_NOT_ALLOWED();
117:     }
118: 
119:     /**
120:      * @dev Creates a `value` amount of tokens and assigns them to `account`, by transferring it from address(0).
121:      * Relies on the `_update` mechanism
122:      *
123:      * Emits a {Transfer} event with `from` set to the zero address.
124:      *
125:      * NOTE: This function is not virtual, {_update} should be overridden instead.
126:      */
127:     function _mint(address account, uint256 value) internal override {
128:         if (account == address(0)) {
129:             revert ERC20InvalidReceiver(address(0));
130:         }
131:         _update(address(0), account, value);
132:     }
133: 
134:     function mint(address account, uint256 amount) public onlyOwner {
135:         _mint(account, amount);
136:     }
137: 
138:     /**
139:      * @dev Not allowed
140:      */
141:     function _approve(address owner, address spender, uint256 value) internal override {
142:         revert TRANSFER_NOT_ALLOWED();
143:     }
144: 
145:     /**
146:      * @dev Not allowed
147:      */
148:     function _approve(address owner, address spender, uint256 value, bool emitEvent) internal virtual override {
149:         revert TRANSFER_NOT_ALLOWED();
150:     }
151: 
152:     /**
153:      * @dev Not allowed
154:      */
155:     function _spendAllowance(address owner, address spender, uint256 value) internal virtual override {
156:         revert TRANSFER_NOT_ALLOWED();
157:     }
158: }
159: 

```


*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L1-L1)

```solidity
1: // SPDX-License-Identifier: MIT
2: pragma solidity 0.8.22;
3: 
4: import { wadExp, wadLn, wadMul, wadDiv, unsafeWadDiv, wadPow } from "./SignedWadMath.sol";
5: 
6: /// @title Continuous Variable Rate Gradual Dutch Auction
7: /// @author transmissions11 <t11s@paradigm.xyz>
8: /// @author FrankieIsLost <frankie@paradigm.xyz>
9: /// @author Dan Robinson <dan@paradigm.xyz>
10: /// @notice Sell tokens roughly according to an issuance schedule.
11: contract VRGDAC {
12:     /*//////////////////////////////////////////////////////////////
13:                             VRGDA PARAMETERS
14:     //////////////////////////////////////////////////////////////*/
15: 
16:     int256 public immutable targetPrice;
17: 
18:     int256 public immutable perTimeUnit;
19: 
20:     int256 public immutable decayConstant;
21: 
22:     int256 public immutable priceDecayPercent;
23: 
24:     /// @notice Sets target price and per time unit price decay for the VRGDA.
25:     /// @param _targetPrice The target price for a token if sold on pace, scaled by 1e18.
26:     /// @param _priceDecayPercent The percent price decays per unit of time with no sales, scaled by 1e18.
27:     /// @param _perTimeUnit The number of tokens to target selling in 1 full unit of time, scaled by 1e18.
28:     constructor(int256 _targetPrice, int256 _priceDecayPercent, int256 _perTimeUnit) {
29:         targetPrice = _targetPrice;
30: 
31:         perTimeUnit = _perTimeUnit;
32: 
33:         priceDecayPercent = _priceDecayPercent;
34: 
35:         decayConstant = wadLn(1e18 - _priceDecayPercent);
36: 
37:         // The decay constant must be negative for VRGDAs to work.
38:         require(decayConstant < 0, "NON_NEGATIVE_DECAY_CONSTANT");
39:     }
40: 
41:     /*//////////////////////////////////////////////////////////////
42:                               PRICING LOGIC
43:     //////////////////////////////////////////////////////////////*/
44: 
45:     // y to pay
46:     // given # of tokens sold and # to buy, returns amount to pay
47:     function xToY(int256 timeSinceStart, int256 sold, int256 amount) public view virtual returns (int256) {
48:         unchecked {
49:             return pIntegral(timeSinceStart, sold + amount) - pIntegral(timeSinceStart, sold);
50:         }
51:     }
52: 
53:     // given amount to pay and amount sold so far, returns # of tokens to sell - raw form
54:     function yToX(int256 timeSinceStart, int256 sold, int256 amount) public view virtual returns (int256) {
55:         int256 soldDifference = wadMul(perTimeUnit, timeSinceStart) - sold;
56:         unchecked {
57:             return
58:                 wadMul(
59:                     perTimeUnit,
60:                     wadDiv(
61:                         wadLn(
62:                             wadDiv(
63:                                 wadMul(
64:                                     targetPrice,
65:                                     wadMul(
66:                                         perTimeUnit,
67:                                         wadExp(wadMul(soldDifference, wadDiv(decayConstant, perTimeUnit)))
68:                                     )
69:                                 ),
70:                                 wadMul(
71:                                     targetPrice,
72:                                     wadMul(
73:                                         perTimeUnit,
74:                                         wadPow(1e18 - priceDecayPercent, wadDiv(soldDifference, perTimeUnit))
75:                                     )
76:                                 ) - wadMul(amount, decayConstant)
77:                             )
78:                         ),
79:                         decayConstant
80:                     )
81:                 );
82:         }
83:     }
84: 
85:     // given # of tokens sold, returns integral of price p(x) = p0 * (1 - k)^(x/r)
86:     function pIntegral(int256 timeSinceStart, int256 sold) internal view returns (int256) {
87:         return
88:             wadDiv(
89:                 -wadMul(
90:                     wadMul(targetPrice, perTimeUnit),
91:                     wadPow(1e18 - priceDecayPercent, timeSinceStart - unsafeWadDiv(sold, perTimeUnit)) -
92:                         wadPow(1e18 - priceDecayPercent, timeSinceStart)
93:                 ),
94:                 decayConstant
95:             );
96:     }
97: }
98: 

```


*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L1-L1)

```solidity
1: // SPDX-License-Identifier: GPL-3.0
2: 
3: /// @title The Verbs DAO auction house
4: 
5: /*********************************
6:  * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ *
7:  * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ *
8:  * ░░░░░░█████████░░█████████░░░ *
9:  * ░░░░░░██░░░████░░██░░░████░░░ *
10:  * ░░██████░░░████████░░░████░░░ *
11:  * ░░██░░██░░░████░░██░░░████░░░ *
12:  * ░░██░░██░░░████░░██░░░████░░░ *
13:  * ░░░░░░█████████░░█████████░░░ *
14:  * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ *
15:  * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ *
16:  *********************************/
17: 
18: // LICENSE
19: // AuctionHouse.sol is a modified version of Zora's AuctionHouse.sol:
20: // https://github.com/ourzora/auction-house/blob/54a12ec1a6cf562e49f0a4917990474b11350a2d/contracts/AuctionHouse.sol
21: //
22: // AuctionHouse.sol source code Copyright Zora licensed under the GPL-3.0 license.
23: 
24: pragma solidity ^0.8.22;
25: 
26: import { PausableUpgradeable } from "@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol";
27: import { ReentrancyGuardUpgradeable } from "@openzeppelin/contracts-upgradeable/utils/ReentrancyGuardUpgradeable.sol";
28: import { IAuctionHouse } from "./interfaces/IAuctionHouse.sol";
29: import { IVerbsToken } from "./interfaces/IVerbsToken.sol";
30: import { IWETH } from "./interfaces/IWETH.sol";
31: import { IERC20TokenEmitter } from "./interfaces/IERC20TokenEmitter.sol";
32: import { ICultureIndex } from "./interfaces/ICultureIndex.sol";
33: import { IRevolutionBuilder } from "./interfaces/IRevolutionBuilder.sol";
34: import { Ownable2StepUpgradeable } from "@openzeppelin/contracts-upgradeable/access/Ownable2StepUpgradeable.sol";
35: 
36: import { UUPS } from "./libs/proxy/UUPS.sol";
37: import { VersionedContract } from "./version/VersionedContract.sol";
38: 
39: contract AuctionHouse is
40:     IAuctionHouse,
41:     VersionedContract,
42:     UUPS,
43:     PausableUpgradeable,
44:     ReentrancyGuardUpgradeable,
45:     Ownable2StepUpgradeable
46: {
47:     // The Verbs ERC721 token contract
48:     IVerbsToken public verbs;
49: 
50:     // The ERC20 governance token
51:     IERC20TokenEmitter public erc20TokenEmitter;
52: 
53:     // The address of the WETH contract
54:     address public WETH;
55: 
56:     // The minimum amount of time left in an auction after a new bid is created
57:     uint256 public timeBuffer;
58: 
59:     // The minimum price accepted in an auction
60:     uint256 public reservePrice;
61: 
62:     // The minimum percentage difference between the last bid amount and the current bid
63:     uint8 public minBidIncrementPercentage;
64: 
65:     // The split of the winning bid that is reserved for the creator of the Verb in basis points
66:     uint256 public creatorRateBps;
67: 
68:     // The all time minimum split of the winning bid that is reserved for the creator of the Verb in basis points
69:     uint256 public minCreatorRateBps;
70: 
71:     // The split of (auction proceeds * creatorRate) that is sent to the creator as ether in basis points
72:     uint256 public entropyRateBps;
73: 
74:     // The duration of a single auction
75:     uint256 public duration;
76: 
77:     // The active auction
78:     IAuctionHouse.Auction public auction;
79: 
80:     ///                                                          ///
81:     ///                         IMMUTABLES                       ///
82:     ///                                                          ///
83: 
84:     /// @notice The contract upgrade manager
85:     IRevolutionBuilder public immutable manager;
86: 
87:     // TODO investigate this - The minimum gas threshold for creating an auction (minting VerbsToken)
88:     uint32 public constant MIN_TOKEN_MINT_GAS_THRESHOLD = 750_000;
89: 
90:     ///                                                          ///
91:     ///                         CONSTRUCTOR                      ///
92:     ///                                                          ///
93: 
94:     /// @param _manager The contract upgrade manager address
95:     constructor(address _manager) payable initializer {
96:         manager = IRevolutionBuilder(_manager);
97:     }
98: 
99:     ///                                                          ///
100:     ///                         INITIALIZER                      ///
101:     ///                                                          ///
102: 
103:     /**
104:      * @notice Initialize the auction house and base contracts,
105:      * populate configuration values, and pause the contract.
106:      * @dev This function can only be called once.
107:      * @param _erc721Token The address of the Verbs ERC721 token contract.
108:      * @param _erc20TokenEmitter The address of the ERC-20 token emitter contract.
109:      * @param _initialOwner The address of the owner.
110:      * @param _weth The address of the WETH contract
111:      * @param _auctionParams The auction params for auctions.
112:      */
113:     function initialize(
114:         address _erc721Token,
115:         address _erc20TokenEmitter,
116:         address _initialOwner,
117:         address _weth,
118:         IRevolutionBuilder.AuctionParams calldata _auctionParams
119:     ) external initializer {
120:         require(msg.sender == address(manager), "Only manager can initialize");
121:         require(_weth != address(0), "WETH cannot be zero address");
122: 
123:         __Pausable_init();
124:         __ReentrancyGuard_init();
125:         __Ownable_init(_initialOwner);
126: 
127:         _pause();
128: 
129:         require(
130:             _auctionParams.creatorRateBps >= _auctionParams.minCreatorRateBps,
131:             "Creator rate must be greater than or equal to the creator rate"
132:         );
133: 
134:         verbs = IVerbsToken(_erc721Token);
135:         erc20TokenEmitter = IERC20TokenEmitter(_erc20TokenEmitter);
136:         timeBuffer = _auctionParams.timeBuffer;
137:         reservePrice = _auctionParams.reservePrice;
138:         minBidIncrementPercentage = _auctionParams.minBidIncrementPercentage;
139:         duration = _auctionParams.duration;
140:         creatorRateBps = _auctionParams.creatorRateBps;
141:         entropyRateBps = _auctionParams.entropyRateBps;
142:         minCreatorRateBps = _auctionParams.minCreatorRateBps;
143:         WETH = _weth;
144:     }
145: 
146:     /**
147:      * @notice Settle the current auction, mint a new Verb, and put it up for auction.
148:      */
149:     // Can technically reenter via cross function reentrancies in _createAuction, auction, and pause, but those are only callable by the owner.
150:     // @wardens if you can find an exploit here go for it - we might be wrong.
151:     // slither-disable-next-line reentrancy-eth
152:     function settleCurrentAndCreateNewAuction() external override nonReentrant whenNotPaused {
153:         _settleAuction();
154:         _createAuction();
155:     }
156: 
157:     /**
158:      * @notice Settle the current auction.
159:      * @dev This function can only be called when the contract is paused.
160:      */
161:     function settleAuction() external override whenPaused nonReentrant {
162:         _settleAuction();
163:     }
164: 
165:     /**
166:      * @notice Create a bid for a Verb, with a given amount.
167:      * @dev This contract only accepts payment in ETH.
168:      * @param verbId The ID of the Verb to bid on.
169:      * @param bidder The address of the bidder.
170:      */
171:     function createBid(uint256 verbId, address bidder) external payable override nonReentrant {
172:         IAuctionHouse.Auction memory _auction = auction;
173: 
174:         //require bidder is valid address
175:         require(bidder != address(0), "Bidder cannot be zero address");
176:         require(_auction.verbId == verbId, "Verb not up for auction");
177:         //slither-disable-next-line timestamp
178:         require(block.timestamp < _auction.endTime, "Auction expired");
179:         require(msg.value >= reservePrice, "Must send at least reservePrice");
180:         require(
181:             msg.value >= _auction.amount + ((_auction.amount * minBidIncrementPercentage) / 100),
182:             "Must send more than last bid by minBidIncrementPercentage amount"
183:         );
184: 
185:         address payable lastBidder = _auction.bidder;
186: 
187:         auction.amount = msg.value;
188:         auction.bidder = payable(bidder);
189: 
190:         // Extend the auction if the bid was received within `timeBuffer` of the auction end time
191:         bool extended = _auction.endTime - block.timestamp < timeBuffer;
192:         if (extended) auction.endTime = _auction.endTime = block.timestamp + timeBuffer;
193: 
194:         // Refund the last bidder, if applicable
195:         if (lastBidder != address(0)) _safeTransferETHWithFallback(lastBidder, _auction.amount);
196: 
197:         emit AuctionBid(_auction.verbId, bidder, msg.sender, msg.value, extended);
198: 
199:         if (extended) emit AuctionExtended(_auction.verbId, _auction.endTime);
200:     }
201: 
202:     /**
203:      * @notice Pause the Verbs auction house.
204:      * @dev This function can only be called by the owner when the
205:      * contract is unpaused. While no new auctions can be started when paused,
206:      * anyone can settle an ongoing auction.
207:      */
208:     function pause() external override onlyOwner {
209:         _pause();
210:     }
211: 
212:     /**
213:      * @notice Set the split of the winning bid that is reserved for the creator of the Verb in basis points.
214:      * @dev Only callable by the owner.
215:      * @param _creatorRateBps New creator rate in basis points.
216:      */
217:     function setCreatorRateBps(uint256 _creatorRateBps) external onlyOwner {
218:         require(
219:             _creatorRateBps >= minCreatorRateBps,
220:             "Creator rate must be greater than or equal to minCreatorRateBps"
221:         );
222:         require(_creatorRateBps <= 10_000, "Creator rate must be less than or equal to 10_000");
223:         creatorRateBps = _creatorRateBps;
224: 
225:         emit CreatorRateBpsUpdated(_creatorRateBps);
226:     }
227: 
228:     /**
229:      * @notice Set the minimum split of the winning bid that is reserved for the creator of the Verb in basis points.
230:      * @dev Only callable by the owner.
231:      * @param _minCreatorRateBps New minimum creator rate in basis points.
232:      */
233:     function setMinCreatorRateBps(uint256 _minCreatorRateBps) external onlyOwner {
234:         require(_minCreatorRateBps <= creatorRateBps, "Min creator rate must be less than or equal to creator rate");
235:         require(_minCreatorRateBps <= 10_000, "Min creator rate must be less than or equal to 10_000");
236: 
237:         //ensure new min rate cannot be lower than previous min rate
238:         require(
239:             _minCreatorRateBps > minCreatorRateBps,
240:             "Min creator rate must be greater than previous minCreatorRateBps"
241:         );
242: 
243:         minCreatorRateBps = _minCreatorRateBps;
244: 
245:         emit MinCreatorRateBpsUpdated(_minCreatorRateBps);
246:     }
247: 
248:     /**
249:      * @notice Set the split of (auction proceeds * creatorRate) that is sent to the creator as ether in basis points.
250:      * @dev Only callable by the owner.
251:      * @param _entropyRateBps New entropy rate in basis points.
252:      */
253:     function setEntropyRateBps(uint256 _entropyRateBps) external onlyOwner {
254:         require(_entropyRateBps <= 10_000, "Entropy rate must be less than or equal to 10_000");
255: 
256:         entropyRateBps = _entropyRateBps;
257:         emit EntropyRateBpsUpdated(_entropyRateBps);
258:     }
259: 
260:     /**
261:      * @notice Unpause the Verbs auction house.
262:      * @dev This function can only be called by the owner when the
263:      * contract is paused. If required, this function will start a new auction.
264:      */
265:     function unpause() external override onlyOwner {
266:         _unpause();
267: 
268:         if (auction.startTime == 0 || auction.settled) {
269:             _createAuction();
270:         }
271:     }
272: 
273:     /**
274:      * @notice Set the auction time buffer.
275:      * @dev Only callable by the owner.
276:      */
277:     function setTimeBuffer(uint256 _timeBuffer) external override onlyOwner {
278:         timeBuffer = _timeBuffer;
279: 
280:         emit AuctionTimeBufferUpdated(_timeBuffer);
281:     }
282: 
283:     /**
284:      * @notice Set the auction reserve price.
285:      * @dev Only callable by the owner.
286:      */
287:     function setReservePrice(uint256 _reservePrice) external override onlyOwner {
288:         reservePrice = _reservePrice;
289: 
290:         emit AuctionReservePriceUpdated(_reservePrice);
291:     }
292: 
293:     /**
294:      * @notice Set the auction minimum bid increment percentage.
295:      * @dev Only callable by the owner.
296:      */
297:     function setMinBidIncrementPercentage(uint8 _minBidIncrementPercentage) external override onlyOwner {
298:         minBidIncrementPercentage = _minBidIncrementPercentage;
299: 
300:         emit AuctionMinBidIncrementPercentageUpdated(_minBidIncrementPercentage);
301:     }
302: 
303:     /**
304:      * @notice Create an auction.
305:      * @dev Store the auction details in the `auction` state variable and emit an AuctionCreated event.
306:      * If the mint reverts, the minter was updated without pausing this contract first. To remedy this,
307:      * catch the revert and pause this contract.
308:      */
309:     function _createAuction() internal {
310:         // Check if there's enough gas to safely execute token.mint() and subsequent operations
311:         require(gasleft() >= MIN_TOKEN_MINT_GAS_THRESHOLD, "Insufficient gas for creating auction");
312: 
313:         try verbs.mint() returns (uint256 verbId) {
314:             uint256 startTime = block.timestamp;
315:             uint256 endTime = startTime + duration;
316: 
317:             auction = Auction({
318:                 verbId: verbId,
319:                 amount: 0,
320:                 startTime: startTime,
321:                 endTime: endTime,
322:                 bidder: payable(0),
323:                 settled: false
324:             });
325: 
326:             emit AuctionCreated(verbId, startTime, endTime);
327:         } catch {
328:             _pause();
329:         }
330:     }
331: 
332:     /**
333:      * @notice Settle an auction, finalizing the bid and paying out to the owner. Pays out to the creator and the owner based on the creatorRateBps and entropyRateBps.
334:      * @dev If there are no bids, the Verb is burned.
335:      */
336:     function _settleAuction() internal {
337:         IAuctionHouse.Auction memory _auction = auction;
338: 
339:         require(_auction.startTime != 0, "Auction hasn't begun");
340:         require(!_auction.settled, "Auction has already been settled");
341:         //slither-disable-next-line timestamp
342:         require(block.timestamp >= _auction.endTime, "Auction hasn't completed");
343: 
344:         auction.settled = true;
345: 
346:         uint256 creatorTokensEmitted = 0;
347:         // Check if contract balance is greater than reserve price
348:         if (address(this).balance < reservePrice) {
349:             // If contract balance is less than reserve price, refund to the last bidder
350:             if (_auction.bidder != address(0)) {
351:                 _safeTransferETHWithFallback(_auction.bidder, _auction.amount);
352:             }
353: 
354:             // And then burn the Noun
355:             verbs.burn(_auction.verbId);
356:         } else {
357:             //If no one has bid, burn the Verb
358:             if (_auction.bidder == address(0))
359:                 verbs.burn(_auction.verbId);
360:                 //If someone has bid, transfer the Verb to the winning bidder
361:             else verbs.transferFrom(address(this), _auction.bidder, _auction.verbId);
362: 
363:             if (_auction.amount > 0) {
364:                 // Ether going to owner of the auction
365:                 uint256 auctioneerPayment = (_auction.amount * (10_000 - creatorRateBps)) / 10_000;
366: 
367:                 //Total amount of ether going to creator
368:                 uint256 creatorsShare = _auction.amount - auctioneerPayment;
369: 
370:                 uint256 numCreators = verbs.getArtPieceById(_auction.verbId).creators.length;
371:                 address deployer = verbs.getArtPieceById(_auction.verbId).sponsor;
372: 
373:                 //Build arrays for erc20TokenEmitter.buyToken
374:                 uint256[] memory vrgdaSplits = new uint256[](numCreators);
375:                 address[] memory vrgdaReceivers = new address[](numCreators);
376: 
377:                 //Transfer auction amount to the DAO treasury
378:                 _safeTransferETHWithFallback(owner(), auctioneerPayment);
379: 
380:                 uint256 ethPaidToCreators = 0;
381: 
382:                 //Transfer creator's share to the creator, for each creator, and build arrays for erc20TokenEmitter.buyToken
383:                 if (creatorsShare > 0 && entropyRateBps > 0) {
384:                     for (uint256 i = 0; i < numCreators; i++) {
385:                         ICultureIndex.CreatorBps memory creator = verbs.getArtPieceById(_auction.verbId).creators[i];
386:                         vrgdaReceivers[i] = creator.creator;
387:                         vrgdaSplits[i] = creator.bps;
388: 
389:                         //Calculate paymentAmount for specific creator based on BPS splits - same as multiplying by creatorDirectPayment
390:                         uint256 paymentAmount = (creatorsShare * entropyRateBps * creator.bps) / (10_000 * 10_000);
391:                         ethPaidToCreators += paymentAmount;
392: 
393:                         //Transfer creator's share to the creator
394:                         _safeTransferETHWithFallback(creator.creator, paymentAmount);
395:                     }
396:                 }
397: 
398:                 //Buy token from ERC20TokenEmitter for all the creators
399:                 if (creatorsShare > ethPaidToCreators) {
400:                     creatorTokensEmitted = erc20TokenEmitter.buyToken{ value: creatorsShare - ethPaidToCreators }(
401:                         vrgdaReceivers,
402:                         vrgdaSplits,
403:                         IERC20TokenEmitter.ProtocolRewardAddresses({
404:                             builder: address(0),
405:                             purchaseReferral: address(0),
406:                             deployer: deployer
407:                         })
408:                     );
409:                 }
410:             }
411:         }
412: 
413:         emit AuctionSettled(_auction.verbId, _auction.bidder, _auction.amount, creatorTokensEmitted);
414:     }
415: 
416:     /// @notice Transfer ETH/WETH from the contract
417:     /// @param _to The recipient address
418:     /// @param _amount The amount transferring
419:     function _safeTransferETHWithFallback(address _to, uint256 _amount) private {
420:         // Ensure the contract has enough ETH to transfer
421:         if (address(this).balance < _amount) revert("Insufficient balance");
422: 
423:         // Used to store if the transfer succeeded
424:         bool success;
425: 
426:         assembly {
427:             // Transfer ETH to the recipient
428:             // Limit the call to 50,000 gas
429:             success := call(50000, _to, _amount, 0, 0, 0, 0)
430:         }
431: 
432:         // If the transfer failed:
433:         if (!success) {
434:             // Wrap as WETH
435:             IWETH(WETH).deposit{ value: _amount }();
436: 
437:             // Transfer WETH instead
438:             bool wethSuccess = IWETH(WETH).transfer(_to, _amount);
439: 
440:             // Ensure successful transfer
441:             if (!wethSuccess) revert("WETH transfer failed");
442:         }
443:     }
444: 
445:     ///                                                          ///
446:     ///                        AUCTION UPGRADE                   ///
447:     ///                                                          ///
448: 
449:     /// @notice Ensures the caller is authorized to upgrade the contract and the new implementation is valid
450:     /// @dev This function is called in `upgradeTo` & `upgradeToAndCall`
451:     /// @param _newImpl The new implementation address
452:     function _authorizeUpgrade(address _newImpl) internal view override onlyOwner whenPaused {
453:         // Ensure the new implementation is registered by the Builder DAO
454:         if (!manager.isRegisteredUpgrade(_getImplementation(), _newImpl)) revert INVALID_UPGRADE(_newImpl);
455:     }
456: }
457: 

```


*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L1-L1)

```solidity
1: // SPDX-License-Identifier: GPL-3.0
2: pragma solidity ^0.8.22;
3: 
4: import { Ownable2StepUpgradeable } from "@openzeppelin/contracts-upgradeable/access/Ownable2StepUpgradeable.sol";
5: import { ReentrancyGuardUpgradeable } from "@openzeppelin/contracts-upgradeable/utils/ReentrancyGuardUpgradeable.sol";
6: 
7: import { UUPS } from "./libs/proxy/UUPS.sol";
8: import { VersionedContract } from "./version/VersionedContract.sol";
9: 
10: import { IRevolutionBuilder } from "./interfaces/IRevolutionBuilder.sol";
11: 
12: import { ERC20VotesUpgradeable } from "./base/erc20/ERC20VotesUpgradeable.sol";
13: import { MaxHeap } from "./MaxHeap.sol";
14: import { ICultureIndex } from "./interfaces/ICultureIndex.sol";
15: 
16: import { ERC721CheckpointableUpgradeable } from "./base/ERC721CheckpointableUpgradeable.sol";
17: import { EIP712Upgradeable } from "@openzeppelin/contracts-upgradeable/utils/cryptography/EIP712Upgradeable.sol";
18: import { Strings } from "@openzeppelin/contracts/utils/Strings.sol";
19: 
20: contract CultureIndex is
21:     ICultureIndex,
22:     VersionedContract,
23:     UUPS,
24:     Ownable2StepUpgradeable,
25:     ReentrancyGuardUpgradeable,
26:     EIP712Upgradeable
27: {
28:     /// @notice The EIP-712 typehash for gasless votes
29:     bytes32 public constant VOTE_TYPEHASH =
30:         keccak256("Vote(address from,uint256[] pieceIds,uint256 nonce,uint256 deadline)");
31: 
32:     /// @notice An account's nonce for gasless votes
33:     mapping(address => uint256) public nonces;
34: 
35:     // The MaxHeap data structure used to keep track of the top-voted piece
36:     MaxHeap public maxHeap;
37: 
38:     // The ERC20 token used for voting
39:     ERC20VotesUpgradeable public erc20VotingToken;
40: 
41:     // The ERC721 token used for voting
42:     ERC721CheckpointableUpgradeable public erc721VotingToken;
43: 
44:     // The weight of the 721 voting token
45:     uint256 public erc721VotingTokenWeight;
46: 
47:     /// @notice The maximum settable quorum votes basis points
48:     uint256 public constant MAX_QUORUM_VOTES_BPS = 6_000; // 6,000 basis points or 60%
49: 
50:     /// @notice The minimum vote weight required in order to vote
51:     uint256 public minVoteWeight;
52: 
53:     /// @notice The basis point number of votes in support of a art piece required in order for a quorum to be reached and for an art piece to be dropped.
54:     uint256 public quorumVotesBPS;
55: 
56:     /// @notice The name of the culture index
57:     string public name;
58: 
59:     /// @notice A description of the culture index - can include rules or guidelines
60:     string public description;
61: 
62:     // The list of all pieces
63:     mapping(uint256 => ArtPiece) public pieces;
64: 
65:     // The internal piece ID tracker
66:     uint256 public _currentPieceId;
67: 
68:     // The mapping of all votes for a piece
69:     mapping(uint256 => mapping(address => Vote)) public votes;
70: 
71:     // The total voting weight for a piece
72:     mapping(uint256 => uint256) public totalVoteWeights;
73: 
74:     // Constant for max number of creators
75:     uint256 public constant MAX_NUM_CREATORS = 100;
76: 
77:     // The address that is allowed to drop art pieces
78:     address public dropperAdmin;
79: 
80:     ///                                                          ///
81:     ///                         IMMUTABLES                       ///
82:     ///                                                          ///
83: 
84:     /// @notice The contract upgrade manager
85:     IRevolutionBuilder private immutable manager;
86: 
87:     ///                                                          ///
88:     ///                         CONSTRUCTOR                      ///
89:     ///                                                          ///
90: 
91:     /// @param _manager The contract upgrade manager address
92:     constructor(address _manager) payable initializer {
93:         manager = IRevolutionBuilder(_manager);
94:     }
95: 
96:     ///                                                          ///
97:     ///                         INITIALIZER                      ///
98:     ///                                                          ///
99: 
100:     /**
101:      * @notice Initializes a token's metadata descriptor
102:      * @param _erc20VotingToken The address of the ERC20 voting token, commonly referred to as "points"
103:      * @param _erc721VotingToken The address of the ERC721 voting token, commonly the dropped art pieces
104:      * @param _initialOwner The owner of the contract, allowed to drop pieces. Commonly updated to the AuctionHouse
105:      * @param _maxHeap The address of the max heap contract
106:      * @param _dropperAdmin The address that can drop new art pieces
107:      * @param _cultureIndexParams The CultureIndex settings
108:      */
109:     function initialize(
110:         address _erc20VotingToken,
111:         address _erc721VotingToken,
112:         address _initialOwner,
113:         address _maxHeap,
114:         address _dropperAdmin,
115:         IRevolutionBuilder.CultureIndexParams memory _cultureIndexParams
116:     ) external initializer {
117:         require(msg.sender == address(manager), "Only manager can initialize");
118: 
119:         require(_cultureIndexParams.quorumVotesBPS <= MAX_QUORUM_VOTES_BPS, "invalid quorum bps");
120:         require(_cultureIndexParams.erc721VotingTokenWeight > 0, "invalid erc721 voting token weight");
121:         require(_erc721VotingToken != address(0), "invalid erc721 voting token");
122:         require(_erc20VotingToken != address(0), "invalid erc20 voting token");
123: 
124:         // Setup ownable
125:         __Ownable_init(_initialOwner);
126: 
127:         // Initialize EIP-712 support
128:         __EIP712_init(string.concat(_cultureIndexParams.name, " CultureIndex"), "1");
129: 
130:         __ReentrancyGuard_init();
131: 
132:         erc20VotingToken = ERC20VotesUpgradeable(_erc20VotingToken);
133:         erc721VotingToken = ERC721CheckpointableUpgradeable(_erc721VotingToken);
134:         erc721VotingTokenWeight = _cultureIndexParams.erc721VotingTokenWeight;
135:         name = _cultureIndexParams.name;
136:         description = _cultureIndexParams.description;
137:         quorumVotesBPS = _cultureIndexParams.quorumVotesBPS;
138:         minVoteWeight = _cultureIndexParams.minVoteWeight;
139:         dropperAdmin = _dropperAdmin;
140: 
141:         emit QuorumVotesBPSSet(quorumVotesBPS, _cultureIndexParams.quorumVotesBPS);
142: 
143:         // Create maxHeap
144:         maxHeap = MaxHeap(_maxHeap);
145:     }
146: 
147:     ///                                                          ///
148:     ///                         MODIFIERS                        ///
149:     ///                                                          ///
150: 
151:     /**
152:      *  Validates the media type and associated data.
153:      * @param metadata The metadata associated with the art piece.
154:      *
155:      * Requirements:
156:      * - The media type must be one of the defined types in the MediaType enum.
157:      * - The corresponding media data must not be empty.
158:      */
159:     function validateMediaType(ArtPieceMetadata calldata metadata) internal pure {
160:         require(uint8(metadata.mediaType) > 0 && uint8(metadata.mediaType) <= 5, "Invalid media type");
161: 
162:         if (metadata.mediaType == MediaType.IMAGE)
163:             require(bytes(metadata.image).length > 0, "Image URL must be provided");
164:         else if (metadata.mediaType == MediaType.ANIMATION)
165:             require(bytes(metadata.animationUrl).length > 0, "Animation URL must be provided");
166:         else if (metadata.mediaType == MediaType.TEXT)
167:             require(bytes(metadata.text).length > 0, "Text must be provided");
168:     }
169: 
170:     /**
171:      * @notice Checks the total basis points from an array of creators and returns the length
172:      * @param creatorArray An array of Creator structs containing address and basis points.
173:      * @return Returns the total basis points calculated from the array of creators.
174:      *
175:      * Requirements:
176:      * - The `creatorArray` must not contain any zero addresses.
177:      * - The function will return the length of the `creatorArray`.
178:      */
179:     function validateCreatorsArray(CreatorBps[] calldata creatorArray) internal pure returns (uint256) {
180:         uint256 creatorArrayLength = creatorArray.length;
181:         //Require that creatorArray is not more than MAX_NUM_CREATORS to prevent gas limit issues
182:         require(creatorArrayLength <= MAX_NUM_CREATORS, "Creator array must not be > MAX_NUM_CREATORS");
183: 
184:         uint256 totalBps;
185:         for (uint i; i < creatorArrayLength; i++) {
186:             require(creatorArray[i].creator != address(0), "Invalid creator address");
187:             totalBps += creatorArray[i].bps;
188:         }
189: 
190:         require(totalBps == 10_000, "Total BPS must sum up to 10,000");
191: 
192:         return creatorArrayLength;
193:     }
194: 
195:     /**
196:      * @notice Creates a new piece of art with associated metadata and creators.
197:      * @param metadata The metadata associated with the art piece, including name, description, image, and optional animation URL.
198:      * @param creatorArray An array of creators who contributed to the piece, along with their respective basis points that must sum up to 10,000.
199:      * @return Returns the unique ID of the newly created art piece.
200:      *
201:      * Emits a {PieceCreated} event for the newly created piece.
202:      * Emits a {PieceCreatorAdded} event for each creator added to the piece.
203:      *
204:      * Requirements:
205:      * - `metadata` must include name, description, and image. Animation URL is optional.
206:      * - `creatorArray` must not contain any zero addresses.
207:      * - The sum of basis points in `creatorArray` must be exactly 10,000.
208:      */
209:     function createPiece(
210:         ArtPieceMetadata calldata metadata,
211:         CreatorBps[] calldata creatorArray
212:     ) public returns (uint256) {
213:         uint256 creatorArrayLength = validateCreatorsArray(creatorArray);
214: 
215:         // Validate the media type and associated data
216:         validateMediaType(metadata);
217: 
218:         uint256 pieceId = _currentPieceId++;
219: 
220:         /// @dev Insert the new piece into the max heap
221:         maxHeap.insert(pieceId, 0);
222: 
223:         ArtPiece storage newPiece = pieces[pieceId];
224: 
225:         newPiece.pieceId = pieceId;
226:         newPiece.totalVotesSupply = _calculateVoteWeight(
227:             erc20VotingToken.totalSupply(),
228:             erc721VotingToken.totalSupply()
229:         );
230:         newPiece.totalERC20Supply = erc20VotingToken.totalSupply();
231:         newPiece.metadata = metadata;
232:         newPiece.sponsor = msg.sender;
233:         newPiece.creationBlock = block.number;
234:         newPiece.quorumVotes = (quorumVotesBPS * newPiece.totalVotesSupply) / 10_000;
235: 
236:         for (uint i; i < creatorArrayLength; i++) {
237:             newPiece.creators.push(creatorArray[i]);
238:         }
239: 
240:         emit PieceCreated(pieceId, msg.sender, metadata, newPiece.quorumVotes, newPiece.totalVotesSupply);
241: 
242:         // Emit an event for each creator
243:         for (uint i; i < creatorArrayLength; i++) {
244:             emit PieceCreatorAdded(pieceId, creatorArray[i].creator, msg.sender, creatorArray[i].bps);
245:         }
246: 
247:         return newPiece.pieceId;
248:     }
249: 
250:     /**
251:      * @notice Checks if a specific voter has already voted for a given art piece.
252:      * @param pieceId The ID of the art piece.
253:      * @param voter The address of the voter.
254:      * @return A boolean indicating if the voter has voted for the art piece.
255:      */
256:     function hasVoted(uint256 pieceId, address voter) external view returns (bool) {
257:         return votes[pieceId][voter].voterAddress != address(0);
258:     }
259: 
260:     /**
261:      * @notice Returns the voting power of a voter at the current block.
262:      * @param account The address of the voter.
263:      * @return The voting power of the voter.
264:      */
265:     function getVotes(address account) external view override returns (uint256) {
266:         return _getVotes(account);
267:     }
268: 
269:     /**
270:      * @notice Returns the voting power of a voter at the current block.
271:      * @param account The address of the voter.
272:      * @return The voting power of the voter.
273:      */
274:     function getPastVotes(address account, uint256 blockNumber) external view override returns (uint256) {
275:         return _getPastVotes(account, blockNumber);
276:     }
277: 
278:     /**
279:      * @notice Calculates the vote weight of a voter.
280:      * @param erc20Balance The ERC20 balance of the voter.
281:      * @param erc721Balance The ERC721 balance of the voter.
282:      * @return The vote weight of the voter.
283:      */
284:     function _calculateVoteWeight(uint256 erc20Balance, uint256 erc721Balance) internal view returns (uint256) {
285:         return erc20Balance + (erc721Balance * erc721VotingTokenWeight * 1e18);
286:     }
287: 
288:     function _getVotes(address account) internal view returns (uint256) {
289:         return _calculateVoteWeight(erc20VotingToken.getVotes(account), erc721VotingToken.getVotes(account));
290:     }
291: 
292:     function _getPastVotes(address account, uint256 blockNumber) internal view returns (uint256) {
293:         return
294:             _calculateVoteWeight(
295:                 erc20VotingToken.getPastVotes(account, blockNumber),
296:                 erc721VotingToken.getPastVotes(account, blockNumber)
297:             );
298:     }
299: 
300:     /**
301:      * @notice Cast a vote for a specific ArtPiece.
302:      * @param pieceId The ID of the ArtPiece to vote for.
303:      * @param voter The address of the voter.
304:      * @dev Requires that the pieceId is valid, the voter has not already voted on this piece, and the weight is greater than the minimum vote weight.
305:      * Emits a VoteCast event upon successful execution.
306:      */
307:     function _vote(uint256 pieceId, address voter) internal {
308:         require(pieceId < _currentPieceId, "Invalid piece ID");
309:         require(voter != address(0), "Invalid voter address");
310:         require(!pieces[pieceId].isDropped, "Piece has already been dropped");
311:         require(!(votes[pieceId][voter].voterAddress != address(0)), "Already voted");
312: 
313:         uint256 weight = _getPastVotes(voter, pieces[pieceId].creationBlock);
314:         require(weight > minVoteWeight, "Weight must be greater than minVoteWeight");
315: 
316:         votes[pieceId][voter] = Vote(voter, weight);
317:         totalVoteWeights[pieceId] += weight;
318: 
319:         uint256 totalWeight = totalVoteWeights[pieceId];
320: 
321:         // TODO add security consideration here based on block created to prevent flash attacks on drops?
322:         maxHeap.updateValue(pieceId, totalWeight);
323:         emit VoteCast(pieceId, voter, weight, totalWeight);
324:     }
325: 
326:     /**
327:      * @notice Cast a vote for a specific ArtPiece.
328:      * @param pieceId The ID of the ArtPiece to vote for.
329:      * @dev Requires that the pieceId is valid, the voter has not already voted on this piece, and the weight is greater than the minimum vote weight.
330:      * Emits a VoteCast event upon successful execution.
331:      */
332:     function vote(uint256 pieceId) public nonReentrant {
333:         _vote(pieceId, msg.sender);
334:     }
335: 
336:     /**
337:      * @notice Cast a vote for a list of ArtPieces.
338:      * @param pieceIds The IDs of the ArtPieces to vote for.
339:      * @dev Requires that the pieceIds are valid, the voter has not already voted on this piece, and the weight is greater than the minimum vote weight.
340:      * Emits a series of VoteCast event upon successful execution.
341:      */
342:     function voteForMany(uint256[] calldata pieceIds) public nonReentrant {
343:         _voteForMany(pieceIds, msg.sender);
344:     }
345: 
346:     /**
347:      * @notice Cast a vote for a list of ArtPieces pieceIds.
348:      * @param pieceIds The IDs of the ArtPieces to vote for.
349:      * @param from The address of the voter.
350:      * @dev Requires that the pieceIds are valid, the voter has not already voted on this piece, and the weight is greater than the minimum vote weight.
351:      * Emits a series of VoteCast event upon successful execution.
352:      */
353:     function _voteForMany(uint256[] calldata pieceIds, address from) internal {
354:         uint256 len = pieceIds.length;
355:         for (uint256 i; i < len; i++) {
356:             _vote(pieceIds[i], from);
357:         }
358:     }
359: 
360:     /// @notice Execute a vote via signature
361:     /// @param from Vote from this address
362:     /// @param pieceIds Vote on this list of pieceIds
363:     /// @param deadline Deadline for the signature to be valid
364:     /// @param v V component of signature
365:     /// @param r R component of signature
366:     /// @param s S component of signature
367:     function voteForManyWithSig(
368:         address from,
369:         uint256[] calldata pieceIds,
370:         uint256 deadline,
371:         uint8 v,
372:         bytes32 r,
373:         bytes32 s
374:     ) external nonReentrant {
375:         bool success = _verifyVoteSignature(from, pieceIds, deadline, v, r, s);
376: 
377:         if (!success) revert INVALID_SIGNATURE();
378: 
379:         _voteForMany(pieceIds, from);
380:     }
381: 
382:     /// @notice Execute a batch of votes via signature, each with their own signature
383:     /// @param from Vote from these addresses
384:     /// @param pieceIds Vote on these lists of pieceIds
385:     /// @param deadline Deadlines for the signature to be valid
386:     /// @param v V component of signatures
387:     /// @param r R component of signatures
388:     /// @param s S component of signatures
389:     function batchVoteForManyWithSig(
390:         address[] memory from,
391:         uint256[][] calldata pieceIds,
392:         uint256[] memory deadline,
393:         uint8[] memory v,
394:         bytes32[] memory r,
395:         bytes32[] memory s
396:     ) external nonReentrant {
397:         uint256 len = from.length;
398:         require(
399:             len == pieceIds.length && len == deadline.length && len == v.length && len == r.length && len == s.length,
400:             "Array lengths must match"
401:         );
402: 
403:         for (uint256 i; i < len; i++) {
404:             if (!_verifyVoteSignature(from[i], pieceIds[i], deadline[i], v[i], r[i], s[i])) revert INVALID_SIGNATURE();
405:         }
406: 
407:         for (uint256 i; i < len; i++) {
408:             _voteForMany(pieceIds[i], from[i]);
409:         }
410:     }
411: 
412:     /// @notice Utility function to verify a signature for a specific vote
413:     /// @param from Vote from this address
414:     /// @param pieceIds Vote on this pieceId
415:     /// @param deadline Deadline for the signature to be valid
416:     /// @param v V component of signature
417:     /// @param r R component of signature
418:     /// @param s S component of signature
419:     function _verifyVoteSignature(
420:         address from,
421:         uint256[] calldata pieceIds,
422:         uint256 deadline,
423:         uint8 v,
424:         bytes32 r,
425:         bytes32 s
426:     ) internal returns (bool success) {
427:         require(deadline >= block.timestamp, "Signature expired");
428: 
429:         bytes32 voteHash;
430: 
431:         voteHash = keccak256(abi.encode(VOTE_TYPEHASH, from, pieceIds, nonces[from]++, deadline));
432: 
433:         bytes32 digest = _hashTypedDataV4(voteHash);
434: 
435:         address recoveredAddress = ecrecover(digest, v, r, s);
436: 
437:         // Ensure to address is not 0
438:         if (from == address(0)) revert ADDRESS_ZERO();
439: 
440:         // Ensure signature is valid
441:         if (recoveredAddress == address(0) || recoveredAddress != from) revert INVALID_SIGNATURE();
442: 
443:         return true;
444:     }
445: 
446:     /**
447:      * @notice Fetch an art piece by its ID.
448:      * @param pieceId The ID of the art piece.
449:      * @return The ArtPiece struct associated with the given ID.
450:      */
451:     function getPieceById(uint256 pieceId) public view returns (ArtPiece memory) {
452:         require(pieceId < _currentPieceId, "Invalid piece ID");
453:         return pieces[pieceId];
454:     }
455: 
456:     /**
457:      * @notice Fetch the list of votes for a given art piece.
458:      * @param pieceId The ID of the art piece.
459:      * @return An array of Vote structs for the given art piece ID.
460:      */
461:     function getVote(uint256 pieceId, address voter) public view returns (Vote memory) {
462:         require(pieceId < _currentPieceId, "Invalid piece ID");
463:         return votes[pieceId][voter];
464:     }
465: 
466:     /**
467:      * @notice Fetch the top-voted art piece.
468:      * @return The ArtPiece struct of the top-voted art piece.
469:      */
470:     function getTopVotedPiece() public view returns (ArtPiece memory) {
471:         return pieces[topVotedPieceId()];
472:     }
473: 
474:     /**
475:      * @notice Fetch the number of pieces
476:      * @return The number of pieces
477:      */
478:     function pieceCount() external view returns (uint256) {
479:         return _currentPieceId;
480:     }
481: 
482:     /**
483:      * @notice Fetch the top-voted pieceId
484:      * @return The top-voted pieceId
485:      */
486:     function topVotedPieceId() public view returns (uint256) {
487:         require(maxHeap.size() > 0, "Culture index is empty");
488:         //slither-disable-next-line unused-return
489:         (uint256 pieceId, ) = maxHeap.getMax();
490:         return pieceId;
491:     }
492: 
493:     /**
494:      * @notice Admin function for setting the quorum votes basis points
495:      * @dev newQuorumVotesBPS must be greater than the hardcoded min
496:      * @param newQuorumVotesBPS new art piece drop threshold
497:      */
498:     function _setQuorumVotesBPS(uint256 newQuorumVotesBPS) external onlyOwner {
499:         require(newQuorumVotesBPS <= MAX_QUORUM_VOTES_BPS, "CultureIndex::_setQuorumVotesBPS: invalid quorum bps");
500:         emit QuorumVotesBPSSet(quorumVotesBPS, newQuorumVotesBPS);
501: 
502:         quorumVotesBPS = newQuorumVotesBPS;
503:     }
504: 
505:     /**
506:      * @notice Current quorum votes using ERC721 Total Supply, ERC721 Vote Weight, and ERC20 Total Supply
507:      * Differs from `GovernerBravo` which uses fixed amount
508:      */
509:     function quorumVotes() public view returns (uint256) {
510:         return
511:             (quorumVotesBPS * _calculateVoteWeight(erc20VotingToken.totalSupply(), erc721VotingToken.totalSupply())) /
512:             10_000;
513:     }
514: 
515:     /**
516:      * @notice Pulls and drops the top-voted piece.
517:      * @return The top voted piece
518:      */
519:     function dropTopVotedPiece() public nonReentrant returns (ArtPiece memory) {
520:         require(msg.sender == dropperAdmin, "Only dropper can drop pieces");
521: 
522:         ICultureIndex.ArtPiece memory piece = getTopVotedPiece();
523:         require(totalVoteWeights[piece.pieceId] >= piece.quorumVotes, "Does not meet quorum votes to be dropped.");
524: 
525:         //set the piece as dropped
526:         pieces[piece.pieceId].isDropped = true;
527: 
528:         //slither-disable-next-line unused-return
529:         maxHeap.extractMax();
530: 
531:         emit PieceDropped(piece.pieceId, msg.sender);
532: 
533:         return pieces[piece.pieceId];
534:     }
535: 
536:     ///                                                          ///
537:     ///                   CULTURE INDEX UPGRADE                  ///
538:     ///                                                          ///
539: 
540:     /// @notice Ensures the caller is authorized to upgrade the contract and that the new implementation is valid
541:     /// @dev This function is called in `upgradeTo` & `upgradeToAndCall`
542:     /// @param _newImpl The new implementation address
543:     function _authorizeUpgrade(address _newImpl) internal view override onlyOwner {
544:         // Ensure the new implementation is a registered upgrade
545:         if (!manager.isRegisteredUpgrade(_getImplementation(), _newImpl)) revert INVALID_UPGRADE(_newImpl);
546:     }
547: }
548: 

```


*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L1-L1)

```solidity
1: // SPDX-License-Identifier: MIT
2: pragma solidity ^0.8.22;
3: 
4: import { ReentrancyGuardUpgradeable } from "@openzeppelin/contracts-upgradeable/utils/ReentrancyGuardUpgradeable.sol";
5: import { TokenEmitterRewards } from "@collectivexyz/protocol-rewards/src/abstract/TokenEmitter/TokenEmitterRewards.sol";
6: import { Ownable2StepUpgradeable } from "@openzeppelin/contracts-upgradeable/access/Ownable2StepUpgradeable.sol";
7: import { PausableUpgradeable } from "@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol";
8: 
9: import { VRGDAC } from "./libs/VRGDAC.sol";
10: import { toDaysWadUnsafe } from "./libs/SignedWadMath.sol";
11: import { Strings } from "@openzeppelin/contracts/utils/Strings.sol";
12: import { NontransferableERC20Votes } from "./NontransferableERC20Votes.sol";
13: import { IERC20TokenEmitter } from "./interfaces/IERC20TokenEmitter.sol";
14: 
15: import { IRevolutionBuilder } from "./interfaces/IRevolutionBuilder.sol";
16: 
17: contract ERC20TokenEmitter is
18:     IERC20TokenEmitter,
19:     ReentrancyGuardUpgradeable,
20:     TokenEmitterRewards,
21:     Ownable2StepUpgradeable,
22:     PausableUpgradeable
23: {
24:     // treasury address to pay funds to
25:     address public treasury;
26: 
27:     // The token that is being minted.
28:     NontransferableERC20Votes public token;
29: 
30:     // The VRGDA contract
31:     VRGDAC public vrgdac;
32: 
33:     // solhint-disable-next-line not-rely-on-time
34:     uint256 public startTime;
35: 
36:     /**
37:      * @notice A running total of the amount of tokens emitted.
38:      */
39:     int256 public emittedTokenWad;
40: 
41:     // The split of the purchase that is reserved for the creator of the Verb in basis points
42:     uint256 public creatorRateBps;
43: 
44:     // The split of (purchase proceeds * creatorRate) that is sent to the creator as ether in basis points
45:     uint256 public entropyRateBps;
46: 
47:     // The account or contract to pay the creator reward to
48:     address public creatorsAddress;
49: 
50:     ///                                                          ///
51:     ///                         IMMUTABLES                       ///
52:     ///                                                          ///
53: 
54:     /// @notice The contract upgrade manager
55:     IRevolutionBuilder private immutable manager;
56: 
57:     ///                                                          ///
58:     ///                         CONSTRUCTOR                      ///
59:     ///                                                          ///
60: 
61:     /// @param _manager The contract upgrade manager address
62:     /// @param _protocolRewards The protocol rewards contract address
63:     /// @param _protocolFeeRecipient The protocol fee recipient address
64:     constructor(
65:         address _manager,
66:         address _protocolRewards,
67:         address _protocolFeeRecipient
68:     ) payable TokenEmitterRewards(_protocolRewards, _protocolFeeRecipient) initializer {
69:         manager = IRevolutionBuilder(_manager);
70:     }
71: 
72:     ///                                                          ///
73:     ///                         INITIALIZER                      ///
74:     ///                                                          ///
75: 
76:     /**
77:      * @notice Initialize the token emitter
78:      * @param _initialOwner The initial owner of the token emitter
79:      * @param _erc20Token The ERC-20 token contract address
80:      * @param _vrgdac The VRGDA contract address
81:      * @param _treasury The treasury address to pay funds to
82:      * @param _creatorsAddress The address to pay the creator reward to
83:      */
84:     function initialize(
85:         address _initialOwner,
86:         address _erc20Token,
87:         address _treasury,
88:         address _vrgdac,
89:         address _creatorsAddress
90:     ) external initializer {
91:         require(msg.sender == address(manager), "Only manager can initialize");
92: 
93:         __Pausable_init();
94:         __ReentrancyGuard_init();
95: 
96:         require(_treasury != address(0), "Invalid treasury address");
97: 
98:         // Set up ownable
99:         __Ownable_init(_initialOwner);
100: 
101:         treasury = _treasury;
102:         creatorsAddress = _creatorsAddress;
103:         vrgdac = VRGDAC(_vrgdac);
104:         token = NontransferableERC20Votes(_erc20Token);
105:         startTime = block.timestamp;
106:     }
107: 
108:     function _mint(address _to, uint256 _amount) private {
109:         token.mint(_to, _amount);
110:     }
111: 
112:     function totalSupply() public view returns (uint) {
113:         // returns total supply issued so far
114:         return token.totalSupply();
115:     }
116: 
117:     function decimals() public view returns (uint8) {
118:         // returns decimals
119:         return token.decimals();
120:     }
121: 
122:     function balanceOf(address _owner) public view returns (uint) {
123:         // returns balance of address
124:         return token.balanceOf(_owner);
125:     }
126: 
127:     /**
128:      * @notice Pause the contract.
129:      * @dev This function can only be called by the owner when the
130:      * contract is unpaused.
131:      */
132:     function pause() external override onlyOwner {
133:         _pause();
134:     }
135: 
136:     /**
137:      * @notice Unpause the token emitter.
138:      * @dev This function can only be called by the owner when the
139:      * contract is paused.
140:      */
141:     function unpause() external override onlyOwner {
142:         _unpause();
143:     }
144: 
145:     /**
146:      * @notice A payable function that allows a user to buy tokens for a list of addresses and a list of basis points to split the token purchase between.
147:      * @param addresses The addresses to send purchased tokens to.
148:      * @param basisPointSplits The basis points of the purchase to send to each address.
149:      * @param protocolRewardsRecipients The addresses to pay the builder, purchaseRefferal, and deployer rewards to
150:      * @return tokensSoldWad The amount of tokens sold in wad units.
151:      */
152:     function buyToken(
153:         address[] calldata addresses,
154:         uint[] calldata basisPointSplits,
155:         ProtocolRewardAddresses calldata protocolRewardsRecipients
156:     ) public payable nonReentrant whenNotPaused returns (uint256 tokensSoldWad) {
157:         //prevent treasury from paying itself
158:         require(msg.sender != treasury && msg.sender != creatorsAddress, "Funds recipient cannot buy tokens");
159: 
160:         require(msg.value > 0, "Must send ether");
161:         // ensure the same number of addresses and bps
162:         require(addresses.length == basisPointSplits.length, "Parallel arrays required");
163: 
164:         // Get value left after protocol rewards
165:         uint256 msgValueRemaining = _handleRewardsAndGetValueToSend(
166:             msg.value,
167:             protocolRewardsRecipients.builder,
168:             protocolRewardsRecipients.purchaseReferral,
169:             protocolRewardsRecipients.deployer
170:         );
171: 
172:         //Share of purchase amount to send to treasury
173:         uint256 toPayTreasury = (msgValueRemaining * (10_000 - creatorRateBps)) / 10_000;
174: 
175:         //Share of purchase amount to reserve for creators
176:         //Ether directly sent to creators
177:         uint256 creatorDirectPayment = ((msgValueRemaining - toPayTreasury) * entropyRateBps) / 10_000;
178:         //Tokens to emit to creators
179:         int totalTokensForCreators = ((msgValueRemaining - toPayTreasury) - creatorDirectPayment) > 0
180:             ? getTokenQuoteForEther((msgValueRemaining - toPayTreasury) - creatorDirectPayment)
181:             : int(0);
182: 
183:         // Tokens to emit to buyers
184:         int totalTokensForBuyers = toPayTreasury > 0 ? getTokenQuoteForEther(toPayTreasury) : int(0);
185: 
186:         //Transfer ETH to treasury and update emitted
187:         emittedTokenWad += totalTokensForBuyers;
188:         if (totalTokensForCreators > 0) emittedTokenWad += totalTokensForCreators;
189: 
190:         //Deposit funds to treasury
191:         (bool success, ) = treasury.call{ value: toPayTreasury }(new bytes(0));
192:         require(success, "Transfer failed.");
193: 
194:         //Transfer ETH to creators
195:         if (creatorDirectPayment > 0) {
196:             (success, ) = creatorsAddress.call{ value: creatorDirectPayment }(new bytes(0));
197:             require(success, "Transfer failed.");
198:         }
199: 
200:         //Mint tokens for creators
201:         if (totalTokensForCreators > 0 && creatorsAddress != address(0)) {
202:             _mint(creatorsAddress, uint256(totalTokensForCreators));
203:         }
204: 
205:         uint256 bpsSum = 0;
206: 
207:         //Mint tokens to buyers
208: 
209:         for (uint256 i = 0; i < addresses.length; i++) {
210:             if (totalTokensForBuyers > 0) {
211:                 // transfer tokens to address
212:                 _mint(addresses[i], uint256((totalTokensForBuyers * int(basisPointSplits[i])) / 10_000));
213:             }
214:             bpsSum += basisPointSplits[i];
215:         }
216: 
217:         require(bpsSum == 10_000, "bps must add up to 10_000");
218: 
219:         emit PurchaseFinalized(
220:             msg.sender,
221:             msg.value,
222:             toPayTreasury,
223:             msg.value - msgValueRemaining,
224:             uint256(totalTokensForBuyers),
225:             uint256(totalTokensForCreators),
226:             creatorDirectPayment
227:         );
228: 
229:         return uint256(totalTokensForBuyers);
230:     }
231: 
232:     /**
233:      * @notice Returns the amount of wei that would be spent to buy an amount of tokens. Does not take into account the protocol rewards.
234:      * @param amount the amount of tokens to buy.
235:      * @return spentY The cost in wei of the token purchase.
236:      */
237:     function buyTokenQuote(uint256 amount) public view returns (int spentY) {
238:         require(amount > 0, "Amount must be greater than 0");
239:         // Note: By using toDaysWadUnsafe(block.timestamp - startTime) we are establishing that 1 "unit of time" is 1 day.
240:         // solhint-disable-next-line not-rely-on-time
241:         return
242:             vrgdac.xToY({
243:                 timeSinceStart: toDaysWadUnsafe(block.timestamp - startTime),
244:                 sold: emittedTokenWad,
245:                 amount: int(amount)
246:             });
247:     }
248: 
249:     /**
250:      * @notice Returns the amount of tokens that would be emitted for an amount of wei. Does not take into account the protocol rewards.
251:      * @param etherAmount the payment amount in wei.
252:      * @return gainedX The amount of tokens that would be emitted for the payment amount.
253:      */
254:     function getTokenQuoteForEther(uint256 etherAmount) public view returns (int gainedX) {
255:         require(etherAmount > 0, "Ether amount must be greater than 0");
256:         // Note: By using toDaysWadUnsafe(block.timestamp - startTime) we are establishing that 1 "unit of time" is 1 day.
257:         // solhint-disable-next-line not-rely-on-time
258:         return
259:             vrgdac.yToX({
260:                 timeSinceStart: toDaysWadUnsafe(block.timestamp - startTime),
261:                 sold: emittedTokenWad,
262:                 amount: int(etherAmount)
263:             });
264:     }
265: 
266:     /**
267:      * @notice Returns the amount of tokens that would be emitted for the payment amount, taking into account the protocol rewards.
268:      * @param paymentAmount the payment amount in wei.
269:      * @return gainedX The amount of tokens that would be emitted for the payment amount.
270:      */
271:     function getTokenQuoteForPayment(uint256 paymentAmount) external view returns (int gainedX) {
272:         require(paymentAmount > 0, "Payment amount must be greater than 0");
273:         // Note: By using toDaysWadUnsafe(block.timestamp - startTime) we are establishing that 1 "unit of time" is 1 day.
274:         // solhint-disable-next-line not-rely-on-time
275:         return
276:             vrgdac.yToX({
277:                 timeSinceStart: toDaysWadUnsafe(block.timestamp - startTime),
278:                 sold: emittedTokenWad,
279:                 amount: int(((paymentAmount - computeTotalReward(paymentAmount)) * (10_000 - creatorRateBps)) / 10_000)
280:             });
281:     }
282: 
283:     /**
284:      * @notice Set the split of (purchase * creatorRate) that is sent to the creator as ether in basis points.
285:      * @dev Only callable by the owner.
286:      * @param _entropyRateBps New entropy rate in basis points.
287:      */
288:     function setEntropyRateBps(uint256 _entropyRateBps) external onlyOwner {
289:         require(_entropyRateBps <= 10_000, "Entropy rate must be less than or equal to 10_000");
290: 
291:         emit EntropyRateBpsUpdated(entropyRateBps = _entropyRateBps);
292:     }
293: 
294:     /**
295:      * @notice Set the split of the payment that is reserved for creators in basis points.
296:      * @dev Only callable by the owner.
297:      * @param _creatorRateBps New creator rate in basis points.
298:      */
299:     function setCreatorRateBps(uint256 _creatorRateBps) external onlyOwner {
300:         require(_creatorRateBps <= 10_000, "Creator rate must be less than or equal to 10_000");
301: 
302:         emit CreatorRateBpsUpdated(creatorRateBps = _creatorRateBps);
303:     }
304: 
305:     /**
306:      * @notice Set the creators address to pay the creatorRate to. Can be a contract.
307:      * @dev Only callable by the owner.
308:      */
309:     function setCreatorsAddress(address _creatorsAddress) external override onlyOwner nonReentrant {
310:         require(_creatorsAddress != address(0), "Invalid address");
311: 
312:         emit CreatorsAddressUpdated(creatorsAddress = _creatorsAddress);
313:     }
314: }
315: 

```


*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L1-L1)

```solidity
1: // SPDX-License-Identifier: MIT
2: pragma solidity 0.8.22;
3: 
4: import { RewardSplits } from "../RewardSplits.sol";
5: 
6: abstract contract TokenEmitterRewards is RewardSplits {
7:     constructor(
8:         address _protocolRewards,
9:         address _revolutionRewardRecipient
10:     ) payable RewardSplits(_protocolRewards, _revolutionRewardRecipient) {}
11: 
12:     function _handleRewardsAndGetValueToSend(
13:         uint256 msgValue,
14:         address builderReferral,
15:         address purchaseReferral,
16:         address deployer
17:     ) internal returns (uint256) {
18:         if (msgValue < computeTotalReward(msgValue)) revert INVALID_ETH_AMOUNT();
19: 
20:         return msgValue - _depositPurchaseRewards(msgValue, builderReferral, purchaseReferral, deployer);
21:     }
22: }
23: 

```


*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/TokenEmitter/TokenEmitterRewards.sol#L1-L1)

```solidity
1: // SPDX-License-Identifier: GPL-3.0
2: 
3: /// @title The Verbs ERC-721 token
4: 
5: /*********************************
6:  * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ *
7:  * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ *
8:  * ░░░░░░█████████░░█████████░░░ *
9:  * ░░░░░░██░░░████░░██░░░████░░░ *
10:  * ░░██████░░░████████░░░████░░░ *
11:  * ░░██░░██░░░████░░██░░░████░░░ *
12:  * ░░██░░██░░░████░░██░░░████░░░ *
13:  * ░░░░░░█████████░░█████████░░░ *
14:  * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ *
15:  * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ *
16:  *********************************/
17: 
18: pragma solidity ^0.8.22;
19: 
20: import { Ownable2StepUpgradeable } from "@openzeppelin/contracts-upgradeable/access/Ownable2StepUpgradeable.sol";
21: import { ReentrancyGuardUpgradeable } from "@openzeppelin/contracts-upgradeable/utils/ReentrancyGuardUpgradeable.sol";
22: import { IERC721 } from "@openzeppelin/contracts/token/ERC721/IERC721.sol";
23: 
24: import { UUPS } from "./libs/proxy/UUPS.sol";
25: import { VersionedContract } from "./version/VersionedContract.sol";
26: 
27: import { ERC721CheckpointableUpgradeable } from "./base/ERC721CheckpointableUpgradeable.sol";
28: import { IDescriptorMinimal } from "./interfaces/IDescriptorMinimal.sol";
29: import { ICultureIndex } from "./interfaces/ICultureIndex.sol";
30: import { IVerbsToken } from "./interfaces/IVerbsToken.sol";
31: import { IRevolutionBuilder } from "./interfaces/IRevolutionBuilder.sol";
32: 
33: contract VerbsToken is
34:     IVerbsToken,
35:     VersionedContract,
36:     UUPS,
37:     Ownable2StepUpgradeable,
38:     ReentrancyGuardUpgradeable,
39:     ERC721CheckpointableUpgradeable
40: {
41:     // An address who has permissions to mint Verbs
42:     address public minter;
43: 
44:     // The Verbs token URI descriptor
45:     IDescriptorMinimal public descriptor;
46: 
47:     // The CultureIndex contract
48:     ICultureIndex public cultureIndex;
49: 
50:     // Whether the minter can be updated
51:     bool public isMinterLocked;
52: 
53:     // Whether the CultureIndex can be updated
54:     bool public isCultureIndexLocked;
55: 
56:     // Whether the descriptor can be updated
57:     bool public isDescriptorLocked;
58: 
59:     // The internal verb ID tracker
60:     uint256 private _currentVerbId;
61: 
62:     // IPFS content hash of contract-level metadata
63:     string private _contractURIHash = "QmQzDwaZ7yQxHHs7sQQenJVB89riTSacSGcJRv9jtHPuz5";
64: 
65:     // The Verb art pieces
66:     mapping(uint256 => ICultureIndex.ArtPiece) public artPieces;
67: 
68:     ///                                                          ///
69:     ///                          MODIFIERS                       ///
70:     ///                                                          ///
71: 
72:     /**
73:      * @notice Require that the minter has not been locked.
74:      */
75:     modifier whenMinterNotLocked() {
76:         require(!isMinterLocked, "Minter is locked");
77:         _;
78:     }
79: 
80:     /**
81:      * @notice Require that the CultureIndex has not been locked.
82:      */
83:     modifier whenCultureIndexNotLocked() {
84:         require(!isCultureIndexLocked, "CultureIndex is locked");
85:         _;
86:     }
87: 
88:     /**
89:      * @notice Require that the descriptor has not been locked.
90:      */
91:     modifier whenDescriptorNotLocked() {
92:         require(!isDescriptorLocked, "Descriptor is locked");
93:         _;
94:     }
95: 
96:     /**
97:      * @notice Require that the sender is the minter.
98:      */
99:     modifier onlyMinter() {
100:         require(msg.sender == minter, "Sender is not the minter");
101:         _;
102:     }
103: 
104:     ///                                                          ///
105:     ///                         IMMUTABLES                       ///
106:     ///                                                          ///
107: 
108:     /// @notice The contract upgrade manager
109:     IRevolutionBuilder private immutable manager;
110: 
111:     ///                                                          ///
112:     ///                         CONSTRUCTOR                      ///
113:     ///                                                          ///
114: 
115:     /// @param _manager The contract upgrade manager address
116:     constructor(address _manager) payable initializer {
117:         manager = IRevolutionBuilder(_manager);
118:     }
119: 
120:     ///                                                          ///
121:     ///                         INITIALIZER                      ///
122:     ///                                                          ///
123: 
124:     /// @notice Initializes a DAO's ERC-721 token contract
125:     /// @param _minter The address of the minter
126:     /// @param _initialOwner The address of the initial owner
127:     /// @param _descriptor The address of the token URI descriptor
128:     /// @param _cultureIndex The address of the CultureIndex contract
129:     /// @param _erc721TokenParams The name, symbol, and contract metadata of the token
130:     function initialize(
131:         address _minter,
132:         address _initialOwner,
133:         address _descriptor,
134:         address _cultureIndex,
135:         IRevolutionBuilder.ERC721TokenParams memory _erc721TokenParams
136:     ) external initializer {
137:         require(msg.sender == address(manager), "Only manager can initialize");
138: 
139:         require(_minter != address(0), "Minter cannot be zero address");
140:         require(_initialOwner != address(0), "Initial owner cannot be zero address");
141: 
142:         // Initialize the reentrancy guard
143:         __ReentrancyGuard_init();
144: 
145:         // Setup ownable
146:         __Ownable_init(_initialOwner);
147: 
148:         // Initialize the ERC-721 token
149:         __ERC721_init(_erc721TokenParams.name, _erc721TokenParams.symbol);
150:         _contractURIHash = _erc721TokenParams.contractURIHash;
151: 
152:         // Set the contracts
153:         minter = _minter;
154:         descriptor = IDescriptorMinimal(_descriptor);
155:         cultureIndex = ICultureIndex(_cultureIndex);
156:     }
157: 
158:     /**
159:      * @notice The IPFS URI of contract-level metadata.
160:      */
161:     function contractURI() public view returns (string memory) {
162:         return string(abi.encodePacked("ipfs://", _contractURIHash));
163:     }
164: 
165:     /**
166:      * @notice Set the _contractURIHash.
167:      * @dev Only callable by the owner.
168:      */
169:     function setContractURIHash(string memory newContractURIHash) external onlyOwner {
170:         _contractURIHash = newContractURIHash;
171:     }
172: 
173:     /**
174:      * @notice Mint a Verb to the minter.
175:      * @dev Call _mintTo with the to address(es).
176:      */
177:     function mint() public override onlyMinter nonReentrant returns (uint256) {
178:         return _mintTo(minter);
179:     }
180: 
181:     /**
182:      * @notice Burn a verb.
183:      */
184:     function burn(uint256 verbId) public override onlyMinter nonReentrant {
185:         _burn(verbId);
186:         emit VerbBurned(verbId);
187:     }
188: 
189:     /**
190:      * @notice A distinct Uniform Resource Identifier (URI) for a given asset.
191:      * @dev See {IERC721Metadata-tokenURI}.
192:      */
193:     function tokenURI(uint256 tokenId) public view override returns (string memory) {
194:         return descriptor.tokenURI(tokenId, artPieces[tokenId].metadata);
195:     }
196: 
197:     /**
198:      * @notice Similar to `tokenURI`, but always serves a base64 encoded data URI
199:      * with the JSON contents directly inlined.
200:      */
201:     function dataURI(uint256 tokenId) public view override returns (string memory) {
202:         return descriptor.dataURI(tokenId, artPieces[tokenId].metadata);
203:     }
204: 
205:     /**
206:      * @notice Set the token minter.
207:      * @dev Only callable by the owner when not locked.
208:      */
209:     function setMinter(address _minter) external override onlyOwner nonReentrant whenMinterNotLocked {
210:         require(_minter != address(0), "Minter cannot be zero address");
211:         minter = _minter;
212: 
213:         emit MinterUpdated(_minter);
214:     }
215: 
216:     /**
217:      * @notice Lock the minter.
218:      * @dev This cannot be reversed and is only callable by the owner when not locked.
219:      */
220:     function lockMinter() external override onlyOwner whenMinterNotLocked {
221:         isMinterLocked = true;
222: 
223:         emit MinterLocked();
224:     }
225: 
226:     /**
227:      * @notice Set the token URI descriptor.
228:      * @dev Only callable by the owner when not locked.
229:      */
230:     function setDescriptor(
231:         IDescriptorMinimal _descriptor
232:     ) external override onlyOwner nonReentrant whenDescriptorNotLocked {
233:         descriptor = _descriptor;
234: 
235:         emit DescriptorUpdated(_descriptor);
236:     }
237: 
238:     /**
239:      * @notice Lock the descriptor.
240:      * @dev This cannot be reversed and is only callable by the owner when not locked.
241:      */
242:     function lockDescriptor() external override onlyOwner whenDescriptorNotLocked {
243:         isDescriptorLocked = true;
244: 
245:         emit DescriptorLocked();
246:     }
247: 
248:     /**
249:      * @notice Set the token CultureIndex.
250:      * @dev Only callable by the owner when not locked.
251:      */
252:     function setCultureIndex(ICultureIndex _cultureIndex) external onlyOwner whenCultureIndexNotLocked nonReentrant {
253:         cultureIndex = _cultureIndex;
254: 
255:         emit CultureIndexUpdated(_cultureIndex);
256:     }
257: 
258:     /**
259:      * @notice Lock the CultureIndex
260:      * @dev This cannot be reversed and is only callable by the owner when not locked.
261:      */
262:     function lockCultureIndex() external override onlyOwner whenCultureIndexNotLocked {
263:         isCultureIndexLocked = true;
264: 
265:         emit CultureIndexLocked();
266:     }
267: 
268:     /**
269:      * @notice Fetch an art piece by its ID.
270:      * @param verbId The ID of the art piece.
271:      * @return The ArtPiece struct associated with the given ID.
272:      */
273:     function getArtPieceById(uint256 verbId) public view returns (ICultureIndex.ArtPiece memory) {
274:         require(verbId <= _currentVerbId, "Invalid piece ID");
275:         return artPieces[verbId];
276:     }
277: 
278:     /**
279:      * @notice Mint a Verb with `verbId` to the provided `to` address. Pulls the top voted art piece from the CultureIndex.
280:      */
281:     function _mintTo(address to) internal returns (uint256) {
282:         ICultureIndex.ArtPiece memory artPiece = cultureIndex.getTopVotedPiece();
283: 
284:         // Check-Effects-Interactions Pattern
285:         // Perform all checks
286:         require(
287:             artPiece.creators.length <= cultureIndex.MAX_NUM_CREATORS(),
288:             "Creator array must not be > MAX_NUM_CREATORS"
289:         );
290: 
291:         // Use try/catch to handle potential failure
292:         try cultureIndex.dropTopVotedPiece() returns (ICultureIndex.ArtPiece memory _artPiece) {
293:             artPiece = _artPiece;
294:             uint256 verbId = _currentVerbId++;
295: 
296:             ICultureIndex.ArtPiece storage newPiece = artPieces[verbId];
297: 
298:             newPiece.pieceId = artPiece.pieceId;
299:             newPiece.metadata = artPiece.metadata;
300:             newPiece.isDropped = artPiece.isDropped;
301:             newPiece.sponsor = artPiece.sponsor;
302:             newPiece.totalERC20Supply = artPiece.totalERC20Supply;
303:             newPiece.quorumVotes = artPiece.quorumVotes;
304:             newPiece.totalVotesSupply = artPiece.totalVotesSupply;
305: 
306:             for (uint i = 0; i < artPiece.creators.length; i++) {
307:                 newPiece.creators.push(artPiece.creators[i]);
308:             }
309: 
310:             _mint(to, verbId);
311: 
312:             emit VerbCreated(verbId, artPiece);
313: 
314:             return verbId;
315:         } catch {
316:             // Handle failure (e.g., revert, emit an event, set a flag, etc.)
317:             revert("dropTopVotedPiece failed");
318:         }
319:     }
320: 
321:     ///                                                          ///
322:     ///                         TOKEN UPGRADE                    ///
323:     ///                                                          ///
324: 
325:     // /// @notice Ensures the caller is authorized to upgrade the contract and that the new implementation is valid
326:     // /// @dev This function is called in `upgradeTo` & `upgradeToAndCall`
327:     // /// @param _newImpl The new implementation address
328:     function _authorizeUpgrade(address _newImpl) internal view override onlyOwner {
329:         // Ensure the implementation is valid
330:         require(manager.isRegisteredUpgrade(_getImplementation(), _newImpl), "Invalid upgrade");
331:     }
332: }
333: 

```


*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L1-L1)

```solidity
1: // SPDX-License-Identifier: GPL-3.0
2: pragma solidity ^0.8.22;
3: 
4: import { Ownable2StepUpgradeable } from "@openzeppelin/contracts-upgradeable/access/Ownable2StepUpgradeable.sol";
5: import { ReentrancyGuardUpgradeable } from "@openzeppelin/contracts-upgradeable/utils/ReentrancyGuardUpgradeable.sol";
6: import { IRevolutionBuilder } from "./interfaces/IRevolutionBuilder.sol";
7: 
8: import { UUPS } from "./libs/proxy/UUPS.sol";
9: import { VersionedContract } from "./version/VersionedContract.sol";
10: 
11: /// @title MaxHeap implementation in Solidity
12: /// @dev This contract implements a Max Heap data structure with basic operations
13: /// @author Written by rocketman and gpt4
14: contract MaxHeap is VersionedContract, UUPS, Ownable2StepUpgradeable, ReentrancyGuardUpgradeable {
15:     /// @notice The parent contract that is allowed to update the data store
16:     address public admin;
17: 
18:     ///                                                          ///
19:     ///                         IMMUTABLES                       ///
20:     ///                                                          ///
21: 
22:     /// @notice The contract upgrade manager
23:     IRevolutionBuilder private immutable manager;
24: 
25:     ///                                                          ///
26:     ///                         CONSTRUCTOR                      ///
27:     ///                                                          ///
28: 
29:     /// @param _manager The contract upgrade manager address
30:     constructor(address _manager) payable initializer {
31:         manager = IRevolutionBuilder(_manager);
32:     }
33: 
34:     ///                                                          ///
35:     ///                          MODIFIERS                       ///
36:     ///                                                          ///
37: 
38:     /**
39:      * @notice Require that the minter has not been locked.
40:      */
41:     modifier onlyAdmin() {
42:         require(msg.sender == admin, "Sender is not the admin");
43:         _;
44:     }
45: 
46:     ///                                                          ///
47:     ///                         INITIALIZER                      ///
48:     ///                                                          ///
49: 
50:     /**
51:      * @notice Initializes the maxheap contract
52:      * @param _initialOwner The initial owner of the contract
53:      * @param _admin The contract that is allowed to update the data store
54:      */
55:     function initialize(address _initialOwner, address _admin) public initializer {
56:         require(msg.sender == address(manager), "Only manager can initialize");
57: 
58:         admin = _admin;
59: 
60:         __Ownable_init(_initialOwner);
61:         __ReentrancyGuard_init();
62:     }
63: 
64:     /// @notice Struct to represent an item in the heap by it's ID
65:     mapping(uint256 => uint256) public heap;
66: 
67:     uint256 public size = 0;
68: 
69:     /// @notice Mapping to keep track of the value of an item in the heap
70:     mapping(uint256 => uint256) public valueMapping;
71: 
72:     /// @notice Mapping to keep track of the position of an item in the heap
73:     mapping(uint256 => uint256) public positionMapping;
74: 
75:     /// @notice Get the parent index of a given position
76:     /// @param pos The position for which to find the parent
77:     /// @return The index of the parent node
78:     function parent(uint256 pos) private pure returns (uint256) {
79:         require(pos != 0, "Position should not be zero");
80:         return (pos - 1) / 2;
81:     }
82: 
83:     /// @notice Swap two nodes in the heap
84:     /// @param fpos The position of the first node
85:     /// @param spos The position of the second node
86:     function swap(uint256 fpos, uint256 spos) private {
87:         (heap[fpos], heap[spos]) = (heap[spos], heap[fpos]);
88:         (positionMapping[heap[fpos]], positionMapping[heap[spos]]) = (fpos, spos);
89:     }
90: 
91:     /// @notice Reheapify the heap starting at a given position
92:     /// @dev This ensures that the heap property is maintained
93:     /// @param pos The starting position for the heapify operation
94:     function maxHeapify(uint256 pos) internal {
95:         uint256 left = 2 * pos + 1;
96:         uint256 right = 2 * pos + 2;
97: 
98:         uint256 posValue = valueMapping[heap[pos]];
99:         uint256 leftValue = valueMapping[heap[left]];
100:         uint256 rightValue = valueMapping[heap[right]];
101: 
102:         if (pos >= (size / 2) && pos <= size) return;
103: 
104:         if (posValue < leftValue || posValue < rightValue) {
105:             if (leftValue > rightValue) {
106:                 swap(pos, left);
107:                 maxHeapify(left);
108:             } else {
109:                 swap(pos, right);
110:                 maxHeapify(right);
111:             }
112:         }
113:     }
114: 
115:     /// @notice Insert an element into the heap
116:     /// @dev The function will revert if the heap is full
117:     /// @param itemId The item ID to insert
118:     /// @param value The value to insert
119:     function insert(uint256 itemId, uint256 value) public onlyAdmin {
120:         heap[size] = itemId;
121:         valueMapping[itemId] = value; // Update the value mapping
122:         positionMapping[itemId] = size; // Update the position mapping
123: 
124:         uint256 current = size;
125:         while (current != 0 && valueMapping[heap[current]] > valueMapping[heap[parent(current)]]) {
126:             swap(current, parent(current));
127:             current = parent(current);
128:         }
129:         size++;
130:     }
131: 
132:     /// @notice Update the value of an existing item in the heap
133:     /// @param itemId The item ID whose vote count needs to be updated
134:     /// @param newValue The new value for the item
135:     /// @dev This function adjusts the heap to maintain the max-heap property after updating the vote count
136:     function updateValue(uint256 itemId, uint256 newValue) public onlyAdmin {
137:         uint256 position = positionMapping[itemId];
138:         uint256 oldValue = valueMapping[itemId];
139: 
140:         // Update the value in the valueMapping
141:         valueMapping[itemId] = newValue;
142: 
143:         // Decide whether to perform upwards or downwards heapify
144:         if (newValue > oldValue) {
145:             // Upwards heapify
146:             while (position != 0 && valueMapping[heap[position]] > valueMapping[heap[parent(position)]]) {
147:                 swap(position, parent(position));
148:                 position = parent(position);
149:             }
150:         } else if (newValue < oldValue) maxHeapify(position); // Downwards heapify
151:     }
152: 
153:     /// @notice Extract the maximum element from the heap
154:     /// @dev The function will revert if the heap is empty
155:     /// @return The maximum element from the heap
156:     function extractMax() external onlyAdmin returns (uint256, uint256) {
157:         require(size > 0, "Heap is empty");
158: 
159:         uint256 popped = heap[0];
160:         heap[0] = heap[--size];
161:         maxHeapify(0);
162: 
163:         return (popped, valueMapping[popped]);
164:     }
165: 
166:     /// @notice Get the maximum element from the heap
167:     /// @dev The function will revert if the heap is empty
168:     /// @return The maximum element from the heap
169:     function getMax() public view returns (uint256, uint256) {
170:         require(size > 0, "Heap is empty");
171:         return (heap[0], valueMapping[heap[0]]);
172:     }
173: 
174:     ///                                                          ///
175:     ///                     MAX HEAP UPGRADE                     ///
176:     ///                                                          ///
177: 
178:     /// @notice Ensures the caller is authorized to upgrade the contract and that the new implementation is valid
179:     /// @dev This function is called in `upgradeTo` & `upgradeToAndCall`
180:     /// @param _newImpl The new implementation address
181:     function _authorizeUpgrade(address _newImpl) internal view override onlyOwner {
182:         // Ensure the new implementation is a registered upgrade
183:         if (!manager.isRegisteredUpgrade(_getImplementation(), _newImpl)) revert INVALID_UPGRADE(_newImpl);
184:     }
185: }
186: 

```


*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L1-L1)

```solidity
1: // SPDX-License-Identifier: MIT
2: pragma solidity 0.8.22;
3: 
4: import { IRevolutionProtocolRewards } from "../interfaces/IRevolutionProtocolRewards.sol";
5: 
6: struct RewardsSettings {
7:     uint256 builderReferralReward;
8:     uint256 purchaseReferralReward;
9:     uint256 deployerReward;
10:     uint256 revolutionReward;
11: }
12: 
13: /// @notice Common logic for Revolution ERC20TokenEmitter contracts for protocol reward splits & deposits
14: abstract contract RewardSplits {
15:     error INVALID_ETH_AMOUNT();
16: 
17:     // 2.5% total
18:     uint256 internal constant DEPLOYER_REWARD_BPS = 25;
19:     uint256 internal constant REVOLUTION_REWARD_BPS = 75;
20:     uint256 internal constant BUILDER_REWARD_BPS = 100;
21:     uint256 internal constant PURCHASE_REFERRAL_BPS = 50;
22: 
23:     uint256 public constant minPurchaseAmount = 0.0000001 ether;
24:     uint256 public constant maxPurchaseAmount = 50_000 ether;
25: 
26:     address internal immutable revolutionRewardRecipient;
27:     IRevolutionProtocolRewards internal immutable protocolRewards;
28: 
29:     constructor(address _protocolRewards, address _revolutionRewardRecipient) payable {
30:         if (_protocolRewards == address(0) || _revolutionRewardRecipient == address(0)) revert("Invalid Address Zero");
31: 
32:         protocolRewards = IRevolutionProtocolRewards(_protocolRewards);
33:         revolutionRewardRecipient = _revolutionRewardRecipient;
34:     }
35: 
36:     /*
37:      * @notice Sometimes has rounding errors vs. compute purchase rewards, use externally.
38:      * @param _paymentAmountWei The amount of ETH being paid for the purchase
39:      */
40:     function computeTotalReward(uint256 paymentAmountWei) public pure returns (uint256) {
41:         if (paymentAmountWei <= minPurchaseAmount || paymentAmountWei >= maxPurchaseAmount) revert INVALID_ETH_AMOUNT();
42: 
43:         return
44:             (paymentAmountWei * BUILDER_REWARD_BPS) /
45:             10_000 +
46:             (paymentAmountWei * PURCHASE_REFERRAL_BPS) /
47:             10_000 +
48:             (paymentAmountWei * DEPLOYER_REWARD_BPS) /
49:             10_000 +
50:             (paymentAmountWei * REVOLUTION_REWARD_BPS) /
51:             10_000;
52:     }
53: 
54:     function computePurchaseRewards(uint256 paymentAmountWei) public pure returns (RewardsSettings memory, uint256) {
55:         return (
56:             RewardsSettings({
57:                 builderReferralReward: (paymentAmountWei * BUILDER_REWARD_BPS) / 10_000,
58:                 purchaseReferralReward: (paymentAmountWei * PURCHASE_REFERRAL_BPS) / 10_000,
59:                 deployerReward: (paymentAmountWei * DEPLOYER_REWARD_BPS) / 10_000,
60:                 revolutionReward: (paymentAmountWei * REVOLUTION_REWARD_BPS) / 10_000
61:             }),
62:             computeTotalReward(paymentAmountWei)
63:         );
64:     }
65: 
66:     function _depositPurchaseRewards(
67:         uint256 paymentAmountWei,
68:         address builderReferral,
69:         address purchaseReferral,
70:         address deployer
71:     ) internal returns (uint256) {
72:         (RewardsSettings memory settings, uint256 totalReward) = computePurchaseRewards(paymentAmountWei);
73: 
74:         if (builderReferral == address(0)) builderReferral = revolutionRewardRecipient;
75: 
76:         if (deployer == address(0)) deployer = revolutionRewardRecipient;
77: 
78:         if (purchaseReferral == address(0)) purchaseReferral = revolutionRewardRecipient;
79: 
80:         protocolRewards.depositRewards{ value: totalReward }(
81:             builderReferral,
82:             settings.builderReferralReward,
83:             purchaseReferral,
84:             settings.purchaseReferralReward,
85:             deployer,
86:             settings.deployerReward,
87:             revolutionRewardRecipient,
88:             settings.revolutionReward
89:         );
90: 
91:         return totalReward;
92:     }
93: }
94: 

```


*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L1-L1)
### [N-58]<a name="n-58"></a> Top level declarations should be separated by two blank lines

*There are 2 instance(s) of this issue:*

```solidity
286:     } // <= FOUND
287: 
288:     function _getVotes(address account) internal view returns (uint256) { // <= FOUND

```


*GitHub* : [286](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L286-L288)

```solidity
110:     } // <= FOUND
111: 
112:     function totalSupply() public view returns (uint) { // <= FOUND

```


*GitHub* : [110](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L110-L112)
### [N-59]<a name="n-59"></a> Contracts should have full test coverage
Attaining 100% code coverage is not an assurance of a bug-free codebase, but it significantly improves the likelihood of identifying simple bugs and aids in maintaining a stable codebase by preventing regressions during code modifications. Additionally, to achieve complete coverage, code writers usually have to structure their code more modularly, which implies testing each component independently. This reduces the complex interdependencies between modules and layers, creating a more understandable and auditable codebase. Consequently, this practice aids in enhancing code maintainability and reduces the risk of introducing bugs during future changes.

*There are 7 instance(s) of this issue:*

```solidity
14: contract MaxHeap is VersionedContract, UUPS, Ownable2StepUpgradeable, ReentrancyGuardUpgradeable  // <= FOUND

```


*GitHub* : [14](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L14-L14)

```solidity
20: contract CultureIndex is // <= FOUND
21:     ICultureIndex, // <= FOUND
22:     VersionedContract, // <= FOUND
23:     UUPS, // <= FOUND
24:     Ownable2StepUpgradeable, // <= FOUND
25:     ReentrancyGuardUpgradeable, // <= FOUND
26:     EIP712Upgradeable // <= FOUND
27:  // <= FOUND

```


*GitHub* : [20](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L20-L27)

```solidity
29: contract NontransferableERC20Votes is Initializable, ERC20VotesUpgradeable, Ownable2StepUpgradeable  // <= FOUND

```


*GitHub* : [29](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L29-L29)

```solidity
17: contract ERC20TokenEmitter is // <= FOUND
18:     IERC20TokenEmitter, // <= FOUND
19:     ReentrancyGuardUpgradeable, // <= FOUND
20:     TokenEmitterRewards, // <= FOUND
21:     Ownable2StepUpgradeable, // <= FOUND
22:     PausableUpgradeable // <= FOUND
23:  // <= FOUND

```


*GitHub* : [17](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L17-L23)

```solidity
39: contract AuctionHouse is // <= FOUND
40:     IAuctionHouse, // <= FOUND
41:     VersionedContract, // <= FOUND
42:     UUPS, // <= FOUND
43:     PausableUpgradeable, // <= FOUND
44:     ReentrancyGuardUpgradeable, // <= FOUND
45:     Ownable2StepUpgradeable // <= FOUND
46:  // <= FOUND

```


*GitHub* : [39](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L39-L46)

```solidity
33: contract VerbsToken is // <= FOUND
34:     IVerbsToken, // <= FOUND
35:     VersionedContract, // <= FOUND
36:     UUPS, // <= FOUND
37:     Ownable2StepUpgradeable, // <= FOUND
38:     ReentrancyGuardUpgradeable, // <= FOUND
39:     ERC721CheckpointableUpgradeable // <= FOUND
40:  // <= FOUND

```


*GitHub* : [33](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L33-L40)

```solidity
11: contract VRGDAC  // <= FOUND

```


*GitHub* : [11](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L11-L11)
### [N-60]<a name="n-60"></a> Consider using SafeTransferLib.safeTransferETH() or Address.sendValue() for clearer semantic meaning
For improved code readability and better semantic understanding, it's recommended to use OpenZeppelin's SafeTransferLib.safeTransferETH() or Address.sendValue(). These functions explicitly describe their operation with their naming convention, increasing the comprehensibility of the code. Their usage over lower-level calls enhances the maintainability of your smart contract code by clearly indicating the purpose of the function.

*There are 1 instance(s) of this issue:*

```solidity
152:     function buyToken(
153:         address[] calldata addresses,
154:         uint[] calldata basisPointSplits,
155:         ProtocolRewardAddresses calldata protocolRewardsRecipients
156:     ) public payable nonReentrant whenNotPaused returns (uint256 tokensSoldWad) {
157:         
158:         require(msg.sender != treasury && msg.sender != creatorsAddress, "Funds recipient cannot buy tokens");
159: 
160:         require(msg.value > 0, "Must send ether");
161:         
162:         require(addresses.length == basisPointSplits.length, "Parallel arrays required");
163: 
164:         
165:         uint256 msgValueRemaining = _handleRewardsAndGetValueToSend(
166:             msg.value,
167:             protocolRewardsRecipients.builder,
168:             protocolRewardsRecipients.purchaseReferral,
169:             protocolRewardsRecipients.deployer
170:         );
171: 
172:         
173:         uint256 toPayTreasury = (msgValueRemaining * (10_000 - creatorRateBps)) / 10_000;
174: 
175:         
176:         
177:         uint256 creatorDirectPayment = ((msgValueRemaining - toPayTreasury) * entropyRateBps) / 10_000;
178:         
179:         int totalTokensForCreators = ((msgValueRemaining - toPayTreasury) - creatorDirectPayment) > 0
180:             ? getTokenQuoteForEther((msgValueRemaining - toPayTreasury) - creatorDirectPayment)
181:             : int(0);
182: 
183:         
184:         int totalTokensForBuyers = toPayTreasury > 0 ? getTokenQuoteForEther(toPayTreasury) : int(0);
185: 
186:         
187:         emittedTokenWad += totalTokensForBuyers;
188:         if (totalTokensForCreators > 0) emittedTokenWad += totalTokensForCreators;
189: 
190:         
191:         (bool success, ) = treasury.call{ value: toPayTreasury }(new bytes(0));
192:         require(success, "Transfer failed.");
193: 
194:         
195:         if (creatorDirectPayment > 0) {
196:             (success, ) = creatorsAddress.call{ value: creatorDirectPayment }(new bytes(0)); // <= FOUND
197:             require(success, "Transfer failed.");
198:         }
199: 
200:         
201:         if (totalTokensForCreators > 0 && creatorsAddress != address(0)) {
202:             _mint(creatorsAddress, uint256(totalTokensForCreators));
203:         }
204: 
205:         uint256 bpsSum = 0;
206: 
207:         
208: 
209:         for (uint256 i = 0; i < addresses.length; i++) {
210:             if (totalTokensForBuyers > 0) {
211:                 
212:                 _mint(addresses[i], uint256((totalTokensForBuyers * int(basisPointSplits[i])) / 10_000));
213:             }
214:             bpsSum += basisPointSplits[i];
215:         }
216: 
217:         require(bpsSum == 10_000, "bps must add up to 10_000");
218: 
219:         emit PurchaseFinalized(
220:             msg.sender,
221:             msg.value,
222:             toPayTreasury,
223:             msg.value - msgValueRemaining,
224:             uint256(totalTokensForBuyers),
225:             uint256(totalTokensForCreators),
226:             creatorDirectPayment
227:         );
228: 
229:         return uint256(totalTokensForBuyers);
230:     }

```


*GitHub* : [152](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L152-L196)
### [N-61]<a name="n-61"></a> Whitespace in expressions
Avoid unnecessary whitespace in contract lines such as ' ;' and ', )'

*There are 3 instance(s) of this issue:*

```solidity
489:         
490:         (uint256 pieceId, ) = maxHeap.getMax(); // <= FOUND

```


*GitHub* : [490](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L490-L490)

```solidity
191: 
192:         
193:         (bool success, ) = treasury.call{ value: toPayTreasury }(new bytes(0)); // <= FOUND

```


*GitHub* : [193](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L193-L193)

```solidity
196:             (success, ) = creatorsAddress.call{ value: creatorDirectPayment }(new bytes(0)); // <= FOUND

```


*GitHub* : [196](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L196-L196)
### [N-62]<a name="n-62"></a> Consider using named function calls
Named function calls in Solidity greatly improve code readability by explicitly mapping arguments to their respective parameter names. This clarity becomes critical when dealing with functions that have numerous or complex parameters, reducing potential errors due to misordered arguments. Therefore, adopting named function calls contributes to more maintainable and less error-prone code.

*There are 17 instance(s) of this issue:*

```solidity
126:             swap(current, parent(current)); // <= FOUND

```


*GitHub* : [126](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L126-L126)

```solidity
147:                 swap(position, parent(position)); // <= FOUND

```


*GitHub* : [147](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L147-L147)

```solidity
106:                 swap(pos, left); // <= FOUND

```


*GitHub* : [106](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L106-L106)

```solidity
109:                 swap(pos, right); // <= FOUND

```


*GitHub* : [109](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L109-L109)

```solidity
275:         return _getPastVotes(account, blockNumber); // <= FOUND

```


*GitHub* : [275](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L275-L275)

```solidity
356:             _vote(pieceIds[i], from); // <= FOUND

```


*GitHub* : [356](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L356-L356)

```solidity
379: 
380:         _voteForMany(pieceIds, from); // <= FOUND

```


*GitHub* : [379](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L379-L380)

```solidity
408:             _voteForMany(pieceIds[i], from[i]); // <= FOUND

```


*GitHub* : [408](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L408-L408)

```solidity
375:         bool success = _verifyVoteSignature(from, pieceIds, deadline, v, r, s); // <= FOUND

```


*GitHub* : [375](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L375-L375)

```solidity
135:         _mint(account, amount); // <= FOUND

```


*GitHub* : [135](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L135-L135)

```solidity
202:             _mint(creatorsAddress, uint256(totalTokensForCreators)); // <= FOUND

```


*GitHub* : [202](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L202-L202)

```solidity
212:                 
213:                 _mint(addresses[i], uint256((totalTokensForBuyers * int(basisPointSplits[i])) / 10_000)); // <= FOUND

```


*GitHub* : [212](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L212-L213)

```solidity
310: 
311:             _mint(to, verbId); // <= FOUND

```


*GitHub* : [310](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L310-L311)

```solidity
378: 
379:                 
380:                 _safeTransferETHWithFallback(owner(), auctioneerPayment); // <= FOUND

```


*GitHub* : [378](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L378-L380)

```solidity
49:             return pIntegral(timeSinceStart, sold + amount) - pIntegral(timeSinceStart, sold); // <= FOUND

```


*GitHub* : [49](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L49-L49)

```solidity
71:         (RewardsSettings memory settings, uint256 totalReward) = computePurchaseRewards(paymentAmountWei); // <= FOUND

```


*GitHub* : [71](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L71-L71)

```solidity
20: 
21:         return msgValue - _depositPurchaseRewards(msgValue, builderReferral, purchaseReferral, deployer); // <= FOUND

```


*GitHub* : [20](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/TokenEmitter/TokenEmitterRewards.sol#L20-L21)
### [N-63]<a name="n-63"></a> Public state variables should include natspec comments
State variables in Solidity contracts are essential for defining the state of the contract. Including comments for these variables improves code readability and maintainability by providing context and explaining their purpose. This practice aids future developers or auditors in understanding the code, thus reducing the likelihood of misinterpretation or errors.

*There are 4 instance(s) of this issue:*

```solidity

// Constant for max number of creators
uint256 public constant MAX_NUM_CREATORS = 100; // <= FOUND

```


*GitHub* :

```solidity
67: 
68:     uint256 public size = 0; // <= FOUND
69: 

```


*GitHub* : [67](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L67-L68)

```solidity
21:     uint256 internal constant PURCHASE_REFERRAL_BPS = 50;
22: 
23:     uint256 public constant minPurchaseAmount = 0.0000001 ether; // <= FOUND

```


*GitHub* : [21](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L21-L23)

```solidity
24:     uint256 public constant maxPurchaseAmount = 50_000 ether; // <= FOUND
25: 
26:     address internal immutable revolutionRewardRecipient;

```


*GitHub* : [24](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L24-L24)
### [N-64]<a name="n-64"></a> Lack of space near the operator
Lack of space near operators in code can lead to reduced readability, making it more challenging to distinguish between different elements and understand the logic quickly. As a resolution, always include spaces around operators to ensure a clear visual separation, which promotes better maintainability and comprehension of the code.

*There are 2 instance(s) of this issue:*

```solidity
42: 
43:         return
44:             (paymentAmountWei * BUILDER_REWARD_BPS) / // <= FOUND
45:             10_000 + // <= FOUND
46:             (paymentAmountWei * PURCHASE_REFERRAL_BPS) / // <= FOUND
47:             10_000 + // <= FOUND
48:             (paymentAmountWei * DEPLOYER_REWARD_BPS) / // <= FOUND
49:             10_000 + // <= FOUND
50:             (paymentAmountWei * REVOLUTION_REWARD_BPS) / // <= FOUND
51:             10_000; // <= FOUND

```


*GitHub* : [42](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L42-L51)

```solidity
510:         return
511:             (quorumVotesBPS * _calculateVoteWeight(erc20VotingToken.totalSupply(), erc721VotingToken.totalSupply())) / // <= FOUND
512:             10_000; // <= FOUND

```


*GitHub* : [510](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L510-L512)
### [N-65]<a name="n-65"></a> Using while for unbounded loops isn’t recommended
Utilizing a `while` loop for unbounded iterations in Solidity isn't advisable as it can lead to unintended infinite loops. Such loops could consume all the available gas, causing transactions to fail and losing the gas spent. This can lead to a denial-of-service vulnerability if used maliciously. It's generally better to impose an upper limit on iterations or apply a pattern that ensures termination. If an unbounded loop is necessary, implementing safeguards, careful logic, and possibly an emergency stop mechanism can mitigate the risks. Using tools to analyze loop conditions and behavior can also help avoid potential issues.

*There are 2 instance(s) of this issue:*

```solidity
125:         while (current != 0 && valueMapping[heap[current]] > valueMapping[heap[parent(current)]])  // <= FOUND

```


*GitHub* : [125](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L125-L125)

```solidity
146:             while (position != 0 && valueMapping[heap[position]] > valueMapping[heap[parent(position)]])  // <= FOUND

```


*GitHub* : [146](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L146-L146)
### [N-66]<a name="n-66"></a> Common functions should be refactored to a common base contract
In Solidity development, it's advisable to refactor common functions into a shared base contract to enhance code reusability and maintainability. This approach not only promotes clean and organized code but also saves on gas costs when deploying multiple contracts that utilize the same functions. By placing shared logic in a common base contract, it becomes easier to manage updates to those functions, reducing the likelihood of errors across multiple dependent contracts. The resolution is to identify the functions that are used across different contracts, encapsulate them in a base contract, and then inherit from that base contract wherever those functions are needed.

*There are 4 instance(s) of this issue:*

```solidity
543:     function _authorizeUpgrade(address _newImpl) internal view override onlyOwner { // <= FOUND
544:         
545:         if (!manager.isRegisteredUpgrade(_getImplementation(), _newImpl)) revert INVALID_UPGRADE(_newImpl);
546:     }

```


*GitHub* : [543](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L543-L543)

```solidity
452:     function _authorizeUpgrade(address _newImpl) internal view override onlyOwner whenPaused { // <= FOUND
453:         
454:         if (!manager.isRegisteredUpgrade(_getImplementation(), _newImpl)) revert INVALID_UPGRADE(_newImpl);
455:     }

```


*GitHub* : [452](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L452-L452)

```solidity
328:     function _authorizeUpgrade(address _newImpl) internal view override onlyOwner { // <= FOUND
329:         
330:         require(manager.isRegisteredUpgrade(_getImplementation(), _newImpl), "Invalid upgrade");
331:     }

```


*GitHub* : [328](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L328-L328)

```solidity
208:     function pause() external override onlyOwner { // <= FOUND
209:         _pause();
210:     }

```


*GitHub* : [208](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L208-L208)
### [N-67]<a name="n-67"></a> Use of override is unnecessary
Starting with Solidity version 0.8.8, the use of the `override` keyword is simplified. If a function solely overrides an interface function and does not exist in multiple base contracts, specifying `override` becomes unnecessary. This change streamlines the code and makes it less verbose. Removing unnecessary use of `override` in these situations can make the code cleaner and more maintainable, aligning with the newer Solidity guidelines. It's a good practice to adapt to this updated behavior to stay consistent with the language's evolution and current best practices.

*There are 27 instance(s) of this issue:*

```solidity
265:     function getVotes(address account) external view override returns (uint256)  // <= FOUND

```


*GitHub* : [265](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L265-L265)

```solidity
274:     function getPastVotes(address account, uint256 blockNumber) external view override returns (uint256)  // <= FOUND

```


*GitHub* : [274](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L274-L274)

```solidity
87:     function decimals() public view virtual override returns (uint8)  // <= FOUND

```


*GitHub* : [87](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L87-L87)

```solidity
94:     function transfer(address, uint256) public virtual override returns (bool)  // <= FOUND

```


*GitHub* : [94](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L94-L94)

```solidity
101:     function _transfer(address from, address to, uint256 value) internal override  // <= FOUND

```


*GitHub* : [101](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L101-L101)

```solidity
108:     function transferFrom(address, address, uint256) public virtual override returns (bool)  // <= FOUND

```


*GitHub* : [108](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L108-L108)

```solidity
115:     function approve(address, uint256) public virtual override returns (bool)  // <= FOUND

```


*GitHub* : [115](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L115-L115)

```solidity
127:     function _mint(address account, uint256 value) internal override  // <= FOUND

```


*GitHub* : [127](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L127-L127)

```solidity
141:     function _approve(address owner, address spender, uint256 value) internal override  // <= FOUND

```


*GitHub* : [141](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L141-L141)

```solidity
148:     function _approve(address owner, address spender, uint256 value, bool emitEvent) internal virtual override  // <= FOUND

```


*GitHub* : [148](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L148-L148)

```solidity
155:     function _spendAllowance(address owner, address spender, uint256 value) internal virtual override  // <= FOUND

```


*GitHub* : [155](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L155-L155)

```solidity
309:     function setCreatorsAddress(address _creatorsAddress) external override onlyOwner nonReentrant  // <= FOUND

```


*GitHub* : [309](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L309-L309)

```solidity
152:     function settleCurrentAndCreateNewAuction() external override nonReentrant whenNotPaused  // <= FOUND

```


*GitHub* : [152](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L152-L152)

```solidity
161:     function settleAuction() external override whenPaused nonReentrant  // <= FOUND

```


*GitHub* : [161](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L161-L161)

```solidity
171:     function createBid(uint256 verbId, address bidder) external payable override nonReentrant  // <= FOUND

```


*GitHub* : [171](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L171-L171)

```solidity
277:     function setTimeBuffer(uint256 _timeBuffer) external override onlyOwner  // <= FOUND

```


*GitHub* : [277](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L277-L277)

```solidity
287:     function setReservePrice(uint256 _reservePrice) external override onlyOwner  // <= FOUND

```


*GitHub* : [287](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L287-L287)

```solidity
297:     function setMinBidIncrementPercentage(uint8 _minBidIncrementPercentage) external override onlyOwner  // <= FOUND

```


*GitHub* : [297](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L297-L297)

```solidity
452:     function _authorizeUpgrade(address _newImpl) internal view override onlyOwner whenPaused  // <= FOUND

```


*GitHub* : [452](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L452-L452)

```solidity
177:     function mint() public override onlyMinter nonReentrant returns (uint256)  // <= FOUND

```


*GitHub* : [177](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L177-L177)

```solidity
184:     function burn(uint256 verbId) public override onlyMinter nonReentrant  // <= FOUND

```


*GitHub* : [184](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L184-L184)

```solidity
193:     function tokenURI(uint256 tokenId) public view override returns (string memory)  // <= FOUND

```


*GitHub* : [193](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L193-L193)

```solidity
201:     function dataURI(uint256 tokenId) public view override returns (string memory)  // <= FOUND

```


*GitHub* : [201](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L201-L201)

```solidity
209:     function setMinter(address _minter) external override onlyOwner nonReentrant whenMinterNotLocked  // <= FOUND

```


*GitHub* : [209](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L209-L209)

```solidity
220:     function lockMinter() external override onlyOwner whenMinterNotLocked  // <= FOUND

```


*GitHub* : [220](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L220-L220)

```solidity
242:     function lockDescriptor() external override onlyOwner whenDescriptorNotLocked  // <= FOUND

```


*GitHub* : [242](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L242-L242)

```solidity
262:     function lockCultureIndex() external override onlyOwner whenCultureIndexNotLocked  // <= FOUND

```


*GitHub* : [262](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L262-L262)
### [N-68]<a name="n-68"></a> If statement control structures do not comply with best practices
If statements which include a single line do not need to have curly brackets, however according to the Solidiity style guide the line of code executed upon the if statement condition being met should still be on the next line, not on the same line as the if statement declaration.

*There are 23 instance(s) of this issue:*

```solidity
102: 
103:         if (pos >= (size / 2) && pos <= size) return; // <= FOUND

```


*GitHub* : [102](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L102-L103)

```solidity
150:         } else if (newValue < oldValue) maxHeapify(position);  // <= FOUND

```


*GitHub* : [150](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L150-L150)

```solidity
454:         
455:         if (!manager.isRegisteredUpgrade(_getImplementation(), _newImpl)) revert INVALID_UPGRADE(_newImpl); // <= FOUND

```


*GitHub* : [454](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L454-L455)

```solidity
162: 
163:         if (metadata.mediaType == MediaType.IMAGE) // <= FOUND
164:             require(bytes(metadata.image).length > 0, "Image URL must be provided"); // <= FOUND

```


*GitHub* : [162](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L162-L164)

```solidity
164:         else if (metadata.mediaType == MediaType.ANIMATION) // <= FOUND
165:             require(bytes(metadata.animationUrl).length > 0, "Animation URL must be provided"); // <= FOUND

```


*GitHub* : [164](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L164-L165)

```solidity
166:         else if (metadata.mediaType == MediaType.TEXT) // <= FOUND
167:             require(bytes(metadata.text).length > 0, "Text must be provided"); // <= FOUND

```


*GitHub* : [166](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L166-L167)

```solidity
377: 
378:         if (!success) revert INVALID_SIGNATURE(); // <= FOUND

```


*GitHub* : [377](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L377-L378)

```solidity
404:             if (!_verifyVoteSignature(from[i], pieceIds[i], deadline[i], v[i], r[i], s[i])) revert INVALID_SIGNATURE(); // <= FOUND

```


*GitHub* : [404](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L404-L404)

```solidity
438: 
439:         
440:         if (from == address(0)) revert ADDRESS_ZERO(); // <= FOUND

```


*GitHub* : [438](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L438-L440)

```solidity
441: 
442:         
443:         if (recoveredAddress == address(0) || recoveredAddress != from) revert INVALID_SIGNATURE(); // <= FOUND

```


*GitHub* : [441](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L441-L443)

```solidity
188:         if (totalTokensForCreators > 0) emittedTokenWad += totalTokensForCreators; // <= FOUND

```


*GitHub* : [188](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L188-L188)

```solidity
192:         if (extended) auction.endTime = _auction.endTime = block.timestamp + timeBuffer; // <= FOUND

```


*GitHub* : [192](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L192-L192)

```solidity
195: 
196:         
197:         if (lastBidder != address(0)) _safeTransferETHWithFallback(lastBidder, _auction.amount); // <= FOUND

```


*GitHub* : [195](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L195-L197)

```solidity
199: 
200:         if (extended) emit AuctionExtended(_auction.verbId, _auction.endTime); // <= FOUND

```


*GitHub* : [199](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L199-L200)

```solidity
358:             
359:             if (_auction.bidder == address(0)) // <= FOUND
360:                 verbs.burn(_auction.verbId); // <= FOUND

```


*GitHub* : [358](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L358-L360)

```solidity
421:         
422:         if (address(this).balance < _amount) revert("Insufficient balance"); // <= FOUND

```


*GitHub* : [421](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L421-L422)

```solidity
441: 
442:             
443:             if (!wethSuccess) revert("WETH transfer failed"); // <= FOUND

```


*GitHub* : [441](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L441-L443)

```solidity
18:         if (msgValue < computeTotalReward(msgValue)) revert INVALID_ETH_AMOUNT(); // <= FOUND

```


*GitHub* : [18](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/TokenEmitter/TokenEmitterRewards.sol#L18-L18)

```solidity
30:         if (_protocolRewards == address(0) || _revolutionRewardRecipient == address(0)) revert("Invalid Address Zero"); // <= FOUND

```


*GitHub* : [30](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L30-L30)

```solidity
40:         if (paymentAmountWei <= minPurchaseAmount || paymentAmountWei >= maxPurchaseAmount) revert INVALID_ETH_AMOUNT(); // <= FOUND

```


*GitHub* : [40](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L40-L40)

```solidity
73: 
74:         if (builderReferral == address(0)) builderReferral = revolutionRewardRecipient; // <= FOUND

```


*GitHub* : [73](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L73-L74)

```solidity
75: 
76:         if (deployer == address(0)) deployer = revolutionRewardRecipient; // <= FOUND

```


*GitHub* : [75](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L75-L76)

```solidity
77: 
78:         if (purchaseReferral == address(0)) purchaseReferral = revolutionRewardRecipient; // <= FOUND

```


*GitHub* : [77](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L77-L78)
### [N-69]<a name="n-69"></a> Consider adding formal verification proofs

*There are 7 instance(s) of this issue:*

```solidity
14: contract MaxHeap is VersionedContract, UUPS, Ownable2StepUpgradeable, ReentrancyGuardUpgradeable  // <= FOUND

```


*GitHub* : [14](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L14-L14)

```solidity
20: contract CultureIndex is // <= FOUND
21:     ICultureIndex, // <= FOUND
22:     VersionedContract, // <= FOUND
23:     UUPS, // <= FOUND
24:     Ownable2StepUpgradeable, // <= FOUND
25:     ReentrancyGuardUpgradeable, // <= FOUND
26:     EIP712Upgradeable // <= FOUND
27:  // <= FOUND

```


*GitHub* : [20](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L20-L27)

```solidity
29: contract NontransferableERC20Votes is Initializable, ERC20VotesUpgradeable, Ownable2StepUpgradeable  // <= FOUND

```


*GitHub* : [29](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L29-L29)

```solidity
17: contract ERC20TokenEmitter is // <= FOUND
18:     IERC20TokenEmitter, // <= FOUND
19:     ReentrancyGuardUpgradeable, // <= FOUND
20:     TokenEmitterRewards, // <= FOUND
21:     Ownable2StepUpgradeable, // <= FOUND
22:     PausableUpgradeable // <= FOUND
23:  // <= FOUND

```


*GitHub* : [17](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L17-L23)

```solidity
39: contract AuctionHouse is // <= FOUND
40:     IAuctionHouse, // <= FOUND
41:     VersionedContract, // <= FOUND
42:     UUPS, // <= FOUND
43:     PausableUpgradeable, // <= FOUND
44:     ReentrancyGuardUpgradeable, // <= FOUND
45:     Ownable2StepUpgradeable // <= FOUND
46:  // <= FOUND

```


*GitHub* : [39](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L39-L46)

```solidity
33: contract VerbsToken is // <= FOUND
34:     IVerbsToken, // <= FOUND
35:     VersionedContract, // <= FOUND
36:     UUPS, // <= FOUND
37:     Ownable2StepUpgradeable, // <= FOUND
38:     ReentrancyGuardUpgradeable, // <= FOUND
39:     ERC721CheckpointableUpgradeable // <= FOUND
40:  // <= FOUND

```


*GitHub* : [33](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L33-L40)

```solidity
11: contract VRGDAC  // <= FOUND

```


*GitHub* : [11](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L11-L11)
### [N-70]<a name="n-70"></a> Contract uses both require()/revert() as well as custom errors
Consider using one and sticking to it for consistency

*There are 4 instance(s) of this issue:*

```solidity
14: contract MaxHeap is VersionedContract, UUPS, Ownable2StepUpgradeable, ReentrancyGuardUpgradeable 

```


*GitHub* : [14](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L14-L14)

```solidity
20: contract CultureIndex is
21:     ICultureIndex,
22:     VersionedContract,
23:     UUPS,
24:     Ownable2StepUpgradeable,
25:     ReentrancyGuardUpgradeable,
26:     EIP712Upgradeable
27: 

```


*GitHub* : [20](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L20-L20)

```solidity
29: contract NontransferableERC20Votes is Initializable, ERC20VotesUpgradeable, Ownable2StepUpgradeable 

```


*GitHub* : [29](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L29-L29)

```solidity
39: contract AuctionHouse is
40:     IAuctionHouse,
41:     VersionedContract,
42:     UUPS,
43:     PausableUpgradeable,
44:     ReentrancyGuardUpgradeable,
45:     Ownable2StepUpgradeable
46: 

```


*GitHub* : [39](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L39-L39)
### [N-71]<a name="n-71"></a> Unused import
If these serve no purpose, they should be safely removed

*There are 2 instance(s) of this issue:*

```solidity
18: import { Strings } from "@openzeppelin/contracts/utils/Strings.sol"; // <= FOUND

```


*GitHub* : [18](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L18-L18)

```solidity
22: import { IERC721 } from "@openzeppelin/contracts/token/ERC721/IERC721.sol"; // <= FOUND

```


*GitHub* : [22](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L22-L22)
### [N-72]<a name="n-72"></a> Use string.concat() on strings instead of abi.encodePacked() for clearer semantic meaning
From Solidity 0.8.12 onwards, developers can utilize `string.concat()` to concatenate strings without additional padding. Opting for `string.concat()` over `abi.encodePacked()` offers clearer semantic interpretation of the code's intent, enhancing readability. This shift minimizes ambiguity, reducing the potential for misinterpretation by reviewers or future developers. Thus, for string concatenation tasks, it's recommended to transition to `string.concat()` for transparent, straightforward code that communicates its purpose distinctly.

*There are 1 instance(s) of this issue:*

```solidity
161:     function contractURI() public view returns (string memory) { // <= FOUND
162:         return string(abi.encodePacked("ipfs:
163:     }

```


*GitHub* : [161](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L161-L161)
### [N-73]<a name="n-73"></a> Duplicated require() checks should be refactored to a modifier or function

*There are 7 instance(s) of this issue:*

```solidity
69: require(msg.sender == address(manager), "Only manager can initialize"); // <= FOUND

```


*GitHub* : [69](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L69-L69)

```solidity
157: require(size > 0, "Heap is empty"); // <= FOUND

```


*GitHub* : [157](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L157-L157)

```solidity
308: require(pieceId < _currentPieceId, "Invalid piece ID"); // <= FOUND

```


*GitHub* : [308](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L308-L308)

```solidity
192: require(success, "Transfer failed."); // <= FOUND

```


*GitHub* : [192](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L192-L192)

```solidity
254: require(_entropyRateBps <= 10_000, "Entropy rate must be less than or equal to 10_000"); // <= FOUND

```


*GitHub* : [254](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L254-L254)

```solidity
222: require(_creatorRateBps <= 10_000, "Creator rate must be less than or equal to 10_000"); // <= FOUND

```


*GitHub* : [222](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L222-L222)

```solidity
139: require(_minter != address(0), "Minter cannot be zero address"); // <= FOUND

```


*GitHub* : [139](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L139-L139)
### [N-74]<a name="n-74"></a> Missing zero address check in initializer
Initializer functions in contracts often set important parameters or addresses. Failing to check for the zero address (0x0000000000000000000000000000000000000000) in initializers can lead to unintended behavior, as this address typically signifies an unset or default value. Transfers to or interactions with the zero address can result in permanent loss of assets or broken functionality. It's crucial to add checks using `require(targetAddress != address(0), "Address cannot be zero")` in initializers to prevent accidentally setting important state variables or parameters to this address, ensuring the system's integrity and user asset safety.

*There are 2 instance(s) of this issue:*

```solidity
55:     function initialize(address _initialOwner, address _admin) public initializer {
56:         require(msg.sender == address(manager), "Only manager can initialize");
57: 
58:         admin = _admin;
59: 
60:         __Ownable_init(_initialOwner);
61:         __ReentrancyGuard_init();
62:     }

```


*GitHub* : [55](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L55-L55)

```solidity
65:     function initialize(
66:         address _initialOwner,
67:         IRevolutionBuilder.ERC20TokenParams calldata _erc20TokenParams
68:     ) external initializer {
69:         require(msg.sender == address(manager), "Only manager can initialize");
70: 
71:         __NontransferableERC20Votes_init(_initialOwner, _erc20TokenParams.name, _erc20TokenParams.symbol);
72:     }

```


*GitHub* : [65](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L65-L65)
### [N-75]<a name="n-75"></a> Consider implementing two-step procedure for updating protocol addresses
Implementing a two-step procedure for updating protocol addresses adds an extra layer of security. In such a system, the first step initiates the change, and the second step, after a predefined delay, confirms and finalizes it. This delay allows stakeholders or monitoring tools to observe and react to unintended or malicious changes. If an unauthorized change is detected, corrective actions can be taken before the change is finalized. To achieve this, introduce a "proposed address" state variable and a "delay period". Upon an update request, set the "proposed address". After the delay, if not contested, the main protocol address can be updated.

*There are 2 instance(s) of this issue:*

```solidity
309:     function setCreatorsAddress(address _creatorsAddress) external override onlyOwner nonReentrant { // <= FOUND
310:         require(_creatorsAddress != address(0), "Invalid address");
311: 
312:         emit CreatorsAddressUpdated(creatorsAddress = _creatorsAddress);
313:     }

```


*GitHub* : [309](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L309-L309)

```solidity
209:     function setMinter(address _minter) external override onlyOwner nonReentrant whenMinterNotLocked { // <= FOUND
210:         require(_minter != address(0), "Minter cannot be zero address");
211:         minter = _minter;
212: 
213:         emit MinterUpdated(_minter);
214:     }

```


*GitHub* : [209](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L209-L209)
### [N-76]<a name="n-76"></a> Consider disallowing transfers to `address(this)`
Disallowing transfers to `address(this)` prevents accidental token lockup within the contract. Transferring tokens to the contract's own address might render them irretrievable. Implement a check in the transfer function to reject transactions with the contract's address as the recipient, ensuring tokens aren't unintentionally trapped.

*There are 1 instance(s) of this issue:*

```solidity
94:     function transfer(address, uint256) public virtual override returns (bool) { // <= FOUND
95:         revert TRANSFER_NOT_ALLOWED();
96:     }

```


*GitHub* : [94](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L94-L94)
### [N-77]<a name="n-77"></a> Add inline comments for unnamed variables in function declarations
Unnamed variables in function declarations can confuse developers. To enhance clarity, add inline comments next to each unnamed variable. E.g address, -> address /* to */,

*There are 3 instance(s) of this issue:*

```solidity
108:     function transferFrom(address, address, uint256) public virtual override returns (bool)  // <= FOUND

```


*GitHub* : [108](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L108-L108)

```solidity
94:     function transfer(address, uint256) public virtual override returns (bool)  // <= FOUND

```


*GitHub* : [94](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L94-L94)

```solidity
115:     function approve(address, uint256) public virtual override returns (bool)  // <= FOUND

```


*GitHub* : [115](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L115-L115)
### [N-78]<a name="n-78"></a> Ensure block.timestamp is only used in long time intervals
`block.timestamp` represents the current block's timestamp and can be influenced, within limits, by miners. For short time intervals, this malleability can be exploited, potentially allowing miners to manipulate contract behavior. For instance, they might fast-forward an expiration or delay an event. When designing smart contracts, if precise time checks are needed for short intervals, alternatives like block numbers can be considered. However, for longer durations where a few seconds of deviation is inconsequential, `block.timestamp` is generally safe and efficient. Always assess the implications of time manipulations for the specific use-case before utilizing `block.timestamp`. In practice, if you're using block.timestamp to measure intervals that are a matter of days, weeks, or longer, the potential manipulation by miners becomes less significant. Always prioritize the security and integrity of your smart contract operations when making these decisions.

*There are 1 instance(s) of this issue:*

```solidity
192:         if (extended) auction.endTime = _auction.endTime = block.timestamp + timeBuffer; // <= FOUND

```


*GitHub* : [192](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L192-L192)
### [N-79]<a name="n-79"></a> Avoid mutating function parameters
Function parameters in Solidity are passed by value, meaning they are essentially local copies. Mutating them can lead to confusion and errors because the changes don't persist outside the function. By keeping function parameters immutable, you ensure clarity in code behavior, preventing unintended side-effects. If you need to modify a value based on a parameter, use a local variable inside the function, leaving the original parameter unaltered. By adhering to this practice, you maintain a clear distinction between input data and the internal processing logic, improving code readability and reducing the potential for bugs.

*There are 1 instance(s) of this issue:*

```solidity
65:     function _depositPurchaseRewards(
66:         uint256 paymentAmountWei,
67:         address builderReferral,
68:         address purchaseReferral,
69:         address deployer
70:     ) internal returns (uint256) {
71:         (RewardsSettings memory settings, uint256 totalReward) = computePurchaseRewards(paymentAmountWei);
72: 
73:         if (builderReferral == address(0)) builderReferral = revolutionRewardRecipient; // <= FOUND
74: 
75:         if (deployer == address(0)) deployer = revolutionRewardRecipient; // <= FOUND
76: 
77:         if (purchaseReferral == address(0)) purchaseReferral = revolutionRewardRecipient; // <= FOUND
78: 
79:         protocolRewards.depositRewards{ value: totalReward }(
80:             builderReferral,
81:             settings.builderReferralReward,
82:             purchaseReferral,
83:             settings.purchaseReferralReward,
84:             deployer,
85:             settings.deployerReward,
86:             revolutionRewardRecipient,
87:             settings.revolutionReward
88:         );
89: 
90:         return totalReward;
91:     }

```


*GitHub* : [65](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L65-L77)
### [N-80]<a name="n-80"></a> Don't only depend on Solidity's arithmetic ordering.
Relying on Solidity's default arithmetic operator precedence can lead to misunderstood or overlooked nuances in code execution. Misinterpretation risks can be significant, especially when different developers or auditors review the code. To ensure clarity and minimize potential errors, it's recommended to use parentheses. These not only override the default precedence when needed but also emphasize the intended order of operations. By deliberately showing the intended calculation sequence using parentheses, developers make the code's logic explicit, reducing the risk of unintended behaviors and making the codebase more maintainable and understandable for all stakeholders.

*There are 2 instance(s) of this issue:*

```solidity
95:         uint256 left = 2 * pos + 1; // <= FOUND

```


*GitHub* : [95](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L95-L95)

```solidity
96:         uint256 right = 2 * pos + 2; // <= FOUND

```


*GitHub* : [96](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L96-L96)
### [N-81]<a name="n-81"></a> It is best practice to use linear inheritance
In Solidity, complex inheritance structures can obfuscate code understanding, introducing potential security risks. Multiple inheritance, especially with overlapping function names or state variables, can cause unintentional overrides or ambiguous behavior. Resolution: Strive for linear and simple inheritance chains. Avoid diamond or circular inheritance patterns. Clearly document the purpose and relationships of base contracts, ensuring that overrides are intentional. Tools like Remix or Hardhat can visualize inheritance chains, assisting in verification. Keeping inheritance streamlined aids in better code readability, reduces potential errors, and ensures smoother audits and upgrades.

*There are 6 instance(s) of this issue:*

```solidity
14: contract MaxHeap is VersionedContract, UUPS, Ownable2StepUpgradeable, ReentrancyGuardUpgradeable  // <= FOUND

```


*GitHub* : [14](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L14-L14)

```solidity
20: contract CultureIndex is
21:     ICultureIndex, // <= FOUND
22:     VersionedContract, // <= FOUND
23:     UUPS, // <= FOUND
24:     Ownable2StepUpgradeable, // <= FOUND
25:     ReentrancyGuardUpgradeable, // <= FOUND
26:     EIP712Upgradeable
27: 

```


*GitHub* : [21](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L21-L25)

```solidity
29: contract NontransferableERC20Votes is Initializable, ERC20VotesUpgradeable, Ownable2StepUpgradeable  // <= FOUND

```


*GitHub* : [29](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L29-L29)

```solidity
17: contract ERC20TokenEmitter is
18:     IERC20TokenEmitter, // <= FOUND
19:     ReentrancyGuardUpgradeable, // <= FOUND
20:     TokenEmitterRewards, // <= FOUND
21:     Ownable2StepUpgradeable, // <= FOUND
22:     PausableUpgradeable
23: 

```


*GitHub* : [18](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L18-L21)

```solidity
39: contract AuctionHouse is
40:     IAuctionHouse, // <= FOUND
41:     VersionedContract, // <= FOUND
42:     UUPS, // <= FOUND
43:     PausableUpgradeable, // <= FOUND
44:     ReentrancyGuardUpgradeable, // <= FOUND
45:     Ownable2StepUpgradeable
46: 

```


*GitHub* : [40](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L40-L44)

```solidity
33: contract VerbsToken is
34:     IVerbsToken, // <= FOUND
35:     VersionedContract, // <= FOUND
36:     UUPS, // <= FOUND
37:     Ownable2StepUpgradeable, // <= FOUND
38:     ReentrancyGuardUpgradeable, // <= FOUND
39:     ERC721CheckpointableUpgradeable
40: 

```


*GitHub* : [34](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L34-L38)
### [N-82]<a name="n-82"></a> Superfluous parameter can only be one value
Using redundant parameters in smart contracts can lead to unnecessary complexity and potential vulnerabilities. When a function parameter is always constrained to a specific value due to an `if` or `require` statement, it renders the parameter superfluous. Including such parameters can be misleading to developers or users, suggesting a flexibility that doesn't exist in reality. Additionally, unnecessary parameters increase the gas cost for transactions. Resolution: Analyze the contract to identify parameters that are rendered static by conditional checks. Remove these parameters from the function signature and update the function logic accordingly. This simplifies the code, reduces gas costs, and enhances clarity and security.

*There are 4 instance(s) of this issue:*

```solidity
171:     function createBid(uint256 verbId, address bidder) external payable override nonReentrant { // <= FOUND
172:         IAuctionHouse.Auction memory _auction = auction;
173: 
174:         
175:         require(bidder != address(0), "Bidder cannot be zero address");
176:         require(_auction.verbId == verbId, "Verb not up for auction"); // <= FOUND
177:         
178:         require(block.timestamp < _auction.endTime, "Auction expired");
179:         require(msg.value >= reservePrice, "Must send at least reservePrice");
180:         require(
181:             msg.value >= _auction.amount + ((_auction.amount * minBidIncrementPercentage) / 100),
182:             "Must send more than last bid by minBidIncrementPercentage amount"
183:         );
184: 
185:         address payable lastBidder = _auction.bidder;
186: 
187:         auction.amount = msg.value;
188:         auction.bidder = payable(bidder);
189: 
190:         
191:         bool extended = _auction.endTime - block.timestamp < timeBuffer;
192:         if (extended) auction.endTime = _auction.endTime = block.timestamp + timeBuffer;
193: 
194:         
195:         if (lastBidder != address(0)) _safeTransferETHWithFallback(lastBidder, _auction.amount);
196: 
197:         emit AuctionBid(_auction.verbId, bidder, msg.sender, msg.value, extended);
198: 
199:         if (extended) emit AuctionExtended(_auction.verbId, _auction.endTime);
200:     }

```


*GitHub* : [171](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L171-L176)

```solidity
389:     function batchVoteForManyWithSig(
390:         address[] memory from,
391:         uint256[][] calldata pieceIds,
392:         uint256[] memory deadline,
393:         uint8[] memory v,
394:         bytes32[] memory r,
395:         bytes32[] memory s
396:     ) external nonReentrant {
397:         uint256 len = from.length;
398:         require(
399:             len == pieceIds.length && len == deadline.length && len == v.length && len == r.length && len == s.length,
400:             "Array lengths must match"
401:         );
402: 
403:         for (uint256 i; i < len; i++) {
404:             if (!_verifyVoteSignature(from[i], pieceIds[i], deadline[i], v[i], r[i], s[i])) revert INVALID_SIGNATURE();
405:         }
406: 
407:         for (uint256 i; i < len; i++) {
408:             _voteForMany(pieceIds[i], from[i]);
409:         }
410:     }

```


*GitHub* : [389](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L389-L389)

```solidity
152:     function buyToken(
153:         address[] calldata addresses,
154:         uint[] calldata basisPointSplits,
155:         ProtocolRewardAddresses calldata protocolRewardsRecipients
156:     ) public payable nonReentrant whenNotPaused returns (uint256 tokensSoldWad) {
157:         
158:         require(msg.sender != treasury && msg.sender != creatorsAddress, "Funds recipient cannot buy tokens");
159: 
160:         require(msg.value > 0, "Must send ether");
161:         
162:         require(addresses.length == basisPointSplits.length, "Parallel arrays required");
163: 
164:         
165:         uint256 msgValueRemaining = _handleRewardsAndGetValueToSend(
166:             msg.value,
167:             protocolRewardsRecipients.builder,
168:             protocolRewardsRecipients.purchaseReferral,
169:             protocolRewardsRecipients.deployer
170:         );
171: 
172:         
173:         uint256 toPayTreasury = (msgValueRemaining * (10_000 - creatorRateBps)) / 10_000;
174: 
175:         
176:         
177:         uint256 creatorDirectPayment = ((msgValueRemaining - toPayTreasury) * entropyRateBps) / 10_000;
178:         
179:         int totalTokensForCreators = ((msgValueRemaining - toPayTreasury) - creatorDirectPayment) > 0
180:             ? getTokenQuoteForEther((msgValueRemaining - toPayTreasury) - creatorDirectPayment)
181:             : int(0);
182: 
183:         
184:         int totalTokensForBuyers = toPayTreasury > 0 ? getTokenQuoteForEther(toPayTreasury) : int(0);
185: 
186:         
187:         emittedTokenWad += totalTokensForBuyers;
188:         if (totalTokensForCreators > 0) emittedTokenWad += totalTokensForCreators;
189: 
190:         
191:         (bool success, ) = treasury.call{ value: toPayTreasury }(new bytes(0));
192:         require(success, "Transfer failed.");
193: 
194:         
195:         if (creatorDirectPayment > 0) {
196:             (success, ) = creatorsAddress.call{ value: creatorDirectPayment }(new bytes(0));
197:             require(success, "Transfer failed.");
198:         }
199: 
200:         
201:         if (totalTokensForCreators > 0 && creatorsAddress != address(0)) {
202:             _mint(creatorsAddress, uint256(totalTokensForCreators));
203:         }
204: 
205:         uint256 bpsSum = 0;
206: 
207:         
208: 
209:         for (uint256 i = 0; i < addresses.length; i++) {
210:             if (totalTokensForBuyers > 0) {
211:                 
212:                 _mint(addresses[i], uint256((totalTokensForBuyers * int(basisPointSplits[i])) / 10_000));
213:             }
214:             bpsSum += basisPointSplits[i];
215:         }
216: 
217:         require(bpsSum == 10_000, "bps must add up to 10_000");
218: 
219:         emit PurchaseFinalized(
220:             msg.sender,
221:             msg.value,
222:             toPayTreasury,
223:             msg.value - msgValueRemaining,
224:             uint256(totalTokensForBuyers),
225:             uint256(totalTokensForCreators),
226:             creatorDirectPayment
227:         );
228: 
229:         return uint256(totalTokensForBuyers);
230:     }

```


*GitHub* : [152](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L152-L152)

```solidity
419:     function _verifyVoteSignature(
420:         address from,
421:         uint256[] calldata pieceIds,
422:         uint256 deadline,
423:         uint8 v,
424:         bytes32 r,
425:         bytes32 s
426:     ) internal returns (bool success) {
427:         require(deadline >= block.timestamp, "Signature expired");
428: 
429:         bytes32 voteHash;
430: 
431:         voteHash = keccak256(abi.encode(VOTE_TYPEHASH, from, pieceIds, nonces[from]++, deadline));
432: 
433:         bytes32 digest = _hashTypedDataV4(voteHash);
434: 
435:         address recoveredAddress = ecrecover(digest, v, r, s);
436: 
437:         
438:         if (from == address(0)) revert ADDRESS_ZERO();
439: 
440:         
441:         if (recoveredAddress == address(0) || recoveredAddress != from) revert INVALID_SIGNATURE();
442: 
443:         return true;
444:     }

```


*GitHub* : [419](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L419-L419)
### [N-83]<a name="n-83"></a> Public variable declarations should have NatSpec descriptions
Public variable declarations in smart contracts should ideally be accompanied by NatSpec comments to enhance code readability and provide clear documentation. NatSpec (Natural Language Specification) is a standard for writing comments in Ethereum smart contracts that can generate user-friendly documentation, improving the transparency of the contract's functionality. This is particularly crucial for public variables, as they are accessible externally, and understanding their role and impact is vital for both developers and users interacting with the contract

*There are 3 instance(s) of this issue:*

```solidity
16:     int256 public immutable targetPrice; // <= FOUND
17: 
18:     int256 public immutable perTimeUnit; // <= FOUND

```


*GitHub* : [16](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L16-L18)

```solidity
21:     uint256 internal constant PURCHASE_REFERRAL_BPS = 50; // <= FOUND
22: 
23:     uint256 public constant minPurchaseAmount = 0.0000001 ether; // <= FOUND

```


*GitHub* : [21](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L21-L23)

```solidity
24:     uint256 public constant maxPurchaseAmount = 50_000 ether; // <= FOUND
25: 
26:     address internal immutable revolutionRewardRecipient; // <= FOUND

```


*GitHub* : [24](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L24-L26)
### [N-84]<a name="n-84"></a> Use the Modern Upgradeable Contract Paradigm
Modern smart contract development often employs upgradeable contract structures, utilizing proxy patterns like OpenZeppelin’s Upgradeable Contracts. This paradigm separates logic and state, allowing developers to amend and enhance the contract's functionality without altering its state or the deployed contract address. Transitioning to this approach enhances long-term maintainability.

**Resolution**: Adopt a well-established proxy pattern for upgradeability, ensuring proper initialization and employing transparent proxies to mitigate potential risks. Embrace comprehensive testing and audit practices, particularly when updating contract logic, to ensure state consistency and security are preserved across upgrades. This ensures your contract remains robust and adaptable to future requirements.

*There are 1 instance(s) of this issue:*

```solidity
11: contract VRGDAC 

```


*GitHub* : [11](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L11-L11)
### [N-85]<a name="n-85"></a> Upgrade openzeppelin to the Latest Version - 5.0.0

*There are 7 instance(s) of this issue:*

```solidity
20: import { Ownable2StepUpgradeable } from "@openzeppelin/contracts-upgradeable/access/Ownable2StepUpgradeable.sol"; // <= FOUND

```


*GitHub* : [20](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L20-L20)

```solidity
27: import { ReentrancyGuardUpgradeable } from "@openzeppelin/contracts-upgradeable/utils/ReentrancyGuardUpgradeable.sol"; // <= FOUND

```


*GitHub* : [27](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L27-L27)

```solidity
25: import { EIP712Upgradeable } from "@openzeppelin/contracts-upgradeable/utils/cryptography/EIP712Upgradeable.sol"; // <= FOUND

```


*GitHub* : [25](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L25-L25)

```solidity
18: import { Strings } from "@openzeppelin/contracts/utils/Strings.sol"; // <= FOUND

```


*GitHub* : [18](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L18-L18)

```solidity
21: import { PausableUpgradeable } from "@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol"; // <= FOUND

```


*GitHub* : [21](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L21-L21)

```solidity
22: import { Initializable } from "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol"; // <= FOUND

```


*GitHub* : [22](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L22-L22)

```solidity
22: import { IERC721 } from "@openzeppelin/contracts/token/ERC721/IERC721.sol"; // <= FOUND

```


*GitHub* : [22](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L22-L22)
### [N-86]<a name="n-86"></a> Use a struct to encapsulate multiple function parameters
Using a struct to encapsulate multiple parameters in Solidity functions can significantly enhance code readability and maintainability. Instead of passing a long list of arguments, which can be error-prone and hard to manage, a struct allows grouping related data into a single, coherent entity. This approach simplifies function signatures and makes the code more organized. It also enhances code clarity, as developers can easily understand the relationship between the parameters. Moreover, it aids in future code modifications and expansions, as adding or modifying a parameter only requires changes in the struct definition, rather than in every function that uses these parameters.

*There are 7 instance(s) of this issue:*

```solidity
109:     function initialize(
110:         address _erc20VotingToken, // <= FOUND
111:         address _erc721VotingToken, // <= FOUND
112:         address _initialOwner, // <= FOUND
113:         address _maxHeap, // <= FOUND
114:         address _dropperAdmin, // <= FOUND
115:         IRevolutionBuilder.CultureIndexParams memory _cultureIndexParams
116:     ) external initializer 

```


*GitHub* : [110](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L110-L114)

```solidity
367:     function voteForManyWithSig(
368:         address from, // <= FOUND
369:         uint256[] calldata pieceIds, // <= FOUND
370:         uint256 deadline, // <= FOUND
371:         uint8 v, // <= FOUND
372:         bytes32 r, // <= FOUND
373:         bytes32 s
374:     ) external nonReentrant 

```


*GitHub* : [368](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L368-L372)

```solidity
419:     function _verifyVoteSignature(
420:         address from, // <= FOUND
421:         uint256[] calldata pieceIds, // <= FOUND
422:         uint256 deadline, // <= FOUND
423:         uint8 v, // <= FOUND
424:         bytes32 r, // <= FOUND
425:         bytes32 s
426:     ) internal returns (bool success) 

```


*GitHub* : [420](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L420-L424)

```solidity
389:     function batchVoteForManyWithSig(
390:         address[] memory from, // <= FOUND
391:         uint256[][] calldata pieceIds, // <= FOUND
392:         uint256[] memory deadline, // <= FOUND
393:         uint8[] memory v, // <= FOUND
394:         bytes32[] memory r, // <= FOUND
395:         bytes32[] memory s
396:     ) external nonReentrant 

```


*GitHub* : [390](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L390-L394)

```solidity
84:     function initialize(
85:         address _initialOwner, // <= FOUND
86:         address _erc20Token, // <= FOUND
87:         address _treasury, // <= FOUND
88:         address _vrgdac, // <= FOUND
89:         address _creatorsAddress
90:     ) external initializer 

```


*GitHub* : [85](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L85-L88)

```solidity
113:     function initialize(
114:         address _erc721Token, // <= FOUND
115:         address _erc20TokenEmitter, // <= FOUND
116:         address _initialOwner, // <= FOUND
117:         address _weth, // <= FOUND
118:         IRevolutionBuilder.AuctionParams calldata _auctionParams
119:     ) external initializer 

```


*GitHub* : [114](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L114-L117)

```solidity
130:     function initialize(
131:         address _minter, // <= FOUND
132:         address _initialOwner, // <= FOUND
133:         address _descriptor, // <= FOUND
134:         address _cultureIndex, // <= FOUND
135:         IRevolutionBuilder.ERC721TokenParams memory _erc721TokenParams
136:     ) external initializer 

```


*GitHub* : [131](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L131-L134)
### [N-87]<a name="n-87"></a> Long numbers should include underscores to improve readability and prevent typos
A large number such as 2000000 is far more readable as 2_000_000, this will help prevent unintended bugs in the code

*There are 1 instance(s) of this issue:*

```solidity
429:             
430:             
431:             success := call(50000, _to, _amount, 0, 0, 0, 0) // <= FOUND
432:         }

```


*GitHub* : [431](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L431-L431)
### [N-88]<a name="n-88"></a> Consider using ERC20Capped

*There are 4 instance(s) of this issue:*

```solidity
127:     function _mint(address account, uint256 value) internal override { // <= FOUND
128:         if (account == address(0)) {
129:             revert ERC20InvalidReceiver(address(0));
130:         }
131:         _update(address(0), account, value);
132:     }

```


*GitHub* : [127](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L127-L127)

```solidity
134:     function mint(address account, uint256 amount) public onlyOwner { // <= FOUND
135:         _mint(account, amount); // <= FOUND
136:     }

```


*GitHub* : [134](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L134-L135)

```solidity
108:     function _mint(address _to, uint256 _amount) private { // <= FOUND
109:         token.mint(_to, _amount); // <= FOUND
110:     }

```


*GitHub* : [108](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L108-L109)

```solidity
177:     function mint() public override onlyMinter nonReentrant returns (uint256) { // <= FOUND
178:         return _mintTo(minter);
179:     }

```


*GitHub* : [177](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L177-L177)
### [N-89]<a name="n-89"></a> Consider using a format prettier or forge fmt
Some comments use // X and others //X Amend comments to use only use // X or //X consistently such style inconsistencies can be resolved by running the project through a format prettier or by using forge fmt.

*There are 26 instance(s) of this issue:*

```solidity
181: //Require that creatorArray is not more than MAX_NUM_CREATORS to prevent gas limit issues

```


*GitHub* : [181](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L181-L181)

```solidity
488: //slither-disable-next-line unused-return

```


*GitHub* : [488](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L488-L488)

```solidity
525: //set the piece as dropped

```


*GitHub* : [525](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L525-L525)

```solidity
157: //prevent treasury from paying itself

```


*GitHub* : [157](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L157-L157)

```solidity
172: //Share of purchase amount to send to treasury

```


*GitHub* : [172](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L172-L172)

```solidity
175: //Share of purchase amount to reserve for creators

```


*GitHub* : [175](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L175-L175)

```solidity
176: //Ether directly sent to creators

```


*GitHub* : [176](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L176-L176)

```solidity
178: //Tokens to emit to creators

```


*GitHub* : [178](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L178-L178)

```solidity
186: //Transfer ETH to treasury and update emitted

```


*GitHub* : [186](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L186-L186)

```solidity
190: //Deposit funds to treasury

```


*GitHub* : [190](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L190-L190)

```solidity
194: //Transfer ETH to creators

```


*GitHub* : [194](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L194-L194)

```solidity
200: //Mint tokens for creators

```


*GitHub* : [200](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L200-L200)

```solidity
207: //Mint tokens to buyers

```


*GitHub* : [207](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L207-L207)

```solidity
174: //require bidder is valid address

```


*GitHub* : [174](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L174-L174)

```solidity
177: //slither-disable-next-line timestamp

```


*GitHub* : [177](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L177-L177)

```solidity
237: //ensure new min rate cannot be lower than previous min rate

```


*GitHub* : [237](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L237-L237)

```solidity
357: //If no one has bid, burn the Verb

```


*GitHub* : [357](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L357-L357)

```solidity
360: //If someone has bid, transfer the Verb to the winning bidder

```


*GitHub* : [360](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L360-L360)

```solidity
367: //Total amount of ether going to creator

```


*GitHub* : [367](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L367-L367)

```solidity
373: //Build arrays for erc20TokenEmitter.buyToken

```


*GitHub* : [373](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L373-L373)

```solidity
377: //Transfer auction amount to the DAO treasury

```


*GitHub* : [377](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L377-L377)

```solidity
382: //Transfer creator's share to the creator, for each creator, and build arrays for erc20TokenEmitter.buyToken

```


*GitHub* : [382](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L382-L382)

```solidity
389: //Calculate paymentAmount for specific creator based on BPS splits - same as multiplying by creatorDirectPayment

```


*GitHub* : [389](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L389-L389)

```solidity
382: //Transfer creator's share to the creator

```


*GitHub* : [382](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L382-L382)

```solidity
398: //Buy token from ERC20TokenEmitter for all the creators

```


*GitHub* : [398](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L398-L398)

```solidity
162: //", _contractURIHash));

```


*GitHub* : [162](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L162-L162)
### [N-90]<a name="n-90"></a> Use 'using' keyword when using specific imports rather than calling the specific import directly
In Solidity, the `using` keyword can streamline the use of library functions for specific types. Instead of calling library functions directly with their full import paths, you can declare a library once with `using` for a specific type. This approach makes your code more readable and concise. For example, instead of `LibraryName.functionName(variable)`, you would first declare `using LibraryName for TypeName;` at the contract level. After this, you can call library functions directly on variables of `TypeName` like `variable.functionName()`. This method not only enhances code clarity but also promotes cleaner and more organized code, especially when multiple functions from the same library are used frequently.

*There are 14 instance(s) of this issue:*

```solidity
109: 
123:     function initialize(
124:         address _erc20VotingToken,
125:         address _erc721VotingToken,
126:         address _initialOwner,
127:         address _maxHeap,
128:         address _dropperAdmin,
129:         IRevolutionBuilder.CultureIndexParams memory _cultureIndexParams // <= FOUND 'IRevolutionBuilder.'
130:     ) external initializer {

```


*GitHub* : [109](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L109-L129)

```solidity
65: 
69:     function initialize(
70:         address _initialOwner,
71:         IRevolutionBuilder.ERC20TokenParams calldata _erc20TokenParams // <= FOUND 'IRevolutionBuilder.'
72:     ) external initializer {

```


*GitHub* : [65](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L65-L71)

```solidity
113: 
128:     function initialize(
129:         address _erc721Token,
130:         address _erc20TokenEmitter,
131:         address _initialOwner,
132:         address _weth,
133:         IRevolutionBuilder.AuctionParams calldata _auctionParams // <= FOUND 'IRevolutionBuilder.'
134:     ) external initializer {

```


*GitHub* : [113](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L113-L133)

```solidity
130: 
141:     function initialize(
142:         address _minter,
143:         address _initialOwner,
144:         address _descriptor,
145:         address _cultureIndex,
146:         IRevolutionBuilder.ERC721TokenParams memory _erc721TokenParams // <= FOUND 'IRevolutionBuilder.'
147:     ) external initializer {

```


*GitHub* : [130](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L130-L146)

```solidity
522: 
523:         ICultureIndex.ArtPiece memory piece = getTopVotedPiece(); // <= FOUND 'ICultureIndex.'

```


*GitHub* : [522](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L522-L523)

```solidity
385:                         ICultureIndex.CreatorBps memory creator = verbs.getArtPieceById(_auction.verbId).creators[i]; // <= FOUND 'ICultureIndex.'

```


*GitHub* : [385](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L385-L385)

```solidity
66: 
68:     mapping(uint256 => ICultureIndex.ArtPiece) public artPieces; // <= FOUND 'ICultureIndex.'

```


*GitHub* : [66](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L66-L68)

```solidity
273: 
279:     function getArtPieceById(uint256 verbId) public view returns (ICultureIndex.ArtPiece memory) { // <= FOUND 'ICultureIndex.'

```


*GitHub* : [273](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L273-L279)

```solidity
282:         ICultureIndex.ArtPiece memory artPiece = cultureIndex.getTopVotedPiece(); // <= FOUND 'ICultureIndex.'

```


*GitHub* : [282](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L282-L282)

```solidity
292: 
293:         
294:         try cultureIndex.dropTopVotedPiece() returns (ICultureIndex.ArtPiece memory _artPiece) { // <= FOUND 'ICultureIndex.'

```


*GitHub* : [292](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L292-L294)

```solidity
296: 
297:             ICultureIndex.ArtPiece storage newPiece = artPieces[verbId]; // <= FOUND 'ICultureIndex.'

```


*GitHub* : [296](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L296-L297)

```solidity
401:                         vrgdaReceivers,
402:                         vrgdaSplits,
403:                         IERC20TokenEmitter.ProtocolRewardAddresses({ // <= FOUND 'IERC20TokenEmitter.'

```


*GitHub* : [401](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L401-L403)

```solidity
78: 
80:     IAuctionHouse.Auction public auction; // <= FOUND 'IAuctionHouse.'

```


*GitHub* : [78](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L78-L80)

```solidity
172:         IAuctionHouse.Auction memory _auction = auction; // <= FOUND 'IAuctionHouse.'

```


*GitHub* : [172](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L172-L172)
### [N-91]<a name="n-91"></a> package.json name variable should only consist of lowercase letters and underscores

*There are 1 instance(s) of this issue:*

```solidity
1: {
2:   "name": "@collectivexyz/revolution", // <= FOUND
3:   "version": "0.0.0",
4:   "scripts": {
5:     "build": "turbo run build",
6:     "test": "turbo run test",
7:     "dev": "turbo run dev",
8:     "lint": "turbo run lint",
9:     "format": "turbo run format",
10:     "clean": "turbo run clean",
11:     "update-version": "changeset version && turbo run update-contract-version",
12:     "release": "turbo run build && changeset publish"
13:   },
14:   "devDependencies": {
15:     "prettier": "2.8.8",
16:     "prettier-plugin-solidity": "1.1.3",
17:     "solhint": "3.4.1",
18:     "turbo": "latest",
19:     "@changesets/cli": "^2.27.1"
20:   },
21:   "packageManager": "pnpm@8.9.2",
22:   "workspaces": {
23:     "packages": [
24:       "packages/*"
25:     ],
26:     "nohoist": [
27:       "**/@openzeppelin/**",
28:       "**/ds-test",
29:       "**/forge-std",
30:       "**/solmate"
31:     ]
32:   },
33:   "bugs": {
34:     "url": "https://github.com/collectivexyz/revolution-protocol/issues"
35:   },
36:   "repository": {
37:     "type": "git",
38:     "url": "git+https://github.com/collectivexyz/revolution-protocol.git"
39:   }
40: }
41: 

```


*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/package.json#L1-L2)
### [N-92]<a name="n-92"></a> package.json version should start at 0.1.0 or 1.0.0 not 0.0.1 or 0.0.0

*There are 1 instance(s) of this issue:*

```solidity
1: {
2:   "name": "@collectivexyz/revolution",
3:   "version": "0.0.0", // <= FOUND
4:   "scripts": {
5:     "build": "turbo run build",
6:     "test": "turbo run test",
7:     "dev": "turbo run dev",
8:     "lint": "turbo run lint",
9:     "format": "turbo run format",
10:     "clean": "turbo run clean",
11:     "update-version": "changeset version && turbo run update-contract-version",
12:     "release": "turbo run build && changeset publish"
13:   },
14:   "devDependencies": {
15:     "prettier": "2.8.8",
16:     "prettier-plugin-solidity": "1.1.3",
17:     "solhint": "3.4.1",
18:     "turbo": "latest",
19:     "@changesets/cli": "^2.27.1"
20:   },
21:   "packageManager": "pnpm@8.9.2",
22:   "workspaces": {
23:     "packages": [
24:       "packages/*"
25:     ],
26:     "nohoist": [
27:       "**/@openzeppelin/**",
28:       "**/ds-test",
29:       "**/forge-std",
30:       "**/solmate"
31:     ]
32:   },
33:   "bugs": {
34:     "url": "https://github.com/collectivexyz/revolution-protocol/issues"
35:   },
36:   "repository": {
37:     "type": "git",
38:     "url": "git+https://github.com/collectivexyz/revolution-protocol.git"
39:   }
40: }
41: 

```


*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/package.json#L1-L3)
### [N-93]<a name="n-93"></a> Try catch statement without human readable error
In Solidity, the `try-catch` statement is used for handling exceptions in external function calls and contract creation. However, when a `try-catch` block doesn't include a catch for specific human-readable errors (using `catch Error(string memory reason)`), it can miss catching exceptions that provide explanatory error messages. This lack of detailed error handling could hinder debugging and obscure the reasons behind transaction failures. To address this, it's recommended to include a catch block specifically for `Error` to capture and handle these descriptive error messages effectively. This practice enhances the contract's robustness by providing clearer insights into why certain operations fail, thereby improving maintainability and troubleshooting.

*There are 1 instance(s) of this issue:*

```solidity
327:         } catch { // <= FOUND

```


*GitHub* : [327](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L327-L327)
### [N-94]<a name="n-94"></a> Avoid declaring variables with the names of defined functions within the project
Having such variables can create confusion in both developers and in users of the project. Consider renaming these variables to improve code clarity.

*There are 5 instance(s) of this issue:*

```solidity
256: 
263:     function hasVoted(uint256 pieceId, address voter) external view returns (bool) { // <= FOUND

```


*GitHub* : [263](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L263-L263)

```solidity
307: 
315:     function _vote(uint256 pieceId, address voter) internal { // <= FOUND

```


*GitHub* : [315](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L315-L315)

```solidity
461: 
467:     function getVote(uint256 pieceId, address voter) public view returns (Vote memory) { // <= FOUND

```


*GitHub* : [467](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L467-L467)

```solidity
130: 
141:     function initialize(
142:         address _minter, // <= FOUND
143:         address _initialOwner,
144:         address _descriptor,
145:         address _cultureIndex,
146:         IRevolutionBuilder.ERC721TokenParams memory _erc721TokenParams
147:     ) external initializer {

```


*GitHub* : [142](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L142-L142)

```solidity
209: 
214:     function setMinter(address _minter) external override onlyOwner nonReentrant whenMinterNotLocked { // <= FOUND

```


*GitHub* : [214](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L214-L214)
### [N-95]<a name="n-95"></a> Add inline comments for unnamed variables in function declarations
Unnamed variables in function declarations can confuse developers. To enhance clarity, add inline comments next to each unnamed variable. E.g address, -> address /* to */,

*There are 3 instance(s) of this issue:*

```solidity
108:     function transferFrom(address, address, uint256) public virtual override returns (bool)  // <= FOUND

```


*GitHub* : [108](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L108-L108)

```solidity
94:     function transfer(address, uint256) public virtual override returns (bool)  // <= FOUND

```


*GitHub* : [94](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L94-L94)

```solidity
115:     function approve(address, uint256) public virtual override returns (bool)  // <= FOUND

```


*GitHub* : [115](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L115-L115)
### [N-96]<a name="n-96"></a> Public state variables should include natspec comments
State variables in Solidity contracts are essential for defining the state of the contract. Including comments for these variables improves code readability and maintainability by providing context and explaining their purpose. This practice aids future developers or auditors in understanding the code, thus reducing the likelihood of misinterpretation or errors.

*There are 4 instance(s) of this issue:*

```solidity

// Constant for max number of creators
uint256 public constant MAX_NUM_CREATORS = 100; // <= FOUND

```


*GitHub* :

```solidity
67: 
68:     uint256 public size = 0; // <= FOUND
69: 

```


*GitHub* : [67](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L67-L68)

```solidity
21:     uint256 internal constant PURCHASE_REFERRAL_BPS = 50;
22: 
23:     uint256 public constant minPurchaseAmount = 0.0000001 ether; // <= FOUND

```


*GitHub* : [21](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L21-L23)

```solidity
24:     uint256 public constant maxPurchaseAmount = 50_000 ether; // <= FOUND
25: 
26:     address internal immutable revolutionRewardRecipient;

```


*GitHub* : [24](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L24-L24)
### [N-97]<a name="n-97"></a> Public variable declarations should have NatSpec descriptions
Public variable declarations in smart contracts should ideally be accompanied by NatSpec comments to enhance code readability and provide clear documentation. NatSpec (Natural Language Specification) is a standard for writing comments in Ethereum smart contracts that can generate user-friendly documentation, improving the transparency of the contract's functionality. This is particularly crucial for public variables, as they are accessible externally, and understanding their role and impact is vital for both developers and users interacting with the contract

*There are 3 instance(s) of this issue:*

```solidity
16:     int256 public immutable targetPrice; // <= FOUND
17: 
18:     int256 public immutable perTimeUnit; // <= FOUND

```


*GitHub* : [16](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L16-L18)

```solidity
21:     uint256 internal constant PURCHASE_REFERRAL_BPS = 50; // <= FOUND
22: 
23:     uint256 public constant minPurchaseAmount = 0.0000001 ether; // <= FOUND

```


*GitHub* : [21](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L21-L23)

```solidity
24:     uint256 public constant maxPurchaseAmount = 50_000 ether; // <= FOUND
25: 
26:     address internal immutable revolutionRewardRecipient; // <= FOUND

```


*GitHub* : [24](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L24-L26)
### [N-98]<a name="n-98"></a> Incorrect NatSpec Syntax
In Solidity, just like in most other programming languages, regular comments serve to make code more understandable for developers. These are usually denoted by `//` for single line comments, or `/* ... */` for multi-line comments, and are ignored by the compiler.

On the other hand, NatSpec comments in Solidity, denoted by `///` for single-line comments, or `/** ... */` for multi-line comments, serve a different purpose. Besides aiding developer comprehension, they also form a part of the contract's interface, as they can be parsed and used by tools such as automated documentation generators or IDEs to provide users with details about the contract's functions, parameters and behavior. NatSpec comments can also be retrieved via JSON interfaces, and as such, they're included in the contract's ABI. 

Thus, using `///` and `/** ... */` appropriately ensures not only proper documentation for developers, but also helps create a richer and more informative interface for users and external tools interacting with your contract.

*There are 1 instance(s) of this issue:*

```solidity
150: // @wardens if you can find an exploit here go for it - we might be wrong. // <= FOUND

```


*GitHub* : [150](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L150-L150)
### [N-99]<a name="n-99"></a> Use @inheritdoc rather than using a non-standard annotation
The `@inheritdoc` annotation in Solidity is used to copy documentation from the base function to the inheriting function. This makes the code cleaner and avoids redundancy in documentation. On the other hand, using non-standard annotations like `@dev see {file_path}` might not be recognized by documentation tools and could lead to confusion or incomplete documentation. By using `@inheritdoc`, you adhere to standard practices, ensuring that the documentation is correctly processed and that the inherited behavior is clearly and accurately represented in development tools that understand this standard notation.

*There are 1 instance(s) of this issue:*

```solidity
189: /**
190:      * @notice A distinct Uniform Resource Identifier (URI) for a given asset.
191:      * @dev See {IERC721Metadata-tokenURI}. // <= FOUND
192:      */

```


*GitHub* : [189](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L189-L191)
### [N-100]<a name="n-100"></a> Functions utilizing the nonReentrant modifier should have @dev comments explaining why
The `nonReentrant` modifier is used to prevent recursive calls or reentrancy attacks in smart contracts, which could exploit functions' unintended behaviors. When a function uses this modifier, it's crucial for the developer to include `@dev` comments to explain the rationale behind its application. Such documentation not only helps others understand potential vulnerabilities being mitigated but also ensures that the `nonReentrant` use is valid and not overly defensive. Clearly commented reasoning aids future developers and auditors in understanding the contract's logic, ensuring the contract's safety and promoting best development practices.

*There are 6 instance(s) of this issue:*

```solidity
367:     function voteForManyWithSig(
368:         address from,
369:         uint256[] calldata pieceIds,
370:         uint256 deadline,
371:         uint8 v,
372:         bytes32 r,
373:         bytes32 s
374:     ) external nonReentrant {
375:         bool success = _verifyVoteSignature(from, pieceIds, deadline, v, r, s);
376: 
377:         if (!success) revert INVALID_SIGNATURE();
378: 
379:         _voteForMany(pieceIds, from);
380:     }

```


*GitHub* : [367](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L367-L367)

```solidity
389:     function batchVoteForManyWithSig(
390:         address[] memory from,
391:         uint256[][] calldata pieceIds,
392:         uint256[] memory deadline,
393:         uint8[] memory v,
394:         bytes32[] memory r,
395:         bytes32[] memory s
396:     ) external nonReentrant {
397:         uint256 len = from.length;
398:         require(
399:             len == pieceIds.length && len == deadline.length && len == v.length && len == r.length && len == s.length,
400:             "Array lengths must match"
401:         );
402: 
403:         for (uint256 i; i < len; i++) {
404:             if (!_verifyVoteSignature(from[i], pieceIds[i], deadline[i], v[i], r[i], s[i])) revert INVALID_SIGNATURE();
405:         }
406: 
407:         for (uint256 i; i < len; i++) {
408:             _voteForMany(pieceIds[i], from[i]);
409:         }
410:     }

```


*GitHub* : [389](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L389-L389)

```solidity
519:     function dropTopVotedPiece() public nonReentrant returns (ArtPiece memory) {
520:         require(msg.sender == dropperAdmin, "Only dropper can drop pieces");
521: 
522:         ICultureIndex.ArtPiece memory piece = getTopVotedPiece();
523:         require(totalVoteWeights[piece.pieceId] >= piece.quorumVotes, "Does not meet quorum votes to be dropped.");
524: 
525:         
526:         pieces[piece.pieceId].isDropped = true;
527: 
528:         
529:         maxHeap.extractMax();
530: 
531:         emit PieceDropped(piece.pieceId, msg.sender);
532: 
533:         return pieces[piece.pieceId];
534:     }

```


*GitHub* : [519](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L519-L519)

```solidity
152:     function buyToken(
153:         address[] calldata addresses,
154:         uint[] calldata basisPointSplits,
155:         ProtocolRewardAddresses calldata protocolRewardsRecipients
156:     ) public payable nonReentrant whenNotPaused returns (uint256 tokensSoldWad) {
157:         
158:         require(msg.sender != treasury && msg.sender != creatorsAddress, "Funds recipient cannot buy tokens");
159: 
160:         require(msg.value > 0, "Must send ether");
161:         
162:         require(addresses.length == basisPointSplits.length, "Parallel arrays required");
163: 
164:         
165:         uint256 msgValueRemaining = _handleRewardsAndGetValueToSend(
166:             msg.value,
167:             protocolRewardsRecipients.builder,
168:             protocolRewardsRecipients.purchaseReferral,
169:             protocolRewardsRecipients.deployer
170:         );
171: 
172:         
173:         uint256 toPayTreasury = (msgValueRemaining * (10_000 - creatorRateBps)) / 10_000;
174: 
175:         
176:         
177:         uint256 creatorDirectPayment = ((msgValueRemaining - toPayTreasury) * entropyRateBps) / 10_000;
178:         
179:         int totalTokensForCreators = ((msgValueRemaining - toPayTreasury) - creatorDirectPayment) > 0
180:             ? getTokenQuoteForEther((msgValueRemaining - toPayTreasury) - creatorDirectPayment)
181:             : int(0);
182: 
183:         
184:         int totalTokensForBuyers = toPayTreasury > 0 ? getTokenQuoteForEther(toPayTreasury) : int(0);
185: 
186:         
187:         emittedTokenWad += totalTokensForBuyers;
188:         if (totalTokensForCreators > 0) emittedTokenWad += totalTokensForCreators;
189: 
190:         
191:         (bool success, ) = treasury.call{ value: toPayTreasury }(new bytes(0));
192:         require(success, "Transfer failed.");
193: 
194:         
195:         if (creatorDirectPayment > 0) {
196:             (success, ) = creatorsAddress.call{ value: creatorDirectPayment }(new bytes(0));
197:             require(success, "Transfer failed.");
198:         }
199: 
200:         
201:         if (totalTokensForCreators > 0 && creatorsAddress != address(0)) {
202:             _mint(creatorsAddress, uint256(totalTokensForCreators));
203:         }
204: 
205:         uint256 bpsSum = 0;
206: 
207:         
208: 
209:         for (uint256 i = 0; i < addresses.length; i++) {
210:             if (totalTokensForBuyers > 0) {
211:                 
212:                 _mint(addresses[i], uint256((totalTokensForBuyers * int(basisPointSplits[i])) / 10_000));
213:             }
214:             bpsSum += basisPointSplits[i];
215:         }
216: 
217:         require(bpsSum == 10_000, "bps must add up to 10_000");
218: 
219:         emit PurchaseFinalized(
220:             msg.sender,
221:             msg.value,
222:             toPayTreasury,
223:             msg.value - msgValueRemaining,
224:             uint256(totalTokensForBuyers),
225:             uint256(totalTokensForCreators),
226:             creatorDirectPayment
227:         );
228: 
229:         return uint256(totalTokensForBuyers);
230:     }

```


*GitHub* : [152](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L152-L152)

```solidity
152:     function settleCurrentAndCreateNewAuction() external override nonReentrant whenNotPaused {
153:         _settleAuction();
154:         _createAuction();
155:     }

```


*GitHub* : [152](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L152-L152)

```solidity
184:     function burn(uint256 verbId) public override onlyMinter nonReentrant {
185:         _burn(verbId);
186:         emit VerbBurned(verbId);
187:     }

```


*GitHub* : [184](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L184-L184)
### [N-101]<a name="n-101"></a> No @inheritdoc on override functions
In Solidity, using `@inheritdoc` on overridden functions is crucial for maintaining comprehensive and understandable NatSpec documentation. It ensures that when a function overrides an external interface or contract function, the original documentation is preserved. This not only helps developers understand the purpose and usage of the function but also aids in keeping documentation consistent and accurate across different versions of the codebase. Neglecting to use `@inheritdoc` can lead to incomplete or confusing documentation, making code maintenance and usage more challenging.

*There are 31 instance(s) of this issue:*

```solidity
452:     function _authorizeUpgrade(address _newImpl) internal view override onlyOwner  // <= FOUND

```


*GitHub* : [452](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L452-L452)

```solidity
265:     function getVotes(address account) external view override returns (uint256)  // <= FOUND

```


*GitHub* : [265](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L265-L265)

```solidity
274:     function getPastVotes(address account, uint256 blockNumber) external view override returns (uint256)  // <= FOUND

```


*GitHub* : [274](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L274-L274)

```solidity
87:     function decimals() public view virtual override returns (uint8)  // <= FOUND

```


*GitHub* : [87](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L87-L87)

```solidity
94:     function transfer(address, uint256) public virtual override returns (bool)  // <= FOUND

```


*GitHub* : [94](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L94-L94)

```solidity
101:     function _transfer(address from, address to, uint256 value) internal override  // <= FOUND

```


*GitHub* : [101](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L101-L101)

```solidity
108:     function transferFrom(address, address, uint256) public virtual override returns (bool)  // <= FOUND

```


*GitHub* : [108](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L108-L108)

```solidity
115:     function approve(address, uint256) public virtual override returns (bool)  // <= FOUND

```


*GitHub* : [115](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L115-L115)

```solidity
127:     function _mint(address account, uint256 value) internal override  // <= FOUND

```


*GitHub* : [127](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L127-L127)

```solidity
141:     function _approve(address owner, address spender, uint256 value) internal override  // <= FOUND

```


*GitHub* : [141](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L141-L141)

```solidity
148:     function _approve(address owner, address spender, uint256 value, bool emitEvent) internal virtual override  // <= FOUND

```


*GitHub* : [148](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L148-L148)

```solidity
155:     function _spendAllowance(address owner, address spender, uint256 value) internal virtual override  // <= FOUND

```


*GitHub* : [155](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L155-L155)

```solidity
208:     function pause() external override onlyOwner  // <= FOUND

```


*GitHub* : [208](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L208-L208)

```solidity
265:     function unpause() external override onlyOwner  // <= FOUND

```


*GitHub* : [265](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L265-L265)

```solidity
309:     function setCreatorsAddress(address _creatorsAddress) external override onlyOwner nonReentrant  // <= FOUND

```


*GitHub* : [309](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L309-L309)

```solidity
152:     function settleCurrentAndCreateNewAuction() external override nonReentrant whenNotPaused  // <= FOUND

```


*GitHub* : [152](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L152-L152)

```solidity
161:     function settleAuction() external override whenPaused nonReentrant  // <= FOUND

```


*GitHub* : [161](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L161-L161)

```solidity
171:     function createBid(uint256 verbId, address bidder) external payable override nonReentrant  // <= FOUND

```


*GitHub* : [171](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L171-L171)

```solidity
277:     function setTimeBuffer(uint256 _timeBuffer) external override onlyOwner  // <= FOUND

```


*GitHub* : [277](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L277-L277)

```solidity
287:     function setReservePrice(uint256 _reservePrice) external override onlyOwner  // <= FOUND

```


*GitHub* : [287](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L287-L287)

```solidity
297:     function setMinBidIncrementPercentage(uint8 _minBidIncrementPercentage) external override onlyOwner  // <= FOUND

```


*GitHub* : [297](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L297-L297)

```solidity
452:     function _authorizeUpgrade(address _newImpl) internal view override onlyOwner whenPaused  // <= FOUND

```


*GitHub* : [452](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L452-L452)

```solidity
177:     function mint() public override onlyMinter nonReentrant returns (uint256)  // <= FOUND

```


*GitHub* : [177](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L177-L177)

```solidity
184:     function burn(uint256 verbId) public override onlyMinter nonReentrant  // <= FOUND

```


*GitHub* : [184](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L184-L184)

```solidity
193:     function tokenURI(uint256 tokenId) public view override returns (string memory)  // <= FOUND

```


*GitHub* : [193](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L193-L193)

```solidity
201:     function dataURI(uint256 tokenId) public view override returns (string memory)  // <= FOUND

```


*GitHub* : [201](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L201-L201)

```solidity
209:     function setMinter(address _minter) external override onlyOwner nonReentrant whenMinterNotLocked  // <= FOUND

```


*GitHub* : [209](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L209-L209)

```solidity
220:     function lockMinter() external override onlyOwner whenMinterNotLocked  // <= FOUND

```


*GitHub* : [220](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L220-L220)

```solidity
230:     function setDescriptor(
231:         IDescriptorMinimal _descriptor
232:     ) external override onlyOwner nonReentrant whenDescriptorNotLocked  // <= FOUND

```


*GitHub* : [230](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L230-L232)

```solidity
242:     function lockDescriptor() external override onlyOwner whenDescriptorNotLocked  // <= FOUND

```


*GitHub* : [242](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L242-L242)

```solidity
262:     function lockCultureIndex() external override onlyOwner whenCultureIndexNotLocked  // <= FOUND

```


*GitHub* : [262](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L262-L262)
### [N-102]<a name="n-102"></a> Natspec @author is missing from contract

*There are 5 instance(s) of this issue:*

```solidity
20: contract CultureIndex is
21:     ICultureIndex,
22:     VersionedContract,
23:     UUPS,
24:     Ownable2StepUpgradeable,
25:     ReentrancyGuardUpgradeable,
26:     EIP712Upgradeable
27: 

```


*GitHub* : [20](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L20-L20)

```solidity
29: contract NontransferableERC20Votes is Initializable, ERC20VotesUpgradeable, Ownable2StepUpgradeable 

```


*GitHub* : [29](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L29-L29)

```solidity
17: contract ERC20TokenEmitter is
18:     IERC20TokenEmitter,
19:     ReentrancyGuardUpgradeable,
20:     TokenEmitterRewards,
21:     Ownable2StepUpgradeable,
22:     PausableUpgradeable
23: 

```


*GitHub* : [17](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L17-L17)

```solidity
39: contract AuctionHouse is
40:     IAuctionHouse,
41:     VersionedContract,
42:     UUPS,
43:     PausableUpgradeable,
44:     ReentrancyGuardUpgradeable,
45:     Ownable2StepUpgradeable
46: 

```


*GitHub* : [39](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L39-L39)

```solidity
33: contract VerbsToken is
34:     IVerbsToken,
35:     VersionedContract,
36:     UUPS,
37:     Ownable2StepUpgradeable,
38:     ReentrancyGuardUpgradeable,
39:     ERC721CheckpointableUpgradeable
40: 

```


*GitHub* : [33](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L33-L33)
### [N-103]<a name="n-103"></a> Natspec comments is missing from contract

*There are 5 instance(s) of this issue:*

```solidity
20: contract CultureIndex is
21:     ICultureIndex,
22:     VersionedContract,
23:     UUPS,
24:     Ownable2StepUpgradeable,
25:     ReentrancyGuardUpgradeable,
26:     EIP712Upgradeable
27: 

```


*GitHub* : [20](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L20-L20)

```solidity
29: contract NontransferableERC20Votes is Initializable, ERC20VotesUpgradeable, Ownable2StepUpgradeable 

```


*GitHub* : [29](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L29-L29)

```solidity
17: contract ERC20TokenEmitter is
18:     IERC20TokenEmitter,
19:     ReentrancyGuardUpgradeable,
20:     TokenEmitterRewards,
21:     Ownable2StepUpgradeable,
22:     PausableUpgradeable
23: 

```


*GitHub* : [17](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L17-L17)

```solidity
39: contract AuctionHouse is
40:     IAuctionHouse,
41:     VersionedContract,
42:     UUPS,
43:     PausableUpgradeable,
44:     ReentrancyGuardUpgradeable,
45:     Ownable2StepUpgradeable
46: 

```


*GitHub* : [39](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L39-L39)

```solidity
33: contract VerbsToken is
34:     IVerbsToken,
35:     VersionedContract,
36:     UUPS,
37:     Ownable2StepUpgradeable,
38:     ReentrancyGuardUpgradeable,
39:     ERC721CheckpointableUpgradeable
40: 

```


*GitHub* : [33](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L33-L33)
### [N-104]<a name="n-104"></a> Natspec @notice is missing from contract

*There are 6 instance(s) of this issue:*

```solidity
14: contract MaxHeap is VersionedContract, UUPS, Ownable2StepUpgradeable, ReentrancyGuardUpgradeable 

```


*GitHub* : [14](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L14-L14)

```solidity
20: contract CultureIndex is
21:     ICultureIndex,
22:     VersionedContract,
23:     UUPS,
24:     Ownable2StepUpgradeable,
25:     ReentrancyGuardUpgradeable,
26:     EIP712Upgradeable
27: 

```


*GitHub* : [20](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L20-L20)

```solidity
29: contract NontransferableERC20Votes is Initializable, ERC20VotesUpgradeable, Ownable2StepUpgradeable 

```


*GitHub* : [29](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L29-L29)

```solidity
17: contract ERC20TokenEmitter is
18:     IERC20TokenEmitter,
19:     ReentrancyGuardUpgradeable,
20:     TokenEmitterRewards,
21:     Ownable2StepUpgradeable,
22:     PausableUpgradeable
23: 

```


*GitHub* : [17](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L17-L17)

```solidity
39: contract AuctionHouse is
40:     IAuctionHouse,
41:     VersionedContract,
42:     UUPS,
43:     PausableUpgradeable,
44:     ReentrancyGuardUpgradeable,
45:     Ownable2StepUpgradeable
46: 

```


*GitHub* : [39](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L39-L39)

```solidity
33: contract VerbsToken is
34:     IVerbsToken,
35:     VersionedContract,
36:     UUPS,
37:     Ownable2StepUpgradeable,
38:     ReentrancyGuardUpgradeable,
39:     ERC721CheckpointableUpgradeable
40: 

```


*GitHub* : [33](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L33-L33)
### [N-105]<a name="n-105"></a> Natspec @dev is missing from contract

*There are 6 instance(s) of this issue:*

```solidity
20: contract CultureIndex is
21:     ICultureIndex,
22:     VersionedContract,
23:     UUPS,
24:     Ownable2StepUpgradeable,
25:     ReentrancyGuardUpgradeable,
26:     EIP712Upgradeable
27: 

```


*GitHub* : [20](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L20-L20)

```solidity
29: contract NontransferableERC20Votes is Initializable, ERC20VotesUpgradeable, Ownable2StepUpgradeable 

```


*GitHub* : [29](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L29-L29)

```solidity
17: contract ERC20TokenEmitter is
18:     IERC20TokenEmitter,
19:     ReentrancyGuardUpgradeable,
20:     TokenEmitterRewards,
21:     Ownable2StepUpgradeable,
22:     PausableUpgradeable
23: 

```


*GitHub* : [17](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L17-L17)

```solidity
39: contract AuctionHouse is
40:     IAuctionHouse,
41:     VersionedContract,
42:     UUPS,
43:     PausableUpgradeable,
44:     ReentrancyGuardUpgradeable,
45:     Ownable2StepUpgradeable
46: 

```


*GitHub* : [39](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L39-L39)

```solidity
33: contract VerbsToken is
34:     IVerbsToken,
35:     VersionedContract,
36:     UUPS,
37:     Ownable2StepUpgradeable,
38:     ReentrancyGuardUpgradeable,
39:     ERC721CheckpointableUpgradeable
40: 

```


*GitHub* : [33](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L33-L33)

```solidity
11: contract VRGDAC 

```


*GitHub* : [11](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L11-L11)
### [N-106]<a name="n-106"></a> Natspec @title is missing from contract

*There are 5 instance(s) of this issue:*

```solidity
20: contract CultureIndex is
21:     ICultureIndex,
22:     VersionedContract,
23:     UUPS,
24:     Ownable2StepUpgradeable,
25:     ReentrancyGuardUpgradeable,
26:     EIP712Upgradeable
27: 

```


*GitHub* : [20](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L20-L20)

```solidity
29: contract NontransferableERC20Votes is Initializable, ERC20VotesUpgradeable, Ownable2StepUpgradeable 

```


*GitHub* : [29](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L29-L29)

```solidity
17: contract ERC20TokenEmitter is
18:     IERC20TokenEmitter,
19:     ReentrancyGuardUpgradeable,
20:     TokenEmitterRewards,
21:     Ownable2StepUpgradeable,
22:     PausableUpgradeable
23: 

```


*GitHub* : [17](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L17-L17)

```solidity
39: contract AuctionHouse is
40:     IAuctionHouse,
41:     VersionedContract,
42:     UUPS,
43:     PausableUpgradeable,
44:     ReentrancyGuardUpgradeable,
45:     Ownable2StepUpgradeable
46: 

```


*GitHub* : [39](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L39-L39)

```solidity
33: contract VerbsToken is
34:     IVerbsToken,
35:     VersionedContract,
36:     UUPS,
37:     Ownable2StepUpgradeable,
38:     ReentrancyGuardUpgradeable,
39:     ERC721CheckpointableUpgradeable
40: 

```


*GitHub* : [33](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L33-L33)
### [N-107]<a name="n-107"></a> Natspec @author is missing from abstract

*There are 2 instance(s) of this issue:*

```solidity
6: abstract contract TokenEmitterRewards is RewardSplits 

```


*GitHub* : [6](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/TokenEmitter/TokenEmitterRewards.sol#L6-L6)

```solidity
14: abstract contract RewardSplits 

```


*GitHub* : [14](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L14-L14)
### [N-108]<a name="n-108"></a> Natspec @title is missing from abstract

*There are 2 instance(s) of this issue:*

```solidity
6: abstract contract TokenEmitterRewards is RewardSplits 

```


*GitHub* : [6](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/TokenEmitter/TokenEmitterRewards.sol#L6-L6)

```solidity
14: abstract contract RewardSplits 

```


*GitHub* : [14](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L14-L14)
### [N-109]<a name="n-109"></a> Natspec @dev is missing from abstract

*There are 2 instance(s) of this issue:*

```solidity
6: abstract contract TokenEmitterRewards is RewardSplits 

```


*GitHub* : [6](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/TokenEmitter/TokenEmitterRewards.sol#L6-L6)

```solidity
14: abstract contract RewardSplits 

```


*GitHub* : [14](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L14-L14)
### [N-110]<a name="n-110"></a> Natspec @notice is missing from abstract

*There are 1 instance(s) of this issue:*

```solidity
6: abstract contract TokenEmitterRewards is RewardSplits 

```


*GitHub* : [6](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/TokenEmitter/TokenEmitterRewards.sol#L6-L6)
### [N-111]<a name="n-111"></a> Natspec comments is missing from abstract

*There are 1 instance(s) of this issue:*

```solidity
6: abstract contract TokenEmitterRewards is RewardSplits 

```


*GitHub* : [6](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/TokenEmitter/TokenEmitterRewards.sol#L6-L6)
### [N-112]<a name="n-112"></a> Error declarations should have NatSpec descriptions

*There are 1 instance(s) of this issue:*

```solidity
27: 
28: import { IRevolutionBuilder } from "./interfaces/IRevolutionBuilder.sol";
29: 
30: contract NontransferableERC20Votes is Initializable, ERC20VotesUpgradeable, Ownable2StepUpgradeable {
31:     error TRANSFER_NOT_ALLOWED(); // <= FOUND

```


*GitHub* : [27](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L27-L31)
### [N-113]<a name="n-113"></a> Error declarations should have @dev NatSpec comments

*There are 1 instance(s) of this issue:*

```solidity
27: 
28: import { IRevolutionBuilder } from "./interfaces/IRevolutionBuilder.sol";
29: 
30: contract NontransferableERC20Votes is Initializable, ERC20VotesUpgradeable, Ownable2StepUpgradeable {
31:     error TRANSFER_NOT_ALLOWED(); // <= FOUND

```


*GitHub* : [27](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L27-L31)
### [N-114]<a name="n-114"></a> Error declarations should have @notice NatSpec comments

*There are 1 instance(s) of this issue:*

```solidity
27: 
28: import { IRevolutionBuilder } from "./interfaces/IRevolutionBuilder.sol";
29: 
30: contract NontransferableERC20Votes is Initializable, ERC20VotesUpgradeable, Ownable2StepUpgradeable {
31:     error TRANSFER_NOT_ALLOWED(); // <= FOUND

```


*GitHub* : [27](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L27-L31)
### [N-115]<a name="n-115"></a> Natspec @dev comments are missing from modifier

*There are 5 instance(s) of this issue:*

```solidity
41:     modifier onlyAdmin() 

```


*GitHub* : [41](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L41-L41)

```solidity
75:     modifier whenMinterNotLocked() 

```


*GitHub* : [75](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L75-L75)

```solidity
83:     modifier whenCultureIndexNotLocked() 

```


*GitHub* : [83](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L83-L83)

```solidity
91:     modifier whenDescriptorNotLocked() 

```


*GitHub* : [91](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L91-L91)

```solidity
99:     modifier onlyMinter() 

```


*GitHub* : [99](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L99-L99)
### [N-116]<a name="n-116"></a> Natspec comments are missing from struct

*There are 1 instance(s) of this issue:*

```solidity
6: struct RewardsSettings {
7:     uint256 builderReferralReward;
8:     uint256 purchaseReferralReward;
9:     uint256 deployerReward;
10:     uint256 revolutionReward;
11: }

```


*GitHub* : [6](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L6-L6)
### [N-117]<a name="n-117"></a> Natspec @params comments are missing from struct

*There are 1 instance(s) of this issue:*

```solidity
6: struct RewardsSettings {
7:     uint256 builderReferralReward;
8:     uint256 purchaseReferralReward;
9:     uint256 deployerReward;
10:     uint256 revolutionReward;
11: }

```


*GitHub* : [6](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L6-L6)
### [N-118]<a name="n-118"></a> Natspec @dev comments are missing from struct

*There are 1 instance(s) of this issue:*

```solidity
6: struct RewardsSettings {
7:     uint256 builderReferralReward;
8:     uint256 purchaseReferralReward;
9:     uint256 deployerReward;
10:     uint256 revolutionReward;
11: }

```


*GitHub* : [6](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L6-L6)
### [N-119]<a name="n-119"></a> Natspec @notice comments are missing from struct

*There are 1 instance(s) of this issue:*

```solidity
6: struct RewardsSettings {
7:     uint256 builderReferralReward;
8:     uint256 purchaseReferralReward;
9:     uint256 deployerReward;
10:     uint256 revolutionReward;
11: }

```


*GitHub* : [6](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L6-L6)
### [N-120]<a name="n-120"></a> Natspec comments are missing from function

*There are 14 instance(s) of this issue:*

```solidity
288:     function _getVotes(address account) internal view returns (uint256) 

```


*GitHub* : [288](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L288-L288)

```solidity
292:     function _getPastVotes(address account, uint256 blockNumber) internal view returns (uint256) 

```


*GitHub* : [292](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L292-L292)

```solidity
52:     function __NontransferableERC20Votes_init(
53:         address _initialOwner,
54:         string calldata _name,
55:         string calldata _symbol
56:     ) internal onlyInitializing 

```


*GitHub* : [52](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L52-L52)

```solidity
134:     function mint(address account, uint256 amount) public onlyOwner 

```


*GitHub* : [134](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L134-L134)

```solidity
108:     function _mint(address _to, uint256 _amount) private 

```


*GitHub* : [108](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L108-L108)

```solidity
112:     function totalSupply() public view returns (uint) 

```


*GitHub* : [112](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L112-L112)

```solidity
117:     function decimals() public view returns (uint8) 

```


*GitHub* : [117](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L117-L117)

```solidity
122:     function balanceOf(address _owner) public view returns (uint) 

```


*GitHub* : [122](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L122-L122)

```solidity
47:     function xToY(int256 timeSinceStart, int256 sold, int256 amount) public view virtual returns (int256) 

```


*GitHub* : [47](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L47-L47)

```solidity
54:     function yToX(int256 timeSinceStart, int256 sold, int256 amount) public view virtual returns (int256) 

```


*GitHub* : [54](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L54-L54)

```solidity
86:     function pIntegral(int256 timeSinceStart, int256 sold) internal view returns (int256) 

```


*GitHub* : [86](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L86-L86)

```solidity
12:     function _handleRewardsAndGetValueToSend(
13:         uint256 msgValue,
14:         address builderReferral,
15:         address purchaseReferral,
16:         address deployer
17:     ) internal returns (uint256) 

```


*GitHub* : [12](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/TokenEmitter/TokenEmitterRewards.sol#L12-L12)

```solidity
53:     function computePurchaseRewards(uint256 paymentAmountWei) public pure returns (RewardsSettings memory, uint256) 

```


*GitHub* : [53](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L53-L53)

```solidity
65:     function _depositPurchaseRewards(
66:         uint256 paymentAmountWei,
67:         address builderReferral,
68:         address purchaseReferral,
69:         address deployer
70:     ) internal returns (uint256) 

```


*GitHub* : [65](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L65-L65)
### [N-121]<a name="n-121"></a> Natspec @params comments are missing from function

*There are 32 instance(s) of this issue:*

```solidity
288:     function _getVotes(address account) internal view returns (uint256) 

```


*GitHub* : [288](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L288-L288)

```solidity
292:     function _getPastVotes(address account, uint256 blockNumber) internal view returns (uint256) 

```


*GitHub* : [292](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L292-L292)

```solidity
52:     function __NontransferableERC20Votes_init(
53:         address _initialOwner,
54:         string calldata _name,
55:         string calldata _symbol
56:     ) internal onlyInitializing 

```


*GitHub* : [52](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L52-L52)

```solidity
94:     function transfer(address, uint256) public virtual override returns (bool) 

```


*GitHub* : [94](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L94-L94)

```solidity
101:     function _transfer(address from, address to, uint256 value) internal override 

```


*GitHub* : [101](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L101-L101)

```solidity
108:     function transferFrom(address, address, uint256) public virtual override returns (bool) 

```


*GitHub* : [108](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L108-L108)

```solidity
115:     function approve(address, uint256) public virtual override returns (bool) 

```


*GitHub* : [115](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L115-L115)

```solidity
127:     function _mint(address account, uint256 value) internal override 

```


*GitHub* : [127](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L127-L127)

```solidity
134:     function mint(address account, uint256 amount) public onlyOwner 

```


*GitHub* : [134](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L134-L134)

```solidity
141:     function _approve(address owner, address spender, uint256 value) internal override 

```


*GitHub* : [141](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L141-L141)

```solidity
148:     function _approve(address owner, address spender, uint256 value, bool emitEvent) internal virtual override 

```


*GitHub* : [148](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L148-L148)

```solidity
155:     function _spendAllowance(address owner, address spender, uint256 value) internal virtual override 

```


*GitHub* : [155](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L155-L155)

```solidity
108:     function _mint(address _to, uint256 _amount) private 

```


*GitHub* : [108](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L108-L108)

```solidity
122:     function balanceOf(address _owner) public view returns (uint) 

```


*GitHub* : [122](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L122-L122)

```solidity
309:     function setCreatorsAddress(address _creatorsAddress) external override onlyOwner nonReentrant 

```


*GitHub* : [309](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L309-L309)

```solidity
277:     function setTimeBuffer(uint256 _timeBuffer) external override onlyOwner 

```


*GitHub* : [277](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L277-L277)

```solidity
287:     function setReservePrice(uint256 _reservePrice) external override onlyOwner 

```


*GitHub* : [287](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L287-L287)

```solidity
297:     function setMinBidIncrementPercentage(uint8 _minBidIncrementPercentage) external override onlyOwner 

```


*GitHub* : [297](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L297-L297)

```solidity
169:     function setContractURIHash(string memory newContractURIHash) external onlyOwner 

```


*GitHub* : [169](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L169-L169)

```solidity
184:     function burn(uint256 verbId) public override onlyMinter nonReentrant 

```


*GitHub* : [184](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L184-L184)

```solidity
193:     function tokenURI(uint256 tokenId) public view override returns (string memory) 

```


*GitHub* : [193](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L193-L193)

```solidity
201:     function dataURI(uint256 tokenId) public view override returns (string memory) 

```


*GitHub* : [201](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L201-L201)

```solidity
209:     function setMinter(address _minter) external override onlyOwner nonReentrant whenMinterNotLocked 

```


*GitHub* : [209](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L209-L209)

```solidity
230:     function setDescriptor(
231:         IDescriptorMinimal _descriptor
232:     ) external override onlyOwner nonReentrant whenDescriptorNotLocked 

```


*GitHub* : [230](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L230-L230)

```solidity
252:     function setCultureIndex(ICultureIndex _cultureIndex) external onlyOwner whenCultureIndexNotLocked nonReentrant 

```


*GitHub* : [252](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L252-L252)

```solidity
281:     function _mintTo(address to) internal returns (uint256) 

```


*GitHub* : [281](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L281-L281)

```solidity
47:     function xToY(int256 timeSinceStart, int256 sold, int256 amount) public view virtual returns (int256) 

```


*GitHub* : [47](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L47-L47)

```solidity
54:     function yToX(int256 timeSinceStart, int256 sold, int256 amount) public view virtual returns (int256) 

```


*GitHub* : [54](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L54-L54)

```solidity
86:     function pIntegral(int256 timeSinceStart, int256 sold) internal view returns (int256) 

```


*GitHub* : [86](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L86-L86)

```solidity
12:     function _handleRewardsAndGetValueToSend(
13:         uint256 msgValue,
14:         address builderReferral,
15:         address purchaseReferral,
16:         address deployer
17:     ) internal returns (uint256) 

```


*GitHub* : [12](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/TokenEmitter/TokenEmitterRewards.sol#L12-L12)

```solidity
53:     function computePurchaseRewards(uint256 paymentAmountWei) public pure returns (RewardsSettings memory, uint256) 

```


*GitHub* : [53](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L53-L53)

```solidity
65:     function _depositPurchaseRewards(
66:         uint256 paymentAmountWei,
67:         address builderReferral,
68:         address purchaseReferral,
69:         address deployer
70:     ) internal returns (uint256) 

```


*GitHub* : [65](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L65-L65)
### [N-122]<a name="n-122"></a> Natspec @dev comments are missing from function

*There are 51 instance(s) of this issue:*

```solidity
55:     function initialize(address _initialOwner, address _admin) public initializer 

```


*GitHub* : [55](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L55-L55)

```solidity
78:     function parent(uint256 pos) private pure returns (uint256) 

```


*GitHub* : [78](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L78-L78)

```solidity
86:     function swap(uint256 fpos, uint256 spos) private 

```


*GitHub* : [86](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L86-L86)

```solidity
109:     function initialize(
110:         address _erc20VotingToken,
111:         address _erc721VotingToken,
112:         address _initialOwner,
113:         address _maxHeap,
114:         address _dropperAdmin,
115:         IRevolutionBuilder.CultureIndexParams memory _cultureIndexParams
116:     ) external initializer 

```


*GitHub* : [109](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L109-L109)

```solidity
159:     function validateMediaType(ArtPieceMetadata calldata metadata) internal pure 

```


*GitHub* : [159](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L159-L159)

```solidity
179:     function validateCreatorsArray(CreatorBps[] calldata creatorArray) internal pure returns (uint256) 

```


*GitHub* : [179](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L179-L179)

```solidity
209:     function createPiece(
210:         ArtPieceMetadata calldata metadata,
211:         CreatorBps[] calldata creatorArray
212:     ) public returns (uint256) 

```


*GitHub* : [209](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L209-L209)

```solidity
256:     function hasVoted(uint256 pieceId, address voter) external view returns (bool) 

```


*GitHub* : [256](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L256-L256)

```solidity
265:     function getVotes(address account) external view override returns (uint256) 

```


*GitHub* : [265](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L265-L265)

```solidity
274:     function getPastVotes(address account, uint256 blockNumber) external view override returns (uint256) 

```


*GitHub* : [274](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L274-L274)

```solidity
284:     function _calculateVoteWeight(uint256 erc20Balance, uint256 erc721Balance) internal view returns (uint256) 

```


*GitHub* : [284](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L284-L284)

```solidity
288:     function _getVotes(address account) internal view returns (uint256) 

```


*GitHub* : [288](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L288-L288)

```solidity
292:     function _getPastVotes(address account, uint256 blockNumber) internal view returns (uint256) 

```


*GitHub* : [292](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L292-L292)

```solidity
367:     function voteForManyWithSig(
368:         address from,
369:         uint256[] calldata pieceIds,
370:         uint256 deadline,
371:         uint8 v,
372:         bytes32 r,
373:         bytes32 s
374:     ) external nonReentrant 

```


*GitHub* : [367](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L367-L367)

```solidity
389:     function batchVoteForManyWithSig(
390:         address[] memory from,
391:         uint256[][] calldata pieceIds,
392:         uint256[] memory deadline,
393:         uint8[] memory v,
394:         bytes32[] memory r,
395:         bytes32[] memory s
396:     ) external nonReentrant 

```


*GitHub* : [389](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L389-L389)

```solidity
419:     function _verifyVoteSignature(
420:         address from,
421:         uint256[] calldata pieceIds,
422:         uint256 deadline,
423:         uint8 v,
424:         bytes32 r,
425:         bytes32 s
426:     ) internal returns (bool success) 

```


*GitHub* : [419](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L419-L419)

```solidity
451:     function getPieceById(uint256 pieceId) public view returns (ArtPiece memory) 

```


*GitHub* : [451](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L451-L451)

```solidity
461:     function getVote(uint256 pieceId, address voter) public view returns (Vote memory) 

```


*GitHub* : [461](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L461-L461)

```solidity
470:     function getTopVotedPiece() public view returns (ArtPiece memory) 

```


*GitHub* : [470](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L470-L470)

```solidity
478:     function pieceCount() external view returns (uint256) 

```


*GitHub* : [478](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L478-L478)

```solidity
486:     function topVotedPieceId() public view returns (uint256) 

```


*GitHub* : [486](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L486-L486)

```solidity
509:     function quorumVotes() public view returns (uint256) 

```


*GitHub* : [509](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L509-L509)

```solidity
519:     function dropTopVotedPiece() public nonReentrant returns (ArtPiece memory) 

```


*GitHub* : [519](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L519-L519)

```solidity
52:     function __NontransferableERC20Votes_init(
53:         address _initialOwner,
54:         string calldata _name,
55:         string calldata _symbol
56:     ) internal onlyInitializing 

```


*GitHub* : [52](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L52-L52)

```solidity
65:     function initialize(
66:         address _initialOwner,
67:         IRevolutionBuilder.ERC20TokenParams calldata _erc20TokenParams
68:     ) external initializer 

```


*GitHub* : [65](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L65-L65)

```solidity
134:     function mint(address account, uint256 amount) public onlyOwner 

```


*GitHub* : [134](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L134-L134)

```solidity
84:     function initialize(
85:         address _initialOwner,
86:         address _erc20Token,
87:         address _treasury,
88:         address _vrgdac,
89:         address _creatorsAddress
90:     ) external initializer 

```


*GitHub* : [84](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L84-L84)

```solidity
108:     function _mint(address _to, uint256 _amount) private 

```


*GitHub* : [108](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L108-L108)

```solidity
112:     function totalSupply() public view returns (uint) 

```


*GitHub* : [112](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L112-L112)

```solidity
117:     function decimals() public view returns (uint8) 

```


*GitHub* : [117](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L117-L117)

```solidity
122:     function balanceOf(address _owner) public view returns (uint) 

```


*GitHub* : [122](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L122-L122)

```solidity
152:     function buyToken(
153:         address[] calldata addresses,
154:         uint[] calldata basisPointSplits,
155:         ProtocolRewardAddresses calldata protocolRewardsRecipients
156:     ) public payable nonReentrant whenNotPaused returns (uint256 tokensSoldWad) 

```


*GitHub* : [152](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L152-L152)

```solidity
237:     function buyTokenQuote(uint256 amount) public view returns (int spentY) 

```


*GitHub* : [237](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L237-L237)

```solidity
254:     function getTokenQuoteForEther(uint256 etherAmount) public view returns (int gainedX) 

```


*GitHub* : [254](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L254-L254)

```solidity
271:     function getTokenQuoteForPayment(uint256 paymentAmount) external view returns (int gainedX) 

```


*GitHub* : [271](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L271-L271)

```solidity
152:     function settleCurrentAndCreateNewAuction() external override nonReentrant whenNotPaused 

```


*GitHub* : [152](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L152-L152)

```solidity
419:     function _safeTransferETHWithFallback(address _to, uint256 _amount) private 

```


*GitHub* : [419](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L419-L419)

```solidity
130:     function initialize(
131:         address _minter,
132:         address _initialOwner,
133:         address _descriptor,
134:         address _cultureIndex,
135:         IRevolutionBuilder.ERC721TokenParams memory _erc721TokenParams
136:     ) external initializer 

```


*GitHub* : [130](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L130-L130)

```solidity
161:     function contractURI() public view returns (string memory) 

```


*GitHub* : [161](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L161-L161)

```solidity
184:     function burn(uint256 verbId) public override onlyMinter nonReentrant 

```


*GitHub* : [184](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L184-L184)

```solidity
193:     function tokenURI(uint256 tokenId) public view override returns (string memory) 

```


*GitHub* : [193](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L193-L193)

```solidity
201:     function dataURI(uint256 tokenId) public view override returns (string memory) 

```


*GitHub* : [201](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L201-L201)

```solidity
273:     function getArtPieceById(uint256 verbId) public view returns (ICultureIndex.ArtPiece memory) 

```


*GitHub* : [273](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L273-L273)

```solidity
281:     function _mintTo(address to) internal returns (uint256) 

```


*GitHub* : [281](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L281-L281)

```solidity
47:     function xToY(int256 timeSinceStart, int256 sold, int256 amount) public view virtual returns (int256) 

```


*GitHub* : [47](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L47-L47)

```solidity
54:     function yToX(int256 timeSinceStart, int256 sold, int256 amount) public view virtual returns (int256) 

```


*GitHub* : [54](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L54-L54)

```solidity
86:     function pIntegral(int256 timeSinceStart, int256 sold) internal view returns (int256) 

```


*GitHub* : [86](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L86-L86)

```solidity
12:     function _handleRewardsAndGetValueToSend(
13:         uint256 msgValue,
14:         address builderReferral,
15:         address purchaseReferral,
16:         address deployer
17:     ) internal returns (uint256) 

```


*GitHub* : [12](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/TokenEmitter/TokenEmitterRewards.sol#L12-L12)

```solidity
39:     function computeTotalReward(uint256 paymentAmountWei) public pure returns (uint256) 

```


*GitHub* : [39](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L39-L39)

```solidity
53:     function computePurchaseRewards(uint256 paymentAmountWei) public pure returns (RewardsSettings memory, uint256) 

```


*GitHub* : [53](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L53-L53)

```solidity
65:     function _depositPurchaseRewards(
66:         uint256 paymentAmountWei,
67:         address builderReferral,
68:         address purchaseReferral,
69:         address deployer
70:     ) internal returns (uint256) 

```


*GitHub* : [65](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L65-L65)
### [N-123]<a name="n-123"></a> Natspec @notice comments are missing from function

*There are 24 instance(s) of this issue:*

```solidity
159:     function validateMediaType(ArtPieceMetadata calldata metadata) internal pure 

```


*GitHub* : [159](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L159-L159)

```solidity
288:     function _getVotes(address account) internal view returns (uint256) 

```


*GitHub* : [288](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L288-L288)

```solidity
292:     function _getPastVotes(address account, uint256 blockNumber) internal view returns (uint256) 

```


*GitHub* : [292](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L292-L292)

```solidity
52:     function __NontransferableERC20Votes_init(
53:         address _initialOwner,
54:         string calldata _name,
55:         string calldata _symbol
56:     ) internal onlyInitializing 

```


*GitHub* : [52](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L52-L52)

```solidity
87:     function decimals() public view virtual override returns (uint8) 

```


*GitHub* : [87](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L87-L87)

```solidity
94:     function transfer(address, uint256) public virtual override returns (bool) 

```


*GitHub* : [94](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L94-L94)

```solidity
101:     function _transfer(address from, address to, uint256 value) internal override 

```


*GitHub* : [101](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L101-L101)

```solidity
108:     function transferFrom(address, address, uint256) public virtual override returns (bool) 

```


*GitHub* : [108](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L108-L108)

```solidity
115:     function approve(address, uint256) public virtual override returns (bool) 

```


*GitHub* : [115](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L115-L115)

```solidity
127:     function _mint(address account, uint256 value) internal override 

```


*GitHub* : [127](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L127-L127)

```solidity
134:     function mint(address account, uint256 amount) public onlyOwner 

```


*GitHub* : [134](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L134-L134)

```solidity
141:     function _approve(address owner, address spender, uint256 value) internal override 

```


*GitHub* : [141](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L141-L141)

```solidity
148:     function _approve(address owner, address spender, uint256 value, bool emitEvent) internal virtual override 

```


*GitHub* : [148](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L148-L148)

```solidity
155:     function _spendAllowance(address owner, address spender, uint256 value) internal virtual override 

```


*GitHub* : [155](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L155-L155)

```solidity
108:     function _mint(address _to, uint256 _amount) private 

```


*GitHub* : [108](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L108-L108)

```solidity
112:     function totalSupply() public view returns (uint) 

```


*GitHub* : [112](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L112-L112)

```solidity
117:     function decimals() public view returns (uint8) 

```


*GitHub* : [117](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L117-L117)

```solidity
122:     function balanceOf(address _owner) public view returns (uint) 

```


*GitHub* : [122](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L122-L122)

```solidity
47:     function xToY(int256 timeSinceStart, int256 sold, int256 amount) public view virtual returns (int256) 

```


*GitHub* : [47](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L47-L47)

```solidity
54:     function yToX(int256 timeSinceStart, int256 sold, int256 amount) public view virtual returns (int256) 

```


*GitHub* : [54](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L54-L54)

```solidity
86:     function pIntegral(int256 timeSinceStart, int256 sold) internal view returns (int256) 

```


*GitHub* : [86](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L86-L86)

```solidity
12:     function _handleRewardsAndGetValueToSend(
13:         uint256 msgValue,
14:         address builderReferral,
15:         address purchaseReferral,
16:         address deployer
17:     ) internal returns (uint256) 

```


*GitHub* : [12](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/TokenEmitter/TokenEmitterRewards.sol#L12-L12)

```solidity
53:     function computePurchaseRewards(uint256 paymentAmountWei) public pure returns (RewardsSettings memory, uint256) 

```


*GitHub* : [53](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L53-L53)

```solidity
65:     function _depositPurchaseRewards(
66:         uint256 paymentAmountWei,
67:         address builderReferral,
68:         address purchaseReferral,
69:         address deployer
70:     ) internal returns (uint256) 

```


*GitHub* : [65](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L65-L65)
### [N-124]<a name="n-124"></a> Natspec comments are missing from constructor

*There are 2 instance(s) of this issue:*

```solidity
7:     constructor(
8:         address _protocolRewards,
9:         address _revolutionRewardRecipient
10:     ) payable RewardSplits(_protocolRewards, _revolutionRewardRecipient) 

```


*GitHub* : [7](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/TokenEmitter/TokenEmitterRewards.sol#L7-L7)

```solidity
29:     constructor(address _protocolRewards, address _revolutionRewardRecipient) payable 

```


*GitHub* : [29](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L29-L29)
### [N-125]<a name="n-125"></a> Natspec @dev comments are missing from constructor

*There are 5 instance(s) of this issue:*

```solidity
44:     constructor(address _manager) payable initializer 

```


*GitHub* : [44](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L44-L44)

```solidity
64:     constructor(
65:         address _manager,
66:         address _protocolRewards,
67:         address _protocolFeeRecipient
68:     ) payable TokenEmitterRewards(_protocolRewards, _protocolFeeRecipient) initializer 

```


*GitHub* : [64](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L64-L64)

```solidity
28:     constructor(int256 _targetPrice, int256 _priceDecayPercent, int256 _perTimeUnit) 

```


*GitHub* : [28](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L28-L28)

```solidity
7:     constructor(
8:         address _protocolRewards,
9:         address _revolutionRewardRecipient
10:     ) payable RewardSplits(_protocolRewards, _revolutionRewardRecipient) 

```


*GitHub* : [7](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/TokenEmitter/TokenEmitterRewards.sol#L7-L7)

```solidity
29:     constructor(address _protocolRewards, address _revolutionRewardRecipient) payable 

```


*GitHub* : [29](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L29-L29)
### [N-126]<a name="n-126"></a> Natspec @notice comments are missing from constructor

*There are 4 instance(s) of this issue:*

```solidity
44:     constructor(address _manager) payable initializer 

```


*GitHub* : [44](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L44-L44)

```solidity
64:     constructor(
65:         address _manager,
66:         address _protocolRewards,
67:         address _protocolFeeRecipient
68:     ) payable TokenEmitterRewards(_protocolRewards, _protocolFeeRecipient) initializer 

```


*GitHub* : [64](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L64-L64)

```solidity
7:     constructor(
8:         address _protocolRewards,
9:         address _revolutionRewardRecipient
10:     ) payable RewardSplits(_protocolRewards, _revolutionRewardRecipient) 

```


*GitHub* : [7](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/TokenEmitter/TokenEmitterRewards.sol#L7-L7)

```solidity
29:     constructor(address _protocolRewards, address _revolutionRewardRecipient) payable 

```


*GitHub* : [29](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L29-L29)
### [N-127]<a name="n-127"></a> Natspec @params comments are missing from constructor

*There are 2 instance(s) of this issue:*

```solidity
7:     constructor(
8:         address _protocolRewards,
9:         address _revolutionRewardRecipient
10:     ) payable RewardSplits(_protocolRewards, _revolutionRewardRecipient) 

```


*GitHub* : [7](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/TokenEmitter/TokenEmitterRewards.sol#L7-L7)

```solidity
29:     constructor(address _protocolRewards, address _revolutionRewardRecipient) payable 

```


*GitHub* : [29](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L29-L29)
### [N-128]<a name="n-128"></a> Natspec comments are missing from unchecked blocks

*There are 2 instance(s) of this issue:*

```solidity
48:        unchecked {
49:             return pIntegral(timeSinceStart, sold + amount) - pIntegral(timeSinceStart, sold);
50:         }

```


*GitHub* : [48](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L48-L48)

```solidity
56:         unchecked {
57:             return
58:                 wadMul(
59:                     perTimeUnit,
60:                     wadDiv(
61:                         wadLn(
62:                             wadDiv(
63:                                 wadMul(
64:                                     targetPrice,
65:                                     wadMul(
66:                                         perTimeUnit,
67:                                         wadExp(wadMul(soldDifference, wadDiv(decayConstant, perTimeUnit)))
68:                                     )
69:                                 ),
70:                                 wadMul(
71:                                     targetPrice,
72:                                     wadMul(
73:                                         perTimeUnit,
74:                                         wadPow(1e18 - priceDecayPercent, wadDiv(soldDifference, perTimeUnit))
75:                                     )
76:                                 ) - wadMul(amount, decayConstant)
77:                             )
78:                         ),
79:                         decayConstant
80:                     )
81:                 );
82:         }

```


*GitHub* : [56](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L56-L56)
### [N-129]<a name="n-129"></a> Natspec comments are missing from assembly blocks

*There are 1 instance(s) of this issue:*

```solidity
426:         assembly {
427:             
428:             
429:             success := call(50000, _to, _amount, 0, 0, 0, 0)
430:         }

```


*GitHub* : [426](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L426-L426)
### [N-130]<a name="n-130"></a> ERC777 tokens can introduce reentrancy risks
ERC777 is an advanced token standard that introduces hooks, allowing operators to execute additional logic during transfers. While this feature offers greater flexibility, it also opens up the possibility of reentrancy attacks. Specifically, when tokens are sent, the receiving contract's `tokensReceived` hook gets called, and this external call can execute arbitrary code. An attacker can exploit this feature to re-enter the original function, potentially leading to double-spending or other types of financial manipulation.

To mitigate reentrancy risks with ERC777, it's crucial to adopt established security measures, such as utilizing reentrancy guards or following the check-effects-interactions pattern. Some developers opt to stick with the simpler ERC20 standard, which does not have these hooks, to minimize this risk. If you do choose to use ERC777, extreme caution and thorough auditing are advised to secure against potential reentrancy vulnerabilities.

*There are 1 instance(s) of this issue:*

```solidity
108:     function transferFrom(address, address, uint256) public virtual override returns (bool) { // <= FOUND
109:         revert TRANSFER_NOT_ALLOWED();
110:     }

```


*GitHub* : [108](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L108-L108)### Disputed Risk Issues


 ### [D-01]<a name="d-01"></a> Low level calls in solidity versions preceding 0.8.14 can result in an optimiser bug 
In Solidity versions 0.8.13 and 0.8.14, a known optimizer bug presents potential risks when a variable is used in a separate assembly block from the one in which it was stored. Specifically, the 'mstore' operation could be optimized out due to this bug, leading to the use of uninitialized memory. Although the current code does not exhibit this risky pattern of execution, it does utilize 'mstore' within assembly blocks, which introduces a vulnerability risk for future code modifications. As a preventative measure, it is advisable to avoid the usage of the afflicted Solidity versions, 0.8.13 and 0.8.14. Instead, consider utilizing a version that is not impacted by this optimizer bug to prevent potential memory initialization issues in your smart contract.

*There are 1 instance(s) of this issue:*

```solidity
426:         assembly { // <= FOUND
427:             
428:             
429:             success := call(50000, _to, _amount, 0, 0, 0, 0)
430:         }

```


*GitHub* : [426](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L426-L426)
### [D-02]<a name="d-02"></a> Some if-statement can be converted to a ternary 
Improving code readability and compactness is an integral part of optimal programming practices. The use of ternary operators in place of if-else conditions is one such measure. Ternary operators allow us to write conditional statements in a more concise manner, thereby enhancing readability and simplicity. They follow the syntax `condition ? exprIfTrue : exprIfFalse`, which interprets as "if the condition is true, evaluate to `exprIfTrue`, else evaluate to `exprIfFalse`". By adopting this approach, we make our code more streamlined and intuitive, which could potentially aid in better understanding and maintenance of the codebase.

*There are 1 instance(s) of this issue:*

```solidity
399:                 if (creatorsShare > ethPaidToCreators) {
400:                     creatorTokensEmitted = erc20TokenEmitter.buyToken{ value: creatorsShare - ethPaidToCreators }( // <= FOUND
401:                         vrgdaReceivers,
402:                         vrgdaSplits,
403:                         IERC20TokenEmitter.ProtocolRewardAddresses({
404:                             builder: address(0),
405:                             purchaseReferral: address(0),
406:                             deployer: deployer
407:                         })
408:                     );
409:                 }

```


*GitHub* : [399](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L399-L400)
### [D-03]<a name="d-03"></a> Some error strings are not descriptive 
Consider adding more detail to these error strings

*There are 6 instance(s) of this issue:*

```solidity
156:     function extractMax() external onlyAdmin returns (uint256, uint256) {
157:         require(size > 0, "Heap is empty"); // <= FOUND
158: 
159:         uint256 popped = heap[0];
160:         heap[0] = heap[--size];
161:         maxHeapify(0);
162: 
163:         return (popped, valueMapping[popped]);
164:     }

```


*GitHub* : [157](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L157-L157)

```solidity
156:     function extractMax() external onlyAdmin returns (uint256, uint256) {
157:         require(size > 0, "Heap is empty"); // <= FOUND
158: 
159:         uint256 popped = heap[0];
160:         heap[0] = heap[--size];
161:         maxHeapify(0);
162: 
163:         return (popped, valueMapping[popped]);
164:     }

```


*GitHub* : [157](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L157-L157)

```solidity
156:     function extractMax() external onlyAdmin returns (uint256, uint256) {
157:         require(size > 0, "Heap is empty"); // <= FOUND
158: 
159:         uint256 popped = heap[0];
160:         heap[0] = heap[--size];
161:         maxHeapify(0);
162: 
163:         return (popped, valueMapping[popped]);
164:     }

```


*GitHub* : [157](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L157-L157)

```solidity
156:     function extractMax() external onlyAdmin returns (uint256, uint256) {
157:         require(size > 0, "Heap is empty"); // <= FOUND
158: 
159:         uint256 popped = heap[0];
160:         heap[0] = heap[--size];
161:         maxHeapify(0);
162: 
163:         return (popped, valueMapping[popped]);
164:     }

```


*GitHub* : [157](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L157-L157)

```solidity
156:     function extractMax() external onlyAdmin returns (uint256, uint256) {
157:         require(size > 0, "Heap is empty"); // <= FOUND
158: 
159:         uint256 popped = heap[0];
160:         heap[0] = heap[--size];
161:         maxHeapify(0);
162: 
163:         return (popped, valueMapping[popped]);
164:     }

```


*GitHub* : [157](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L157-L157)

```solidity
156:     function extractMax() external onlyAdmin returns (uint256, uint256) {
157:         require(size > 0, "Heap is empty"); // <= FOUND
158: 
159:         uint256 popped = heap[0];
160:         heap[0] = heap[--size];
161:         maxHeapify(0);
162: 
163:         return (popped, valueMapping[popped]);
164:     }

```


*GitHub* : [157](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L157-L157)
### [D-04]<a name="d-04"></a> Require/revert statements regarding parameters should be first in a function

*There are 7 instance(s) of this issue:*

```solidity
78:     function parent(uint256 pos) private pure returns (uint256) { // <= FOUND
79:         require(pos != 0, "Position should not be zero"); // <= FOUND
80:         return (pos - 1) / 2;
81:     }

```


*GitHub* : [78](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L78-L79)

```solidity
78:     function parent(uint256 pos) private pure returns (uint256) { // <= FOUND
79:         require(pos != 0, "Position should not be zero"); // <= FOUND
80:         return (pos - 1) / 2;
81:     }

```


*GitHub* : [78](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L78-L79)

```solidity
78:     function parent(uint256 pos) private pure returns (uint256) { // <= FOUND
79:         require(pos != 0, "Position should not be zero"); // <= FOUND
80:         return (pos - 1) / 2;
81:     }

```


*GitHub* : [78](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L78-L79)

```solidity
78:     function parent(uint256 pos) private pure returns (uint256) { // <= FOUND
79:         require(pos != 0, "Position should not be zero"); // <= FOUND
80:         return (pos - 1) / 2;
81:     }

```


*GitHub* : [78](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L78-L79)

```solidity
78:     function parent(uint256 pos) private pure returns (uint256) { // <= FOUND
79:         require(pos != 0, "Position should not be zero"); // <= FOUND
80:         return (pos - 1) / 2;
81:     }

```


*GitHub* : [78](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L78-L79)

```solidity
78:     function parent(uint256 pos) private pure returns (uint256) { // <= FOUND
79:         require(pos != 0, "Position should not be zero"); // <= FOUND
80:         return (pos - 1) / 2;
81:     }

```


*GitHub* : [78](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L78-L79)

```solidity
109:     function initialize(
110:         address _erc20VotingToken,
111:         address _erc721VotingToken,
112:         address _initialOwner,
113:         address _maxHeap,
114:         address _dropperAdmin,
115:         IRevolutionBuilder.CultureIndexParams memory _cultureIndexParams
116:     ) external initializer {
117:         require(msg.sender == address(manager), "Only manager can initialize");
118: 
119:         require(_cultureIndexParams.quorumVotesBPS <= MAX_QUORUM_VOTES_BPS, "invalid quorum bps");
120:         require(_cultureIndexParams.erc721VotingTokenWeight > 0, "invalid erc721 voting token weight"); // <= FOUND
121:         require(_erc721VotingToken != address(0), "invalid erc721 voting token"); // <= FOUND
122:         require(_erc20VotingToken != address(0), "invalid erc20 voting token"); // <= FOUND
123: 
124:         
125:         __Ownable_init(_initialOwner);
126: 
127:         
128:         __EIP712_init(string.concat(_cultureIndexParams.name, " CultureIndex"), "1");
129: 
130:         __ReentrancyGuard_init();
131: 
132:         erc20VotingToken = ERC20VotesUpgradeable(_erc20VotingToken);
133:         erc721VotingToken = ERC721CheckpointableUpgradeable(_erc721VotingToken);
134:         erc721VotingTokenWeight = _cultureIndexParams.erc721VotingTokenWeight;
135:         name = _cultureIndexParams.name;
136:         description = _cultureIndexParams.description;
137:         quorumVotesBPS = _cultureIndexParams.quorumVotesBPS;
138:         minVoteWeight = _cultureIndexParams.minVoteWeight;
139:         dropperAdmin = _dropperAdmin;
140: 
141:         emit QuorumVotesBPSSet(quorumVotesBPS, _cultureIndexParams.quorumVotesBPS);
142: 
143:         
144:         maxHeap = MaxHeap(_maxHeap);
145:     }

```


*GitHub* : [109](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L109-L122)
### [D-05]<a name="d-05"></a> Functions with array parameters should have length checks in place 
Functions in Solidity that accept array parameters should incorporate length checks as a security measure. This is to prevent potential overflow errors, unwanted gas consumption, and manipulation attempts. Without length checks, an attacker could pass excessively large arrays as input, causing excessive computation and potentially causing the function to exceed the block gas limit, leading to a denial-of-service. Additionally, unexpected array sizes could lead to logic errors within the function. As a resolution, always validate array length at the start of functions handling array inputs, ensuring it aligns with the expectations of the function logic. This makes the code more robust and predictable.

*There are 1 instance(s) of this issue:*

```solidity
209:     function createPiece(
210:         ArtPieceMetadata calldata metadata,
211:         CreatorBps[] calldata creatorArray // <= FOUND
212:     ) public returns (uint256) {
213:         uint256 creatorArrayLength = validateCreatorsArray(creatorArray);
214: 
215:         
216:         validateMediaType(metadata);
217: 
218:         uint256 pieceId = _currentPieceId++;
219: 
220:         
221:         maxHeap.insert(pieceId, 0);
222: 
223:         ArtPiece storage newPiece = pieces[pieceId];
224: 
225:         newPiece.pieceId = pieceId;
226:         newPiece.totalVotesSupply = _calculateVoteWeight(
227:             erc20VotingToken.totalSupply(),
228:             erc721VotingToken.totalSupply()
229:         );
230:         newPiece.totalERC20Supply = erc20VotingToken.totalSupply();
231:         newPiece.metadata = metadata;
232:         newPiece.sponsor = msg.sender;
233:         newPiece.creationBlock = block.number;
234:         newPiece.quorumVotes = (quorumVotesBPS * newPiece.totalVotesSupply) / 10_000;
235: 
236:         for (uint i; i < creatorArrayLength; i++) {
237:             newPiece.creators.push(creatorArray[i]);
238:         }
239: 
240:         emit PieceCreated(pieceId, msg.sender, metadata, newPiece.quorumVotes, newPiece.totalVotesSupply);
241: 
242:         
243:         for (uint i; i < creatorArrayLength; i++) {
244:             emit PieceCreatorAdded(pieceId, creatorArray[i].creator, msg.sender, creatorArray[i].bps);
245:         }
246: 
247:         return newPiece.pieceId;
248:     }

```


*GitHub* : [209](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L209-L211)
### [D-06]<a name="d-06"></a> Greater than comparisons made on state uints that can be set to max 
When state variables (uints) that can be set to their maximum value (type(uint256).max for example) are used in "greater than" comparisons, it introduces a risk of logic errors. If the state variable ever reaches this max value, any comparison expecting it to increment further will fail. This can halt or disrupt contract functionality. To avoid this, implement checks to ensure that the state variable doesn't exceed a certain threshold below the max value.

*There are 1 instance(s) of this issue:*

```solidity
233:     function setMinCreatorRateBps(uint256 _minCreatorRateBps) external onlyOwner {
234:         require(_minCreatorRateBps <= creatorRateBps, "Min creator rate must be less than or equal to creator rate");
235:         require(_minCreatorRateBps <= 10_000, "Min creator rate must be less than or equal to 10_000");
236: 
237:         
238:         require(
239:             _minCreatorRateBps > minCreatorRateBps, // <= FOUND
240:             "Min creator rate must be greater than previous minCreatorRateBps"
241:         );
242: 
243:         minCreatorRateBps = _minCreatorRateBps; // <= FOUND
244: 
245:         emit MinCreatorRateBpsUpdated(_minCreatorRateBps);
246:     }

```


*GitHub* : [239](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L239-L243)
### [D-07]<a name="d-07"></a> .call bypasses function existence check, type checking and argument packing 
Using the `.call` method in Solidity enables direct communication with an address, bypassing function existence checks, type checking, and argument packing. While this can save gas and provide flexibility, it can also introduce security risks and potential errors. The absence of these checks can lead to unexpected behavior if the callee contract's interface changes or if the input parameters are not crafted with care. The resolution to these issues is to use Solidity's high-level interface for calling functions when possible, as it automatically manages these aspects. If using `.call` is necessary, ensure that the inputs are carefully validated and that awareness of the called contract's behavior is maintained.

*There are 3 instance(s) of this issue:*

```solidity
191: 
192:         
193:         (bool success, ) = treasury.call{ value: toPayTreasury }(new bytes(0)); // <= FOUND

```


*GitHub* : [191](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L191-L193)

```solidity
191: 
192:         
193:         (bool success, ) = treasury.call{ value: toPayTreasury }(new bytes(0)); // <= FOUND

```


*GitHub* : [191](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L191-L193)

```solidity
191: 
192:         
193:         (bool success, ) = treasury.call{ value: toPayTreasury }(new bytes(0)); // <= FOUND

```


*GitHub* : [191](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L191-L193)
### [D-08]<a name="d-08"></a> Getting a bool return value does not confirm the existence of a function in an external call 
External calls to contracts using `address.call()` might return a boolean indicating success or failure. However, this boolean doesn't guarantee the existence of a called function. If a function isn't present, the call won't revert but will simply return `false`. This behavior might lead developers into mistakenly believing they're interacting with a legitimate or expected function, whereas it might not exist at all—a scenario sometimes termed as "phantom functions". Resolution: Instead of solely relying on the boolean, further validate the contract you're interacting with, or use interfaces or abstract contracts to enforce the existence of expected functions.

*There are 4 instance(s) of this issue:*

```solidity
function voteForManyWithSig(  address from,  uint256[] calldata pieceIds,  uint256 deadline,  uint8 v,  bytes32 r,  bytes32 s ) external nonReentrant {
 bool success = _verifyVoteSignature(from, pieceIds, deadline, v, r, s); // <= FOUND
 if (!success) revert INVALID_SIGNATURE();
 _voteForMany(pieceIds, from);
}

```


*GitHub* :

```solidity
function voteForManyWithSig(  address from,  uint256[] calldata pieceIds,  uint256 deadline,  uint8 v,  bytes32 r,  bytes32 s ) external nonReentrant {
 bool success = _verifyVoteSignature(from, pieceIds, deadline, v, r, s); // <= FOUND
 if (!success) revert INVALID_SIGNATURE();
 _voteForMany(pieceIds, from);
}

```


*GitHub* :

```solidity
function voteForManyWithSig(  address from,  uint256[] calldata pieceIds,  uint256 deadline,  uint8 v,  bytes32 r,  bytes32 s ) external nonReentrant {
 bool success = _verifyVoteSignature(from, pieceIds, deadline, v, r, s); // <= FOUND
 if (!success) revert INVALID_SIGNATURE();
 _voteForMany(pieceIds, from);
}

```


*GitHub* :

```solidity
function voteForManyWithSig(  address from,  uint256[] calldata pieceIds,  uint256 deadline,  uint8 v,  bytes32 r,  bytes32 s ) external nonReentrant {
 bool success = _verifyVoteSignature(from, pieceIds, deadline, v, r, s); // <= FOUND
 if (!success) revert INVALID_SIGNATURE();
 _voteForMany(pieceIds, from);
}

```


*GitHub* :
### [D-09]<a name="d-09"></a> Return values of transfer()/transferFrom() not checked 
In Solidity, it's crucial to check the return value of `.transfer` and `.transferFrom` methods because not all ERC20 and ERC721 token implementations revert on failure. Notably, If these methods fail silently and the contract doesn't verify their return value, the contract might continue execution as if the tokens were transferred successfully, leading to incorrect balances, loss of funds, or other unexpected behaviors. Therefore, the return values of these methods should always be checked, ensuring a failed token transfer operation correctly halts the execution of the contract.

*There are 1 instance(s) of this issue:*

```solidity
336:     function _settleAuction() internal { // <= FOUND
337:         IAuctionHouse.Auction memory _auction = auction;
338: 
339:         require(_auction.startTime != 0, "Auction hasn't begun");
340:         require(!_auction.settled, "Auction has already been settled");
341:         
342:         require(block.timestamp >= _auction.endTime, "Auction hasn't completed");
343: 
344:         auction.settled = true;
345: 
346:         uint256 creatorTokensEmitted = 0;
347:         
348:         if (address(this).balance < reservePrice) {
349:             
350:             if (_auction.bidder != address(0)) {
351:                 _safeTransferETHWithFallback(_auction.bidder, _auction.amount);
352:             }
353: 
354:             
355:             verbs.burn(_auction.verbId);
356:         } else {
357:             
358:             if (_auction.bidder == address(0))
359:                 verbs.burn(_auction.verbId);
360:                 
361:             else verbs.transferFrom(address(this), _auction.bidder, _auction.verbId);
362: 
363:             if (_auction.amount > 0) {
364:                 
365:                 uint256 auctioneerPayment = (_auction.amount * (10_000 - creatorRateBps)) / 10_000;
366: 
367:                 
368:                 uint256 creatorsShare = _auction.amount - auctioneerPayment;
369: 
370:                 uint256 numCreators = verbs.getArtPieceById(_auction.verbId).creators.length;
371:                 address deployer = verbs.getArtPieceById(_auction.verbId).sponsor;
372: 
373:                 
374:                 uint256[] memory vrgdaSplits = new uint256[](numCreators);
375:                 address[] memory vrgdaReceivers = new address[](numCreators);
376: 
377:                 
378:                 _safeTransferETHWithFallback(owner(), auctioneerPayment);
379: 
380:                 uint256 ethPaidToCreators = 0;
381: 
382:                 
383:                 if (creatorsShare > 0 && entropyRateBps > 0) {
384:                     for (uint256 i = 0; i < numCreators; i++) {
385:                         ICultureIndex.CreatorBps memory creator = verbs.getArtPieceById(_auction.verbId).creators[i];

```


*GitHub* : [336](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L336-L336)
### [D-10]<a name="d-10"></a> Use of transferFrom() rather than safeTransferFrom() for NFTs in will lead to the loss of NFTs 
When transferring ownership of NFTs, it's highly recommended to use the `safeTransferFrom()` function instead of `transferFrom()`. `safeTransferFrom()` automatically checks if the recipient is a contract and if so, it must implement the `onERC721Received` function, complying with EIP-721 standard, to confirm the successful receipt of the NFT. This provides an additional safety measure to prevent tokens from being permanently lost when sent to contracts not designed to handle them. To add an extra layer of safety, consider implementing a function to allow the contract owner to return any NFTs sent to the contract by mistake. Regular audits and thorough testing of your contracts will help further ensure their security and reliability.

*There are 1 instance(s) of this issue:*

```solidity
336:     function _settleAuction() internal { // <= FOUND
337:         IAuctionHouse.Auction memory _auction = auction;
338: 
339:         require(_auction.startTime != 0, "Auction hasn't begun");
340:         require(!_auction.settled, "Auction has already been settled");
341:         
342:         require(block.timestamp >= _auction.endTime, "Auction hasn't completed");
343: 
344:         auction.settled = true;
345: 
346:         uint256 creatorTokensEmitted = 0;
347:         
348:         if (address(this).balance < reservePrice) {
349:             
350:             if (_auction.bidder != address(0)) {
351:                 _safeTransferETHWithFallback(_auction.bidder, _auction.amount);
352:             }
353: 
354:             
355:             verbs.burn(_auction.verbId);
356:         } else {
357:             
358:             if (_auction.bidder == address(0))
359:                 verbs.burn(_auction.verbId);
360:                 
361:             else verbs.transferFrom(address(this), _auction.bidder, _auction.verbId);
362: 
363:             if (_auction.amount > 0) {
364:                 
365:                 uint256 auctioneerPayment = (_auction.amount * (10_000 - creatorRateBps)) / 10_000;
366: 
367:                 
368:                 uint256 creatorsShare = _auction.amount - auctioneerPayment;
369: 
370:                 uint256 numCreators = verbs.getArtPieceById(_auction.verbId).creators.length;
371:                 address deployer = verbs.getArtPieceById(_auction.verbId).sponsor;
372: 
373:                 
374:                 uint256[] memory vrgdaSplits = new uint256[](numCreators);
375:                 address[] memory vrgdaReceivers = new address[](numCreators);
376: 
377:                 
378:                 _safeTransferETHWithFallback(owner(), auctioneerPayment);
379: 
380:                 uint256 ethPaidToCreators = 0;
381: 
382:                 
383:                 if (creatorsShare > 0 && entropyRateBps > 0) {
384:                     for (uint256 i = 0; i < numCreators; i++) {
385:                         ICultureIndex.CreatorBps memory creator = verbs.getArtPieceById(_auction.verbId).creators[i];

```


*GitHub* : [336](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L336-L336) V4 wen?