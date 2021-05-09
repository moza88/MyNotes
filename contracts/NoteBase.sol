// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NoteBase is ERC721URIStorage{

    using Counters for Counters.Counter;
    Counters.Counter private _noteIds;

    constructor() ERC721("NFT ITEM", "URI"){}

    function sendNote(address to, string memory noteURI)
        public returns (uint256) {

        _noteIds.increment();

        uint256 newNoteId = _noteIds.current();
        _mint(to, newNoteId);
        _setTokenURI(newNoteId, noteURI);
        return newNoteId;
    }
}
