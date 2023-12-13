## Summary

| |Issue|Instances| Gas Savings
|-|:-|:-:|:-:|
| [[M-01](#m-01)] | The ```owner``` is a single point of failure and a centralization risk | 22| 0|
| [[M-02](#m-02)] | Use of transferFrom() rather than safeTransferFrom() for NFTs in will lead to the loss of NFTs | 1| 0|
| [[M-03](#m-03)] | ```block.number``` means different things on different L2s | 1| 0|
| [[M-04](#m-04)] | Return values of `transfer()`/`transferFrom()` not checked | 2| 0|
| [[M-05](#m-05)] | `unchecked` blocks with subtractions may underflow | 3| 0|
| [[L-01](#l-01)] | Upgradeable contract is missing a ```__gap[50]``` storage variable to allow for new storage variables in later versions | 6| 0|
| [[L-02](#l-02)] | Setters should have initial value check | 6| 0|
| [[L-03](#l-03)] | Signature Malleability of EVM's ecrecover | 1| 0|
| [[L-04](#l-04)] | Use of floating pragma | 6| 0|
| [[L-05](#l-05)] | Missing checks for address(0x0) when assigning values to address state variables | 3| 0|
| [[L-06](#l-06)] | Execution at deadlines should be allowed | 1| 0|
| [[L-07](#l-07)] | Initialization can be front-run | 6| 0|
| [[L-08](#l-08)] | Upgradeable contract uses non-upgradeable version of the OpenZeppelin libraries/contracts | 2| 0|
| [[L-09](#l-09)] | External calls in an un-bounded ```for-```loop may result in a DOS | 1| 0|
| [[L-10](#l-10)] | Missing limits when setting min/max amounts | 14| 0|
| [[L-11](#l-11)] | Using zero as a parameter | 7| 0|
| [[L-12](#l-12)] | Version of solidity used has several known issues. Considering switch to latest version. | 3| 0|
| [[L-13](#l-13)] | State variables not capped at reasonable values | 34| 0|
| [[L-14](#l-14)] | Governance functions should be controlled by time locks | 26| 0|
| [[L-15](#l-15)] | External call recipient may consume all transaction gas | 2| 0|
| [[G-01](#g-01)] | ```++i``` costs less gas than ```i++```, especially when it's used in for-loops (```--i```/```i--``` too) | 13| 0|
| [[G-02](#g-02)] | ```require()```/```revert()``` strings longer than 32 bytes cost extra gas | 21| 0|
| [[G-03](#g-03)] | Use alternative formulation in order to avoid NOT using AND instead of OR or vice versa | 5| 0|
| [[G-04](#g-04)] | Multiplication/division by 2 should use bit shifting | 4| 0|
| [[G-05](#g-05)] | Internal functions only called once can be inlined to save gas | 3| 0|
| [[G-06](#g-06)] | Splitting ```require()``` statements that use ```&&``` saves gas | 3| 0|
| [[G-07](#g-07)] | ```x += y``` costs more gas than ```x = x + y``` for state variables | 2| 0|
| [[G-08](#g-08)] | ```<array>.length``` should not be looked up in every loop of a ```for```-loop | 2| 0|
| [[G-09](#g-09)] | ```++i```/```i++``` should be ```unchecked{++i}```/```unchecked{i++}``` when it is not possible for them to overflow, as is the case when used in ```for```- and ```while```-loops | 9| 0|
| [[G-10](#g-10)] | Using ```private``` rather than ```public``` for constants, saves gas | 11| 0|
| [[G-11](#g-11)] | ```require()``` or ```revert()``` statements that check input arguments should be at the top of the function | 4| 0|
| [[G-12](#g-12)] | Use custom errors rather than ```revert()```/```require()``` strings to save gas | 75| 0|
| [[G-13](#g-13)] | Functions guaranteed to revert when called by normal users can be marked ```payable``` | 27| 0|
| [[G-14](#g-14)] | ```internal``` functions not called by the contract should be removed to save deployment gas | 8| 0|
| [[G-15](#g-15)] | Using `storage` instead of `memory` for structs/arrays saves gas | 1| 0|
| [[G-16](#g-16)] | State variables should be cached in stack variables rather than re-reading them from storage | 19| 0|
| [[G-17](#g-17)] | Multiple accesses of a mapping should use a local variable cache | 14| 0|
| [[G-18](#g-18)] | Optimize names to save gas | 8| 0|
| [[G-19](#g-19)] | Constructors can be marked `payable` | 1| 0|
| [[G-20](#g-20)] | Use assembly to emit events, in order to save gas | 21| 0|
| [[G-21](#g-21)] | Events should be emitted outside of loops | 1| 0|
| [[G-22](#g-22)] | Add `unchecked {}` for subtractions where the operands cannot underflow because of a previous `require()` or `if`-statement | 5| 0|
| [[G-23](#g-23)] | Avoid updating storage when the value hasn't changed | 14| 0|
| [[G-24](#g-24)] | State variable read in a loop | 2| 0|
| [[G-25](#g-25)] | Add `unchecked` blocks for divisions where the operands cannot overflow | 19| 0|
| [[G-26](#g-26)] | Simple checks for zero can be done using assembly to save gas | 30| 0|
| [[G-27](#g-27)] | State variables only set in the constructor should be declared `immutable` | 5| 0|
| [[G-28](#g-28)] | Avoid using state variable in emit | 5| 0|
| [[G-29](#g-29)] | Use v4.9.0 and above OpenZeppelin contracts | 1| 0|
| [[G-30](#g-30)] | Using bools for storage incurs overhead | 3| 0|
| [[G-31](#g-31)] | Using do-while loop instead of for loop or while loop | 9| 0|
| [[G-32](#g-32)] | `keccak256()` hash of literals should only be computed once | 2| 0|
| [[G-33](#g-33)] | Avoid contract existence checks by using low level calls | 10| 0|
| [[G-34](#g-34)] | Use assembly to validate `msg.sender` | 11| 0|
| [[N-01](#n-01)] | The ```nonReentrant``` ```modifier``` should occur before all other modifiers | 7| 0|
| [[N-02](#n-02)] | Expressions for constant values such as a call to ```keccak256()```, should use ```immutable``` rather than ```constant``` | 1| 0|
| [[N-03](#n-03)] | Use scientific notation (e.g. ```1e18```) rather than exponentiation (e.g. ```10**18```) | 27| 0|
| [[N-04](#n-04)] | Inconsistent spacing in comments | 27| 0|
| [[N-05](#n-05)] | Lines are too long | 20| 0|
| [[N-06](#n-06)] | Imports could be organized more systematically | 17| 0|
| [[N-07](#n-07)] | Constants in comparisons should appear on the left side | 7| 0|
| [[N-08](#n-08)] | Variable names don't follow the Solidity style guide | 2| 0|
| [[N-09](#n-09)] | Consider using named mappings | 9| 0|
| [[N-10](#n-10)] | ```public``` functions not called by the contract should be declared ```external``` instead | 19| 0|
| [[N-11](#n-11)] | ```constants``` should be defined rather than using magic numbers | 34| 0|
| [[N-12](#n-12)] | Top-level declarations should be separated by at least two lines | 12| 0|
| [[N-13](#n-13)] | Events that mark critical parameter changes should contain both the old and the new value | 12| 0|
| [[N-14](#n-14)] | Variable names that consist of all capital letters should be reserved for ```constant```/```immutable``` variables | 1| 0|
| [[N-15](#n-15)] | Use ```@inheritdoc``` rather than using a non-standard annotation | 1| 0|
| [[N-16](#n-16)] | NatSpec ```@param``` is missing | 26| 0|
| [[N-17](#n-17)] | NatSpec ```@return``` argument is missing | 14| 0|
| [[N-18](#n-18)] | NatSpec documentation for function is missing | 12| 0|
| [[N-19](#n-19)] | Empty Function Body. Considering commenting why. | 1| 0|
| [[N-20](#n-20)] | Function ordering does not follow the Solidity style guide | 6| 0|
| [[N-21](#n-21)] | Contract does not follow the Solidity style guide's suggested layout ordering | 2| 0|
| [[N-22](#n-22)] | Constant redefined elsewhere | 1| 0|
| [[N-23](#n-23)] | Duplicated ```require()```/```revert()``` checks should be refactored to a modifier or function | 4| 0|
| [[N-24](#n-24)] | Control structures do not follow the Solidity Style Guide | 74| 0|
| [[N-25](#n-25)] | Events are missing sender information | 18| 0|
| [[N-26](#n-26)] | Missing events in sensitive functions | 4| 0|
| [[N-27](#n-27)] | Array indices should be referenced via ```enums``` rather than via numeric literals | 4| 0|
| [[N-28](#n-28)] | Consider activating `via-ir` for deploying | 1| 0|
| [[N-29](#n-29)] | Custom ```error``` without details | 2| 0|
| [[N-30](#n-30)] | Long functions should be refactored into multiple functions | 2| 0|
| [[N-31](#n-31)] | Variables need not be initialized to zero | 7| 0|
| [[N-32](#n-32)] | Non-```external```/```public``` variable and function names should begin with an underscore | 4| 0|
| [[N-33](#n-33)] | Non-```external```/```public``` variable names should begin with an underscore | 6| 0|
| [[N-34](#n-34)] | Use of ```override``` is unnecessary | 35| 0|
| [[N-35](#n-35)] | Consider bounding input array length | 1| 0|
| [[N-36](#n-36)] | Contract declarations should have NatSpec ```@title``` annotations | 5| 0|
| [[N-37](#n-37)] | Polymorphic functions make security audits more time-consuming and error-prone | 1| 0|
| [[N-38](#n-38)] | Use the latest solidity (prior to 0.8.20 if on L2s) for deployment | 9| 0|
| [[N-39](#n-39)] | Contracts should have full test coverage | 1| 0|
| [[N-40](#n-40)] | Expressions for constant values should use ```immutable``` rather than ```constant``` | 1| 0|
| [[N-41](#n-41)] | Contract declarations should have NatSpec descriptions | 3| 0|
| [[N-42](#n-42)] | Setters should prevent re-setting of the same value | 13| 0|
| [[N-43](#n-43)] | Public variable declarations should have NatSpec descriptions | 51| 0|
| [[N-44](#n-44)] | Unused named `return` | 5| 0|
| [[N-45](#n-45)] | Complex math should be split into multiple steps | 4| 0|
| [[N-46](#n-46)] | Contract functions should use an `interface` | 45| 0|
| [[N-47](#n-47)] | Unresolved `TODOs` in comments | 2| 0|
| [[N-48](#n-48)] | Use a `modifier` instead of `require` to check for `msg.sender` | 11| 0|
| [[N-49](#n-49)] | Same stack variable name used many times in different function of same contract | 1| 0|
| [[N-50](#n-50)] | Common functions should be refactored to a common base contract | 6| 0|
| [[N-51](#n-51)] | File is missing NatSpec | 1| 0|
| [[N-52](#n-52)] | Invalid NatSpec comment style | 3| 0|
| [[N-53](#n-53)] | Large or complicated code bases should implement invariant tests | 1| 0|
| [[N-54](#n-54)] | Consider adding formal verification proofs | 1| 0|
| [[N-55](#n-55)] | Multiple `address`/ID mappings can be combined into a single `mapping` of an `address`/ID to a `struct`, for readability | 4| 0|
| [[N-56](#n-56)] | Custom errors should be used rather than `revert()`/`require()` | 75| 0|
| [[N-57](#n-57)] | `internal` functions not called by the contract should be removed | 8| 0|
| [[N-58](#n-58)] | Contract uses both `require()`/`revert()` as well as custom errors | 4| 0|
| [[N-59](#n-59)] | Consider adding a block/deny-list | 9| 0|
| [[N-60](#n-60)] | Consider using `SafeTransferLib.safeTransferETH()` or `Address.sendValue()` for clearer semantic meaning | 5| 0|
| [[N-61](#n-61)] | Unused function parameter | 4| 0|
| [[N-62](#n-62)] | Unused import | 4| 0|
| [[N-63](#n-63)] | Consider using descriptive `constant`s when passing zero as a function argument | 7| 0|
| [[N-64](#n-64)] | Function names should use lowerCamelCase | 7| 0|
| [[N-65](#n-65)] | Contract declarations should have NatSpec `@author` annotations | 7| 0|
| [[N-66](#n-66)] | Missing event and or timelock for critical parameter change | 3| 0|
| [[N-67](#n-67)] | Mixed usage of `int`/`uint` with `int256`/`uint256` | 18| 0|
| [[N-68](#n-68)] | Use `@inheritdoc` for overridden functions | 35| 0|
| [[N-69](#n-69)] | Assembly blocks should have extensive comments | 1| 0|
| [[N-70](#n-70)] | Add inline comments for unnamed variables | 3| 0|
| [[N-71](#n-71)] | Not using the named return variables anywhere in the function is confusing | 5| 0|
| [[N-72](#n-72)] | Variable names for `immutable`s should use CONSTANT_CASE | 12| 0|
| [[N-73](#n-73)] | Consider moving `msg.sender` checks to a common authorization `modifier` | 8| 0|
| [[N-74](#n-74)] | Consider disallowing transfers to `address(this)` | 2| 0|
| [[N-75](#n-75)] | Simplify complex require statements | 4| 0|
| [[D-01](#d-01)] | `if`-statement can be converted to a ternary | 2| 0|
| [[D-02](#d-02)] | Unsafe downcast | 3| 0|
| [[D-03](#d-03)] | `payable` function does not transfer Eth | 8| 0|


  ### Medium Risk Issues


### [M-01]<a name="m-01"></a> The ```owner``` is a single point of failure and a centralization risk
Having a single EOA as the only owner of contracts is a large centralization risk and a single point of failure. A single private key may be taken in a hack, or the sole holder of the key may become unable to retrieve the key when necessary. Consider changing to a multi-signature setup, or having a role-based authorization model.

*There are 22 instance(s) of this issue:*

```

208      function pause() external override onlyOwner {


217      function setCreatorRateBps(uint256 _creatorRateBps) external onlyOwner {


233      function setMinCreatorRateBps(uint256 _minCreatorRateBps) external onlyOwner {


253      function setEntropyRateBps(uint256 _entropyRateBps) external onlyOwner {


265      function unpause() external override onlyOwner {


277      function setTimeBuffer(uint256 _timeBuffer) external override onlyOwner {


287      function setReservePrice(uint256 _reservePrice) external override onlyOwner {


297      function setMinBidIncrementPercentage(uint8 _minBidIncrementPercentage) external override onlyOwner {
```

  *GitHub* : [208](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L208),[217](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L217),[233](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L233),[253](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L253),[265](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L265),[277](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L277),[287](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L287),[297](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L297)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol)

```

132      function pause() external override onlyOwner {


141      function unpause() external override onlyOwner {


288      function setEntropyRateBps(uint256 _entropyRateBps) external onlyOwner {


299      function setCreatorRateBps(uint256 _creatorRateBps) external onlyOwner {


309      function setCreatorsAddress(address _creatorsAddress) external override onlyOwner nonReentrant {
```

  *GitHub* : [132](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L132),[141](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L141),[288](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L288),[299](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L299),[309](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L309)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol)

```

169      function setContractURIHash(string memory newContractURIHash) external onlyOwner {


209      function setMinter(address _minter) external override onlyOwner nonReentrant whenMinterNotLocked {


220      function lockMinter() external override onlyOwner whenMinterNotLocked {


230      function setDescriptor(
231          IDescriptorMinimal _descriptor
232      ) external override onlyOwner nonReentrant whenDescriptorNotLocked {


242      function lockDescriptor() external override onlyOwner whenDescriptorNotLocked {


252      function setCultureIndex(ICultureIndex _cultureIndex) external onlyOwner whenCultureIndexNotLocked nonReentrant {


262      function lockCultureIndex() external override onlyOwner whenCultureIndexNotLocked {
```

  *GitHub* : [169](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L169),[209](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L209),[220](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L220),[230](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L230-L232),[242](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L242),[252](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L252),[262](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L262)
### [M-02]<a name="m-02"></a> Use of transferFrom() rather than safeTransferFrom() for NFTs in will lead to the loss of NFTs
The EIP-721 standard says the following about ```transferFrom()```:

```/// @notice Transfer ownership of an NFT -- THE CALLER IS RESPONSIBLE
///  TO CONFIRM THAT `_to` IS CAPABLE OF RECEIVING NFTS OR ELSE
///  THEY MAY BE PERMANENTLY LOST
/// @dev Throws unless `msg.sender` is the current owner, an authorized
///  operator, or the approved address for this NFT. Throws if `_from` is
///  not the current owner. Throws if `_to` is the zero address. Throws if
///  `_tokenId` is not a valid NFT.
/// @param _from The current owner of the NFT
/// @param _to The new owner
/// @param _tokenId The NFT to transfer
function transferFrom(address _from, address _to, uint256 _tokenId) external payable;
```

[https://github.com/ethereum/EIPs/blob/78e2c297611f5e92b6a5112819ab71f74041ff25/EIPS/eip-721.md?plain=1#L103-L113](https://github.com/ethereum/EIPs/blob/78e2c297611f5e92b6a5112819ab71f74041ff25/EIPS/eip-721.md?plain=1#L103-L113)

Code must use the ```safeTransferFrom()``` flavor if it hasn't otherwise verified that the receiving address can handle it

*There are 1 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol)
### [M-03]<a name="m-03"></a> ```block.number``` means different things on different L2s
On Optimism, ```block.number``` is the L2 block number, but on Arbitrum, it's the L1 block number, and ```ArbSys(address(100)).arbBlockNumber()``` must be used. Furthermore, L2 block numbers often occur much more frequently than L1 block numbers (any may even occur on a per-transaction basis), so using block numbers for timing results in inconsistencies, especially when voting is involved across multiple chains. As of version 4.9, OpenZeppelin has [modified](https://blog.openzeppelin.com/introducing-openzeppelin-contracts-v4.9#governor) their governor code to use a clock rather than block numbers, to avoid these sorts of issues, but this still requires that the project [implement](https://docs.openzeppelin.com/contracts/4.x/governance#token_2) a [clock](https://eips.ethereum.org/EIPS/eip-6372) for each L2.

*There are 1 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol)
### [M-04]<a name="m-04"></a> Return values of `transfer()`/`transferFrom()` not checked
Not all `IERC20` implementations `revert()` when there's a failure in `transfer()`/`transferFrom()`. The function signature has a `boolean` return value and they indicate errors that way [instead](https://etherscan.io/address/0x25d772b21b0e5197f2dc8169e3aa976b16be04ac#code#F1#L44). By not checking the return value, operations that should have marked as failed, may potentially go through without actually making a payment

*There are 2 instance(s) of this issue:*

```

361              else verbs.transferFrom(address(this), _auction.bidder, _auction.verbId);


438              bool wethSuccess = IWETH(WETH).transfer(_to, _amount);
```

  *GitHub* : [361](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L361),[438](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L438)
### [M-05]<a name="m-05"></a> `unchecked` blocks with subtractions may underflow
There aren't any checks to avoid an underflow which can happen inside an `unchecked` block, so the following subtractions may underflow silently.

*There are 3 instance(s) of this issue:*

```

49               return pIntegral(timeSinceStart, sold + amount) - pIntegral(timeSinceStart, sold);


70                                   wadMul(
71                                       targetPrice,
72                                       wadMul(
73                                           perTimeUnit,
74                                           wadPow(1e18 - priceDecayPercent, wadDiv(soldDifference, perTimeUnit))
75                                       )
76                                   ) - wadMul(amount, decayConstant)


74                                           wadPow(1e18 - priceDecayPercent, wadDiv(soldDifference, perTimeUnit))
```

  *GitHub* : [49](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L49),[70](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L70-L76),[74](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L74)### Low Risk Issues


### [L-01]<a name="l-01"></a> Upgradeable contract is missing a ```__gap[50]``` storage variable to allow for new storage variables in later versions
See [this link](https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps) for a description of this storage variable. While some contracts may not currently be sub-classed, adding the variable now protects against forgetting to add it in the future.

*There are 6 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol)
### [L-02]<a name="l-02"></a> Setters should have initial value check
Setters should have initial value check to prevent assigning wrong value to the variable. Assignment of wrong value can lead to unexpected behavior of the contract.

*There are 6 instance(s) of this issue:*

```

@audit: unchecked values _timeBuffer
277      function setTimeBuffer(uint256 _timeBuffer) external override onlyOwner {
278          timeBuffer = _timeBuffer;
279  
280          emit AuctionTimeBufferUpdated(_timeBuffer);
281      }


@audit: unchecked values _reservePrice
287      function setReservePrice(uint256 _reservePrice) external override onlyOwner {
288          reservePrice = _reservePrice;
289  
290          emit AuctionReservePriceUpdated(_reservePrice);
291      }


@audit: unchecked values _minBidIncrementPercentage
297      function setMinBidIncrementPercentage(uint8 _minBidIncrementPercentage) external override onlyOwner {
298          minBidIncrementPercentage = _minBidIncrementPercentage;
299  
300          emit AuctionMinBidIncrementPercentageUpdated(_minBidIncrementPercentage);
301      }
```

  *GitHub* : [277](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L277-L281),[287](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L287-L291),[297](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L297-L301)

```

@audit: unchecked values newContractURIHash
169      function setContractURIHash(string memory newContractURIHash) external onlyOwner {
170          _contractURIHash = newContractURIHash;
171      }


@audit: unchecked values _descriptor
230      function setDescriptor(
231          IDescriptorMinimal _descriptor
232      ) external override onlyOwner nonReentrant whenDescriptorNotLocked {
233          descriptor = _descriptor;
234  
235          emit DescriptorUpdated(_descriptor);
236      }


@audit: unchecked values _cultureIndex
252      function setCultureIndex(ICultureIndex _cultureIndex) external onlyOwner whenCultureIndexNotLocked nonReentrant {
253          cultureIndex = _cultureIndex;
254  
255          emit CultureIndexUpdated(_cultureIndex);
256      }
```

  *GitHub* : [169](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L169-L171),[230](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L230-L236),[252](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L252-L256)
### [L-03]<a name="l-03"></a> Signature Malleability of EVM's ecrecover
The function calls the Solidity ecrecover() function directly to verify the given signatures. However, the ecrecover() EVM opcode allows malleable (non-unique) signatures and thus is susceptible to replay attacks. Consider using the OpenZeppelin ECDSA library instead, which provides a safe ecrecover() wrapper that guarantees unique signatures.

*There are 1 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol)
### [L-04]<a name="l-04"></a> Use of floating pragma
Contracts should be deployed with the same compiler version and flags that they have been tested with thoroughly. Locking the pragma helps to ensure that contracts do not accidentally get deployed using, for example, an outdated compiler version that might introduce bugs that affect the contract system negatively.[(https://swcregistry.io/docs/SWC-103)](https://swcregistry.io/docs/SWC-103)

*There are 6 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol)
### [L-05]<a name="l-05"></a> Missing checks for address(0x0) when assigning values to address state variables
It could be better to check new address value before assign to a state variable.

*There are 3 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol)
### [L-06]<a name="l-06"></a> Execution at deadlines should be allowed
The condition may be wrong in these cases, as when block.timestamp is equal to the compared > or < variable these blocks will not be executed.

*There are 1 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol)
### [L-07]<a name="l-07"></a> Initialization can be front-run
The ```initialize()``` functions below are not called by another contract atomically after the contract is deployed, so it's possible for a malicious user to call ```initialize()``` which, if it's noticed in time, would require the project to re-deploy the contract in order to properly initialize. Consider creating a factory contract, which will new and ```initialize()``` each contract atomically.

*There are 6 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol)
### [L-08]<a name="l-08"></a> Upgradeable contract uses non-upgradeable version of the OpenZeppelin libraries/contracts
OpenZeppelin has an [Upgradeable](https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/tree/master/contracts/utils) variants of each of its libraries and contracts, and upgradeable contracts should use those variants.

*There are 2 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol)
### [L-09]<a name="l-09"></a> External calls in an un-bounded ```for-```loop may result in a DOS
Consider limiting the number of iterations in ```for-```loops that make external calls

*There are 1 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol)
### [L-10]<a name="l-10"></a> Missing limits when setting min/max amounts
There are some missing limits in these functions, and this could lead to unexpected scenarios. Consider adding a min/max limit for the following values, when appropriate.

*There are 14 instance(s) of this issue:*

```

152      function settleCurrentAndCreateNewAuction() external override nonReentrant whenNotPaused {


161      function settleAuction() external override whenPaused nonReentrant {


217      function setCreatorRateBps(uint256 _creatorRateBps) external onlyOwner {


253      function setEntropyRateBps(uint256 _entropyRateBps) external onlyOwner {


277      function setTimeBuffer(uint256 _timeBuffer) external override onlyOwner {


287      function setReservePrice(uint256 _reservePrice) external override onlyOwner {


336      function _settleAuction() internal {
```

  *GitHub* : [152](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L152),[161](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L161),[217](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L217),[253](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L253),[277](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L277),[287](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L287),[336](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L336)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol)

```

288      function setEntropyRateBps(uint256 _entropyRateBps) external onlyOwner {


299      function setCreatorRateBps(uint256 _creatorRateBps) external onlyOwner {


309      function setCreatorsAddress(address _creatorsAddress) external override onlyOwner nonReentrant {
```

  *GitHub* : [288](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L288),[299](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L299),[309](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L309)

```

169      function setContractURIHash(string memory newContractURIHash) external onlyOwner {


230      function setDescriptor(
231          IDescriptorMinimal _descriptor
232      ) external override onlyOwner nonReentrant whenDescriptorNotLocked {


252      function setCultureIndex(ICultureIndex _cultureIndex) external onlyOwner whenCultureIndexNotLocked nonReentrant {
```

  *GitHub* : [169](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L169),[230](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L230-L232),[252](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L252)
### [L-11]<a name="l-11"></a> Using zero as a parameter
Taking zero as a valid argument without checks can lead to severe security issues in some cases.

If using a zero argument is mandatory, consider using descriptive constants or an enum instead of passing zero directly on function calls, as that might be error-prone, to fully describe the caller's intention.

*There are 7 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol)

```

181              : int(0);


184          int totalTokensForBuyers = toPayTreasury > 0 ? getTokenQuoteForEther(toPayTreasury) : int(0);
```

  *GitHub* : [181](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L181),[184](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L184)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol)

```

129              revert ERC20InvalidReceiver(address(0));


131          _update(address(0), account, value);
```

  *GitHub* : [129](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L129),[131](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L131)
### [L-12]<a name="l-12"></a> Version of solidity used has several known issues. Considering switch to latest version.
See [this](https://docs.soliditylang.org/en/v0.8.21/bugs.html). Follow issues are taken from [here](https://github.com/ethereum/solidity/blob/develop/docs/bugs_by_version.json)
*Version used in RewardSplits.sol: 0.8.22*

List of known bugs for this version:


            
> [VerbatimInvalidDeduplication](https://github.com/ethereum/solidity/blob/develop/docs/bugs.json#L4)


*Version used in TokenEmitterRewards.sol: 0.8.22*

List of known bugs for this version:


            
> [VerbatimInvalidDeduplication](https://github.com/ethereum/solidity/blob/develop/docs/bugs.json#L4)


*Version used in VRGDAC.sol: 0.8.22*

List of known bugs for this version:


            
> [VerbatimInvalidDeduplication](https://github.com/ethereum/solidity/blob/develop/docs/bugs.json#L4)

*There are 3 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/TokenEmitter/TokenEmitterRewards.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol)
### [L-13]<a name="l-13"></a> State variables not capped at reasonable values
Consider adding appropriate minimum/maximum value checks to ensure that the following state variables can never be used to excessively harm users, including via griefing.

*There are 34 instance(s) of this issue:*

```

136          timeBuffer = _auctionParams.timeBuffer;


137          reservePrice = _auctionParams.reservePrice;


138          minBidIncrementPercentage = _auctionParams.minBidIncrementPercentage;


139          duration = _auctionParams.duration;


140          creatorRateBps = _auctionParams.creatorRateBps;


141          entropyRateBps = _auctionParams.entropyRateBps;


142          minCreatorRateBps = _auctionParams.minCreatorRateBps;


143          WETH = _weth;


223          creatorRateBps = _creatorRateBps;


243          minCreatorRateBps = _minCreatorRateBps;


256          entropyRateBps = _entropyRateBps;


278          timeBuffer = _timeBuffer;


288          reservePrice = _reservePrice;


298          minBidIncrementPercentage = _minBidIncrementPercentage;
```

  *GitHub* : [136](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L136),[137](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L137),[138](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L138),[139](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L139),[140](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L140),[141](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L141),[142](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L142),[143](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L143),[223](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L223),[243](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L243),[256](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L256),[278](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L278),[288](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L288),[298](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L298)

```

134          erc721VotingTokenWeight = _cultureIndexParams.erc721VotingTokenWeight;


135          name = _cultureIndexParams.name;


136          description = _cultureIndexParams.description;


137          quorumVotesBPS = _cultureIndexParams.quorumVotesBPS;


138          minVoteWeight = _cultureIndexParams.minVoteWeight;


139          dropperAdmin = _dropperAdmin;


502          quorumVotesBPS = newQuorumVotesBPS;
```

  *GitHub* : [134](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L134),[135](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L135),[136](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L136),[137](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L137),[138](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L138),[139](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L139),[502](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L502)

```

101          treasury = _treasury;


102          creatorsAddress = _creatorsAddress;


105          startTime = block.timestamp;


291          emit EntropyRateBpsUpdated(entropyRateBps = _entropyRateBps);


302          emit CreatorRateBpsUpdated(creatorRateBps = _creatorRateBps);


312          emit CreatorsAddressUpdated(creatorsAddress = _creatorsAddress);
```

  *GitHub* : [101](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L101),[102](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L102),[105](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L105),[291](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L291),[302](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L302),[312](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L312)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol)

```

150          _contractURIHash = _erc721TokenParams.contractURIHash;


153          minter = _minter;


170          _contractURIHash = newContractURIHash;


211          minter = _minter;


233          descriptor = _descriptor;


253          cultureIndex = _cultureIndex;
```

  *GitHub* : [150](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L150),[153](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L153),[170](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L170),[211](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L211),[233](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L233),[253](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L253)
### [L-14]<a name="l-14"></a> Governance functions should be controlled by time locks
Governance functions (such as upgrading contracts, setting critical parameters) should be controlled using time locks to introduce a delay between a proposal and its execution. This gives users time to exit before a potentially dangerous or malicious operation is applied.

*There are 26 instance(s) of this issue:*

```

208      function pause() external override onlyOwner {


217      function setCreatorRateBps(uint256 _creatorRateBps) external onlyOwner {


233      function setMinCreatorRateBps(uint256 _minCreatorRateBps) external onlyOwner {


253      function setEntropyRateBps(uint256 _entropyRateBps) external onlyOwner {


265      function unpause() external override onlyOwner {


277      function setTimeBuffer(uint256 _timeBuffer) external override onlyOwner {


287      function setReservePrice(uint256 _reservePrice) external override onlyOwner {


297      function setMinBidIncrementPercentage(uint8 _minBidIncrementPercentage) external override onlyOwner {


452      function _authorizeUpgrade(address _newImpl) internal view override onlyOwner whenPaused {
```

  *GitHub* : [208](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L208),[217](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L217),[233](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L233),[253](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L253),[265](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L265),[277](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L277),[287](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L287),[297](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L297),[452](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L452)

```

498      function _setQuorumVotesBPS(uint256 newQuorumVotesBPS) external onlyOwner {


543      function _authorizeUpgrade(address _newImpl) internal view override onlyOwner {
```

  *GitHub* : [498](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L498),[543](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L543)

```

132      function pause() external override onlyOwner {


141      function unpause() external override onlyOwner {


288      function setEntropyRateBps(uint256 _entropyRateBps) external onlyOwner {


299      function setCreatorRateBps(uint256 _creatorRateBps) external onlyOwner {


309      function setCreatorsAddress(address _creatorsAddress) external override onlyOwner nonReentrant {
```

  *GitHub* : [132](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L132),[141](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L141),[288](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L288),[299](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L299),[309](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L309)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol)

```

169      function setContractURIHash(string memory newContractURIHash) external onlyOwner {


209      function setMinter(address _minter) external override onlyOwner nonReentrant whenMinterNotLocked {


220      function lockMinter() external override onlyOwner whenMinterNotLocked {


230      function setDescriptor(
231          IDescriptorMinimal _descriptor
232      ) external override onlyOwner nonReentrant whenDescriptorNotLocked {


242      function lockDescriptor() external override onlyOwner whenDescriptorNotLocked {


252      function setCultureIndex(ICultureIndex _cultureIndex) external onlyOwner whenCultureIndexNotLocked nonReentrant {


262      function lockCultureIndex() external override onlyOwner whenCultureIndexNotLocked {


328      function _authorizeUpgrade(address _newImpl) internal view override onlyOwner {
```

  *GitHub* : [169](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L169),[209](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L209),[220](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L220),[230](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L230-L232),[242](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L242),[252](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L252),[262](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L262),[328](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L328)
### [L-15]<a name="l-15"></a> External call recipient may consume all transaction gas
There is no limit specified on the amount of gas used, so the recipient can use up all of the transaction's gas, causing it to revert. Use `addr.call{gas: <amount>}("")` or [this](https://github.com/nomad-xyz/ExcessivelySafeCall) library instead.

*There are 2 instance(s) of this issue:*

```

191          (bool success, ) = treasury.call{ value: toPayTreasury }(new bytes(0));


196              (success, ) = creatorsAddress.call{ value: creatorDirectPayment }(new bytes(0));
```

  *GitHub* : [191](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L191),[196](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L196)### Gas Risk Issues


 ### [G-01]<a name="g-01"></a> ```++i``` costs less gas than ```i++```, especially when it's used in for-loops (```--i```/```i--``` too)
When optimizing for gas usage, it is recommended to use the pre-increment operator whenever possible.

See [Solidity Gas Optimization Tips](https://coinsbench.com/solidity-gas-optimization-tips-52e62d4ce57d)

*There are 13 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol)

```

185          for (uint i; i < creatorArrayLength; i++) {


218          uint256 pieceId = _currentPieceId++;


236          for (uint i; i < creatorArrayLength; i++) {


243          for (uint i; i < creatorArrayLength; i++) {


355          for (uint256 i; i < len; i++) {


403          for (uint256 i; i < len; i++) {


407          for (uint256 i; i < len; i++) {


431          voteHash = keccak256(abi.encode(VOTE_TYPEHASH, from, pieceIds, nonces[from]++, deadline));
```

   *GitHub* : [185](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L185),[218](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L218),[236](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L236),[243](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L243),[355](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L355),[403](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L403),[407](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L407),[431](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L431)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol)

```

294              uint256 verbId = _currentVerbId++;


306              for (uint i = 0; i < artPiece.creators.length; i++) {
```

   *GitHub* : [294](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L294),[306](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L306)
### [G-02]<a name="g-02"></a> ```require()```/```revert()``` strings longer than 32 bytes cost extra gas
Each extra memory word of bytes past the original 32 incurs an MSTORE which costs 3 gas.

*There are 21 instance(s) of this issue:*

```

129          require(
130              _auctionParams.creatorRateBps >= _auctionParams.minCreatorRateBps,
131              "Creator rate must be greater than or equal to the creator rate"
132          );


180          require(
181              msg.value >= _auction.amount + ((_auction.amount * minBidIncrementPercentage) / 100),
182              "Must send more than last bid by minBidIncrementPercentage amount"
183          );


218          require(
219              _creatorRateBps >= minCreatorRateBps,
220              "Creator rate must be greater than or equal to minCreatorRateBps"
221          );


222          require(_creatorRateBps <= 10_000, "Creator rate must be less than or equal to 10_000");


234          require(_minCreatorRateBps <= creatorRateBps, "Min creator rate must be less than or equal to creator rate");


235          require(_minCreatorRateBps <= 10_000, "Min creator rate must be less than or equal to 10_000");


238          require(
239              _minCreatorRateBps > minCreatorRateBps,
240              "Min creator rate must be greater than previous minCreatorRateBps"
241          );


254          require(_entropyRateBps <= 10_000, "Entropy rate must be less than or equal to 10_000");


311          require(gasleft() >= MIN_TOKEN_MINT_GAS_THRESHOLD, "Insufficient gas for creating auction");
```

   *GitHub* : [129](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L129-L132),[180](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L180-L183),[218](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L218-L221),[222](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L222),[234](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L234),[235](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L235),[238](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L238-L241),[254](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L254),[311](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L311)

```

120          require(_cultureIndexParams.erc721VotingTokenWeight > 0, "invalid erc721 voting token weight");


182          require(creatorArrayLength <= MAX_NUM_CREATORS, "Creator array must not be > MAX_NUM_CREATORS");


314          require(weight > minVoteWeight, "Weight must be greater than minVoteWeight");


499          require(newQuorumVotesBPS <= MAX_QUORUM_VOTES_BPS, "CultureIndex::_setQuorumVotesBPS: invalid quorum bps");


523          require(totalVoteWeights[piece.pieceId] >= piece.quorumVotes, "Does not meet quorum votes to be dropped.");
```

   *GitHub* : [120](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L120),[182](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L182),[314](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L314),[499](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L499),[523](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L523)

```

158          require(msg.sender != treasury && msg.sender != creatorsAddress, "Funds recipient cannot buy tokens");


255          require(etherAmount > 0, "Ether amount must be greater than 0");


272          require(paymentAmount > 0, "Payment amount must be greater than 0");


289          require(_entropyRateBps <= 10_000, "Entropy rate must be less than or equal to 10_000");


300          require(_creatorRateBps <= 10_000, "Creator rate must be less than or equal to 10_000");
```

   *GitHub* : [158](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L158),[255](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L255),[272](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L272),[289](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L289),[300](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L300)

```

140          require(_initialOwner != address(0), "Initial owner cannot be zero address");


286          require(
287              artPiece.creators.length <= cultureIndex.MAX_NUM_CREATORS(),
288              "Creator array must not be > MAX_NUM_CREATORS"
289          );
```

   *GitHub* : [140](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L140),[286](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L286-L289)
### [G-03]<a name="g-03"></a> Use alternative formulation in order to avoid NOT using AND instead of OR or vice versa
It's possible to change boolean formula in order to use AND instead of OR or vice versa.

In this way, ```>``` could be substituted with ```>=```, ```!=``` with ```==```

In general

#### Two variables

```
(a || b) = !(!(a || b)) = !(!a && !b)
```

| a   | b   | (a or b)  | !a and !b  | !(!a and !b)|
|:---:|:---:|:---------:|:----------:|:------------:|
| 0  | 0  | 0         | 1          | 0            |
| 0  | 1  | 1         | 0          | 1            |
| 1  | 0  | 1         | 0          | 1            |
| 1  | 1  | 1         | 0          | 1            |


#### Three variables

```
(a || b || c) = !(!(a || b || c)) = !(!a && !b && !c)
```

| a   | b   | c   | (a or b or c)  | !a and !b and !c  | !(!a and !b and !c)|
|:---:|:---:|:---:|:--------------:|:-----------------:|:------------------:|
| 0  | 0  | 0 | 0              | 1                 | 0                  |
| 0  | 0  | 1 | 1              | 0                 | 1                  |
| 0  | 1  | 0 | 1              | 0                 | 1                  |
| 0  | 1  | 1 | 1              | 0                 | 1                  |
| 1  | 0  | 0 | 1              | 0                 | 1                  |
| 1  | 0  | 1 | 1              | 0                 | 1                  |
| 1  | 1  | 0 | 1              | 0                 | 1                  |
| 1  | 1  | 1 | 1              | 0                 | 1                  |

*There are 5 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol)

```

104          if (posValue < leftValue || posValue < rightValue) {
105              if (leftValue > rightValue) {
106                  swap(pos, left);
107                  maxHeapify(left);
108              } else {
109                  swap(pos, right);
110                  maxHeapify(right);
111              }
112          }


125          while (current != 0 && valueMapping[heap[current]] > valueMapping[heap[parent(current)]]) {
126              swap(current, parent(current));
127              current = parent(current);
128          }


146              while (position != 0 && valueMapping[heap[position]] > valueMapping[heap[parent(position)]]) {
147                  swap(position, parent(position));
148                  position = parent(position);
149              }
```

   *GitHub* : [104](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L104-L112),[125](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L125-L128),[146](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L146-L149)
### [G-04]<a name="g-04"></a> Multiplication/division by 2 should use bit shifting
```<x> * 2``` is equivalent to ```<x> << 1``` and ```<x> / 2``` is the same as ```<x> >> 1```. The ```MUL``` and ```DIV``` opcodes cost 5 gas, whereas ```SHL``` and ```SHR``` only cost 3 gas.

*There are 4 instance(s) of this issue:*

```

80           return (pos - 1) / 2;


95           uint256 left = 2 * pos + 1;


96           uint256 right = 2 * pos + 2;


102          if (pos >= (size / 2) && pos <= size) return;
```

   *GitHub* : [80](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L80),[95](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L95),[96](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L96),[102](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L102)
### [G-05]<a name="g-05"></a> Internal functions only called once can be inlined to save gas
Not inlining costs 20 to 40 gas because of two extra JUMP instructions and additional stack operations needed for function calls.

*There are 3 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol)
### [G-06]<a name="g-06"></a> Splitting ```require()``` statements that use ```&&``` saves gas
Instead of using the ```&&``` operator in a single require statement to check multiple conditions, I suggest using multiple require statements with 1 condition per require statement (saving 3 gas per &).

See [this issue](https://github.com/code-423n4/2022-01-xdefi-findings/issues/128) which describes the fact that there is a larger deployment gas cost, but with enough runtime calls, the change ends up being cheaper.

*There are 3 instance(s) of this issue:*

```

160          require(uint8(metadata.mediaType) > 0 && uint8(metadata.mediaType) <= 5, "Invalid media type");


398          require(
399              len == pieceIds.length && len == deadline.length && len == v.length && len == r.length && len == s.length,
400              "Array lengths must match"
401          );
```

   *GitHub* : [160](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L160),[398](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L398-L401)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol)
### [G-07]<a name="g-07"></a> ```x += y``` costs more gas than ```x = x + y``` for state variables
```x += y``` costs more than ```x = x + y```
same as ```x -= y```

*There are 2 instance(s) of this issue:*

```

187          emittedTokenWad += totalTokensForBuyers;


188          if (totalTokensForCreators > 0) emittedTokenWad += totalTokensForCreators;
```

   *GitHub* : [187](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L187),[188](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L188)
### [G-08]<a name="g-08"></a> ```<array>.length``` should not be looked up in every loop of a ```for```-loop
The overheads outlined below are *PER LOOP*, excluding the first loop

storage arrays incur a Gwarmaccess (**100 gas**)
memory arrays use ```MLOAD``` (**3 gas**)
calldata arrays use ```CALLDATALOAD``` (****)
Caching the length changes each of these to a ```DUP<N>``` (**3 gas**), and gets rid of the extra ```DUP<N>``` needed to store the stack offset

*There are 2 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol)
### [G-09]<a name="g-09"></a> ```++i```/```i++``` should be ```unchecked{++i}```/```unchecked{i++}``` when it is not possible for them to overflow, as is the case when used in ```for```- and ```while```-loops
The ```unchecked``` keyword is new in solidity version 0.8.0, so this only applies to that version or higher, which these instances are. This saves 30-40 gas [per loop](https://gist.github.com/hrkrshnn/ee8fabd532058307229d65dcd5836ddc#the-increment-in-for-loop-post-condition-can-be-made-unchecked)

*There are 9 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol)

```

185          for (uint i; i < creatorArrayLength; i++) {


236          for (uint i; i < creatorArrayLength; i++) {


243          for (uint i; i < creatorArrayLength; i++) {


355          for (uint256 i; i < len; i++) {


403          for (uint256 i; i < len; i++) {


407          for (uint256 i; i < len; i++) {
```

   *GitHub* : [185](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L185),[236](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L236),[243](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L243),[355](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L355),[403](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L403),[407](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L407)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol)
### [G-10]<a name="g-10"></a> Using ```private``` rather than ```public``` for constants, saves gas
If needed, the values can be read from the verified contract source code, or if there are multiple values there can be a single getter function that [returns a tuple](https://github.com/code-423n4/2022-08-frax/blob/90f55a9ce4e25bceed3a74290b854341d8de6afa/src/contracts/FraxlendPair.sol#L156-L178) of the values of all currently-public constants. Saves *3406-3606* gas in deployment gas due to the compiler not having to create non-payable getter functions for deployment calldata, not having to store the bytes of the value outside of where it's used, and not adding another entry to the method ID table

*There are 11 instance(s) of this issue:*

```

85       IRevolutionBuilder public immutable manager;


88       uint32 public constant MIN_TOKEN_MINT_GAS_THRESHOLD = 750_000;
```

   *GitHub* : [85](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L85),[88](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L88)

```

29       bytes32 public constant VOTE_TYPEHASH =
30           keccak256("Vote(address from,uint256[] pieceIds,uint256 nonce,uint256 deadline)");


48       uint256 public constant MAX_QUORUM_VOTES_BPS = 6_000; // 6,000 basis points or 60%


75       uint256 public constant MAX_NUM_CREATORS = 100;
```

   *GitHub* : [29](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L29-L30),[48](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L48),[75](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L75)

```

23       uint256 public constant minPurchaseAmount = 0.0000001 ether;


24       uint256 public constant maxPurchaseAmount = 50_000 ether;
```

   *GitHub* : [23](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L23),[24](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L24)

```

16       int256 public immutable targetPrice;


18       int256 public immutable perTimeUnit;


20       int256 public immutable decayConstant;


22       int256 public immutable priceDecayPercent;
```

   *GitHub* : [16](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L16),[18](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L18),[20](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L20),[22](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L22)
### [G-11]<a name="g-11"></a> ```require()``` or ```revert()``` statements that check input arguments should be at the top of the function
Checks that involve constants should come before checks that involve state variables, function calls, and calculations. By doing these checks first, the function is able to revert before wasting a Gcoldsload (*2100 gas*) in a function that may ultimately revert in the unhappy case.

*There are 4 instance(s) of this issue:*

```

175          require(bidder != address(0), "Bidder cannot be zero address");


176          require(_auction.verbId == verbId, "Verb not up for auction");
```

   *GitHub* : [175](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L175),[176](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L176)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol)
### [G-12]<a name="g-12"></a> Use custom errors rather than ```revert()```/```require()``` strings to save gas
Custom errors are available from solidity version 0.8.4. Custom errors save [~50 gas](https://gist.github.com/IllIllI000/ad1bd0d29a0101b25e57c293b4b0c746) each time they're hit by [avoiding having to allocate and store the revert string](https://blog.soliditylang.org/2021/04/21/custom-errors/#errors-in-depth). Not defining the strings also save deployment gas

*There are 75 instance(s) of this issue:*

```

120          require(msg.sender == address(manager), "Only manager can initialize");


121          require(_weth != address(0), "WETH cannot be zero address");


129          require(
130              _auctionParams.creatorRateBps >= _auctionParams.minCreatorRateBps,
131              "Creator rate must be greater than or equal to the creator rate"
132          );


175          require(bidder != address(0), "Bidder cannot be zero address");


176          require(_auction.verbId == verbId, "Verb not up for auction");


178          require(block.timestamp < _auction.endTime, "Auction expired");


179          require(msg.value >= reservePrice, "Must send at least reservePrice");


180          require(
181              msg.value >= _auction.amount + ((_auction.amount * minBidIncrementPercentage) / 100),
182              "Must send more than last bid by minBidIncrementPercentage amount"
183          );


218          require(
219              _creatorRateBps >= minCreatorRateBps,
220              "Creator rate must be greater than or equal to minCreatorRateBps"
221          );


222          require(_creatorRateBps <= 10_000, "Creator rate must be less than or equal to 10_000");


234          require(_minCreatorRateBps <= creatorRateBps, "Min creator rate must be less than or equal to creator rate");


235          require(_minCreatorRateBps <= 10_000, "Min creator rate must be less than or equal to 10_000");


238          require(
239              _minCreatorRateBps > minCreatorRateBps,
240              "Min creator rate must be greater than previous minCreatorRateBps"
241          );


254          require(_entropyRateBps <= 10_000, "Entropy rate must be less than or equal to 10_000");


311          require(gasleft() >= MIN_TOKEN_MINT_GAS_THRESHOLD, "Insufficient gas for creating auction");


339          require(_auction.startTime != 0, "Auction hasn't begun");


340          require(!_auction.settled, "Auction has already been settled");


342          require(block.timestamp >= _auction.endTime, "Auction hasn't completed");
```

   *GitHub* : [120](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L120),[121](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L121),[129](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L129-L132),[175](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L175),[176](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L176),[178](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L178),[179](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L179),[180](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L180-L183),[218](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L218-L221),[222](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L222),[234](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L234),[235](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L235),[238](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L238-L241),[254](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L254),[311](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L311),[339](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L339),[340](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L340),[342](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L342)

```

117          require(msg.sender == address(manager), "Only manager can initialize");


119          require(_cultureIndexParams.quorumVotesBPS <= MAX_QUORUM_VOTES_BPS, "invalid quorum bps");


120          require(_cultureIndexParams.erc721VotingTokenWeight > 0, "invalid erc721 voting token weight");


121          require(_erc721VotingToken != address(0), "invalid erc721 voting token");


122          require(_erc20VotingToken != address(0), "invalid erc20 voting token");


160          require(uint8(metadata.mediaType) > 0 && uint8(metadata.mediaType) <= 5, "Invalid media type");


163              require(bytes(metadata.image).length > 0, "Image URL must be provided");


165              require(bytes(metadata.animationUrl).length > 0, "Animation URL must be provided");


167              require(bytes(metadata.text).length > 0, "Text must be provided");


182          require(creatorArrayLength <= MAX_NUM_CREATORS, "Creator array must not be > MAX_NUM_CREATORS");


186              require(creatorArray[i].creator != address(0), "Invalid creator address");


190          require(totalBps == 10_000, "Total BPS must sum up to 10,000");


308          require(pieceId < _currentPieceId, "Invalid piece ID");


309          require(voter != address(0), "Invalid voter address");


310          require(!pieces[pieceId].isDropped, "Piece has already been dropped");


311          require(!(votes[pieceId][voter].voterAddress != address(0)), "Already voted");


314          require(weight > minVoteWeight, "Weight must be greater than minVoteWeight");


398          require(
399              len == pieceIds.length && len == deadline.length && len == v.length && len == r.length && len == s.length,
400              "Array lengths must match"
401          );


427          require(deadline >= block.timestamp, "Signature expired");


452          require(pieceId < _currentPieceId, "Invalid piece ID");


462          require(pieceId < _currentPieceId, "Invalid piece ID");


487          require(maxHeap.size() > 0, "Culture index is empty");


499          require(newQuorumVotesBPS <= MAX_QUORUM_VOTES_BPS, "CultureIndex::_setQuorumVotesBPS: invalid quorum bps");


520          require(msg.sender == dropperAdmin, "Only dropper can drop pieces");


523          require(totalVoteWeights[piece.pieceId] >= piece.quorumVotes, "Does not meet quorum votes to be dropped.");
```

   *GitHub* : [117](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L117),[119](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L119),[120](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L120),[121](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L121),[122](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L122),[160](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L160),[163](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L163),[165](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L165),[167](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L167),[182](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L182),[186](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L186),[190](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L190),[308](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L308),[309](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L309),[310](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L310),[311](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L311),[314](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L314),[398](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L398-L401),[427](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L427),[452](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L452),[462](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L462),[487](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L487),[499](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L499),[520](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L520),[523](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L523)

```

91           require(msg.sender == address(manager), "Only manager can initialize");


96           require(_treasury != address(0), "Invalid treasury address");


158          require(msg.sender != treasury && msg.sender != creatorsAddress, "Funds recipient cannot buy tokens");


160          require(msg.value > 0, "Must send ether");


162          require(addresses.length == basisPointSplits.length, "Parallel arrays required");


192          require(success, "Transfer failed.");


197              require(success, "Transfer failed.");


217          require(bpsSum == 10_000, "bps must add up to 10_000");


238          require(amount > 0, "Amount must be greater than 0");


255          require(etherAmount > 0, "Ether amount must be greater than 0");


272          require(paymentAmount > 0, "Payment amount must be greater than 0");


289          require(_entropyRateBps <= 10_000, "Entropy rate must be less than or equal to 10_000");


300          require(_creatorRateBps <= 10_000, "Creator rate must be less than or equal to 10_000");


310          require(_creatorsAddress != address(0), "Invalid address");
```

   *GitHub* : [91](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L91),[96](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L96),[158](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L158),[160](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L160),[162](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L162),[192](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L192),[197](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L197),[217](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L217),[238](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L238),[255](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L255),[272](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L272),[289](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L289),[300](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L300),[310](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L310)

```

42           require(msg.sender == admin, "Sender is not the admin");


56           require(msg.sender == address(manager), "Only manager can initialize");


79           require(pos != 0, "Position should not be zero");


157          require(size > 0, "Heap is empty");


170          require(size > 0, "Heap is empty");
```

   *GitHub* : [42](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L42),[56](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L56),[79](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L79),[157](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L157),[170](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L170)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol)

```

76           require(!isMinterLocked, "Minter is locked");


84           require(!isCultureIndexLocked, "CultureIndex is locked");


92           require(!isDescriptorLocked, "Descriptor is locked");


100          require(msg.sender == minter, "Sender is not the minter");


137          require(msg.sender == address(manager), "Only manager can initialize");


139          require(_minter != address(0), "Minter cannot be zero address");


140          require(_initialOwner != address(0), "Initial owner cannot be zero address");


210          require(_minter != address(0), "Minter cannot be zero address");


274          require(verbId <= _currentVerbId, "Invalid piece ID");


286          require(
287              artPiece.creators.length <= cultureIndex.MAX_NUM_CREATORS(),
288              "Creator array must not be > MAX_NUM_CREATORS"
289          );


330          require(manager.isRegisteredUpgrade(_getImplementation(), _newImpl), "Invalid upgrade");
```

   *GitHub* : [76](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L76),[84](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L84),[92](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L92),[100](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L100),[137](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L137),[139](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L139),[140](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L140),[210](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L210),[274](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L274),[286](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L286-L289),[330](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L330)
### [G-13]<a name="g-13"></a> Functions guaranteed to revert when called by normal users can be marked ```payable```
If a function modifier such as ```onlyOwner``` is used, the function will revert if a normal user tries to pay the function. Marking the function as ```payable``` will lower the gas cost for legitimate callers because the compiler will not include checks for whether a payment was provided. The extra opcodes avoided are ```CALLVALUE```(2),```DUP1```(3),```ISZERO```(3),```PUSH2```(3),```JUMPI```(10),```PUSH1```(3),```DUP1```(3),```REVERT```(0),```JUMPDEST```(1),```POP```(2), which costs an average of about *21 gas per call* to the function, in addition to the extra deployment cost

We excluded internal and private function, because they cannot be payable (see [this](https://ethereum.stackexchange.com/questions/98473/can-a-payable-function-be-internal))

*There are 27 instance(s) of this issue:*

```

208      function pause() external override onlyOwner {


217      function setCreatorRateBps(uint256 _creatorRateBps) external onlyOwner {


233      function setMinCreatorRateBps(uint256 _minCreatorRateBps) external onlyOwner {


253      function setEntropyRateBps(uint256 _entropyRateBps) external onlyOwner {


265      function unpause() external override onlyOwner {


277      function setTimeBuffer(uint256 _timeBuffer) external override onlyOwner {


287      function setReservePrice(uint256 _reservePrice) external override onlyOwner {


297      function setMinBidIncrementPercentage(uint8 _minBidIncrementPercentage) external override onlyOwner {
```

   *GitHub* : [208](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L208),[217](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L217),[233](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L233),[253](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L253),[265](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L265),[277](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L277),[287](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L287),[297](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L297)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol)

```

132      function pause() external override onlyOwner {


141      function unpause() external override onlyOwner {


288      function setEntropyRateBps(uint256 _entropyRateBps) external onlyOwner {


299      function setCreatorRateBps(uint256 _creatorRateBps) external onlyOwner {


309      function setCreatorsAddress(address _creatorsAddress) external override onlyOwner nonReentrant {
```

   *GitHub* : [132](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L132),[141](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L141),[288](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L288),[299](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L299),[309](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L309)

```

119      function insert(uint256 itemId, uint256 value) public onlyAdmin {


136      function updateValue(uint256 itemId, uint256 newValue) public onlyAdmin {


156      function extractMax() external onlyAdmin returns (uint256, uint256) {
```

   *GitHub* : [119](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L119),[136](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L136),[156](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L156)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol)

```

169      function setContractURIHash(string memory newContractURIHash) external onlyOwner {


177      function mint() public override onlyMinter nonReentrant returns (uint256) {


184      function burn(uint256 verbId) public override onlyMinter nonReentrant {


209      function setMinter(address _minter) external override onlyOwner nonReentrant whenMinterNotLocked {


220      function lockMinter() external override onlyOwner whenMinterNotLocked {


230      function setDescriptor(
231          IDescriptorMinimal _descriptor
232      ) external override onlyOwner nonReentrant whenDescriptorNotLocked {


242      function lockDescriptor() external override onlyOwner whenDescriptorNotLocked {


252      function setCultureIndex(ICultureIndex _cultureIndex) external onlyOwner whenCultureIndexNotLocked nonReentrant {


262      function lockCultureIndex() external override onlyOwner whenCultureIndexNotLocked {
```

   *GitHub* : [169](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L169),[177](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L177),[184](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L184),[209](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L209),[220](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L220),[230](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L230-L232),[242](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L242),[252](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L252),[262](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L262)
### [G-14]<a name="g-14"></a> ```internal``` functions not called by the contract should be removed to save deployment gas
If the functions are required by an interface, the contract should inherit from that interface and use the ```override``` keyword

*There are 8 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol)

```

101      function _transfer(address from, address to, uint256 value) internal override {


141      function _approve(address owner, address spender, uint256 value) internal override {
```

   *GitHub* : [101](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L101),[141](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L141)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/TokenEmitter/TokenEmitterRewards.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol)
### [G-15]<a name="g-15"></a> Using `storage` instead of `memory` for structs/arrays saves gas
When fetching data from a storage location, assigning the data to a `memory` variable causes all fields of the struct/array to be read from storage, which incurs a Gcoldsload (**2100 gas**) for *each* field of the struct/array. If the fields are read from the new memory variable, they incur an additional `MLOAD` rather than a cheap stack read. Instead of declearing the variable with the `memory` keyword, declaring the variable with the `storage` keyword and caching any fields that need to be re-read in stack variables, will be much cheaper, only incuring the Gcoldsload for the fields actually read. The only time it makes sense to read the whole struct/array into a `memory` variable, is if the full struct/array is being returned by the function, is being passed to a function that requires `memory`, or if the array/struct is being read from another `memory` array/struct

We condider that structs/arrays have 2 fields

*There are 1 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol)
### [G-16]<a name="g-16"></a> State variables should be cached in stack variables rather than re-reading them from storage
The instances below point to the second+ access of a state variable within a function. Caching of a state variable replaces each Gwarmaccess (**100 gas**) with a much cheaper stack read. Other less obvious fixes/optimizations include having local memory caches of state variable structs, or having local caches of state variable contracts/addresses.

*There are 19 instance(s) of this issue:*

```

@audit: auction is called 1+3 times inside function createBid() (line 172 and 187, 188, 192)

172          IAuctionHouse.Auction memory _auction = auction;

187          auction.amount = msg.value;

188          auction.bidder = payable(bidder);

192          if (extended) auction.endTime = _auction.endTime = block.timestamp + timeBuffer;


@audit: timeBuffer is called 1+1 times inside function createBid() (line 191 and 192)

191          bool extended = _auction.endTime - block.timestamp < timeBuffer;

192          if (extended) auction.endTime = _auction.endTime = block.timestamp + timeBuffer;


@audit: minCreatorRateBps is called 1+1 times inside function setMinCreatorRateBps() (line 239 and 243)

239              _minCreatorRateBps > minCreatorRateBps,

243          minCreatorRateBps = _minCreatorRateBps;


@audit: auction is called 1+1 times inside function unpause() (line 268 and 268)

268          if (auction.startTime == 0 || auction.settled) {

268          if (auction.startTime == 0 || auction.settled) {


@audit: auction is called 1+1 times inside function _settleAuction() (line 337 and 344)

337          IAuctionHouse.Auction memory _auction = auction;

344          auction.settled = true;


@audit: verbs is called 1+5 times inside function _settleAuction() (line 355 and 359, 361, 370, 371, 385)

355              verbs.burn(_auction.verbId);

359                  verbs.burn(_auction.verbId);

361              else verbs.transferFrom(address(this), _auction.bidder, _auction.verbId);

370                  uint256 numCreators = verbs.getArtPieceById(_auction.verbId).creators.length;

371                  address deployer = verbs.getArtPieceById(_auction.verbId).sponsor;

385                          ICultureIndex.CreatorBps memory creator = verbs.getArtPieceById(_auction.verbId).creators[i];


@audit: entropyRateBps is called 1+1 times inside function _settleAuction() (line 383 and 390)

383                  if (creatorsShare > 0 && entropyRateBps > 0) {

390                          uint256 paymentAmount = (creatorsShare * entropyRateBps * creator.bps) / (10_000 * 10_000);


@audit: WETH is called 1+1 times inside function _safeTransferETHWithFallback() (line 435 and 438)

435              IWETH(WETH).deposit{ value: _amount }();

438              bool wethSuccess = IWETH(WETH).transfer(_to, _amount);
```

   *GitHub* : [192](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L192),[192](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L192),[243](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L243),[268](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L268),[344](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L344),[385](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L385),[390](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L390),[438](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L438)

```

@audit: quorumVotesBPS is called 1+1 times inside function initialize() (line 137 and 141)

137          quorumVotesBPS = _cultureIndexParams.quorumVotesBPS;

141          emit QuorumVotesBPSSet(quorumVotesBPS, _cultureIndexParams.quorumVotesBPS);


@audit: erc20VotingToken is called 1+1 times inside function createPiece() (line 227 and 230)

227              erc20VotingToken.totalSupply(),

230          newPiece.totalERC20Supply = erc20VotingToken.totalSupply();


@audit: maxHeap is called 1+1 times inside function topVotedPieceId() (line 487 and 489)

487          require(maxHeap.size() > 0, "Culture index is empty");

489          (uint256 pieceId, ) = maxHeap.getMax();


@audit: quorumVotesBPS is called 1+1 times inside function _setQuorumVotesBPS() (line 500 and 502)

500          emit QuorumVotesBPSSet(quorumVotesBPS, newQuorumVotesBPS);

502          quorumVotesBPS = newQuorumVotesBPS;
```

   *GitHub* : [141](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L141),[230](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L230),[489](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L489),[502](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L502)

```

@audit: treasury is called 1+1 times inside function buyToken() (line 158 and 191)

158          require(msg.sender != treasury && msg.sender != creatorsAddress, "Funds recipient cannot buy tokens");

191          (bool success, ) = treasury.call{ value: toPayTreasury }(new bytes(0));


@audit: creatorsAddress is called 1+3 times inside function buyToken() (line 158 and 196, 201, 202)

158          require(msg.sender != treasury && msg.sender != creatorsAddress, "Funds recipient cannot buy tokens");

196              (success, ) = creatorsAddress.call{ value: creatorDirectPayment }(new bytes(0));

201          if (totalTokensForCreators > 0 && creatorsAddress != address(0)) {

202              _mint(creatorsAddress, uint256(totalTokensForCreators));


@audit: emittedTokenWad is called 1+1 times inside function buyToken() (line 187 and 188)

187          emittedTokenWad += totalTokensForBuyers;

188          if (totalTokensForCreators > 0) emittedTokenWad += totalTokensForCreators;
```

   *GitHub* : [191](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L191),[202](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L202),[188](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L188)

```

@audit: size is called 1+1 times inside function maxHeapify() (line 102 and 102)

102          if (pos >= (size / 2) && pos <= size) return;

102          if (pos >= (size / 2) && pos <= size) return;


@audit: size is called 1+3 times inside function insert() (line 120 and 122, 124, 129)

120          heap[size] = itemId;

122          positionMapping[itemId] = size; // Update the position mapping

124          uint256 current = size;

129          size++;


@audit: size is called 1+1 times inside function extractMax() (line 157 and 160)

157          require(size > 0, "Heap is empty");

160          heap[0] = heap[--size];
```

   *GitHub* : [102](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L102),[129](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L129),[160](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L160)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol)
### [G-17]<a name="g-17"></a> Multiple accesses of a mapping should use a local variable cache
The instances below point to the second+ access of a value inside a mapping/array, within a function. Caching a mapping's value in a local `storage` or `calldata` variable when the value is accessed [multiple times](https://gist.github.com/IllIllI000/ec23a57daa30a8f8ca8b9681c8ccefb0), saves **~42 gas per access** due to not having to recalculate the key's keccak256 hash (Gkeccak256 - **30 gas**) and that calculation's associated stack operations. Caching an array's struct avoids recalculating the array offsets into memory/calldata

*There are 14 instance(s) of this issue:*

```

@audit: pieces is called 1+1 times inside function _vote() (lines 310 and 313)

310          require(!pieces[pieceId].isDropped, "Piece has already been dropped");

313          uint256 weight = _getPastVotes(voter, pieces[pieceId].creationBlock);


@audit: votes is called 1+1 times inside function _vote() (lines 311 and 316)

311          require(!(votes[pieceId][voter].voterAddress != address(0)), "Already voted");

316          votes[pieceId][voter] = Vote(voter, weight);


@audit: totalVoteWeights is called 1+1 times inside function _vote() (lines 317 and 319)

317          totalVoteWeights[pieceId] += weight;

319          uint256 totalWeight = totalVoteWeights[pieceId];


@audit: pieces is called 1+1 times inside function dropTopVotedPiece() (lines 526 and 533)

526          pieces[piece.pieceId].isDropped = true;

533          return pieces[piece.pieceId];
```

   *GitHub* : [313](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L313),[316](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L316),[319](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L319),[533](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L533)

```

@audit: heap is called 1+5 times inside function swap() (lines 87 and 87, 87, 87, 88, 88)

87           (heap[fpos], heap[spos]) = (heap[spos], heap[fpos]);

87           (heap[fpos], heap[spos]) = (heap[spos], heap[fpos]);

87           (heap[fpos], heap[spos]) = (heap[spos], heap[fpos]);

87           (heap[fpos], heap[spos]) = (heap[spos], heap[fpos]);

88           (positionMapping[heap[fpos]], positionMapping[heap[spos]]) = (fpos, spos);

88           (positionMapping[heap[fpos]], positionMapping[heap[spos]]) = (fpos, spos);


@audit: positionMapping is called 1+1 times inside function swap() (lines 88 and 88)

88           (positionMapping[heap[fpos]], positionMapping[heap[spos]]) = (fpos, spos);

88           (positionMapping[heap[fpos]], positionMapping[heap[spos]]) = (fpos, spos);


@audit: valueMapping is called 1+2 times inside function maxHeapify() (lines 98 and 99, 100)

98           uint256 posValue = valueMapping[heap[pos]];

99           uint256 leftValue = valueMapping[heap[left]];

100          uint256 rightValue = valueMapping[heap[right]];


@audit: heap is called 1+2 times inside function maxHeapify() (lines 98 and 99, 100)

98           uint256 posValue = valueMapping[heap[pos]];

99           uint256 leftValue = valueMapping[heap[left]];

100          uint256 rightValue = valueMapping[heap[right]];


@audit: heap is called 1+2 times inside function insert() (lines 120 and 125, 125)

120          heap[size] = itemId;

125          while (current != 0 && valueMapping[heap[current]] > valueMapping[heap[parent(current)]]) {

125          while (current != 0 && valueMapping[heap[current]] > valueMapping[heap[parent(current)]]) {


@audit: valueMapping is called 1+2 times inside function insert() (lines 121 and 125, 125)

121          valueMapping[itemId] = value; // Update the value mapping

125          while (current != 0 && valueMapping[heap[current]] > valueMapping[heap[parent(current)]]) {

125          while (current != 0 && valueMapping[heap[current]] > valueMapping[heap[parent(current)]]) {


@audit: valueMapping is called 1+3 times inside function updateValue() (lines 138 and 141, 146, 146)

138          uint256 oldValue = valueMapping[itemId];

141          valueMapping[itemId] = newValue;

146              while (position != 0 && valueMapping[heap[position]] > valueMapping[heap[parent(position)]]) {

146              while (position != 0 && valueMapping[heap[position]] > valueMapping[heap[parent(position)]]) {


@audit: heap is called 1+1 times inside function updateValue() (lines 146 and 146)

146              while (position != 0 && valueMapping[heap[position]] > valueMapping[heap[parent(position)]]) {

146              while (position != 0 && valueMapping[heap[position]] > valueMapping[heap[parent(position)]]) {


@audit: heap is called 1+2 times inside function extractMax() (lines 159 and 160, 160)

159          uint256 popped = heap[0];

160          heap[0] = heap[--size];

160          heap[0] = heap[--size];


@audit: heap is called 1+1 times inside function getMax() (lines 171 and 171)

171          return (heap[0], valueMapping[heap[0]]);

171          return (heap[0], valueMapping[heap[0]]);
```

   *GitHub* : [88](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L88),[88](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L88),[100](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L100),[100](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L100),[125](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L125),[125](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L125),[146](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L146),[146](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L146),[160](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L160),[171](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L171)
### [G-18]<a name="g-18"></a> Optimize names to save gas
`public`/`external` function names and `public` member variable names can be optimized to save gas. See [this](https://gist.github.com/IllIllI000/a5d8b486a8259f9f77891a919febd1a9) link for an example of how it works. Below are the interfaces/abstract contracts that can be optimized so that the most frequently-called functions use the least amount of gas possible during method lookup. Method IDs that have two leading zero bytes can save **128 gas** each during deployment, and renaming functions to have lower method IDs will save **22 gas** per call, [per sorted position shifted](https://medium.com/joyso/solidity-how-does-function-name-affect-gas-consumption-in-smart-contract-47d270d8ac92)

We computed `signature` and `method id` according to [this](https://medium.com/joyso/solidity-how-does-function-name-affect-gas-consumption-in-smart-contract-47d270d8ac92)

*There are 8 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol)
### [G-19]<a name="g-19"></a> Constructors can be marked `payable`
Payable functions cost less gas to execute, since the compiler does not have to add extra checks to ensure that a payment wasn't provided. A constructor can safely be marked as payable, since only the deployer would be able to pass funds, and the project itself would not pass any funds.

*There are 1 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol)
### [G-20]<a name="g-20"></a> Use assembly to emit events, in order to save gas
Using the [scratch space](https://github.com/Vectorized/solady/blob/30558f5402f02351b96eeb6eaf32bcea29773841/src/tokens/ERC1155.sol#L501-L504) for event arguments (two words or fewer) will save gas over needing Solidity's full abi memory expansion used for emitting normally.

*There are 21 instance(s) of this issue:*

```

199          if (extended) emit AuctionExtended(_auction.verbId, _auction.endTime);


225          emit CreatorRateBpsUpdated(_creatorRateBps);


245          emit MinCreatorRateBpsUpdated(_minCreatorRateBps);


257          emit EntropyRateBpsUpdated(_entropyRateBps);


280          emit AuctionTimeBufferUpdated(_timeBuffer);


290          emit AuctionReservePriceUpdated(_reservePrice);


300          emit AuctionMinBidIncrementPercentageUpdated(_minBidIncrementPercentage);
```

   *GitHub* : [199](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L199),[225](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L225),[245](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L245),[257](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L257),[280](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L280),[290](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L290),[300](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L300)

```

141          emit QuorumVotesBPSSet(quorumVotesBPS, _cultureIndexParams.quorumVotesBPS);


500          emit QuorumVotesBPSSet(quorumVotesBPS, newQuorumVotesBPS);


531          emit PieceDropped(piece.pieceId, msg.sender);
```

   *GitHub* : [141](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L141),[500](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L500),[531](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L531)

```

291          emit EntropyRateBpsUpdated(entropyRateBps = _entropyRateBps);


302          emit CreatorRateBpsUpdated(creatorRateBps = _creatorRateBps);


312          emit CreatorsAddressUpdated(creatorsAddress = _creatorsAddress);
```

   *GitHub* : [291](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L291),[302](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L302),[312](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L312)

```

186          emit VerbBurned(verbId);


213          emit MinterUpdated(_minter);


223          emit MinterLocked();


235          emit DescriptorUpdated(_descriptor);


245          emit DescriptorLocked();


255          emit CultureIndexUpdated(_cultureIndex);


265          emit CultureIndexLocked();


312              emit VerbCreated(verbId, artPiece);
```

   *GitHub* : [186](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L186),[213](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L213),[223](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L223),[235](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L235),[245](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L245),[255](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L255),[265](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L265),[312](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L312)
### [G-21]<a name="g-21"></a> Events should be emitted outside of loops
Emitting an event has an overhead of **375 gas**, which will be incurred on every iteration of the loop. It is cheaper to `emit` only [once](https://github.com/ethereum/EIPs/blob/adad5968fd6de29902174e0cb51c8fc3dceb9ab5/EIPS/eip-1155.md?plain=1#L68) after the loop has finished.

We condider at least two iteration of the loop

*There are 1 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol)
### [G-22]<a name="g-22"></a> Add `unchecked {}` for subtractions where the operands cannot underflow because of a previous `require()` or `if`-statement
`require(a <= b); x = b - a` => `require(a <= b); unchecked { x = b - a }`

*There are 5 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol)

```

177          uint256 creatorDirectPayment = ((msgValueRemaining - toPayTreasury) * entropyRateBps) / 10_000;


179          int totalTokensForCreators = ((msgValueRemaining - toPayTreasury) - creatorDirectPayment) > 0


180              ? getTokenQuoteForEther((msgValueRemaining - toPayTreasury) - creatorDirectPayment)
```

   *GitHub* : [177](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L177),[179](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L179),[180](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L180)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol)
### [G-23]<a name="g-23"></a> Avoid updating storage when the value hasn't changed
If the old value is equal to the new value, not re-storing the value will avoid a Gsreset (**2900 gas**), potentially at the expense of a Gcoldsload (**2100 gas**) or a Gwarmaccess (**100 gas**)

*There are 14 instance(s) of this issue:*

```

217      function setCreatorRateBps(uint256 _creatorRateBps) external onlyOwner {
218          require(
219              _creatorRateBps >= minCreatorRateBps,
220              "Creator rate must be greater than or equal to minCreatorRateBps"
221          );
222          require(_creatorRateBps <= 10_000, "Creator rate must be less than or equal to 10_000");
223          creatorRateBps = _creatorRateBps;
224  
225          emit CreatorRateBpsUpdated(_creatorRateBps);
226      }


233      function setMinCreatorRateBps(uint256 _minCreatorRateBps) external onlyOwner {
234          require(_minCreatorRateBps <= creatorRateBps, "Min creator rate must be less than or equal to creator rate");
235          require(_minCreatorRateBps <= 10_000, "Min creator rate must be less than or equal to 10_000");
236  
237          //ensure new min rate cannot be lower than previous min rate
238          require(
239              _minCreatorRateBps > minCreatorRateBps,
240              "Min creator rate must be greater than previous minCreatorRateBps"
241          );
242  
243          minCreatorRateBps = _minCreatorRateBps;
244  
245          emit MinCreatorRateBpsUpdated(_minCreatorRateBps);
246      }


253      function setEntropyRateBps(uint256 _entropyRateBps) external onlyOwner {
254          require(_entropyRateBps <= 10_000, "Entropy rate must be less than or equal to 10_000");
255  
256          entropyRateBps = _entropyRateBps;
257          emit EntropyRateBpsUpdated(_entropyRateBps);
258      }


277      function setTimeBuffer(uint256 _timeBuffer) external override onlyOwner {
278          timeBuffer = _timeBuffer;
279  
280          emit AuctionTimeBufferUpdated(_timeBuffer);
281      }


287      function setReservePrice(uint256 _reservePrice) external override onlyOwner {
288          reservePrice = _reservePrice;
289  
290          emit AuctionReservePriceUpdated(_reservePrice);
291      }


297      function setMinBidIncrementPercentage(uint8 _minBidIncrementPercentage) external override onlyOwner {
298          minBidIncrementPercentage = _minBidIncrementPercentage;
299  
300          emit AuctionMinBidIncrementPercentageUpdated(_minBidIncrementPercentage);
301      }
```

   *GitHub* : [217](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L217-L226),[233](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L233-L246),[253](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L253-L258),[277](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L277-L281),[287](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L287-L291),[297](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L297-L301)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol)

```

288      function setEntropyRateBps(uint256 _entropyRateBps) external onlyOwner {
289          require(_entropyRateBps <= 10_000, "Entropy rate must be less than or equal to 10_000");
290  
291          emit EntropyRateBpsUpdated(entropyRateBps = _entropyRateBps);
292      }


299      function setCreatorRateBps(uint256 _creatorRateBps) external onlyOwner {
300          require(_creatorRateBps <= 10_000, "Creator rate must be less than or equal to 10_000");
301  
302          emit CreatorRateBpsUpdated(creatorRateBps = _creatorRateBps);
303      }


309      function setCreatorsAddress(address _creatorsAddress) external override onlyOwner nonReentrant {
310          require(_creatorsAddress != address(0), "Invalid address");
311  
312          emit CreatorsAddressUpdated(creatorsAddress = _creatorsAddress);
313      }
```

   *GitHub* : [288](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L288-L292),[299](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L299-L303),[309](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L309-L313)

```

169      function setContractURIHash(string memory newContractURIHash) external onlyOwner {
170          _contractURIHash = newContractURIHash;
171      }


209      function setMinter(address _minter) external override onlyOwner nonReentrant whenMinterNotLocked {
210          require(_minter != address(0), "Minter cannot be zero address");
211          minter = _minter;
212  
213          emit MinterUpdated(_minter);
214      }


230      function setDescriptor(
231          IDescriptorMinimal _descriptor
232      ) external override onlyOwner nonReentrant whenDescriptorNotLocked {
233          descriptor = _descriptor;
234  
235          emit DescriptorUpdated(_descriptor);
236      }


252      function setCultureIndex(ICultureIndex _cultureIndex) external onlyOwner whenCultureIndexNotLocked nonReentrant {
253          cultureIndex = _cultureIndex;
254  
255          emit CultureIndexUpdated(_cultureIndex);
256      }
```

   *GitHub* : [169](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L169-L171),[209](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L209-L214),[230](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L230-L236),[252](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L252-L256)
### [G-24]<a name="g-24"></a> State variable read in a loop
The state variable should be cached in a local variable rather than reading it on every iteration of the for-loop, which will replace each Gwarmaccess (**100 gas**) with a much cheaper stack read.

*There are 2 instance(s) of this issue:*

```

385                          ICultureIndex.CreatorBps memory creator = verbs.getArtPieceById(_auction.verbId).creators[i];


390                          uint256 paymentAmount = (creatorsShare * entropyRateBps * creator.bps) / (10_000 * 10_000);
```

   *GitHub* : [385](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L385),[390](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L390)
### [G-25]<a name="g-25"></a> Add `unchecked` blocks for divisions where the operands cannot overflow
`uint` divisions can't overflow, while `int` divisions can overflow only in [one specific case](https://docs.soliditylang.org/en/latest/types.html#division).

Consider adding an `unchecked` block to have some [gas savings](https://gist.github.com/DadeKuma/3bc597338ae774b8b3bd43280d55271f).

*There are 19 instance(s) of this issue:*

```

181              msg.value >= _auction.amount + ((_auction.amount * minBidIncrementPercentage) / 100),


365                  uint256 auctioneerPayment = (_auction.amount * (10_000 - creatorRateBps)) / 10_000;


390                          uint256 paymentAmount = (creatorsShare * entropyRateBps * creator.bps) / (10_000 * 10_000);
```

   *GitHub* : [181](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L181),[365](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L365),[390](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L390)

```

234          newPiece.quorumVotes = (quorumVotesBPS * newPiece.totalVotesSupply) / 10_000;


511              (quorumVotesBPS * _calculateVoteWeight(erc20VotingToken.totalSupply(), erc721VotingToken.totalSupply())) /
512              10_000;
```

   *GitHub* : [234](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L234),[511](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L511-L512)

```

173          uint256 toPayTreasury = (msgValueRemaining * (10_000 - creatorRateBps)) / 10_000;


177          uint256 creatorDirectPayment = ((msgValueRemaining - toPayTreasury) * entropyRateBps) / 10_000;


212                  _mint(addresses[i], uint256((totalTokensForBuyers * int(basisPointSplits[i])) / 10_000));


279                  amount: int(((paymentAmount - computeTotalReward(paymentAmount)) * (10_000 - creatorRateBps)) / 10_000)
```

   *GitHub* : [173](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L173),[177](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L177),[212](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L212),[279](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L279)

```

80           return (pos - 1) / 2;


102          if (pos >= (size / 2) && pos <= size) return;
```

   *GitHub* : [80](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L80),[102](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L102)

```

44               (paymentAmountWei * BUILDER_REWARD_BPS) /
45               10_000 +


46               (paymentAmountWei * PURCHASE_REFERRAL_BPS) /
47               10_000 +


48               (paymentAmountWei * DEPLOYER_REWARD_BPS) /
49               10_000 +


50               (paymentAmountWei * REVOLUTION_REWARD_BPS) /
51               10_000;


57                   builderReferralReward: (paymentAmountWei * BUILDER_REWARD_BPS) / 10_000,


58                   purchaseReferralReward: (paymentAmountWei * PURCHASE_REFERRAL_BPS) / 10_000,


59                   deployerReward: (paymentAmountWei * DEPLOYER_REWARD_BPS) / 10_000,


60                   revolutionReward: (paymentAmountWei * REVOLUTION_REWARD_BPS) / 10_000
```

   *GitHub* : [44](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L44-L45),[46](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L46-L47),[48](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L48-L49),[50](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L50-L51),[57](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L57),[58](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L58),[59](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L59),[60](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L60)
### [G-26]<a name="g-26"></a> Simple checks for zero can be done using assembly to save gas
See [Solidity Assembly: Checking if an Address is 0 (Efficiently)](https://medium.com/@kalexotsu/solidity-assembly-checking-if-an-address-is-0-efficiently-d2bfe071331)

*There are 30 instance(s) of this issue:*

```

121          require(_weth != address(0), "WETH cannot be zero address");


175          require(bidder != address(0), "Bidder cannot be zero address");


195          if (lastBidder != address(0)) _safeTransferETHWithFallback(lastBidder, _auction.amount);


268          if (auction.startTime == 0 || auction.settled) {


339          require(_auction.startTime != 0, "Auction hasn't begun");


350              if (_auction.bidder != address(0)) {


358              if (_auction.bidder == address(0))
```

   *GitHub* : [121](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L121),[175](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L175),[195](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L195),[268](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L268),[339](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L339),[350](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L350),[358](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L358)

```

121          require(_erc721VotingToken != address(0), "invalid erc721 voting token");


122          require(_erc20VotingToken != address(0), "invalid erc20 voting token");


186              require(creatorArray[i].creator != address(0), "Invalid creator address");


257          return votes[pieceId][voter].voterAddress != address(0);


309          require(voter != address(0), "Invalid voter address");


311          require(!(votes[pieceId][voter].voterAddress != address(0)), "Already voted");


438          if (from == address(0)) revert ADDRESS_ZERO();


441          if (recoveredAddress == address(0) || recoveredAddress != from) revert INVALID_SIGNATURE();
```

   *GitHub* : [121](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L121),[122](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L122),[186](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L186),[257](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L257),[309](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L309),[311](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L311),[438](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L438),[441](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L441)

```

96           require(_treasury != address(0), "Invalid treasury address");


201          if (totalTokensForCreators > 0 && creatorsAddress != address(0)) {


310          require(_creatorsAddress != address(0), "Invalid address");
```

   *GitHub* : [96](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L96),[201](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L201),[310](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L310)

```

79           require(pos != 0, "Position should not be zero");


125          while (current != 0 && valueMapping[heap[current]] > valueMapping[heap[parent(current)]]) {


146              while (position != 0 && valueMapping[heap[position]] > valueMapping[heap[parent(position)]]) {
```

   *GitHub* : [79](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L79),[125](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L125),[146](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L146)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol)

```

30           if (_protocolRewards == address(0) || _revolutionRewardRecipient == address(0)) revert("Invalid Address Zero");


30           if (_protocolRewards == address(0) || _revolutionRewardRecipient == address(0)) revert("Invalid Address Zero");


74           if (builderReferral == address(0)) builderReferral = revolutionRewardRecipient;


76           if (deployer == address(0)) deployer = revolutionRewardRecipient;


78           if (purchaseReferral == address(0)) purchaseReferral = revolutionRewardRecipient;
```

   *GitHub* : [30](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L30),[30](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L30),[74](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L74),[76](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L76),[78](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L78)

```

139          require(_minter != address(0), "Minter cannot be zero address");


140          require(_initialOwner != address(0), "Initial owner cannot be zero address");


210          require(_minter != address(0), "Minter cannot be zero address");
```

   *GitHub* : [139](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L139),[140](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L140),[210](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L210)
### [G-27]<a name="g-27"></a> State variables only set in the constructor should be declared `immutable`
Accessing state variables within a function involves an SLOAD operation, but `immutable` variables can be accessed directly without the need of it, thus reducing gas costs. As these state variables are assigned only in the constructor, consider declaring them `immutable`.

*There are 5 instance(s) of this issue:*

```

66       uint256 public _currentPieceId;


72       mapping(uint256 => uint256) public totalVoteWeights;
```

   *GitHub* : [66](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L66),[72](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L72)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol)

```

60       uint256 private _currentVerbId;


66       mapping(uint256 => ICultureIndex.ArtPiece) public artPieces;
```

   *GitHub* : [60](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L60),[66](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L66)
### [G-28]<a name="g-28"></a> Avoid using state variable in emit
In scenarios where you have a memory, calldata variable or parameter with the same value as the state variable you should use the memory, calldata variable or parameter in the emit statement rather than state variable.

*There are 5 instance(s) of this issue:*

```

141          emit QuorumVotesBPSSet(quorumVotesBPS, _cultureIndexParams.quorumVotesBPS);


500          emit QuorumVotesBPSSet(quorumVotesBPS, newQuorumVotesBPS);
```

   *GitHub* : [141](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L141),[500](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L500)

```

291          emit EntropyRateBpsUpdated(entropyRateBps = _entropyRateBps);


302          emit CreatorRateBpsUpdated(creatorRateBps = _creatorRateBps);


312          emit CreatorsAddressUpdated(creatorsAddress = _creatorsAddress);
```

   *GitHub* : [291](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L291),[302](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L302),[312](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L312)
### [G-29]<a name="g-29"></a> Use v4.9.0 and above OpenZeppelin contracts
The v4.9.0 version of OpenZeppelin provides many small gas optimizations which could reduces the gas usage of your contracts. [See this](https://github.com/OpenZeppelin/openzeppelin-contracts/releases/tag/v4.9.0)

*There are 1 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol)
### [G-30]<a name="g-30"></a> Using bools for storage incurs overhead
Use uint256(1) and uint256(2) for true/false to avoid a Gwarmaccess (100 gas), and to avoid Gsset (20000 gas) when changing from â€˜falseâ€™ to â€˜trueâ€™, after having been â€˜trueâ€™ in the past.

*There are 3 instance(s) of this issue:*

```

51       bool public isMinterLocked;


54       bool public isCultureIndexLocked;


57       bool public isDescriptorLocked;
```

   *GitHub* : [51](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L51),[54](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L54),[57](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L57)
### [G-31]<a name="g-31"></a> Using do-while loop instead of for loop or while loop
Using do-while loop could save gas, if you're sure that *code inside loop will run at least once*. In this way, it could save at least one condition check gas cost.

See [10 Simple Ways to Save Gas with Solidity - 2.](https://medium.com/coinmonks/10-simple-ways-to-save-gas-with-solidity-f74cd2a59089)

*There are 9 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol)

```

185          for (uint i; i < creatorArrayLength; i++) {
186              require(creatorArray[i].creator != address(0), "Invalid creator address");
187              totalBps += creatorArray[i].bps;
188          }


236          for (uint i; i < creatorArrayLength; i++) {
237              newPiece.creators.push(creatorArray[i]);
238          }


243          for (uint i; i < creatorArrayLength; i++) {
244              emit PieceCreatorAdded(pieceId, creatorArray[i].creator, msg.sender, creatorArray[i].bps);
245          }


355          for (uint256 i; i < len; i++) {
356              _vote(pieceIds[i], from);
357          }


403          for (uint256 i; i < len; i++) {
404              if (!_verifyVoteSignature(from[i], pieceIds[i], deadline[i], v[i], r[i], s[i])) revert INVALID_SIGNATURE();
405          }


407          for (uint256 i; i < len; i++) {
408              _voteForMany(pieceIds[i], from[i]);
409          }
```

   *GitHub* : [185](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L185-L188),[236](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L236-L238),[243](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L243-L245),[355](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L355-L357),[403](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L403-L405),[407](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L407-L409)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol)
### [G-32]<a name="g-32"></a> `keccak256()` hash of literals should only be computed once
The result of the hash should be stored in an immutable variable, and the variable should be used instead. If the hash is being used as a part of a function selector, the cast to `bytes4` should also only be done once.

*There are 2 instance(s) of this issue:*

```

30           keccak256("Vote(address from,uint256[] pieceIds,uint256 nonce,uint256 deadline)");


431          voteHash = keccak256(abi.encode(VOTE_TYPEHASH, from, pieceIds, nonces[from]++, deadline));
```

   *GitHub* : [30](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L30),[431](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L431)
### [G-33]<a name="g-33"></a> Avoid contract existence checks by using low level calls
Prior to 0.8.10 the compiler inserted extra code, including EXTCODESIZE (100 gas), to check for contract existence for external function calls. In more recent solidity versions, the compiler will not insert these checks if the external call has a return value. Similar behavior can be achieved in earlier versions by using low-level calls, since low level calls never check for contract existence.

*There are 10 instance(s) of this issue:*

```

348          if (address(this).balance < reservePrice) {


370                  uint256 numCreators = verbs.getArtPieceById(_auction.verbId).creators.length;


371                  address deployer = verbs.getArtPieceById(_auction.verbId).sponsor;


385                          ICultureIndex.CreatorBps memory creator = verbs.getArtPieceById(_auction.verbId).creators[i];


421          if (address(this).balance < _amount) revert("Insufficient balance");


435              IWETH(WETH).deposit{ value: _amount }();


438              bool wethSuccess = IWETH(WETH).transfer(_to, _amount);
```

   *GitHub* : [348](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L348),[370](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L370),[371](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L371),[385](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L385),[421](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L421),[435](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L435),[438](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L438)

```

163              require(bytes(metadata.image).length > 0, "Image URL must be provided");


165              require(bytes(metadata.animationUrl).length > 0, "Animation URL must be provided");


167              require(bytes(metadata.text).length > 0, "Text must be provided");
```

   *GitHub* : [163](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L163),[165](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L165),[167](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L167)
### [G-34]<a name="g-34"></a> Use assembly to validate `msg.sender`
We can use assembly to efficiently validate msg.sender with the least amount of opcodes necessary. For more details check the following report [Here](https://code4rena.com/reports/2023-05-juicebox#g-06-use-assembly-to-validate-msgsender)

*There are 11 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol)

```

117          require(msg.sender == address(manager), "Only manager can initialize");


520          require(msg.sender == dropperAdmin, "Only dropper can drop pieces");
```

   *GitHub* : [117](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L117),[520](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L520)

```

91           require(msg.sender == address(manager), "Only manager can initialize");


158          require(msg.sender != treasury && msg.sender != creatorsAddress, "Funds recipient cannot buy tokens");


158          require(msg.sender != treasury && msg.sender != creatorsAddress, "Funds recipient cannot buy tokens");
```

   *GitHub* : [91](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L91),[158](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L158),[158](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L158)

```

42           require(msg.sender == admin, "Sender is not the admin");


56           require(msg.sender == address(manager), "Only manager can initialize");
```

   *GitHub* : [42](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L42),[56](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L56)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol)

```

100          require(msg.sender == minter, "Sender is not the minter");


137          require(msg.sender == address(manager), "Only manager can initialize");
```

   *GitHub* : [100](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L100),[137](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L137)### NonCritical Risk Issues


### [N-01]<a name="n-01"></a> The ```nonReentrant``` ```modifier``` should occur before all other modifiers
This is a best-practice to protect against reentrancy in other modifiers

*There are 7 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol)

```

177      function mint() public override onlyMinter nonReentrant returns (uint256) {
178          return _mintTo(minter);
179      }
180  


184      function burn(uint256 verbId) public override onlyMinter nonReentrant {
185          _burn(verbId);
186          emit VerbBurned(verbId);
187      }
188  


209      function setMinter(address _minter) external override onlyOwner nonReentrant whenMinterNotLocked {
210          require(_minter != address(0), "Minter cannot be zero address");
211          minter = _minter;
212  
213          emit MinterUpdated(_minter);
214      }
215  


230      function setDescriptor(
231          IDescriptorMinimal _descriptor
232      ) external override onlyOwner nonReentrant whenDescriptorNotLocked {
233          descriptor = _descriptor;
234  
235          emit DescriptorUpdated(_descriptor);
236      }
237  


252      function setCultureIndex(ICultureIndex _cultureIndex) external onlyOwner whenCultureIndexNotLocked nonReentrant {
253          cultureIndex = _cultureIndex;
254  
255          emit CultureIndexUpdated(_cultureIndex);
256      }
257  
```

  *GitHub* : [177](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L177-L180),[184](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L184-L188),[209](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L209-L215),[230](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L230-L237),[252](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L252-L257)
### [N-02]<a name="n-02"></a> Expressions for constant values such as a call to ```keccak256()```, should use ```immutable``` rather than ```constant```
While it **doesn't save any gas** because the compiler knows that developers often make this mistake, it's still best to use the right tool for the task at hand. There is a difference between ```constant``` variables and ```immutable``` variables, and they should each be used in their appropriate contexts. ```constants``` should be used for literal values written into the code, and ```immutable``` variables should be used for expressions, or values calculated in, or passed into the constructor.

*There are 1 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol)
### [N-03]<a name="n-03"></a> Use scientific notation (e.g. ```1e18```) rather than exponentiation (e.g. ```10**18```)
While the compiler knows to optimize away the exponentiation, it's still better coding practice to use idioms that do not require compiler optimization, if they exist

*There are 27 instance(s) of this issue:*

```

222          require(_creatorRateBps <= 10_000, "Creator rate must be less than or equal to 10_000");


235          require(_minCreatorRateBps <= 10_000, "Min creator rate must be less than or equal to 10_000");


254          require(_entropyRateBps <= 10_000, "Entropy rate must be less than or equal to 10_000");


365                  uint256 auctioneerPayment = (_auction.amount * (10_000 - creatorRateBps)) / 10_000;


365                  uint256 auctioneerPayment = (_auction.amount * (10_000 - creatorRateBps)) / 10_000;


390                          uint256 paymentAmount = (creatorsShare * entropyRateBps * creator.bps) / (10_000 * 10_000);


390                          uint256 paymentAmount = (creatorsShare * entropyRateBps * creator.bps) / (10_000 * 10_000);
```

  *GitHub* : [222](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L222),[235](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L235),[254](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L254),[365](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L365),[365](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L365),[390](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L390),[390](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L390)

```

190          require(totalBps == 10_000, "Total BPS must sum up to 10,000");


234          newPiece.quorumVotes = (quorumVotesBPS * newPiece.totalVotesSupply) / 10_000;


512              10_000;
```

  *GitHub* : [190](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L190),[234](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L234),[512](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L512)

```

173          uint256 toPayTreasury = (msgValueRemaining * (10_000 - creatorRateBps)) / 10_000;


173          uint256 toPayTreasury = (msgValueRemaining * (10_000 - creatorRateBps)) / 10_000;


177          uint256 creatorDirectPayment = ((msgValueRemaining - toPayTreasury) * entropyRateBps) / 10_000;


212                  _mint(addresses[i], uint256((totalTokensForBuyers * int(basisPointSplits[i])) / 10_000));


217          require(bpsSum == 10_000, "bps must add up to 10_000");


279                  amount: int(((paymentAmount - computeTotalReward(paymentAmount)) * (10_000 - creatorRateBps)) / 10_000)


279                  amount: int(((paymentAmount - computeTotalReward(paymentAmount)) * (10_000 - creatorRateBps)) / 10_000)


289          require(_entropyRateBps <= 10_000, "Entropy rate must be less than or equal to 10_000");


300          require(_creatorRateBps <= 10_000, "Creator rate must be less than or equal to 10_000");
```

  *GitHub* : [173](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L173),[173](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L173),[177](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L177),[212](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L212),[217](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L217),[279](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L279),[279](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L279),[289](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L289),[300](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L300)

```

45               10_000 +


47               10_000 +


49               10_000 +


51               10_000;


57                   builderReferralReward: (paymentAmountWei * BUILDER_REWARD_BPS) / 10_000,


58                   purchaseReferralReward: (paymentAmountWei * PURCHASE_REFERRAL_BPS) / 10_000,


59                   deployerReward: (paymentAmountWei * DEPLOYER_REWARD_BPS) / 10_000,


60                   revolutionReward: (paymentAmountWei * REVOLUTION_REWARD_BPS) / 10_000
```

  *GitHub* : [45](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L45),[47](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L47),[49](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L49),[51](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L51),[57](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L57),[58](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L58),[59](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L59),[60](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L60)
### [N-04]<a name="n-04"></a> Inconsistent spacing in comments
Some lines use ```// x``` and some use ```//x```. The instances below point out the usages that don't follow the majority, within each file. Therefore, with respect [NatFormat](https://docs.soliditylang.org/en/v0.8.20/natspec-format.html), we suggest to use only one space or same indentation for NatSpec comments.

*There are 27 instance(s) of this issue:*

```

174          //require bidder is valid address


177          //slither-disable-next-line timestamp


237          //ensure new min rate cannot be lower than previous min rate


341          //slither-disable-next-line timestamp


357              //If no one has bid, burn the Verb


360                  //If someone has bid, transfer the Verb to the winning bidder


367                  //Total amount of ether going to creator


373                  //Build arrays for erc20TokenEmitter.buyToken


377                  //Transfer auction amount to the DAO treasury


382                  //Transfer creator's share to the creator, for each creator, and build arrays for erc20TokenEmitter.buyToken


389                          //Calculate paymentAmount for specific creator based on BPS splits - same as multiplying by creatorDirectPayment


393                          //Transfer creator's share to the creator


398                  //Buy token from ERC20TokenEmitter for all the creators
```

  *GitHub* : [174](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L174),[177](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L177),[237](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L237),[341](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L341),[357](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L357),[360](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L360),[367](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L367),[373](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L373),[377](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L377),[382](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L382),[389](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L389),[393](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L393),[398](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L398)

```

181          //Require that creatorArray is not more than MAX_NUM_CREATORS to prevent gas limit issues


488          //slither-disable-next-line unused-return


525          //set the piece as dropped


528          //slither-disable-next-line unused-return
```

  *GitHub* : [181](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L181),[488](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L488),[525](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L525),[528](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L528)

```

157          //prevent treasury from paying itself


172          //Share of purchase amount to send to treasury


175          //Share of purchase amount to reserve for creators


176          //Ether directly sent to creators


178          //Tokens to emit to creators


186          //Transfer ETH to treasury and update emitted


190          //Deposit funds to treasury


194          //Transfer ETH to creators


200          //Mint tokens for creators


207          //Mint tokens to buyers
```

  *GitHub* : [157](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L157),[172](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L172),[175](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L175),[176](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L176),[178](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L178),[186](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L186),[190](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L190),[194](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L194),[200](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L200),[207](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L207)
### [N-05]<a name="n-05"></a> Lines are too long
Usually lines in source code are limited to 80 characters. Today's screens are much larger so it's reasonable to stretch this in some cases. The solidity style guide recommends a maximumum line length of 120 characters, so the lines below should be split when they reach that length.

*There are 20 instance(s) of this issue:*

```

149      // Can technically reenter via cross function reentrancies in _createAuction, auction, and pause, but those are only callable by the owner.


333       * @notice Settle an auction, finalizing the bid and paying out to the owner. Pays out to the creator and the owner based on the creatorRateBps and entropyRateBps.


382                  //Transfer creator's share to the creator, for each creator, and build arrays for erc20TokenEmitter.buyToken


389                          //Calculate paymentAmount for specific creator based on BPS splits - same as multiplying by creatorDirectPayment
```

  *GitHub* : [149](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L149),[333](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L333),[382](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L382),[389](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L389)

```

53       /// @notice The basis point number of votes in support of a art piece required in order for a quorum to be reached and for an art piece to be dropped.


197       * @param metadata The metadata associated with the art piece, including name, description, image, and optional animation URL.


198       * @param creatorArray An array of creators who contributed to the piece, along with their respective basis points that must sum up to 10,000.


304       * @dev Requires that the pieceId is valid, the voter has not already voted on this piece, and the weight is greater than the minimum vote weight.


329       * @dev Requires that the pieceId is valid, the voter has not already voted on this piece, and the weight is greater than the minimum vote weight.


339       * @dev Requires that the pieceIds are valid, the voter has not already voted on this piece, and the weight is greater than the minimum vote weight.


350       * @dev Requires that the pieceIds are valid, the voter has not already voted on this piece, and the weight is greater than the minimum vote weight.
```

  *GitHub* : [53](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L53),[197](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L197),[198](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L198),[304](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L304),[329](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L329),[339](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L339),[350](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L350)

```

146       * @notice A payable function that allows a user to buy tokens for a list of addresses and a list of basis points to split the token purchase between.


233       * @notice Returns the amount of wei that would be spent to buy an amount of tokens. Does not take into account the protocol rewards.


239          // Note: By using toDaysWadUnsafe(block.timestamp - startTime) we are establishing that 1 "unit of time" is 1 day.


250       * @notice Returns the amount of tokens that would be emitted for an amount of wei. Does not take into account the protocol rewards.


256          // Note: By using toDaysWadUnsafe(block.timestamp - startTime) we are establishing that 1 "unit of time" is 1 day.


267       * @notice Returns the amount of tokens that would be emitted for the payment amount, taking into account the protocol rewards.


273          // Note: By using toDaysWadUnsafe(block.timestamp - startTime) we are establishing that 1 "unit of time" is 1 day.
```

  *GitHub* : [146](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L146),[233](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L233),[239](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L239),[250](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L250),[256](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L256),[267](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L267),[273](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L273)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol)
### [N-06]<a name="n-06"></a> Imports could be organized more systematically
The contract's interface should be imported first, followed by each of the interfaces it uses, followed by all other files. We report only interface reports whose should be imported first

*There are 17 instance(s) of this issue:*

```

28   import { IAuctionHouse } from "./interfaces/IAuctionHouse.sol";


29   import { IVerbsToken } from "./interfaces/IVerbsToken.sol";


30   import { IWETH } from "./interfaces/IWETH.sol";


31   import { IERC20TokenEmitter } from "./interfaces/IERC20TokenEmitter.sol";


32   import { ICultureIndex } from "./interfaces/ICultureIndex.sol";


33   import { IRevolutionBuilder } from "./interfaces/IRevolutionBuilder.sol";
```

  *GitHub* : [28](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L28),[29](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L29),[30](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L30),[31](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L31),[32](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L32),[33](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L33)

```

10   import { IRevolutionBuilder } from "./interfaces/IRevolutionBuilder.sol";


14   import { ICultureIndex } from "./interfaces/ICultureIndex.sol";
```

  *GitHub* : [10](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L10),[14](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L14)

```

13   import { IERC20TokenEmitter } from "./interfaces/IERC20TokenEmitter.sol";


15   import { IRevolutionBuilder } from "./interfaces/IRevolutionBuilder.sol";
```

  *GitHub* : [13](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L13),[15](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L15)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol)

```

22   import { IERC721 } from "@openzeppelin/contracts/token/ERC721/IERC721.sol";


28   import { IDescriptorMinimal } from "./interfaces/IDescriptorMinimal.sol";


29   import { ICultureIndex } from "./interfaces/ICultureIndex.sol";


30   import { IVerbsToken } from "./interfaces/IVerbsToken.sol";


31   import { IRevolutionBuilder } from "./interfaces/IRevolutionBuilder.sol";
```

  *GitHub* : [22](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L22),[28](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L28),[29](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L29),[30](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L30),[31](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L31)
### [N-07]<a name="n-07"></a> Constants in comparisons should appear on the left side
Doing so will prevent [typo bugs](https://www.moserware.com/2008/01/constants-on-left-are-better-but-this.html)

*There are 7 instance(s) of this issue:*

```

268          if (auction.startTime == 0 || auction.settled) {


339          require(_auction.startTime != 0, "Auction hasn't begun");
```

  *GitHub* : [268](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L268),[339](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L339)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol)

```

79           require(pos != 0, "Position should not be zero");


125          while (current != 0 && valueMapping[heap[current]] > valueMapping[heap[parent(current)]]) {


146              while (position != 0 && valueMapping[heap[position]] > valueMapping[heap[parent(position)]]) {
```

  *GitHub* : [79](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L79),[125](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L125),[146](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L146)
### [N-08]<a name="n-08"></a> Variable names don't follow the Solidity style guide
For ```constant``` variable names, each word should use all capital letters, with underscores separating each word (CONSTANT_CASE)

*There are 2 instance(s) of this issue:*

```

23       uint256 public constant minPurchaseAmount = 0.0000001 ether;


24       uint256 public constant maxPurchaseAmount = 50_000 ether;
```

  *GitHub* : [23](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L23),[24](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L24)
### [N-09]<a name="n-09"></a> Consider using named mappings
Consider moving to solidity version 0.8.18 or later, and using [named mappings](https://ethereum.stackexchange.com/questions/51629/how-to-name-the-arguments-in-mapping/145555#145555)) to make it easier to understand the purpose of each mapping

*There are 9 instance(s) of this issue:*

```

33       mapping(address => uint256) public nonces;


63       mapping(uint256 => ArtPiece) public pieces;


69       mapping(uint256 => mapping(address => Vote)) public votes;


69       mapping(uint256 => mapping(address => Vote)) public votes;


72       mapping(uint256 => uint256) public totalVoteWeights;
```

  *GitHub* : [33](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L33),[63](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L63),[69](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L69),[69](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L69),[72](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L72)

```

65       mapping(uint256 => uint256) public heap;


70       mapping(uint256 => uint256) public valueMapping;


73       mapping(uint256 => uint256) public positionMapping;
```

  *GitHub* : [65](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L65),[70](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L70),[73](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L73)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol)
### [N-10]<a name="n-10"></a> ```public``` functions not called by the contract should be declared ```external``` instead
Contracts [are allowed](https://docs.soliditylang.org/en/latest/contracts.html#function-overriding) to override their parents' functions and change the visibility from ```external``` to ```public```.

*There are 19 instance(s) of this issue:*

```

209      function createPiece(
210          ArtPieceMetadata calldata metadata,
211          CreatorBps[] calldata creatorArray
212      ) public returns (uint256) {


332      function vote(uint256 pieceId) public nonReentrant {


342      function voteForMany(uint256[] calldata pieceIds) public nonReentrant {


451      function getPieceById(uint256 pieceId) public view returns (ArtPiece memory) {


461      function getVote(uint256 pieceId, address voter) public view returns (Vote memory) {


509      function quorumVotes() public view returns (uint256) {


519      function dropTopVotedPiece() public nonReentrant returns (ArtPiece memory) {
```

  *GitHub* : [209](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L209-L212),[332](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L332),[342](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L342),[451](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L451),[461](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L461),[509](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L509),[519](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L519)

```

112      function totalSupply() public view returns (uint) {


117      function decimals() public view returns (uint8) {


122      function balanceOf(address _owner) public view returns (uint) {


152      function buyToken(
153          address[] calldata addresses,
154          uint[] calldata basisPointSplits,
155          ProtocolRewardAddresses calldata protocolRewardsRecipients
156      ) public payable nonReentrant whenNotPaused returns (uint256 tokensSoldWad) {


237      function buyTokenQuote(uint256 amount) public view returns (int spentY) {
```

  *GitHub* : [112](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L112),[117](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L117),[122](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L122),[152](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L152-L156),[237](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L237)

```

55       function initialize(address _initialOwner, address _admin) public initializer {


119      function insert(uint256 itemId, uint256 value) public onlyAdmin {


136      function updateValue(uint256 itemId, uint256 newValue) public onlyAdmin {


169      function getMax() public view returns (uint256, uint256) {
```

  *GitHub* : [55](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L55),[119](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L119),[136](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L136),[169](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L169)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol)

```

161      function contractURI() public view returns (string memory) {


273      function getArtPieceById(uint256 verbId) public view returns (ICultureIndex.ArtPiece memory) {
```

  *GitHub* : [161](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L161),[273](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L273)
### [N-11]<a name="n-11"></a> ```constants``` should be defined rather than using magic numbers
Even [assembly](https://github.com/code-423n4/2022-05-opensea-seaport/blob/9d7ce4d08bf3c3010304a0476a785c70c0e90ae7/contracts/lib/TokenTransferrer.sol#L35-L39) can benefit from using readable constants instead of hex/numeric literals

*There are 34 instance(s) of this issue:*

```

181              msg.value >= _auction.amount + ((_auction.amount * minBidIncrementPercentage) / 100),


222          require(_creatorRateBps <= 10_000, "Creator rate must be less than or equal to 10_000");


235          require(_minCreatorRateBps <= 10_000, "Min creator rate must be less than or equal to 10_000");


254          require(_entropyRateBps <= 10_000, "Entropy rate must be less than or equal to 10_000");


365                  uint256 auctioneerPayment = (_auction.amount * (10_000 - creatorRateBps)) / 10_000;


365                  uint256 auctioneerPayment = (_auction.amount * (10_000 - creatorRateBps)) / 10_000;


390                          uint256 paymentAmount = (creatorsShare * entropyRateBps * creator.bps) / (10_000 * 10_000);


429              success := call(50000, _to, _amount, 0, 0, 0, 0)
```

  *GitHub* : [181](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L181),[222](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L222),[235](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L235),[254](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L254),[365](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L365),[365](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L365),[390](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L390),[429](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L429)

```

190          require(totalBps == 10_000, "Total BPS must sum up to 10,000");


234          newPiece.quorumVotes = (quorumVotesBPS * newPiece.totalVotesSupply) / 10_000;


285          return erc20Balance + (erc721Balance * erc721VotingTokenWeight * 1e18);


511              (quorumVotesBPS * _calculateVoteWeight(erc20VotingToken.totalSupply(), erc721VotingToken.totalSupply())) /
512              10_000;
```

  *GitHub* : [190](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L190),[234](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L234),[285](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L285),[511](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L511-L512)

```

173          uint256 toPayTreasury = (msgValueRemaining * (10_000 - creatorRateBps)) / 10_000;


173          uint256 toPayTreasury = (msgValueRemaining * (10_000 - creatorRateBps)) / 10_000;


177          uint256 creatorDirectPayment = ((msgValueRemaining - toPayTreasury) * entropyRateBps) / 10_000;


212                  _mint(addresses[i], uint256((totalTokensForBuyers * int(basisPointSplits[i])) / 10_000));


217          require(bpsSum == 10_000, "bps must add up to 10_000");


279                  amount: int(((paymentAmount - computeTotalReward(paymentAmount)) * (10_000 - creatorRateBps)) / 10_000)


279                  amount: int(((paymentAmount - computeTotalReward(paymentAmount)) * (10_000 - creatorRateBps)) / 10_000)


289          require(_entropyRateBps <= 10_000, "Entropy rate must be less than or equal to 10_000");


300          require(_creatorRateBps <= 10_000, "Creator rate must be less than or equal to 10_000");
```

  *GitHub* : [173](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L173),[173](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L173),[177](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L177),[212](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L212),[217](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L217),[279](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L279),[279](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L279),[289](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L289),[300](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L300)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol)

```

44               (paymentAmountWei * BUILDER_REWARD_BPS) /
45               10_000 +


46               (paymentAmountWei * PURCHASE_REFERRAL_BPS) /
47               10_000 +


48               (paymentAmountWei * DEPLOYER_REWARD_BPS) /
49               10_000 +


50               (paymentAmountWei * REVOLUTION_REWARD_BPS) /
51               10_000;


57                   builderReferralReward: (paymentAmountWei * BUILDER_REWARD_BPS) / 10_000,


58                   purchaseReferralReward: (paymentAmountWei * PURCHASE_REFERRAL_BPS) / 10_000,


59                   deployerReward: (paymentAmountWei * DEPLOYER_REWARD_BPS) / 10_000,


60                   revolutionReward: (paymentAmountWei * REVOLUTION_REWARD_BPS) / 10_000
```

  *GitHub* : [44](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L44-L45),[46](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L46-L47),[48](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L48-L49),[50](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L50-L51),[57](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L57),[58](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L58),[59](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L59),[60](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L60)

```

35           decayConstant = wadLn(1e18 - _priceDecayPercent);


74                                           wadPow(1e18 - priceDecayPercent, wadDiv(soldDifference, perTimeUnit))


91                       wadPow(1e18 - priceDecayPercent, timeSinceStart - unsafeWadDiv(sold, perTimeUnit)) -


92                           wadPow(1e18 - priceDecayPercent, timeSinceStart)
```

  *GitHub* : [35](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L35),[74](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L74),[91](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L91),[92](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L92)
### [N-12]<a name="n-12"></a> Top-level declarations should be separated by at least two lines
See [style guide](https://docs.soliditylang.org/en/v0.5.9/style-guide.html#blank-lines)

*There are 12 instance(s) of this issue:*

```

286      }
287  
288      function _getVotes(address account) internal view returns (uint256) {


290      }
291  
292      function _getPastVotes(address account, uint256 blockNumber) internal view returns (uint256) {
```

  *GitHub* : [286](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L286-L288),[290](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L290-L292)

```

106      }
107  
108      function _mint(address _to, uint256 _amount) private {


110      }
111  
112      function totalSupply() public view returns (uint) {


115      }
116  
117      function decimals() public view returns (uint8) {


120      }
121  
122      function balanceOf(address _owner) public view returns (uint) {
```

  *GitHub* : [106](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L106-L108),[110](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L110-L112),[115](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L115-L117),[120](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L120-L122)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol)

```

27       IRevolutionProtocolRewards internal immutable protocolRewards;
28   
29       constructor(address _protocolRewards, address _revolutionRewardRecipient) payable {


52       }
53   
54       function computePurchaseRewards(uint256 paymentAmountWei) public pure returns (RewardsSettings memory, uint256) {


64       }
65   
66       function _depositPurchaseRewards(
```

  *GitHub* : [27](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L27-L29),[52](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L52-L54),[64](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L64-L66)

```

5    
6    abstract contract TokenEmitterRewards is RewardSplits {
7        constructor(


10       ) payable RewardSplits(_protocolRewards, _revolutionRewardRecipient) {}
11   
12       function _handleRewardsAndGetValueToSend(
```

  *GitHub* : [5](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/TokenEmitter/TokenEmitterRewards.sol#L5-L7),[10](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/TokenEmitter/TokenEmitterRewards.sol#L10-L12)
### [N-13]<a name="n-13"></a> Events that mark critical parameter changes should contain both the old and the new value
This should especially be done if the new value is not required to be different from the old value

*There are 12 instance(s) of this issue:*

```

225          emit CreatorRateBpsUpdated(_creatorRateBps);


245          emit MinCreatorRateBpsUpdated(_minCreatorRateBps);


257          emit EntropyRateBpsUpdated(_entropyRateBps);


280          emit AuctionTimeBufferUpdated(_timeBuffer);


290          emit AuctionReservePriceUpdated(_reservePrice);


300          emit AuctionMinBidIncrementPercentageUpdated(_minBidIncrementPercentage);
```

  *GitHub* : [225](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L225),[245](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L245),[257](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L257),[280](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L280),[290](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L290),[300](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L300)

```

291          emit EntropyRateBpsUpdated(entropyRateBps = _entropyRateBps);


302          emit CreatorRateBpsUpdated(creatorRateBps = _creatorRateBps);


312          emit CreatorsAddressUpdated(creatorsAddress = _creatorsAddress);
```

  *GitHub* : [291](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L291),[302](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L302),[312](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L312)

```

213          emit MinterUpdated(_minter);


235          emit DescriptorUpdated(_descriptor);


255          emit CultureIndexUpdated(_cultureIndex);
```

  *GitHub* : [213](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L213),[235](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L235),[255](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L255)
### [N-14]<a name="n-14"></a> Variable names that consist of all capital letters should be reserved for ```constant```/```immutable``` variables
If the variable needs to be different based on which class it comes from, a ```view```/```pure``` function should be used instead (e.g. like [this](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/76eee35971c2541585e05cbf258510dda7b2fbc6/contracts/token/ERC20/extensions/draft-IERC20Permit.sol#L59)).

*There are 1 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol)
### [N-15]<a name="n-15"></a> Use ```@inheritdoc``` rather than using a non-standard annotation
Using a non-standard annotation could lead to mistakes and errors

*There are 1 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol)
### [N-16]<a name="n-16"></a> NatSpec ```@param``` is missing
Each param of the function should have ```@param``` in NatSpec description

*There are 26 instance(s) of this issue:*

```

@audit: _timeBuffer
273      /**
274       * @notice Set the auction time buffer.
275       * @dev Only callable by the owner.
276       */
277      function setTimeBuffer(uint256 _timeBuffer) external override onlyOwner {


@audit: _reservePrice
283      /**
284       * @notice Set the auction reserve price.
285       * @dev Only callable by the owner.
286       */
287      function setReservePrice(uint256 _reservePrice) external override onlyOwner {


@audit: _minBidIncrementPercentage
293      /**
294       * @notice Set the auction minimum bid increment percentage.
295       * @dev Only callable by the owner.
296       */
297      function setMinBidIncrementPercentage(uint8 _minBidIncrementPercentage) external override onlyOwner {
```

  *GitHub* : [273](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L273-L277),[283](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L283-L287),[293](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L293-L297)

```

@audit: blockNumber
269      /**
270       * @notice Returns the voting power of a voter at the current block.
271       * @param account The address of the voter.
272       * @return The voting power of the voter.
273       */
274      function getPastVotes(address account, uint256 blockNumber) external view override returns (uint256) {


@audit: voter
456      /**
457       * @notice Fetch the list of votes for a given art piece.
458       * @param pieceId The ID of the art piece.
459       * @return An array of Vote structs for the given art piece ID.
460       */
461      function getVote(uint256 pieceId, address voter) public view returns (Vote memory) {
```

  *GitHub* : [269](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L269-L274),[456](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L456-L461)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol)

```

@audit: _initialOwner, _name, _symbol
48       ///                                                          ///
49       ///                         INITIALIZER                      ///
50       ///                                                          ///
51   
52       function __NontransferableERC20Votes_init(
53           address _initialOwner,
54           string calldata _name,
55           string calldata _symbol
56       ) internal onlyInitializing {


@audit: None, None
91       /**
92        * @dev Not allowed
93        */
94       function transfer(address, uint256) public virtual override returns (bool) {


@audit: from, to, value
98       /**
99        * @dev Not allowed
100       */
101      function _transfer(address from, address to, uint256 value) internal override {


@audit: None, None, None
105      /**
106       * @dev Not allowed
107       */
108      function transferFrom(address, address, uint256) public virtual override returns (bool) {


@audit: None, None
112      /**
113       * @dev Not allowed
114       */
115      function approve(address, uint256) public virtual override returns (bool) {


@audit: account, value
119      /**
120       * @dev Creates a `value` amount of tokens and assigns them to `account`, by transferring it from address(0).
121       * Relies on the `_update` mechanism
122       *
123       * Emits a {Transfer} event with `from` set to the zero address.
124       *
125       * NOTE: This function is not virtual, {_update} should be overridden instead.
126       */
127      function _mint(address account, uint256 value) internal override {


@audit: owner, spender, value
138      /**
139       * @dev Not allowed
140       */
141      function _approve(address owner, address spender, uint256 value) internal override {


@audit: owner, spender, value, emitEvent
145      /**
146       * @dev Not allowed
147       */
148      function _approve(address owner, address spender, uint256 value, bool emitEvent) internal virtual override {


@audit: owner, spender, value
152      /**
153       * @dev Not allowed
154       */
155      function _spendAllowance(address owner, address spender, uint256 value) internal virtual override {
```

  *GitHub* : [48](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L48-L56),[91](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L91-L94),[98](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L98-L101),[105](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L105-L108),[112](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L112-L115),[119](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L119-L127),[138](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L138-L141),[145](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L145-L148),[152](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L152-L155)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol)

```

@audit: timeSinceStart, sold, amount
45       // y to pay
46       // given # of tokens sold and # to buy, returns amount to pay
47       function xToY(int256 timeSinceStart, int256 sold, int256 amount) public view virtual returns (int256) {


@audit: timeSinceStart, sold, amount
53       // given amount to pay and amount sold so far, returns # of tokens to sell - raw form
54       function yToX(int256 timeSinceStart, int256 sold, int256 amount) public view virtual returns (int256) {


@audit: timeSinceStart, sold
85       // given # of tokens sold, returns integral of price p(x) = p0 * (1 - k)^(x/r)
86       function pIntegral(int256 timeSinceStart, int256 sold) internal view returns (int256) {
```

  *GitHub* : [45](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L45-L47),[53](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L53-L54),[85](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L85-L86)

```

@audit: newContractURIHash
165      /**
166       * @notice Set the _contractURIHash.
167       * @dev Only callable by the owner.
168       */
169      function setContractURIHash(string memory newContractURIHash) external onlyOwner {


@audit: verbId
181      /**
182       * @notice Burn a verb.
183       */
184      function burn(uint256 verbId) public override onlyMinter nonReentrant {


@audit: tokenId
197      /**
198       * @notice Similar to `tokenURI`, but always serves a base64 encoded data URI
199       * with the JSON contents directly inlined.
200       */
201      function dataURI(uint256 tokenId) public view override returns (string memory) {


@audit: _minter
205      /**
206       * @notice Set the token minter.
207       * @dev Only callable by the owner when not locked.
208       */
209      function setMinter(address _minter) external override onlyOwner nonReentrant whenMinterNotLocked {


@audit: _descriptor
226      /**
227       * @notice Set the token URI descriptor.
228       * @dev Only callable by the owner when not locked.
229       */
230      function setDescriptor(
231          IDescriptorMinimal _descriptor
232      ) external override onlyOwner nonReentrant whenDescriptorNotLocked {


@audit: _cultureIndex
248      /**
249       * @notice Set the token CultureIndex.
250       * @dev Only callable by the owner when not locked.
251       */
252      function setCultureIndex(ICultureIndex _cultureIndex) external onlyOwner whenCultureIndexNotLocked nonReentrant {


@audit: to
278      /**
279       * @notice Mint a Verb with `verbId` to the provided `to` address. Pulls the top voted art piece from the CultureIndex.
280       */
281      function _mintTo(address to) internal returns (uint256) {
```

  *GitHub* : [165](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L165-L169),[181](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L181-L184),[197](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L197-L201),[205](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L205-L209),[226](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L226-L232),[248](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L248-L252),[278](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L278-L281)
### [N-17]<a name="n-17"></a> NatSpec ```@return``` argument is missing
Each return value of the function should have ```@return``` in NatSpec description

*There are 14 instance(s) of this issue:*

```

@audit: @audit Missing: '@return'
412      /// @notice Utility function to verify a signature for a specific vote
413      /// @param from Vote from this address
414      /// @param pieceIds Vote on this pieceId
415      /// @param deadline Deadline for the signature to be valid
416      /// @param v V component of signature
417      /// @param r R component of signature
418      /// @param s S component of signature
419      function _verifyVoteSignature(
420          address from,
421          uint256[] calldata pieceIds,
422          uint256 deadline,
423          uint8 v,
424          bytes32 r,
425          bytes32 s
426      ) internal returns (bool success) {


@audit: @audit Missing: '@return'
505      /**
506       * @notice Current quorum votes using ERC721 Total Supply, ERC721 Vote Weight, and ERC20 Total Supply
507       * Differs from `GovernerBravo` which uses fixed amount
508       */
509      function quorumVotes() public view returns (uint256) {
```

  *GitHub* : [412](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L412-L426),[505](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L505-L509)

```

@audit: @audit Missing: '@return'
74       /**
75        * @dev Returns the number of decimals used to get its user representation.
76        * For example, if `decimals` equals `2`, a balance of `505` tokens should
77        * be displayed to a user as `5.05` (`505 / 10 ** 2`).
78        *
79        * Tokens usually opt for a value of 18, imitating the relationship between
80        * Ether and Wei. This is the default value returned by this function, unless
81        * it's overridden.
82        *
83        * NOTE: This information is only used for _display_ purposes: it in
84        * no way affects any of the arithmetic of the contract, including
85        * {IERC20-balanceOf} and {IERC20-transfer}.
86        */
87       function decimals() public view virtual override returns (uint8) {


@audit: @audit Missing: '@return'
91       /**
92        * @dev Not allowed
93        */
94       function transfer(address, uint256) public virtual override returns (bool) {


@audit: @audit Missing: '@return'
105      /**
106       * @dev Not allowed
107       */
108      function transferFrom(address, address, uint256) public virtual override returns (bool) {


@audit: @audit Missing: '@return'
112      /**
113       * @dev Not allowed
114       */
115      function approve(address, uint256) public virtual override returns (bool) {
```

  *GitHub* : [74](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L74-L87),[91](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L91-L94),[105](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L105-L108),[112](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L112-L115)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol)

```

@audit: @audit Missing: '@return'
45       // y to pay
46       // given # of tokens sold and # to buy, returns amount to pay
47       function xToY(int256 timeSinceStart, int256 sold, int256 amount) public view virtual returns (int256) {


@audit: @audit Missing: '@return'
53       // given amount to pay and amount sold so far, returns # of tokens to sell - raw form
54       function yToX(int256 timeSinceStart, int256 sold, int256 amount) public view virtual returns (int256) {


@audit: @audit Missing: '@return'
85       // given # of tokens sold, returns integral of price p(x) = p0 * (1 - k)^(x/r)
86       function pIntegral(int256 timeSinceStart, int256 sold) internal view returns (int256) {
```

  *GitHub* : [45](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L45-L47),[53](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L53-L54),[85](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L85-L86)

```

@audit: @audit Missing: '@return'
158      /**
159       * @notice The IPFS URI of contract-level metadata.
160       */
161      function contractURI() public view returns (string memory) {


@audit: @audit Missing: '@return'
173      /**
174       * @notice Mint a Verb to the minter.
175       * @dev Call _mintTo with the to address(es).
176       */
177      function mint() public override onlyMinter nonReentrant returns (uint256) {


@audit: @audit Missing: '@return'
197      /**
198       * @notice Similar to `tokenURI`, but always serves a base64 encoded data URI
199       * with the JSON contents directly inlined.
200       */
201      function dataURI(uint256 tokenId) public view override returns (string memory) {


@audit: @audit Missing: '@return'
278      /**
279       * @notice Mint a Verb with `verbId` to the provided `to` address. Pulls the top voted art piece from the CultureIndex.
280       */
281      function _mintTo(address to) internal returns (uint256) {
```

  *GitHub* : [158](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L158-L161),[173](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L173-L177),[197](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L197-L201),[278](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L278-L281)
### [N-18]<a name="n-18"></a> NatSpec documentation for function is missing
There are functions without documentation

*There are 12 instance(s) of this issue:*

```

288      function _getVotes(address account) internal view returns (uint256) {


292      function _getPastVotes(address account, uint256 blockNumber) internal view returns (uint256) {
```

  *GitHub* : [288](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L288),[292](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L292)

```

108      function _mint(address _to, uint256 _amount) private {


112      function totalSupply() public view returns (uint) {


117      function decimals() public view returns (uint8) {


122      function balanceOf(address _owner) public view returns (uint) {
```

  *GitHub* : [108](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L108),[112](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L112),[117](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L117),[122](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L122)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol)

```

29       constructor(address _protocolRewards, address _revolutionRewardRecipient) payable {


54       function computePurchaseRewards(uint256 paymentAmountWei) public pure returns (RewardsSettings memory, uint256) {


66       function _depositPurchaseRewards(
67           uint256 paymentAmountWei,
68           address builderReferral,
69           address purchaseReferral,
70           address deployer
71       ) internal returns (uint256) {
```

  *GitHub* : [29](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L29),[54](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L54),[66](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L66-L71)

```

7        constructor(
8            address _protocolRewards,
9            address _revolutionRewardRecipient
10       ) payable RewardSplits(_protocolRewards, _revolutionRewardRecipient) {}


12       function _handleRewardsAndGetValueToSend(
13           uint256 msgValue,
14           address builderReferral,
15           address purchaseReferral,
16           address deployer
17       ) internal returns (uint256) {
```

  *GitHub* : [7](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/TokenEmitter/TokenEmitterRewards.sol#L7-L10),[12](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/TokenEmitter/TokenEmitterRewards.sol#L12-L17)
### [N-19]<a name="n-19"></a> Empty Function Body. Considering commenting why.
There are empty functions without documentation. Some could have calls to base contracts, so the empty function body cannot be removed. We highlighted them (see [this](https://github.com/code-423n4/2023-08-arbitrum/blob/main/bot-report.md#d10-empty-function-body))

*There are 1 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/TokenEmitter/TokenEmitterRewards.sol)
### [N-20]<a name="n-20"></a> Function ordering does not follow the Solidity style guide
According to the [Solidity style guide](https://docs.soliditylang.org/en/v0.8.17/style-guide.html#order-of-functions), functions should be laid out in the following order :```constructor()```, ```receive()```, ```fallback()```, ```external```, ```public```, ```internal```, ```private```, but the cases below do not follow this pattern

*There are 6 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol)
### [N-21]<a name="n-21"></a> Contract does not follow the Solidity style guide's suggested layout ordering
The [style guide](https://docs.soliditylang.org/en/v0.8.16/style-guide.html#order-of-layout) says that, within a contract, the ordering should be 1) Type declarations, 2) State variables, 3) Events, 4) Modifiers, and 5) Functions, but the contract(s) below do not follow this ordering

*There are 2 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol)
### [N-22]<a name="n-22"></a> Constant redefined elsewhere
Consider defining in only one contract so that values cannot become out of sync when only one location is updated. A [cheap way](https://medium.com/coinmonks/gas-cost-of-solidity-library-functions-dbe0cedd4678) to store constants in a single location is to create an internal constant in a library. If the variable is a local cache of another contract's value, consider making the cache variable internal or private, which will require external users to query the contract with the source of truth, so that callers don't get out of sync.

*There are 1 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol)
### [N-23]<a name="n-23"></a> Duplicated ```require()```/```revert()``` checks should be refactored to a modifier or function
The compiler will inline the function, which will avoid ```JUMP``` instructions usually associated with functions

*There are 4 instance(s) of this issue:*

```

452          require(pieceId < _currentPieceId, "Invalid piece ID");


462          require(pieceId < _currentPieceId, "Invalid piece ID");
```

  *GitHub* : [452](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L452),[462](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L462)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol)
### [N-24]<a name="n-24"></a> Control structures do not follow the Solidity Style Guide
See the [control structures](https://docs.soliditylang.org/en/latest/style-guide.html#control-structures) section of the Solidity Style Guide

*There are 74 instance(s) of this issue:*

```

39   contract AuctionHouse is
40       IAuctionHouse,
41       VersionedContract,
42       UUPS,
43       PausableUpgradeable,
44       ReentrancyGuardUpgradeable,
45       Ownable2StepUpgradeable
46   {
47       // The Verbs ERC721 token contract


95       constructor(address _manager) payable initializer {


113      function initialize(
114          address _erc721Token,
115          address _erc20TokenEmitter,
116          address _initialOwner,
117          address _weth,
118          IRevolutionBuilder.AuctionParams calldata _auctionParams
119      ) external initializer {


152      function settleCurrentAndCreateNewAuction() external override nonReentrant whenNotPaused {


161      function settleAuction() external override whenPaused nonReentrant {


171      function createBid(uint256 verbId, address bidder) external payable override nonReentrant {


208      function pause() external override onlyOwner {


217      function setCreatorRateBps(uint256 _creatorRateBps) external onlyOwner {


233      function setMinCreatorRateBps(uint256 _minCreatorRateBps) external onlyOwner {


253      function setEntropyRateBps(uint256 _entropyRateBps) external onlyOwner {


265      function unpause() external override onlyOwner {


277      function setTimeBuffer(uint256 _timeBuffer) external override onlyOwner {


287      function setReservePrice(uint256 _reservePrice) external override onlyOwner {


297      function setMinBidIncrementPercentage(uint8 _minBidIncrementPercentage) external override onlyOwner {


309      function _createAuction() internal {


336      function _settleAuction() internal {


419      function _safeTransferETHWithFallback(address _to, uint256 _amount) private {


452      function _authorizeUpgrade(address _newImpl) internal view override onlyOwner whenPaused {
```

  *GitHub* : [39](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L39-L47),[95](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L95),[113](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L113-L119),[152](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L152),[161](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L161),[171](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L171),[208](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L208),[217](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L217),[233](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L233),[253](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L253),[265](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L265),[277](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L277),[287](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L287),[297](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L297),[309](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L309),[336](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L336),[419](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L419),[452](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L452)

```

20   contract CultureIndex is
21       ICultureIndex,
22       VersionedContract,
23       UUPS,
24       Ownable2StepUpgradeable,
25       ReentrancyGuardUpgradeable,
26       EIP712Upgradeable
27   {
28       /// @notice The EIP-712 typehash for gasless votes


92       constructor(address _manager) payable initializer {


109      function initialize(
110          address _erc20VotingToken,
111          address _erc721VotingToken,
112          address _initialOwner,
113          address _maxHeap,
114          address _dropperAdmin,
115          IRevolutionBuilder.CultureIndexParams memory _cultureIndexParams
116      ) external initializer {


159      function validateMediaType(ArtPieceMetadata calldata metadata) internal pure {


209      function createPiece(
210          ArtPieceMetadata calldata metadata,
211          CreatorBps[] calldata creatorArray
212      ) public returns (uint256) {


307      function _vote(uint256 pieceId, address voter) internal {


332      function vote(uint256 pieceId) public nonReentrant {


342      function voteForMany(uint256[] calldata pieceIds) public nonReentrant {


353      function _voteForMany(uint256[] calldata pieceIds, address from) internal {


367      function voteForManyWithSig(
368          address from,
369          uint256[] calldata pieceIds,
370          uint256 deadline,
371          uint8 v,
372          bytes32 r,
373          bytes32 s
374      ) external nonReentrant {


389      function batchVoteForManyWithSig(
390          address[] memory from,
391          uint256[][] calldata pieceIds,
392          uint256[] memory deadline,
393          uint8[] memory v,
394          bytes32[] memory r,
395          bytes32[] memory s
396      ) external nonReentrant {


419      function _verifyVoteSignature(
420          address from,
421          uint256[] calldata pieceIds,
422          uint256 deadline,
423          uint8 v,
424          bytes32 r,
425          bytes32 s
426      ) internal returns (bool success) {


498      function _setQuorumVotesBPS(uint256 newQuorumVotesBPS) external onlyOwner {


543      function _authorizeUpgrade(address _newImpl) internal view override onlyOwner {
```

  *GitHub* : [20](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L20-L28),[92](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L92),[109](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L109-L116),[159](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L159),[209](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L209-L212),[307](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L307),[332](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L332),[342](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L342),[353](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L353),[367](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L367-L374),[389](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L389-L396),[419](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L419-L426),[498](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L498),[543](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L543)

```

17   contract ERC20TokenEmitter is
18       IERC20TokenEmitter,
19       ReentrancyGuardUpgradeable,
20       TokenEmitterRewards,
21       Ownable2StepUpgradeable,
22       PausableUpgradeable
23   {
24       // treasury address to pay funds to


64       constructor(
65           address _manager,
66           address _protocolRewards,
67           address _protocolFeeRecipient
68       ) payable TokenEmitterRewards(_protocolRewards, _protocolFeeRecipient) initializer {


84       function initialize(
85           address _initialOwner,
86           address _erc20Token,
87           address _treasury,
88           address _vrgdac,
89           address _creatorsAddress
90       ) external initializer {


108      function _mint(address _to, uint256 _amount) private {


132      function pause() external override onlyOwner {


141      function unpause() external override onlyOwner {


152      function buyToken(
153          address[] calldata addresses,
154          uint[] calldata basisPointSplits,
155          ProtocolRewardAddresses calldata protocolRewardsRecipients
156      ) public payable nonReentrant whenNotPaused returns (uint256 tokensSoldWad) {


288      function setEntropyRateBps(uint256 _entropyRateBps) external onlyOwner {


299      function setCreatorRateBps(uint256 _creatorRateBps) external onlyOwner {


309      function setCreatorsAddress(address _creatorsAddress) external override onlyOwner nonReentrant {
```

  *GitHub* : [17](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L17-L24),[64](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L64-L68),[84](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L84-L90),[108](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L108),[132](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L132),[141](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L141),[152](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L152-L156),[288](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L288),[299](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L299),[309](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L309)

```

30       constructor(address _manager) payable initializer {


55       function initialize(address _initialOwner, address _admin) public initializer {


86       function swap(uint256 fpos, uint256 spos) private {


94       function maxHeapify(uint256 pos) internal {


119      function insert(uint256 itemId, uint256 value) public onlyAdmin {


136      function updateValue(uint256 itemId, uint256 newValue) public onlyAdmin {


181      function _authorizeUpgrade(address _newImpl) internal view override onlyOwner {
```

  *GitHub* : [30](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L30),[55](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L55),[86](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L86),[94](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L94),[119](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L119),[136](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L136),[181](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L181)

```

44       constructor(address _manager) payable initializer {


52       function __NontransferableERC20Votes_init(
53           address _initialOwner,
54           string calldata _name,
55           string calldata _symbol
56       ) internal onlyInitializing {


65       function initialize(
66           address _initialOwner,
67           IRevolutionBuilder.ERC20TokenParams calldata _erc20TokenParams
68       ) external initializer {


101      function _transfer(address from, address to, uint256 value) internal override {


127      function _mint(address account, uint256 value) internal override {


134      function mint(address account, uint256 amount) public onlyOwner {


141      function _approve(address owner, address spender, uint256 value) internal override {


148      function _approve(address owner, address spender, uint256 value, bool emitEvent) internal virtual override {


155      function _spendAllowance(address owner, address spender, uint256 value) internal virtual override {
```

  *GitHub* : [44](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L44),[52](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L52-L56),[65](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L65-L68),[101](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L101),[127](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L127),[134](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L134),[141](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L141),[148](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L148),[155](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L155)

```

29       constructor(address _protocolRewards, address _revolutionRewardRecipient) payable {


66       function _depositPurchaseRewards(
67           uint256 paymentAmountWei,
68           address builderReferral,
69           address purchaseReferral,
70           address deployer
71       ) internal returns (uint256) {
```

  *GitHub* : [29](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L29),[66](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L66-L71)

```

7        constructor(
8            address _protocolRewards,
9            address _revolutionRewardRecipient
10       ) payable RewardSplits(_protocolRewards, _revolutionRewardRecipient) {}


12       function _handleRewardsAndGetValueToSend(
13           uint256 msgValue,
14           address builderReferral,
15           address purchaseReferral,
16           address deployer
17       ) internal returns (uint256) {
```

  *GitHub* : [7](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/TokenEmitter/TokenEmitterRewards.sol#L7-L10),[12](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/TokenEmitter/TokenEmitterRewards.sol#L12-L17)

```

33   contract VerbsToken is
34       IVerbsToken,
35       VersionedContract,
36       UUPS,
37       Ownable2StepUpgradeable,
38       ReentrancyGuardUpgradeable,
39       ERC721CheckpointableUpgradeable
40   {
41       // An address who has permissions to mint Verbs


116      constructor(address _manager) payable initializer {


130      function initialize(
131          address _minter,
132          address _initialOwner,
133          address _descriptor,
134          address _cultureIndex,
135          IRevolutionBuilder.ERC721TokenParams memory _erc721TokenParams
136      ) external initializer {


169      function setContractURIHash(string memory newContractURIHash) external onlyOwner {


184      function burn(uint256 verbId) public override onlyMinter nonReentrant {


209      function setMinter(address _minter) external override onlyOwner nonReentrant whenMinterNotLocked {


220      function lockMinter() external override onlyOwner whenMinterNotLocked {


230      function setDescriptor(
231          IDescriptorMinimal _descriptor
232      ) external override onlyOwner nonReentrant whenDescriptorNotLocked {


242      function lockDescriptor() external override onlyOwner whenDescriptorNotLocked {


252      function setCultureIndex(ICultureIndex _cultureIndex) external onlyOwner whenCultureIndexNotLocked nonReentrant {


262      function lockCultureIndex() external override onlyOwner whenCultureIndexNotLocked {


328      function _authorizeUpgrade(address _newImpl) internal view override onlyOwner {
```

  *GitHub* : [33](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L33-L41),[116](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L116),[130](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L130-L136),[169](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L169),[184](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L184),[209](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L209),[220](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L220),[230](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L230-L232),[242](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L242),[252](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L252),[262](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L262),[328](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L328)
### [N-25]<a name="n-25"></a> Events are missing sender information
When an action is triggered based on a user's action, not being able to filter based on who triggered the action makes event processing a lot more cumbersome. Including the msg.sender the events of these types of action will make events much more useful to end users, especially when ```msg.sender``` is not ```tx.origin```.

*There are 18 instance(s) of this issue:*

```

199          if (extended) emit AuctionExtended(_auction.verbId, _auction.endTime);


225          emit CreatorRateBpsUpdated(_creatorRateBps);


245          emit MinCreatorRateBpsUpdated(_minCreatorRateBps);


257          emit EntropyRateBpsUpdated(_entropyRateBps);


280          emit AuctionTimeBufferUpdated(_timeBuffer);


290          emit AuctionReservePriceUpdated(_reservePrice);


300          emit AuctionMinBidIncrementPercentageUpdated(_minBidIncrementPercentage);


413          emit AuctionSettled(_auction.verbId, _auction.bidder, _auction.amount, creatorTokensEmitted);
```

  *GitHub* : [199](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L199),[225](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L225),[245](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L245),[257](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L257),[280](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L280),[290](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L290),[300](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L300),[413](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L413)

```

141          emit QuorumVotesBPSSet(quorumVotesBPS, _cultureIndexParams.quorumVotesBPS);


500          emit QuorumVotesBPSSet(quorumVotesBPS, newQuorumVotesBPS);
```

  *GitHub* : [141](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L141),[500](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L500)

```

291          emit EntropyRateBpsUpdated(entropyRateBps = _entropyRateBps);


302          emit CreatorRateBpsUpdated(creatorRateBps = _creatorRateBps);


312          emit CreatorsAddressUpdated(creatorsAddress = _creatorsAddress);
```

  *GitHub* : [291](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L291),[302](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L302),[312](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L312)

```

213          emit MinterUpdated(_minter);


223          emit MinterLocked();


235          emit DescriptorUpdated(_descriptor);


255          emit CultureIndexUpdated(_cultureIndex);


312              emit VerbCreated(verbId, artPiece);
```

  *GitHub* : [213](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L213),[223](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L223),[235](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L235),[255](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L255),[312](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L312)
### [N-26]<a name="n-26"></a> Missing events in sensitive functions
Events should be emitted when sensitive changes are made to the contracts, but some functions lack them.

*There are 4 instance(s) of this issue:*

```

152      function settleCurrentAndCreateNewAuction() external override nonReentrant whenNotPaused {
153          _settleAuction();
154          _createAuction();
155      }


161      function settleAuction() external override whenPaused nonReentrant {
162          _settleAuction();
163      }
```

  *GitHub* : [152](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L152-L155),[161](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L161-L163)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol)
### [N-27]<a name="n-27"></a> Array indices should be referenced via ```enums``` rather than via numeric literals
Using numeric literals could lead to errors

*There are 4 instance(s) of this issue:*

```

159          uint256 popped = heap[0];


160          heap[0] = heap[--size];


171          return (heap[0], valueMapping[heap[0]]);


171          return (heap[0], valueMapping[heap[0]]);
```

  *GitHub* : [159](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L159),[160](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L160),[171](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L171),[171](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L171)
### [N-28]<a name="n-28"></a> Consider activating `via-ir` for deploying
The IR-based code generator was developed to make code generation more performant by enabling optimization passes that can be applied across functions.

It is possible to activate the IR-based code generator through the command line by using the flag `--via-ir` or by including the option `{"viaIR": true}`.

Keep in mind that compiling with this option may take longer. However, you can simply test it before deploying your code. If you find that it provides better performance, you can add the `--via-ir` flag to your deploy command.

*There are 1 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol)
### [N-29]<a name="n-29"></a> Custom ```error``` without details
Consider adding some parameters to the error to indicate which user or values caused the failure.

*There are 2 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol)
### [N-30]<a name="n-30"></a> Long functions should be refactored into multiple functions
Consider splitting long functions into multiple, smaller functions to improve the code readability.

*There are 2 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol)
### [N-31]<a name="n-31"></a> Variables need not be initialized to zero
The default value for variables is zero, so initializing them to zero is superfluous.

*There are 7 instance(s) of this issue:*

```

346          uint256 creatorTokensEmitted = 0;


380                  uint256 ethPaidToCreators = 0;


384                      for (uint256 i = 0; i < numCreators; i++) {
```

  *GitHub* : [346](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L346),[380](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L380),[384](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L384)

```

205          uint256 bpsSum = 0;


209          for (uint256 i = 0; i < addresses.length; i++) {
```

  *GitHub* : [205](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L205),[209](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L209)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol)
### [N-32]<a name="n-32"></a> Non-```external```/```public``` variable and function names should begin with an underscore
According to the Solidity Style Guide, non-```external```/```public``` function names should begin with an [underscore](https://docs.soliditylang.org/en/latest/style-guide.html#underscore-prefix-for-non-external-functions-and-variables)

*There are 4 instance(s) of this issue:*

```

159      function validateMediaType(ArtPieceMetadata calldata metadata) internal pure {


179      function validateCreatorsArray(CreatorBps[] calldata creatorArray) internal pure returns (uint256) {
```

  *GitHub* : [159](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L159),[179](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L179)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol)
### [N-33]<a name="n-33"></a> Non-```external```/```public``` variable names should begin with an underscore
According to the Solidity Style Guide, non-```external```/```public``` variable names should begin with an [underscore](https://docs.soliditylang.org/en/latest/style-guide.html#underscore-prefix-for-non-external-functions-and-variables)

*There are 6 instance(s) of this issue:*

```

18       uint256 internal constant DEPLOYER_REWARD_BPS = 25;


19       uint256 internal constant REVOLUTION_REWARD_BPS = 75;


20       uint256 internal constant BUILDER_REWARD_BPS = 100;


21       uint256 internal constant PURCHASE_REFERRAL_BPS = 50;


26       address internal immutable revolutionRewardRecipient;


27       IRevolutionProtocolRewards internal immutable protocolRewards;
```

  *GitHub* : [18](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L18),[19](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L19),[20](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L20),[21](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L21),[26](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L26),[27](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L27)
### [N-34]<a name="n-34"></a> Use of ```override``` is unnecessary
Starting with Solidity version [0.8.8](https://docs.soliditylang.org/en/v0.8.20/contracts.html#function-overriding), using the ```override``` keyword when the function solely overrides an interface function, and the function doesn't exist in multiple base contracts, is unnecessary.

*There are 35 instance(s) of this issue:*

```

152      function settleCurrentAndCreateNewAuction() external override nonReentrant whenNotPaused {


161      function settleAuction() external override whenPaused nonReentrant {


171      function createBid(uint256 verbId, address bidder) external payable override nonReentrant {


208      function pause() external override onlyOwner {


265      function unpause() external override onlyOwner {


277      function setTimeBuffer(uint256 _timeBuffer) external override onlyOwner {


287      function setReservePrice(uint256 _reservePrice) external override onlyOwner {


297      function setMinBidIncrementPercentage(uint8 _minBidIncrementPercentage) external override onlyOwner {


452      function _authorizeUpgrade(address _newImpl) internal view override onlyOwner whenPaused {
```

  *GitHub* : [152](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L152),[161](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L161),[171](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L171),[208](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L208),[265](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L265),[277](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L277),[287](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L287),[297](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L297),[452](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L452)

```

265      function getVotes(address account) external view override returns (uint256) {


274      function getPastVotes(address account, uint256 blockNumber) external view override returns (uint256) {


543      function _authorizeUpgrade(address _newImpl) internal view override onlyOwner {
```

  *GitHub* : [265](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L265),[274](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L274),[543](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L543)

```

132      function pause() external override onlyOwner {


141      function unpause() external override onlyOwner {


309      function setCreatorsAddress(address _creatorsAddress) external override onlyOwner nonReentrant {
```

  *GitHub* : [132](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L132),[141](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L141),[309](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L309)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol)

```

87       function decimals() public view virtual override returns (uint8) {


94       function transfer(address, uint256) public virtual override returns (bool) {


101      function _transfer(address from, address to, uint256 value) internal override {


108      function transferFrom(address, address, uint256) public virtual override returns (bool) {


115      function approve(address, uint256) public virtual override returns (bool) {


127      function _mint(address account, uint256 value) internal override {


141      function _approve(address owner, address spender, uint256 value) internal override {


148      function _approve(address owner, address spender, uint256 value, bool emitEvent) internal virtual override {


155      function _spendAllowance(address owner, address spender, uint256 value) internal virtual override {
```

  *GitHub* : [87](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L87),[94](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L94),[101](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L101),[108](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L108),[115](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L115),[127](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L127),[141](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L141),[148](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L148),[155](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L155)

```

177      function mint() public override onlyMinter nonReentrant returns (uint256) {


184      function burn(uint256 verbId) public override onlyMinter nonReentrant {


193      function tokenURI(uint256 tokenId) public view override returns (string memory) {


201      function dataURI(uint256 tokenId) public view override returns (string memory) {


209      function setMinter(address _minter) external override onlyOwner nonReentrant whenMinterNotLocked {


220      function lockMinter() external override onlyOwner whenMinterNotLocked {


230      function setDescriptor(
231          IDescriptorMinimal _descriptor
232      ) external override onlyOwner nonReentrant whenDescriptorNotLocked {


242      function lockDescriptor() external override onlyOwner whenDescriptorNotLocked {


262      function lockCultureIndex() external override onlyOwner whenCultureIndexNotLocked {


328      function _authorizeUpgrade(address _newImpl) internal view override onlyOwner {
```

  *GitHub* : [177](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L177),[184](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L184),[193](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L193),[201](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L201),[209](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L209),[220](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L220),[230](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L230-L232),[242](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L242),[262](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L262),[328](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L328)
### [N-35]<a name="n-35"></a> Consider bounding input array length
The functions below take in an unbounded array, and make function calls for entries in the array. While the function will revert if it eventually runs out of gas, it may be a nicer user experience to ```require()``` that the length of the array is below some reasonable maximum, so that the user doesn't have to use up a full transaction's gas only to see that the transaction reverts.

*There are 1 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol)
### [N-36]<a name="n-36"></a> Contract declarations should have NatSpec ```@title``` annotations
Every contract, library or interface should have a title that should describe it

*There are 5 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/TokenEmitter/TokenEmitterRewards.sol)
### [N-37]<a name="n-37"></a> Polymorphic functions make security audits more time-consuming and error-prone
The instances below point to one of two functions with the same name. Consider naming each function differently, in order to make code navigation and analysis easier.

*There are 1 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol)
### [N-38]<a name="n-38"></a> Use the latest solidity (prior to 0.8.20 if on L2s) for deployment
When deploying contracts, you should use the latest released version of Solidity. Apart from exceptional cases, only the latest version receives security fixes.

*There are 9 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/TokenEmitter/TokenEmitterRewards.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol)
### [N-39]<a name="n-39"></a> Contracts should have full test coverage
While 100% code coverage does not guarantee that there are no bugs, it often will catch easy-to-find bugs, and will ensure that there are fewer regressions when the code invariably has to be modified. Furthermore, in order to get full coverage, code authors will often have to re-organize their code so that it is more modular, so that each component can be tested separately, which reduces interdependencies between modules and layers, and makes for code that is easier to reason about and audit.
Coverage is 88%

*There are 1 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol)
### [N-40]<a name="n-40"></a> Expressions for constant values should use ```immutable``` rather than ```constant```
While it does not save gas for some simple binary expressions because the compiler knows that developers often make this mistake, it's still best to use the right tool for the task at hand. There is a difference between `constant` variables and `immutable` variables, and they should each be used in their appropriate contexts. `constants` should be used for literal values written into the code, and `immutable` variables should be used for expressions, or values calculated in, or passed into the constructor.

*There are 1 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol)
### [N-41]<a name="n-41"></a> Contract declarations should have NatSpec descriptions
e.g. `@dev` or `@notice`, and it must appear above the contract definition braces in order to be identified by the compiler as NatSpec

*There are 3 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/TokenEmitter/TokenEmitterRewards.sol)
### [N-42]<a name="n-42"></a> Setters should prevent re-setting of the same value
This especially problematic when the setter also emits the same value, which may be confusing to offline parsers

*There are 13 instance(s) of this issue:*

```

@audit: values to prevent: _creatorRateBps
217      function setCreatorRateBps(uint256 _creatorRateBps) external onlyOwner {
218          require(
219              _creatorRateBps >= minCreatorRateBps,
220              "Creator rate must be greater than or equal to minCreatorRateBps"
221          );
222          require(_creatorRateBps <= 10_000, "Creator rate must be less than or equal to 10_000");
223          creatorRateBps = _creatorRateBps;
224  
225          emit CreatorRateBpsUpdated(_creatorRateBps);
226      }


@audit: values to prevent: _minCreatorRateBps
233      function setMinCreatorRateBps(uint256 _minCreatorRateBps) external onlyOwner {
234          require(_minCreatorRateBps <= creatorRateBps, "Min creator rate must be less than or equal to creator rate");
235          require(_minCreatorRateBps <= 10_000, "Min creator rate must be less than or equal to 10_000");
236  
237          //ensure new min rate cannot be lower than previous min rate
238          require(
239              _minCreatorRateBps > minCreatorRateBps,
240              "Min creator rate must be greater than previous minCreatorRateBps"
241          );
242  
243          minCreatorRateBps = _minCreatorRateBps;
244  
245          emit MinCreatorRateBpsUpdated(_minCreatorRateBps);
246      }


@audit: values to prevent: _entropyRateBps
253      function setEntropyRateBps(uint256 _entropyRateBps) external onlyOwner {
254          require(_entropyRateBps <= 10_000, "Entropy rate must be less than or equal to 10_000");
255  
256          entropyRateBps = _entropyRateBps;
257          emit EntropyRateBpsUpdated(_entropyRateBps);
258      }


@audit: values to prevent: _timeBuffer
277      function setTimeBuffer(uint256 _timeBuffer) external override onlyOwner {
278          timeBuffer = _timeBuffer;
279  
280          emit AuctionTimeBufferUpdated(_timeBuffer);
281      }


@audit: values to prevent: _reservePrice
287      function setReservePrice(uint256 _reservePrice) external override onlyOwner {
288          reservePrice = _reservePrice;
289  
290          emit AuctionReservePriceUpdated(_reservePrice);
291      }


@audit: values to prevent: _minBidIncrementPercentage
297      function setMinBidIncrementPercentage(uint8 _minBidIncrementPercentage) external override onlyOwner {
298          minBidIncrementPercentage = _minBidIncrementPercentage;
299  
300          emit AuctionMinBidIncrementPercentageUpdated(_minBidIncrementPercentage);
301      }
```

  *GitHub* : [217](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L217-L226),[233](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L233-L246),[253](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L253-L258),[277](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L277-L281),[287](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L287-L291),[297](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L297-L301)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol)

```

@audit: values to prevent: _entropyRateBps
288      function setEntropyRateBps(uint256 _entropyRateBps) external onlyOwner {
289          require(_entropyRateBps <= 10_000, "Entropy rate must be less than or equal to 10_000");
290  
291          emit EntropyRateBpsUpdated(entropyRateBps = _entropyRateBps);
292      }


@audit: values to prevent: _creatorRateBps
299      function setCreatorRateBps(uint256 _creatorRateBps) external onlyOwner {
300          require(_creatorRateBps <= 10_000, "Creator rate must be less than or equal to 10_000");
301  
302          emit CreatorRateBpsUpdated(creatorRateBps = _creatorRateBps);
303      }
```

  *GitHub* : [288](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L288-L292),[299](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L299-L303)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol)

```

@audit: values to prevent: newContractURIHash
169      function setContractURIHash(string memory newContractURIHash) external onlyOwner {
170          _contractURIHash = newContractURIHash;
171      }


@audit: values to prevent: _descriptor
230      function setDescriptor(
231          IDescriptorMinimal _descriptor
232      ) external override onlyOwner nonReentrant whenDescriptorNotLocked {
233          descriptor = _descriptor;
234  
235          emit DescriptorUpdated(_descriptor);
236      }


@audit: values to prevent: _cultureIndex
252      function setCultureIndex(ICultureIndex _cultureIndex) external onlyOwner whenCultureIndexNotLocked nonReentrant {
253          cultureIndex = _cultureIndex;
254  
255          emit CultureIndexUpdated(_cultureIndex);
256      }
```

  *GitHub* : [169](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L169-L171),[230](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L230-L236),[252](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L252-L256)
### [N-43]<a name="n-43"></a> Public variable declarations should have NatSpec descriptions
e.g. `@notice` for public state variables, and `@dev` for [non-public](https://docs.soliditylang.org/en/latest/natspec-format.html#tags) ones

*There are 51 instance(s) of this issue:*

```

48       IVerbsToken public verbs;


51       IERC20TokenEmitter public erc20TokenEmitter;


54       address public WETH;


57       uint256 public timeBuffer;


60       uint256 public reservePrice;


63       uint8 public minBidIncrementPercentage;


66       uint256 public creatorRateBps;


69       uint256 public minCreatorRateBps;


72       uint256 public entropyRateBps;


75       uint256 public duration;


78       IAuctionHouse.Auction public auction;


88       uint32 public constant MIN_TOKEN_MINT_GAS_THRESHOLD = 750_000;
```

  *GitHub* : [48](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L48),[51](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L51),[54](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L54),[57](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L57),[60](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L60),[63](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L63),[66](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L66),[69](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L69),[72](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L72),[75](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L75),[78](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L78),[88](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L88)

```

36       MaxHeap public maxHeap;


39       ERC20VotesUpgradeable public erc20VotingToken;


42       ERC721CheckpointableUpgradeable public erc721VotingToken;


45       uint256 public erc721VotingTokenWeight;


63       mapping(uint256 => ArtPiece) public pieces;


66       uint256 public _currentPieceId;


69       mapping(uint256 => mapping(address => Vote)) public votes;


72       mapping(uint256 => uint256) public totalVoteWeights;


75       uint256 public constant MAX_NUM_CREATORS = 100;


78       address public dropperAdmin;
```

  *GitHub* : [36](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L36),[39](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L39),[42](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L42),[45](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L45),[63](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L63),[66](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L66),[69](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L69),[72](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L72),[75](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L75),[78](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L78)

```

25       address public treasury;


28       NontransferableERC20Votes public token;


31       VRGDAC public vrgdac;


34       uint256 public startTime;


42       uint256 public creatorRateBps;


45       uint256 public entropyRateBps;


48       address public creatorsAddress;
```

  *GitHub* : [25](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L25),[28](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L28),[31](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L31),[34](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L34),[42](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L42),[45](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L45),[48](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L48)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol)

```

18       uint256 internal constant DEPLOYER_REWARD_BPS = 25;


19       uint256 internal constant REVOLUTION_REWARD_BPS = 75;


20       uint256 internal constant BUILDER_REWARD_BPS = 100;


21       uint256 internal constant PURCHASE_REFERRAL_BPS = 50;


23       uint256 public constant minPurchaseAmount = 0.0000001 ether;


24       uint256 public constant maxPurchaseAmount = 50_000 ether;


26       address internal immutable revolutionRewardRecipient;


27       IRevolutionProtocolRewards internal immutable protocolRewards;
```

  *GitHub* : [18](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L18),[19](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L19),[20](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L20),[21](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L21),[23](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L23),[24](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L24),[26](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L26),[27](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L27)

```

16       int256 public immutable targetPrice;


18       int256 public immutable perTimeUnit;


20       int256 public immutable decayConstant;


22       int256 public immutable priceDecayPercent;
```

  *GitHub* : [16](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L16),[18](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L18),[20](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L20),[22](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L22)

```

42       address public minter;


45       IDescriptorMinimal public descriptor;


48       ICultureIndex public cultureIndex;


51       bool public isMinterLocked;


54       bool public isCultureIndexLocked;


57       bool public isDescriptorLocked;


60       uint256 private _currentVerbId;


63       string private _contractURIHash = "QmQzDwaZ7yQxHHs7sQQenJVB89riTSacSGcJRv9jtHPuz5";


66       mapping(uint256 => ICultureIndex.ArtPiece) public artPieces;
```

  *GitHub* : [42](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L42),[45](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L45),[48](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L48),[51](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L51),[54](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L54),[57](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L57),[60](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L60),[63](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L63),[66](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L66)
### [N-44]<a name="n-44"></a> Unused named `return`
Declaring named returns, but not using them, is confusing to the reader. Consider either completely removing them (by declaring just the type without a name), or remove the return statement and do a variable assignment.

This would improve the readability of the code, and it may also help reduce regressions during future code refactors.

*There are 5 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol)

```

@audit: tokensSoldWad
152      function buyToken(
153          address[] calldata addresses,
154          uint[] calldata basisPointSplits,
155          ProtocolRewardAddresses calldata protocolRewardsRecipients
156      ) public payable nonReentrant whenNotPaused returns (uint256 tokensSoldWad) {


@audit: spentY
237      function buyTokenQuote(uint256 amount) public view returns (int spentY) {


@audit: gainedX
254      function getTokenQuoteForEther(uint256 etherAmount) public view returns (int gainedX) {


@audit: gainedX
271      function getTokenQuoteForPayment(uint256 paymentAmount) external view returns (int gainedX) {
```

  *GitHub* : [152](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L152-L156),[237](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L237),[254](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L254),[271](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L271)
### [N-45]<a name="n-45"></a> Complex math should be split into multiple steps
Consider splitting long arithmetic calculations into multiple steps to improve the code readability.

*There are 4 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol)
### [N-46]<a name="n-46"></a> Contract functions should use an `interface`
All `external`/`public` functions should extend an `interface`. This is useful to make sure that the whole API is extracted.

*There are 45 instance(s) of this issue:*

```

113      function initialize(
114          address _erc721Token,
115          address _erc20TokenEmitter,
116          address _initialOwner,
117          address _weth,
118          IRevolutionBuilder.AuctionParams calldata _auctionParams
119      ) external initializer {


217      function setCreatorRateBps(uint256 _creatorRateBps) external onlyOwner {


233      function setMinCreatorRateBps(uint256 _minCreatorRateBps) external onlyOwner {


253      function setEntropyRateBps(uint256 _entropyRateBps) external onlyOwner {
```

  *GitHub* : [113](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L113-L119),[217](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L217),[233](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L233),[253](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L253)

```

109      function initialize(
110          address _erc20VotingToken,
111          address _erc721VotingToken,
112          address _initialOwner,
113          address _maxHeap,
114          address _dropperAdmin,
115          IRevolutionBuilder.CultureIndexParams memory _cultureIndexParams
116      ) external initializer {


209      function createPiece(
210          ArtPieceMetadata calldata metadata,
211          CreatorBps[] calldata creatorArray
212      ) public returns (uint256) {


256      function hasVoted(uint256 pieceId, address voter) external view returns (bool) {


332      function vote(uint256 pieceId) public nonReentrant {


342      function voteForMany(uint256[] calldata pieceIds) public nonReentrant {


367      function voteForManyWithSig(
368          address from,
369          uint256[] calldata pieceIds,
370          uint256 deadline,
371          uint8 v,
372          bytes32 r,
373          bytes32 s
374      ) external nonReentrant {


389      function batchVoteForManyWithSig(
390          address[] memory from,
391          uint256[][] calldata pieceIds,
392          uint256[] memory deadline,
393          uint8[] memory v,
394          bytes32[] memory r,
395          bytes32[] memory s
396      ) external nonReentrant {


451      function getPieceById(uint256 pieceId) public view returns (ArtPiece memory) {


461      function getVote(uint256 pieceId, address voter) public view returns (Vote memory) {


470      function getTopVotedPiece() public view returns (ArtPiece memory) {


478      function pieceCount() external view returns (uint256) {


486      function topVotedPieceId() public view returns (uint256) {


498      function _setQuorumVotesBPS(uint256 newQuorumVotesBPS) external onlyOwner {


509      function quorumVotes() public view returns (uint256) {


519      function dropTopVotedPiece() public nonReentrant returns (ArtPiece memory) {
```

  *GitHub* : [109](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L109-L116),[209](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L209-L212),[256](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L256),[332](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L332),[342](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L342),[367](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L367-L374),[389](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L389-L396),[451](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L451),[461](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L461),[470](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L470),[478](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L478),[486](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L486),[498](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L498),[509](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L509),[519](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L519)

```

84       function initialize(
85           address _initialOwner,
86           address _erc20Token,
87           address _treasury,
88           address _vrgdac,
89           address _creatorsAddress
90       ) external initializer {


112      function totalSupply() public view returns (uint) {


117      function decimals() public view returns (uint8) {


122      function balanceOf(address _owner) public view returns (uint) {


152      function buyToken(
153          address[] calldata addresses,
154          uint[] calldata basisPointSplits,
155          ProtocolRewardAddresses calldata protocolRewardsRecipients
156      ) public payable nonReentrant whenNotPaused returns (uint256 tokensSoldWad) {


237      function buyTokenQuote(uint256 amount) public view returns (int spentY) {


254      function getTokenQuoteForEther(uint256 etherAmount) public view returns (int gainedX) {


271      function getTokenQuoteForPayment(uint256 paymentAmount) external view returns (int gainedX) {


288      function setEntropyRateBps(uint256 _entropyRateBps) external onlyOwner {


299      function setCreatorRateBps(uint256 _creatorRateBps) external onlyOwner {
```

  *GitHub* : [84](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L84-L90),[112](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L112),[117](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L117),[122](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L122),[152](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L152-L156),[237](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L237),[254](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L254),[271](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L271),[288](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L288),[299](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L299)

```

55       function initialize(address _initialOwner, address _admin) public initializer {


119      function insert(uint256 itemId, uint256 value) public onlyAdmin {


136      function updateValue(uint256 itemId, uint256 newValue) public onlyAdmin {


156      function extractMax() external onlyAdmin returns (uint256, uint256) {


169      function getMax() public view returns (uint256, uint256) {
```

  *GitHub* : [55](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L55),[119](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L119),[136](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L136),[156](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L156),[169](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L169)

```

65       function initialize(
66           address _initialOwner,
67           IRevolutionBuilder.ERC20TokenParams calldata _erc20TokenParams
68       ) external initializer {


134      function mint(address account, uint256 amount) public onlyOwner {
```

  *GitHub* : [65](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L65-L68),[134](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L134)

```

40       function computeTotalReward(uint256 paymentAmountWei) public pure returns (uint256) {


54       function computePurchaseRewards(uint256 paymentAmountWei) public pure returns (RewardsSettings memory, uint256) {
```

  *GitHub* : [40](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L40),[54](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L54)

```

47       function xToY(int256 timeSinceStart, int256 sold, int256 amount) public view virtual returns (int256) {


54       function yToX(int256 timeSinceStart, int256 sold, int256 amount) public view virtual returns (int256) {
```

  *GitHub* : [47](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L47),[54](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L54)

```

130      function initialize(
131          address _minter,
132          address _initialOwner,
133          address _descriptor,
134          address _cultureIndex,
135          IRevolutionBuilder.ERC721TokenParams memory _erc721TokenParams
136      ) external initializer {


161      function contractURI() public view returns (string memory) {


169      function setContractURIHash(string memory newContractURIHash) external onlyOwner {


252      function setCultureIndex(ICultureIndex _cultureIndex) external onlyOwner whenCultureIndexNotLocked nonReentrant {


273      function getArtPieceById(uint256 verbId) public view returns (ICultureIndex.ArtPiece memory) {
```

  *GitHub* : [130](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L130-L136),[161](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L161),[169](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L169),[252](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L252),[273](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L273)
### [N-47]<a name="n-47"></a> Unresolved `TODOs` in comments
Some features might not be properly implemented, as there are commented `TODOs`. Review the comments to ensure that everything is implemented, and remove them before deploying.

*There are 2 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol)
### [N-48]<a name="n-48"></a> Use a `modifier` instead of `require` to check for `msg.sender`
If some functions are only allowed to be called by some specific users, consider using a `modifier` instead of checking with a `require` statement, especially if this check is done in multiple functions.

*There are 11 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol)

```

117          require(msg.sender == address(manager), "Only manager can initialize");


520          require(msg.sender == dropperAdmin, "Only dropper can drop pieces");
```

  *GitHub* : [117](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L117),[520](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L520)

```

91           require(msg.sender == address(manager), "Only manager can initialize");


158          require(msg.sender != treasury && msg.sender != creatorsAddress, "Funds recipient cannot buy tokens");


158          require(msg.sender != treasury && msg.sender != creatorsAddress, "Funds recipient cannot buy tokens");
```

  *GitHub* : [91](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L91),[158](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L158),[158](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L158)

```

42           require(msg.sender == admin, "Sender is not the admin");


56           require(msg.sender == address(manager), "Only manager can initialize");
```

  *GitHub* : [42](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L42),[56](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L56)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol)

```

100          require(msg.sender == minter, "Sender is not the minter");


137          require(msg.sender == address(manager), "Only manager can initialize");
```

  *GitHub* : [100](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L100),[137](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L137)
### [N-49]<a name="n-49"></a> Same stack variable name used many times in different function of same contract
While it could be safe due to different scope of each variable, it could lead to error

*There are 1 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol)
### [N-50]<a name="n-50"></a> Common functions should be refactored to a common base contract
The functions below have the same implementation as is seen in other files. The functions should be refactored into functions of a common base contract

*There are 6 instance(s) of this issue:*

```

@audit: seen in MaxHeap.sol
95       constructor(address _manager) payable initializer {
96           manager = IRevolutionBuilder(_manager);
97       }


@audit: seen in ERC20TokenEmitter.sol
208      function pause() external override onlyOwner {
209          _pause();
210      }
```

  *GitHub* : [95](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L95-L97),[208](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L208-L210)

```

@audit: seen in MaxHeap.sol
92       constructor(address _manager) payable initializer {
93           manager = IRevolutionBuilder(_manager);
94       }


@audit: seen in MaxHeap.sol
543      function _authorizeUpgrade(address _newImpl) internal view override onlyOwner {
544          // Ensure the new implementation is a registered upgrade
545          if (!manager.isRegisteredUpgrade(_getImplementation(), _newImpl)) revert INVALID_UPGRADE(_newImpl);
546      }
```

  *GitHub* : [92](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L92-L94),[543](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L543-L546)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol)
### [N-51]<a name="n-51"></a> File is missing NatSpec
The reported files don't have any NatSpec comment

*There are 1 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/TokenEmitter/TokenEmitterRewards.sol)
### [N-52]<a name="n-52"></a> Invalid NatSpec comment style
NatSpec must begin with `///`, or use `/* ... */` syntax

*There are 3 instance(s) of this issue:*

```

325         // /// @notice Ensures the caller is authorized to upgrade the contract and that the new implementation is valid


326         // /// @dev This function is called in `upgradeTo` & `upgradeToAndCall`


327         // /// @param _newImpl The new implementation address
```

  *GitHub* : [325](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L325),[326](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L326),[327](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L327)
### [N-53]<a name="n-53"></a> Large or complicated code bases should implement invariant tests
Large code bases, or code with lots of inline-assembly, complicated math, or complicated interactions between multiple contracts, should implement [invariant fuzzing tests](https://medium.com/coinmonks/smart-contract-fuzzing-d9b88e0b0a05). Invariant fuzzers such as Echidna require the test writer to come up with invariants which should not be violated under any circumstances, and the fuzzer tests various inputs and function calls to ensure that the invariants always hold. Even code with 100% code coverage can still have bugs due to the order of the operations a user performs, and invariant fuzzers, with properly and extensively-written invariants, can close this testing gap significantly.

*There are 1 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol)
### [N-54]<a name="n-54"></a> Consider adding formal verification proofs
Consider using formal verification to mathematically prove that your code does what is intended, and does not have any edge cases with unexpected behavior. The solidity compiler itself has this functionality [built in](https://docs.soliditylang.org/en/latest/smtchecker.html#smtchecker-and-formal-verification)

*There are 1 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol)
### [N-55]<a name="n-55"></a> Multiple `address`/ID mappings can be combined into a single `mapping` of an `address`/ID to a `struct`, for readability
Well-organized data structures make code reviews easier, which may lead to fewer bugs. Consider combining related mappings into mappings to structs, so it's clear what data is related

*There are 4 instance(s) of this issue:*

```

@audit: Group #3
69       mapping(uint256 => mapping(address => Vote)) public votes;


72       mapping(uint256 => uint256) public totalVoteWeights;
```

  *GitHub* : [69](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L69),[72](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L72)

```

@audit: Group #2
70       mapping(uint256 => uint256) public valueMapping;


73       mapping(uint256 => uint256) public positionMapping;
```

  *GitHub* : [70](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L70),[73](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L73)
### [N-56]<a name="n-56"></a> Custom errors should be used rather than `revert()`/`require()`
Custom errors are available from solidity version 0.8.4. Custom errors are more easily processed in `try`-`catch` blocks, and are easier to re-use and maintain.

We could also report this issue in Gas Optimization, with gas saving details

*There are 75 instance(s) of this issue:*

```

120          require(msg.sender == address(manager), "Only manager can initialize");


121          require(_weth != address(0), "WETH cannot be zero address");


129          require(
130              _auctionParams.creatorRateBps >= _auctionParams.minCreatorRateBps,
131              "Creator rate must be greater than or equal to the creator rate"
132          );


175          require(bidder != address(0), "Bidder cannot be zero address");


176          require(_auction.verbId == verbId, "Verb not up for auction");


178          require(block.timestamp < _auction.endTime, "Auction expired");


179          require(msg.value >= reservePrice, "Must send at least reservePrice");


180          require(
181              msg.value >= _auction.amount + ((_auction.amount * minBidIncrementPercentage) / 100),
182              "Must send more than last bid by minBidIncrementPercentage amount"
183          );


218          require(
219              _creatorRateBps >= minCreatorRateBps,
220              "Creator rate must be greater than or equal to minCreatorRateBps"
221          );


222          require(_creatorRateBps <= 10_000, "Creator rate must be less than or equal to 10_000");


234          require(_minCreatorRateBps <= creatorRateBps, "Min creator rate must be less than or equal to creator rate");


235          require(_minCreatorRateBps <= 10_000, "Min creator rate must be less than or equal to 10_000");


238          require(
239              _minCreatorRateBps > minCreatorRateBps,
240              "Min creator rate must be greater than previous minCreatorRateBps"
241          );


254          require(_entropyRateBps <= 10_000, "Entropy rate must be less than or equal to 10_000");


311          require(gasleft() >= MIN_TOKEN_MINT_GAS_THRESHOLD, "Insufficient gas for creating auction");


339          require(_auction.startTime != 0, "Auction hasn't begun");


340          require(!_auction.settled, "Auction has already been settled");


342          require(block.timestamp >= _auction.endTime, "Auction hasn't completed");
```

  *GitHub* : [120](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L120),[121](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L121),[129](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L129-L132),[175](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L175),[176](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L176),[178](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L178),[179](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L179),[180](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L180-L183),[218](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L218-L221),[222](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L222),[234](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L234),[235](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L235),[238](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L238-L241),[254](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L254),[311](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L311),[339](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L339),[340](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L340),[342](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L342)

```

117          require(msg.sender == address(manager), "Only manager can initialize");


119          require(_cultureIndexParams.quorumVotesBPS <= MAX_QUORUM_VOTES_BPS, "invalid quorum bps");


120          require(_cultureIndexParams.erc721VotingTokenWeight > 0, "invalid erc721 voting token weight");


121          require(_erc721VotingToken != address(0), "invalid erc721 voting token");


122          require(_erc20VotingToken != address(0), "invalid erc20 voting token");


160          require(uint8(metadata.mediaType) > 0 && uint8(metadata.mediaType) <= 5, "Invalid media type");


163              require(bytes(metadata.image).length > 0, "Image URL must be provided");


165              require(bytes(metadata.animationUrl).length > 0, "Animation URL must be provided");


167              require(bytes(metadata.text).length > 0, "Text must be provided");


182          require(creatorArrayLength <= MAX_NUM_CREATORS, "Creator array must not be > MAX_NUM_CREATORS");


186              require(creatorArray[i].creator != address(0), "Invalid creator address");


190          require(totalBps == 10_000, "Total BPS must sum up to 10,000");


308          require(pieceId < _currentPieceId, "Invalid piece ID");


309          require(voter != address(0), "Invalid voter address");


310          require(!pieces[pieceId].isDropped, "Piece has already been dropped");


311          require(!(votes[pieceId][voter].voterAddress != address(0)), "Already voted");


314          require(weight > minVoteWeight, "Weight must be greater than minVoteWeight");


398          require(
399              len == pieceIds.length && len == deadline.length && len == v.length && len == r.length && len == s.length,
400              "Array lengths must match"
401          );


427          require(deadline >= block.timestamp, "Signature expired");


452          require(pieceId < _currentPieceId, "Invalid piece ID");


462          require(pieceId < _currentPieceId, "Invalid piece ID");


487          require(maxHeap.size() > 0, "Culture index is empty");


499          require(newQuorumVotesBPS <= MAX_QUORUM_VOTES_BPS, "CultureIndex::_setQuorumVotesBPS: invalid quorum bps");


520          require(msg.sender == dropperAdmin, "Only dropper can drop pieces");


523          require(totalVoteWeights[piece.pieceId] >= piece.quorumVotes, "Does not meet quorum votes to be dropped.");
```

  *GitHub* : [117](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L117),[119](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L119),[120](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L120),[121](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L121),[122](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L122),[160](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L160),[163](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L163),[165](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L165),[167](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L167),[182](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L182),[186](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L186),[190](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L190),[308](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L308),[309](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L309),[310](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L310),[311](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L311),[314](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L314),[398](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L398-L401),[427](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L427),[452](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L452),[462](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L462),[487](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L487),[499](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L499),[520](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L520),[523](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L523)

```

91           require(msg.sender == address(manager), "Only manager can initialize");


96           require(_treasury != address(0), "Invalid treasury address");


158          require(msg.sender != treasury && msg.sender != creatorsAddress, "Funds recipient cannot buy tokens");


160          require(msg.value > 0, "Must send ether");


162          require(addresses.length == basisPointSplits.length, "Parallel arrays required");


192          require(success, "Transfer failed.");


197              require(success, "Transfer failed.");


217          require(bpsSum == 10_000, "bps must add up to 10_000");


238          require(amount > 0, "Amount must be greater than 0");


255          require(etherAmount > 0, "Ether amount must be greater than 0");


272          require(paymentAmount > 0, "Payment amount must be greater than 0");


289          require(_entropyRateBps <= 10_000, "Entropy rate must be less than or equal to 10_000");


300          require(_creatorRateBps <= 10_000, "Creator rate must be less than or equal to 10_000");


310          require(_creatorsAddress != address(0), "Invalid address");
```

  *GitHub* : [91](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L91),[96](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L96),[158](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L158),[160](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L160),[162](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L162),[192](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L192),[197](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L197),[217](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L217),[238](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L238),[255](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L255),[272](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L272),[289](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L289),[300](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L300),[310](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L310)

```

42           require(msg.sender == admin, "Sender is not the admin");


56           require(msg.sender == address(manager), "Only manager can initialize");


79           require(pos != 0, "Position should not be zero");


157          require(size > 0, "Heap is empty");


170          require(size > 0, "Heap is empty");
```

  *GitHub* : [42](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L42),[56](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L56),[79](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L79),[157](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L157),[170](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol#L170)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol)

```

76           require(!isMinterLocked, "Minter is locked");


84           require(!isCultureIndexLocked, "CultureIndex is locked");


92           require(!isDescriptorLocked, "Descriptor is locked");


100          require(msg.sender == minter, "Sender is not the minter");


137          require(msg.sender == address(manager), "Only manager can initialize");


139          require(_minter != address(0), "Minter cannot be zero address");


140          require(_initialOwner != address(0), "Initial owner cannot be zero address");


210          require(_minter != address(0), "Minter cannot be zero address");


274          require(verbId <= _currentVerbId, "Invalid piece ID");


286          require(
287              artPiece.creators.length <= cultureIndex.MAX_NUM_CREATORS(),
288              "Creator array must not be > MAX_NUM_CREATORS"
289          );


330          require(manager.isRegisteredUpgrade(_getImplementation(), _newImpl), "Invalid upgrade");
```

  *GitHub* : [76](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L76),[84](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L84),[92](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L92),[100](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L100),[137](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L137),[139](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L139),[140](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L140),[210](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L210),[274](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L274),[286](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L286-L289),[330](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L330)
### [N-57]<a name="n-57"></a> `internal` functions not called by the contract should be removed
All unused code should be removed

We could also report this issue in Gas Optimization, with gas saving details

*There are 8 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol)

```

101      function _transfer(address from, address to, uint256 value) internal override {


141      function _approve(address owner, address spender, uint256 value) internal override {
```

  *GitHub* : [101](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L101),[141](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L141)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/TokenEmitter/TokenEmitterRewards.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol)
### [N-58]<a name="n-58"></a> Contract uses both `require()`/`revert()` as well as custom errors
Consider using just one method in a single file

*There are 4 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol)
### [N-59]<a name="n-59"></a> Consider adding a block/deny-list
Doing so will significantly increase centralization, but will help to prevent hackers from using stolen tokens

*There are 9 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/TokenEmitter/TokenEmitterRewards.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol)
### [N-60]<a name="n-60"></a> Consider using `SafeTransferLib.safeTransferETH()` or `Address.sendValue()` for clearer semantic meaning
These Functions indicate their purpose with their name more clearly than using low-level calls.

*There are 5 instance(s) of this issue:*

```

400                      creatorTokensEmitted = erc20TokenEmitter.buyToken{ value: creatorsShare - ethPaidToCreators }(


435              IWETH(WETH).deposit{ value: _amount }();
```

  *GitHub* : [400](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L400),[435](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L435)

```

191          (bool success, ) = treasury.call{ value: toPayTreasury }(new bytes(0));


196              (success, ) = creatorsAddress.call{ value: creatorDirectPayment }(new bytes(0));
```

  *GitHub* : [191](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L191),[196](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L196)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol)
### [N-61]<a name="n-61"></a> Unused function parameter
Comment out the variable name to suppress compiler warnings

*There are 4 instance(s) of this issue:*

```

@audit: unused parameters: from, to, value
101      function _transfer(address from, address to, uint256 value) internal override {
102          revert TRANSFER_NOT_ALLOWED();
103      }


@audit: unused parameters: owner, spender, value
141      function _approve(address owner, address spender, uint256 value) internal override {
142          revert TRANSFER_NOT_ALLOWED();
143      }


@audit: unused parameters: owner, spender, value, emitEvent
148      function _approve(address owner, address spender, uint256 value, bool emitEvent) internal virtual override {
149          revert TRANSFER_NOT_ALLOWED();
150      }


@audit: unused parameters: owner, spender, value
155      function _spendAllowance(address owner, address spender, uint256 value) internal virtual override {
156          revert TRANSFER_NOT_ALLOWED();
157      }
```

  *GitHub* : [101](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L101-L103),[141](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L141-L143),[148](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L148-L150),[155](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L155-L157)
### [N-62]<a name="n-62"></a> Unused import
The identifier is imported but never used within the file

*There are 4 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol)

```

21   import { PausableUpgradeable } from "@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol";


25   import { EIP712Upgradeable } from "@openzeppelin/contracts-upgradeable/utils/cryptography/EIP712Upgradeable.sol";
```

  *GitHub* : [21](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L21),[25](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L25)
### [N-63]<a name="n-63"></a> Consider using descriptive `constant`s when passing zero as a function argument
Passing zero as a function argument can sometimes result in a security issue (e.g. passing zero as the slippage parameter). Consider using a `constant` variable with a descriptive name, so it's clear that the argument is intentionally being used, and for the right reasons.

*There are 7 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol)

```

181              : int(0);


184          int totalTokensForBuyers = toPayTreasury > 0 ? getTokenQuoteForEther(toPayTreasury) : int(0);
```

  *GitHub* : [181](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L181),[184](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L184)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol)

```

129              revert ERC20InvalidReceiver(address(0));


131          _update(address(0), account, value);
```

  *GitHub* : [129](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L129),[131](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L131)
### [N-64]<a name="n-64"></a> Function names should use lowerCamelCase
According to the Solidity [style guide](https://docs.soliditylang.org/en/latest/style-guide.html#function-names) function names should be in `mixedCase` (lowerCamelCase)

*There are 7 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol)

```

161      function contractURI() public view returns (string memory) {


169      function setContractURIHash(string memory newContractURIHash) external onlyOwner {


193      function tokenURI(uint256 tokenId) public view override returns (string memory) {


201      function dataURI(uint256 tokenId) public view override returns (string memory) {
```

  *GitHub* : [161](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L161),[169](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L169),[193](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L193),[201](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L201)
### [N-65]<a name="n-65"></a> Contract declarations should have NatSpec `@author` annotations
Contracts, libraries and interfaces should have the name of the author in NatSpec annotations

*There are 7 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/TokenEmitter/TokenEmitterRewards.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol)
### [N-66]<a name="n-66"></a> Missing event and or timelock for critical parameter change
Events help non-contract tools to track changes, and timelocks prevent users from being surprised by changes

*There are 3 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol)

```

150          _contractURIHash = _erc721TokenParams.contractURIHash;


170          _contractURIHash = newContractURIHash;
```

  *GitHub* : [150](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L150),[170](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L170)
### [N-67]<a name="n-67"></a> Mixed usage of `int`/`uint` with `int256`/`uint256`
`int256`/`uint256` are the preferred type names (they're what are used for function signatures), so they should be used consistently

*There are 18 instance(s) of this issue:*

```

185          for (uint i; i < creatorArrayLength; i++) {


236          for (uint i; i < creatorArrayLength; i++) {


243          for (uint i; i < creatorArrayLength; i++) {
```

  *GitHub* : [185](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L185),[236](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L236),[243](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L243)

```

112      function totalSupply() public view returns (uint) {


122      function balanceOf(address _owner) public view returns (uint) {


154          uint[] calldata basisPointSplits,


179          int totalTokensForCreators = ((msgValueRemaining - toPayTreasury) - creatorDirectPayment) > 0


181              : int(0);


184          int totalTokensForBuyers = toPayTreasury > 0 ? getTokenQuoteForEther(toPayTreasury) : int(0);


184          int totalTokensForBuyers = toPayTreasury > 0 ? getTokenQuoteForEther(toPayTreasury) : int(0);


212                  _mint(addresses[i], uint256((totalTokensForBuyers * int(basisPointSplits[i])) / 10_000));


237      function buyTokenQuote(uint256 amount) public view returns (int spentY) {


245                  amount: int(amount)


254      function getTokenQuoteForEther(uint256 etherAmount) public view returns (int gainedX) {


262                  amount: int(etherAmount)


271      function getTokenQuoteForPayment(uint256 paymentAmount) external view returns (int gainedX) {


279                  amount: int(((paymentAmount - computeTotalReward(paymentAmount)) * (10_000 - creatorRateBps)) / 10_000)
```

  *GitHub* : [112](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L112),[122](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L122),[154](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L154),[179](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L179),[181](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L181),[184](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L184),[184](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L184),[212](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L212),[237](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L237),[245](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L245),[254](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L254),[262](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L262),[271](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L271),[279](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L279)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol)
### [N-68]<a name="n-68"></a> Use `@inheritdoc` for overridden functions
Functions and public state variables should use @inheritdoc when they copy tags from the base function/state variable

*There are 35 instance(s) of this issue:*

```

146      /**
147       * @notice Settle the current auction, mint a new Verb, and put it up for auction.
148       */
149      // Can technically reenter via cross function reentrancies in _createAuction, auction, and pause, but those are only callable by the owner.
150      // @wardens if you can find an exploit here go for it - we might be wrong.
151      // slither-disable-next-line reentrancy-eth
152      function settleCurrentAndCreateNewAuction() external override nonReentrant whenNotPaused {


157      /**
158       * @notice Settle the current auction.
159       * @dev This function can only be called when the contract is paused.
160       */
161      function settleAuction() external override whenPaused nonReentrant {


165      /**
166       * @notice Create a bid for a Verb, with a given amount.
167       * @dev This contract only accepts payment in ETH.
168       * @param verbId The ID of the Verb to bid on.
169       * @param bidder The address of the bidder.
170       */
171      function createBid(uint256 verbId, address bidder) external payable override nonReentrant {


202      /**
203       * @notice Pause the Verbs auction house.
204       * @dev This function can only be called by the owner when the
205       * contract is unpaused. While no new auctions can be started when paused,
206       * anyone can settle an ongoing auction.
207       */
208      function pause() external override onlyOwner {


260      /**
261       * @notice Unpause the Verbs auction house.
262       * @dev This function can only be called by the owner when the
263       * contract is paused. If required, this function will start a new auction.
264       */
265      function unpause() external override onlyOwner {


273      /**
274       * @notice Set the auction time buffer.
275       * @dev Only callable by the owner.
276       */
277      function setTimeBuffer(uint256 _timeBuffer) external override onlyOwner {


283      /**
284       * @notice Set the auction reserve price.
285       * @dev Only callable by the owner.
286       */
287      function setReservePrice(uint256 _reservePrice) external override onlyOwner {


293      /**
294       * @notice Set the auction minimum bid increment percentage.
295       * @dev Only callable by the owner.
296       */
297      function setMinBidIncrementPercentage(uint8 _minBidIncrementPercentage) external override onlyOwner {


449      /// @notice Ensures the caller is authorized to upgrade the contract and the new implementation is valid
450      /// @dev This function is called in `upgradeTo` & `upgradeToAndCall`
451      /// @param _newImpl The new implementation address
452      function _authorizeUpgrade(address _newImpl) internal view override onlyOwner whenPaused {
```

  *GitHub* : [146](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L146-L151),[157](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L157-L160),[165](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L165-L170),[202](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L202-L207),[260](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L260-L264),[273](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L273-L276),[283](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L283-L286),[293](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L293-L296),[449](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol#L449-L451)

```

260      /**
261       * @notice Returns the voting power of a voter at the current block.
262       * @param account The address of the voter.
263       * @return The voting power of the voter.
264       */
265      function getVotes(address account) external view override returns (uint256) {


269      /**
270       * @notice Returns the voting power of a voter at the current block.
271       * @param account The address of the voter.
272       * @return The voting power of the voter.
273       */
274      function getPastVotes(address account, uint256 blockNumber) external view override returns (uint256) {


540      /// @notice Ensures the caller is authorized to upgrade the contract and that the new implementation is valid
541      /// @dev This function is called in `upgradeTo` & `upgradeToAndCall`
542      /// @param _newImpl The new implementation address
543      function _authorizeUpgrade(address _newImpl) internal view override onlyOwner {
```

  *GitHub* : [260](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L260-L264),[269](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L269-L273),[540](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L540-L542)

```

127      /**
128       * @notice Pause the contract.
129       * @dev This function can only be called by the owner when the
130       * contract is unpaused.
131       */
132      function pause() external override onlyOwner {


136      /**
137       * @notice Unpause the token emitter.
138       * @dev This function can only be called by the owner when the
139       * contract is paused.
140       */
141      function unpause() external override onlyOwner {


305      /**
306       * @notice Set the creators address to pay the creatorRate to. Can be a contract.
307       * @dev Only callable by the owner.
308       */
309      function setCreatorsAddress(address _creatorsAddress) external override onlyOwner nonReentrant {
```

  *GitHub* : [127](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L127-L131),[136](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L136-L140),[305](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L305-L308)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol)

```

74       /**
75        * @dev Returns the number of decimals used to get its user representation.
76        * For example, if `decimals` equals `2`, a balance of `505` tokens should
77        * be displayed to a user as `5.05` (`505 / 10 ** 2`).
78        *
79        * Tokens usually opt for a value of 18, imitating the relationship between
80        * Ether and Wei. This is the default value returned by this function, unless
81        * it's overridden.
82        *
83        * NOTE: This information is only used for _display_ purposes: it in
84        * no way affects any of the arithmetic of the contract, including
85        * {IERC20-balanceOf} and {IERC20-transfer}.
86        */
87       function decimals() public view virtual override returns (uint8) {


91       /**
92        * @dev Not allowed
93        */
94       function transfer(address, uint256) public virtual override returns (bool) {


98       /**
99        * @dev Not allowed
100       */
101      function _transfer(address from, address to, uint256 value) internal override {


105      /**
106       * @dev Not allowed
107       */
108      function transferFrom(address, address, uint256) public virtual override returns (bool) {


112      /**
113       * @dev Not allowed
114       */
115      function approve(address, uint256) public virtual override returns (bool) {


119      /**
120       * @dev Creates a `value` amount of tokens and assigns them to `account`, by transferring it from address(0).
121       * Relies on the `_update` mechanism
122       *
123       * Emits a {Transfer} event with `from` set to the zero address.
124       *
125       * NOTE: This function is not virtual, {_update} should be overridden instead.
126       */
127      function _mint(address account, uint256 value) internal override {


138      /**
139       * @dev Not allowed
140       */
141      function _approve(address owner, address spender, uint256 value) internal override {


145      /**
146       * @dev Not allowed
147       */
148      function _approve(address owner, address spender, uint256 value, bool emitEvent) internal virtual override {


152      /**
153       * @dev Not allowed
154       */
155      function _spendAllowance(address owner, address spender, uint256 value) internal virtual override {
```

  *GitHub* : [74](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L74-L86),[91](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L91-L93),[98](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L98-L100),[105](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L105-L107),[112](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L112-L114),[119](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L119-L126),[138](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L138-L140),[145](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L145-L147),[152](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L152-L154)

```

173      /**
174       * @notice Mint a Verb to the minter.
175       * @dev Call _mintTo with the to address(es).
176       */
177      function mint() public override onlyMinter nonReentrant returns (uint256) {


181      /**
182       * @notice Burn a verb.
183       */
184      function burn(uint256 verbId) public override onlyMinter nonReentrant {


189      /**
190       * @notice A distinct Uniform Resource Identifier (URI) for a given asset.
191       * @dev See {IERC721Metadata-tokenURI}.
192       */
193      function tokenURI(uint256 tokenId) public view override returns (string memory) {


197      /**
198       * @notice Similar to `tokenURI`, but always serves a base64 encoded data URI
199       * with the JSON contents directly inlined.
200       */
201      function dataURI(uint256 tokenId) public view override returns (string memory) {


205      /**
206       * @notice Set the token minter.
207       * @dev Only callable by the owner when not locked.
208       */
209      function setMinter(address _minter) external override onlyOwner nonReentrant whenMinterNotLocked {


216      /**
217       * @notice Lock the minter.
218       * @dev This cannot be reversed and is only callable by the owner when not locked.
219       */
220      function lockMinter() external override onlyOwner whenMinterNotLocked {


226      /**
227       * @notice Set the token URI descriptor.
228       * @dev Only callable by the owner when not locked.
229       */
230      function setDescriptor(
231          IDescriptorMinimal _descriptor
232      ) external override onlyOwner nonReentrant whenDescriptorNotLocked {


238      /**
239       * @notice Lock the descriptor.
240       * @dev This cannot be reversed and is only callable by the owner when not locked.
241       */
242      function lockDescriptor() external override onlyOwner whenDescriptorNotLocked {


258      /**
259       * @notice Lock the CultureIndex
260       * @dev This cannot be reversed and is only callable by the owner when not locked.
261       */
262      function lockCultureIndex() external override onlyOwner whenCultureIndexNotLocked {


325      // /// @notice Ensures the caller is authorized to upgrade the contract and that the new implementation is valid
326      // /// @dev This function is called in `upgradeTo` & `upgradeToAndCall`
327      // /// @param _newImpl The new implementation address
328      function _authorizeUpgrade(address _newImpl) internal view override onlyOwner {
```

  *GitHub* : [173](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L173-L176),[181](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L181-L183),[189](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L189-L192),[197](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L197-L200),[205](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L205-L208),[216](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L216-L219),[226](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L226-L229),[238](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L238-L241),[258](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L258-L261),[325](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol#L325-L327)
### [N-69]<a name="n-69"></a> Assembly blocks should have extensive comments
Assembly blocks take a lot more time to audit than normal Solidity code, and often have gotchas and side-effects that the Solidity versions of the same code do not. Consider adding more comments explaining what is being done in every step of the assembly code, and describe why assembly is being used instead of Solidity.

*There are 1 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol)
### [N-70]<a name="n-70"></a> Add inline comments for unnamed variables
`function foo(address x, address)` -> `function foo(address x, address /* y */)`

*There are 3 instance(s) of this issue:*

```

94       function transfer(address, uint256) public virtual override returns (bool) {


108      function transferFrom(address, address, uint256) public virtual override returns (bool) {


115      function approve(address, uint256) public virtual override returns (bool) {
```

  *GitHub* : [94](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L94),[108](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L108),[115](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L115)
### [N-71]<a name="n-71"></a> Not using the named return variables anywhere in the function is confusing
Consider changing the variable to be an unnamed one, since the variable is never assigned, nor is it returned by name. If the optimizer is not turned on, leaving the code as it is will also waste gas for the stack variable.

*There are 5 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol)

```

@audit: Return variables not used anywhere inside buyToken(): tokensSoldWad
152      function buyToken(
153          address[] calldata addresses,
154          uint[] calldata basisPointSplits,
155          ProtocolRewardAddresses calldata protocolRewardsRecipients
156      ) public payable nonReentrant whenNotPaused returns (uint256 tokensSoldWad) {


@audit: Return variables not used anywhere inside buyTokenQuote(): spentY
237      function buyTokenQuote(uint256 amount) public view returns (int spentY) {


@audit: Return variables not used anywhere inside getTokenQuoteForEther(): gainedX
254      function getTokenQuoteForEther(uint256 etherAmount) public view returns (int gainedX) {


@audit: Return variables not used anywhere inside getTokenQuoteForPayment(): gainedX
271      function getTokenQuoteForPayment(uint256 paymentAmount) external view returns (int gainedX) {
```

  *GitHub* : [152](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L152-L156),[237](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L237),[254](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L254),[271](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L271)
### [N-72]<a name="n-72"></a> Variable names for `immutable`s should use CONSTANT_CASE
For `immutable` variable names, each word should use all capital letters, with underscores separating each word (CONSTANT_CASE)

*There are 12 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol)

```

26       address internal immutable revolutionRewardRecipient;


27       IRevolutionProtocolRewards internal immutable protocolRewards;
```

  *GitHub* : [26](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L26),[27](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol#L27)

```

16       int256 public immutable targetPrice;


18       int256 public immutable perTimeUnit;


20       int256 public immutable decayConstant;


22       int256 public immutable priceDecayPercent;
```

  *GitHub* : [16](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L16),[18](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L18),[20](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L20),[22](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/libs/VRGDAC.sol#L22)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol)
### [N-73]<a name="n-73"></a> Consider moving `msg.sender` checks to a common authorization `modifier`
Using modifier in order to have clean code, expecially for `msg.sender` checks

*There are 8 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol)

```

117          require(msg.sender == address(manager), "Only manager can initialize");


520          require(msg.sender == dropperAdmin, "Only dropper can drop pieces");
```

  *GitHub* : [117](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L117),[520](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L520)

```

91           require(msg.sender == address(manager), "Only manager can initialize");


158          require(msg.sender != treasury && msg.sender != creatorsAddress, "Funds recipient cannot buy tokens");
```

  *GitHub* : [91](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L91),[158](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol#L158)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol)
### [N-74]<a name="n-74"></a> Consider disallowing transfers to `address(this)`
It could be better to avoid transferring to `address(this)`

*There are 2 instance(s) of this issue:*

```

94       function transfer(address, uint256) public virtual override returns (bool) {


101      function _transfer(address from, address to, uint256 value) internal override {
```

  *GitHub* : [94](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L94),[101](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol#L101)
### [N-75]<a name="n-75"></a> Simplify complex require statements
Simplifying complex `require` statements with local variables and `if`(or `revert`) statements can improve readability, make debugging easier, and promote modularity and reusability in the code.

*There are 4 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol)

```

160          require(uint8(metadata.mediaType) > 0 && uint8(metadata.mediaType) <= 5, "Invalid media type");


398          require(
399              len == pieceIds.length && len == deadline.length && len == v.length && len == r.length && len == s.length,
400              "Array lengths must match"
401          );
```

  *GitHub* : [160](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L160),[398](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L398-L401)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol)### Disputed Risk Issues


### [D-01]<a name="d-01"></a> `if`-statement can be converted to a ternary
Not a simple `if`-`else`

*There are 2 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol)
### [D-02]<a name="d-02"></a> Unsafe downcast
The rule is valid, but the following findings are invalid.

*There are 3 instance(s) of this issue:*

```

160          require(uint8(metadata.mediaType) > 0 && uint8(metadata.mediaType) <= 5, "Invalid media type");


160          require(uint8(metadata.mediaType) > 0 && uint8(metadata.mediaType) <= 5, "Invalid media type");
```

  *GitHub* : [160](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L160),[160](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol#L160)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol)
### [D-03]<a name="d-03"></a> `payable` function does not transfer Eth
The rule is valid, but the following findings are invalid.

*There are 8 instance(s) of this issue:*

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/AuctionHouse.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/CultureIndex.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/ERC20TokenEmitter.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/MaxHeap.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/NontransferableERC20Votes.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/RewardSplits.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/protocol-rewards/src/abstract/TokenEmitter/TokenEmitterRewards.sol)

```The whole file```

*GitHub* : [1](https://github.com/code-423n4/2023-12-revolutionprotocol/blob/main/packages/revolution/src/VerbsToken.sol) 