(()=>{var e={427:(e,t,r)=>{const i=r(942),o=r(431);r(922),e.exports=function(){return{attacked:[],carrierHitbox:[],battleshipHitbox:[],destroyerHitbox:[],submarineHitbox:[],patrolboatHitbox:[],createBoard(e){const t=document.querySelector(".leftGrid"),r=document.querySelector(".rightGrid");let i=[],o=[0,1,2,3,4,5,6,7,8,9];o.forEach((e=>{for(let t=0;t<o.length;t++)i.push([e,o[t]])}));for(let o of i){let i=document.createElement("div");"player"==e?(i.classList.add("leftCells"),i.setAttribute("id",`left${[o[0],o[1]]}`),t.appendChild(i)):(i.classList.add("rightCells"),i.setAttribute("id",`right${[o[0],o[1]]}`),r.appendChild(i))}},placeShip(e,t,r){if(t[1]+e.length>10)return!1;const a=`${e.name}Hitbox`;for(let s=0;s<e.length;s++){const e=t[0],h=t[1]+s;this[a].push([e,h]),"player"==r?i([e,h],"green"):o([e,h],"green")}return this[a]},receiveAttack(e){this.attacked.push(e);const t=[this.carrierHitbox,this.battleshipHitbox,this.destroyerHitbox,this.submarineHitbox,this.patrolboatHitbox];for(let r of t){for(let t of r){if(t[0]==e[0]&&t[1]==e[1]){i(e,"red");break}i(e,"white")}break}return e},allShipsSunk:e=>e.every((e=>e.isSunk()))}}},942:e=>{e.exports=function(e,t){document.getElementById(`left${e[0]},${e[1]}`).style.backgroundColor=t}},431:e=>{e.exports=function(e,t){document.getElementById(`right${e[0]},${e[1]}`).style.backgroundColor=t}},922:e=>{e.exports=function(e,t,r){return{length:e,name:t,hit:r,gotHit(){if(e>r)return console.log("test"),this.hit+=1,this.hit},isSunk(){return this.length<=this.hit}}}}},t={};function r(i){var o=t[i];if(void 0!==o)return o.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,r),a.exports}(()=>{const e=r(922),t=r(427),i=(r(942),r(431));class o{constructor(e,t){this.name="player",this.board=e,this.carrier=this.createCarrier(),this.battleship=this.createBattleship(),this.destroyer=this.createDestroyer(),this.submarine=this.createSubmarine(),this.patrolboat=this.createPatrolboat(),this.ships=[this.carrier,this.battleship,this.destroyer,this.submarine,this.patrolboat],this.enemy="enemy",this.enemyBoard=t,this.enemyCarrier=this.createCarrier(),this.enemyBattleship=this.createBattleship(),this.enemyDestroyer=this.createDestroyer(),this.enemySubmarine=this.createSubmarine(),this.enemyPatrolboat=this.createPatrolboat(),this.enemyShips=[this.enemyCarrier,this.enemyBattleship,this.enemyDestroyer,this.enemySubmarine,this.enemyPatrolboat],this.enemyHitboxes=[this.enemyBoard.carrierHitbox,this.enemyBoard.battleshipHitbox,this.enemyBoard.destroyerHitbox,this.enemyBoard.submarineHitbox,this.enemyBoard.patrolboatHitbox]}attack(){"player"==this.name&&document.querySelectorAll(".rightCells").forEach((e=>{e.addEventListener("click",(()=>{let t=this.convertIdToCoord(e),r=this.enemyBoard.attacked;const o=this.enemyHitboxes.reduce(((e,t)=>e.concat(t)),[]);if(r.length<1){for(let e of o){if(e[0]==t[0]&&e[1]==t[1]){i(t,"red"),this.findAttackedShip(t);break}i(t,"white")}r.push(t)}if(!r.some((e=>e[0]==t[0]&&e[1]==t[1]))){for(let e of o){if(e[0]==t[0]&&e[1]==t[1]){i(t,"red"),this.findAttackedShip(t);break}i(t,"white")}r.push(t),console.log(this.enemyBoard.attacked),setTimeout((()=>{this.board.receiveAttack(this.cpuAttackCoord())}),200)}}))}))}cpuAttackCoord(){let e=this.generateCoord();for(;this.board.attacked.some((t=>t[0]==e[0]&&t[1]==e[1]));)e=this.generateCoord();return e}generateCoord(){return[Math.floor(10*Math.random()),Math.floor(10*Math.random())]}generateShipCoord(e){return[Math.floor(10*Math.random()),Math.floor(Math.random()*(10-e.length))]}convertIdToCoord(e){return[parseInt(e.id.charAt(5)),parseInt(e.id.charAt(7))]}findAttackedShip(e){this.enemyHitboxes.some(((t,r)=>{for(let i of t)i[0]==e[0]&&i[1]==e[1]&&this.enemyShips[r].gotHit()}))}checkAttackedCoord(e){}placeCpuShips(){let e=[this.enemyCarrier,this.enemyBattleship,this.enemyDestroyer,this.enemySubmarine,this.enemyPatrolboat];for(let t of e){let e=[this.enemyBoard.carrierHitbox,this.enemyBoard.battleshipHitbox,this.enemyBoard.destroyerHitbox,this.enemyBoard.submarineHitbox,this.enemyBoard.patrolboatHitbox],r=[].concat(...e),i=this.generateShipCoord(t);for(;r.some((e=>e[0]==i[0]&&e[1]==i[1]+t.length||e[0]==i[0]&&e[1]==i[1]));)i=this.generateShipCoord(t);this.enemyBoard.placeShip(t,i,"enemy")}}checkGameOver(){this.board.allShipsSunk(this.ships)&&alert("You lost u fkn noob")}createPlayerBoard(){this.board.createBoard(this.name)}createEnemyBoard(){this.enemyBoard.createBoard("enemy")}createCarrier(){return e(5,"carrier",0)}createBattleship(){return e(4,"battleship",0)}createDestroyer(){return e(3,"destroyer",0)}createSubmarine(){return e(3,"submarine",0)}createPatrolboat(){return e(2,"patrolboat",0)}}!function(){let e=t(),r=t(),i=new o(r,e);i.createPlayerBoard(),i.createEnemyBoard(),i.placeCpuShips(),i.board.placeShip(i.carrier,[5,4],"player"),i.attack()}()})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiMkJBQUEsTUFBTUEsRUFBWSxFQUFRLEtBQ3BCQyxFQUFXLEVBQVEsS0FDTCxFQUFRLEtBaUY1QkMsRUFBT0MsUUFoRlAsV0FDSSxNQUFPLENBQ0hDLFNBQVUsR0FDVkMsY0FBZSxHQUNmQyxpQkFBa0IsR0FDbEJDLGdCQUFpQixHQUNqQkMsZ0JBQWlCLEdBQ2pCQyxpQkFBa0IsR0FFbEJDLFlBQVlDLEdBQ1IsTUFBTUMsRUFBV0MsU0FBU0MsY0FBYyxhQUNsQ0MsRUFBWUYsU0FBU0MsY0FBYyxjQUN6QyxJQUFJRSxFQUFTLEdBQ1RDLEVBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUMvQkEsRUFBTUMsU0FBUUMsSUFDVixJQUFJLElBQUlDLEVBQUksRUFBR0EsRUFBSUgsRUFBTUksT0FBUUQsSUFBS0osRUFBT00sS0FBSyxDQUFDSCxFQUFJRixFQUFNRyxJQUFJLElBRXJFLElBQUssSUFBSUcsS0FBS1AsRUFBUSxDQUNsQixJQUFJUSxFQUFPWCxTQUFTWSxjQUFjLE9BRWpCLFVBQWRkLEdBQ0NhLEVBQUtFLFVBQVVDLElBQUksYUFDbkJILEVBQUtJLGFBQWEsS0FBTSxPQUFPLENBQUNMLEVBQUUsR0FBSUEsRUFBRSxPQUN4Q1gsRUFBU2lCLFlBQVlMLEtBRXJCQSxFQUFLRSxVQUFVQyxJQUFJLGNBQ25CSCxFQUFLSSxhQUFhLEtBQU0sUUFBUSxDQUFDTCxFQUFFLEdBQUlBLEVBQUUsT0FDekNSLEVBQVVjLFlBQVlMLEdBRzlCLENBQ0osRUFDQU0sVUFBVUMsRUFBTUMsRUFBT0MsR0FFbkIsR0FBSUQsRUFBTSxHQUFLRCxFQUFLVixPQUFTLEdBQ3pCLE9BQU8sRUFFWCxNQUFNYSxFQUFZLEdBQUdILEVBQUtFLGFBQzFCLElBQUssSUFBSWIsRUFBSSxFQUFHQSxFQUFJVyxFQUFLVixPQUFRRCxJQUFLLENBQ2xDLE1BQU1lLEVBQUlILEVBQU0sR0FDVkksRUFBSUosRUFBTSxHQUFLWixFQUNyQmlCLEtBQUtILEdBQVdaLEtBQUssQ0FBQ2EsRUFBR0MsSUFDZCxVQUFSSCxFQUNDakMsRUFBVSxDQUFDbUMsRUFBRUMsR0FBSSxTQUVqQm5DLEVBQVMsQ0FBQ2tDLEVBQUVDLEdBQUksUUFJeEIsQ0FDQSxPQUFPQyxLQUFLSCxFQUNoQixFQUNBSSxjQUFjTixHQUNWSyxLQUFLakMsU0FBU2tCLEtBQUtVLEdBQ25CLE1BQU1PLEVBQWUsQ0FBQ0YsS0FBS2hDLGNBQWVnQyxLQUFLL0IsaUJBQWtCK0IsS0FBSzlCLGdCQUN0RThCLEtBQUs3QixnQkFBaUI2QixLQUFLNUIsa0JBRTNCLElBQUksSUFBSXNCLEtBQVFRLEVBQWEsQ0FDekIsSUFBSSxJQUFJQyxLQUFZVCxFQUFLLENBQ3JCLEdBQUdTLEVBQVMsSUFBTVIsRUFBTSxJQUFNUSxFQUFTLElBQU1SLEVBQU0sR0FBRyxDQUVsRGhDLEVBQVVnQyxFQURFLE9BR1osS0FFSixDQUVJaEMsRUFBVWdDLEVBREUsUUFHcEIsQ0FDQSxLQUNKLENBQ0EsT0FBT0EsQ0FDWCxFQUNBUyxhQUFhQyxHQUNGQSxFQUFNQyxPQUFNWixHQUFRQSxFQUFLYSxXQUc1QyxDLFVDN0VBMUMsRUFBT0MsUUFKUCxTQUFtQjZCLEVBQU9hLEdBQ1hoQyxTQUFTaUMsZUFBZSxPQUFPZCxFQUFNLE1BQU1BLEVBQU0sTUFDdkRlLE1BQU1DLGdCQUFrQkgsQ0FDakMsQyxVQzZCQTNDLEVBQU9DLFFBaENQLFNBQWtCNkIsRUFBTWEsR0FFVGhDLFNBQVNpQyxlQUFlLFFBQVFkLEVBQU0sTUFBTUEsRUFBTSxNQUN4RGUsTUFBTUMsZ0JBQWtCSCxDQUNqQyxDLFVDY0EzQyxFQUFPQyxRQWxCUCxTQUFxQmtCLEVBQVFZLEVBQU1nQixHQUMvQixNQUFNLENBQ0Y1QixTQUNBWSxPQUNBZ0IsTUFDQUMsU0FDSSxHQUFHN0IsRUFBUzRCLEVBR1IsT0FGQUUsUUFBUUMsSUFBSSxRQUNaZixLQUFLWSxLQUFPLEVBQ0xaLEtBQUtZLEdBRXBCLEVBQ0FMLFNBQ0ksT0FBT1AsS0FBS2hCLFFBQVVnQixLQUFLWSxHQUMvQixFQUVSLEMsR0NmSUksRUFBMkIsQ0FBQyxFQUdoQyxTQUFTQyxFQUFvQkMsR0FFNUIsSUFBSUMsRUFBZUgsRUFBeUJFLEdBQzVDLFFBQXFCRSxJQUFqQkQsRUFDSCxPQUFPQSxFQUFhckQsUUFHckIsSUFBSUQsRUFBU21ELEVBQXlCRSxHQUFZLENBR2pEcEQsUUFBUyxDQUFDLEdBT1gsT0FIQXVELEVBQW9CSCxHQUFVckQsRUFBUUEsRUFBT0MsUUFBU21ELEdBRy9DcEQsRUFBT0MsT0FDZixDLE1DdEJBLE1BQU13RCxFQUFjLEVBQVEsS0FDdEJDLEVBQVksRUFBUSxLQUlwQjNELEdBRFksRUFBUSxLQUNULEVBQVEsTUFFekIsTUFBTTRELEVBQ0ZDLFlBQVlDLEVBQU1DLEdBQ2QzQixLQUFLSixLQUFPLFNBQ1pJLEtBQUswQixNQUFRQSxFQUViMUIsS0FBSzRCLFFBQVU1QixLQUFLNkIsZ0JBQ3BCN0IsS0FBSzhCLFdBQWE5QixLQUFLK0IsbUJBQ3ZCL0IsS0FBS2dDLFVBQVloQyxLQUFLaUMsa0JBQ3RCakMsS0FBS2tDLFVBQVlsQyxLQUFLbUMsa0JBQ3RCbkMsS0FBS29DLFdBQWFwQyxLQUFLcUMsbUJBRXZCckMsS0FBS0ssTUFBUSxDQUFDTCxLQUFLNEIsUUFBUzVCLEtBQUs4QixXQUFZOUIsS0FBS2dDLFVBQVdoQyxLQUFLa0MsVUFBV2xDLEtBQUtvQyxZQUVsRnBDLEtBQUtzQyxNQUFRLFFBQ2J0QyxLQUFLMkIsV0FBYUEsRUFFbEIzQixLQUFLdUMsYUFBZXZDLEtBQUs2QixnQkFDekI3QixLQUFLd0MsZ0JBQWtCeEMsS0FBSytCLG1CQUM1Qi9CLEtBQUt5QyxlQUFpQnpDLEtBQUtpQyxrQkFDM0JqQyxLQUFLMEMsZUFBaUIxQyxLQUFLbUMsa0JBQzNCbkMsS0FBSzJDLGdCQUFrQjNDLEtBQUtxQyxtQkFFNUJyQyxLQUFLNEMsV0FBYSxDQUFDNUMsS0FBS3VDLGFBQWN2QyxLQUFLd0MsZ0JBQWlCeEMsS0FBS3lDLGVBQ2pFekMsS0FBSzBDLGVBQWdCMUMsS0FBSzJDLGlCQUUxQjNDLEtBQUs2QyxjQUFnQixDQUFDN0MsS0FBSzJCLFdBQVczRCxjQUFlZ0MsS0FBSzJCLFdBQVcxRCxpQkFDakUrQixLQUFLMkIsV0FBV3pELGdCQUFpQjhCLEtBQUsyQixXQUFXeEQsZ0JBQ2pENkIsS0FBSzJCLFdBQVd2RCxpQkFDeEIsQ0FDQTBFLFNBQ29CLFVBQWI5QyxLQUFLSixNQUNhcEIsU0FBU3VFLGlCQUFpQixlQUNsQ2xFLFNBQVFNLElBQ2JBLEVBQUs2RCxpQkFBaUIsU0FBUyxLQUMzQixJQUFJQyxFQUFLakQsS0FBS2tELGlCQUFpQi9ELEdBQzNCZ0UsRUFBZ0JuRCxLQUFLMkIsV0FBVzVELFNBQ3BDLE1BQU1xRixFQUFrQnBELEtBQUs2QyxjQUFjUSxRQUFPLENBQUNDLEVBQUtDLElBQVFELEVBQUlFLE9BQU9ELElBQU0sSUFDakYsR0FBR0osRUFBY25FLE9BQVMsRUFBRSxDQUN4QixJQUFJLElBQUl5RSxLQUFNTCxFQUFnQixDQUMxQixHQUFHSyxFQUFHLElBQU1SLEVBQUcsSUFBTVEsRUFBRyxJQUFNUixFQUFHLEdBQUcsQ0FDaENyRixFQUFTcUYsRUFBSSxPQUNiakQsS0FBSzBELGlCQUFpQlQsR0FDdEIsS0FDSixDQUNJckYsRUFBU3FGLEVBQUksUUFFckIsQ0FDQUUsRUFBY2xFLEtBQUtnRSxFQUV2QixDQUNBLElBQUdFLEVBQWNRLE1BQUt6RSxHQUFLQSxFQUFFLElBQU0rRCxFQUFHLElBQU0vRCxFQUFFLElBQU0rRCxFQUFHLEtBQXZELENBSUksSUFBSSxJQUFJUSxLQUFNTCxFQUFnQixDQUMxQixHQUFHSyxFQUFHLElBQU1SLEVBQUcsSUFBTVEsRUFBRyxJQUFNUixFQUFHLEdBQUcsQ0FDaENyRixFQUFTcUYsRUFBSSxPQUNiakQsS0FBSzBELGlCQUFpQlQsR0FDdEIsS0FDSixDQUNJckYsRUFBU3FGLEVBQUksUUFFckIsQ0FDQUUsRUFBY2xFLEtBQUtnRSxHQUluQm5DLFFBQVFDLElBQUlmLEtBQUsyQixXQUFXNUQsVUFFNUI2RixZQUFXLEtBQ1A1RCxLQUFLMEIsTUFBTXpCLGNBQWNELEtBQUs2RCxpQkFBZ0IsR0FDL0MsSUFFUCxJQUdILEdBR2IsQ0FDQUEsaUJBQ0ksSUFBSUMsRUFBTTlELEtBQUsrRCxnQkFDZixLQUFPL0QsS0FBSzBCLE1BQU0zRCxTQUFTNEYsTUFBS3pFLEdBQUtBLEVBQUUsSUFBTTRFLEVBQUksSUFBTTVFLEVBQUUsSUFBTTRFLEVBQUksTUFDL0RBLEVBQU05RCxLQUFLK0QsZ0JBRWYsT0FBT0QsQ0FDWCxDQUNBQyxnQkFDSSxNQUFPLENBQUNDLEtBQUtDLE1BQXNCLEdBQWhCRCxLQUFLRSxVQUFnQkYsS0FBS0MsTUFBc0IsR0FBaEJELEtBQUtFLFVBQzVELENBQ0FDLGtCQUFrQnpFLEdBQ2QsTUFBTyxDQUFDc0UsS0FBS0MsTUFBc0IsR0FBaEJELEtBQUtFLFVBQWdCRixLQUFLQyxNQUFNRCxLQUFLRSxVQUFZLEdBQUt4RSxFQUFLVixTQUNsRixDQUNBa0UsaUJBQWlCcEUsR0FDYixNQUFPLENBQUNzRixTQUFTdEYsRUFBR3VGLEdBQUdDLE9BQU8sSUFBS0YsU0FBU3RGLEVBQUd1RixHQUFHQyxPQUFPLElBQzdELENBQ0FaLGlCQUFpQi9ELEdBQ2JLLEtBQUs2QyxjQUFjYyxNQUFLLENBQUNqRSxFQUFNNkUsS0FDM0IsSUFBSSxJQUFJZCxLQUFNL0QsRUFDUCtELEVBQUcsSUFBTTlELEVBQU0sSUFBTThELEVBQUcsSUFBTTlELEVBQU0sSUFDbkNLLEtBQUs0QyxXQUFXMkIsR0FBTzFELFFBRS9CLEdBRVIsQ0FDQTJELG1CQUFtQjdFLEdBRW5CLENBRUE4RSxnQkFDSSxJQUFJN0IsRUFBYSxDQUFDNUMsS0FBS3VDLGFBQWN2QyxLQUFLd0MsZ0JBQWlCeEMsS0FBS3lDLGVBQ2hFekMsS0FBSzBDLGVBQWdCMUMsS0FBSzJDLGlCQUcxQixJQUFJLElBQUlqRCxLQUFRa0QsRUFBVyxDQUN2QixJQUFJOEIsRUFBVyxDQUFDMUUsS0FBSzJCLFdBQVczRCxjQUFlZ0MsS0FBSzJCLFdBQVcxRCxpQkFDM0QrQixLQUFLMkIsV0FBV3pELGdCQUFpQjhCLEtBQUsyQixXQUFXeEQsZ0JBQ2pENkIsS0FBSzJCLFdBQVd2RCxrQkFDaEJ1RyxFQUFnQixHQUFHbkIsVUFBVWtCLEdBQzdCWixFQUFNOUQsS0FBS21FLGtCQUFrQnpFLEdBRWpDLEtBQU1pRixFQUFjaEIsTUFBS2lCLEdBQU9BLEVBQUksSUFBTWQsRUFBSSxJQUFNYyxFQUFJLElBQU9kLEVBQUksR0FBS3BFLEVBQUtWLFFBQzdFNEYsRUFBSSxJQUFNZCxFQUFJLElBQU1jLEVBQUksSUFBTWQsRUFBSSxNQUM5QkEsRUFBTTlELEtBQUttRSxrQkFBa0J6RSxHQUdqQ00sS0FBSzJCLFdBQVdsQyxVQUFVQyxFQUFNb0UsRUFBSyxRQUV6QyxDQUVKLENBQ0FlLGdCQUNPN0UsS0FBSzBCLE1BQU10QixhQUFhSixLQUFLSyxRQUM1QnlFLE1BQU0sc0JBRWQsQ0FDQUMsb0JBQ0kvRSxLQUFLMEIsTUFBTXJELFlBQVkyQixLQUFLSixLQUNoQyxDQUNBb0YsbUJBQ0loRixLQUFLMkIsV0FBV3RELFlBQVksUUFDaEMsQ0FDQXdELGdCQUVJLE9BRGdCUCxFQUFZLEVBQUcsVUFBVyxFQUU5QyxDQUNBUyxtQkFFSSxPQURtQlQsRUFBWSxFQUFHLGFBQWMsRUFFcEQsQ0FDQVcsa0JBRUksT0FEa0JYLEVBQVksRUFBRyxZQUFhLEVBRWxELENBQ0FhLGtCQUVJLE9BRGtCYixFQUFZLEVBQUcsWUFBYSxFQUVsRCxDQUNBZSxtQkFFSSxPQURtQmYsRUFBWSxFQUFHLGFBQWMsRUFFcEQsR0FJSixXQUNJLElBQUlLLEVBQWFKLElBQ2IwRCxFQUFjMUQsSUFDZDJELEVBQVMsSUFBSTFELEVBQU95RCxFQUFhdEQsR0FDckN1RCxFQUFPSCxvQkFDUEcsRUFBT0YsbUJBRVBFLEVBQU9ULGdCQUNQUyxFQUFPeEQsTUFBTWpDLFVBQVV5RixFQUFPdEQsUUFBUyxDQUFDLEVBQUUsR0FBSSxVQUM5Q3NELEVBQU9wQyxRQUdYLENBQ0FxQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9sZWZ0RE9NLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcmlnaHRET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcGxheWVyRE9NID0gcmVxdWlyZSgnLi9sZWZ0RE9NJylcbmNvbnN0IGVuZW15RE9NID0gcmVxdWlyZSgnLi9yaWdodERPTScpXG5jb25zdCBzaGlwRmFjdG9yeSA9IHJlcXVpcmUoJy4vc2hpcEZhY3RvcnknKVxuZnVuY3Rpb24gZ2FtZUJvYXJkKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYXR0YWNrZWQ6IFtdLFxuICAgICAgICBjYXJyaWVySGl0Ym94OiBbXSxcbiAgICAgICAgYmF0dGxlc2hpcEhpdGJveDogW10sXG4gICAgICAgIGRlc3Ryb3llckhpdGJveDogW10sXG4gICAgICAgIHN1Ym1hcmluZUhpdGJveDogW10sXG4gICAgICAgIHBhdHJvbGJvYXRIaXRib3g6IFtdLFxuXG4gICAgICAgIGNyZWF0ZUJvYXJkKHBsYXllck5hbWUpe1xuICAgICAgICAgICAgY29uc3QgbGVmdEdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGVmdEdyaWQnKVxuICAgICAgICAgICAgY29uc3QgcmlnaHRHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJpZ2h0R3JpZCcpXG4gICAgICAgICAgICBsZXQgY29vcmRzID0gW107XG4gICAgICAgICAgICBsZXQgeEF4aXMgPSBbMCwxLDIsMyw0LDUsNiw3LDgsOV1cbiAgICAgICAgICAgIHhBeGlzLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB4QXhpcy5sZW5ndGg7IGkrKykgY29vcmRzLnB1c2goW2VsLCB4QXhpc1tpXV0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGZvciAobGV0IGUgb2YgY29vcmRzKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZihwbGF5ZXJOYW1lID09ICdwbGF5ZXInKXtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdsZWZ0Q2VsbHMnKTtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2lkJywgYGxlZnQke1tlWzBdLCBlWzFdXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdEdyaWQuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdyaWdodENlbGxzJyk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdpZCcsIGByaWdodCR7W2VbMF0sIGVbMV1dfWApO1xuICAgICAgICAgICAgICAgICAgICByaWdodEdyaWQuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwbGFjZVNoaXAoc2hpcCwgY29vcmQsIG5hbWUpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGNvb3JkWzFdICsgc2hpcC5sZW5ndGggPiAxMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGhpdGJveEtleSA9IGAke3NoaXAubmFtZX1IaXRib3hgO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IGNvb3JkWzBdO1xuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBjb29yZFsxXSArIGk7XG4gICAgICAgICAgICAgICAgdGhpc1toaXRib3hLZXldLnB1c2goW3gsIHldKTtcbiAgICAgICAgICAgICAgICBpZihuYW1lID09ICdwbGF5ZXInKXtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyRE9NKFt4LHldLCAnZ3JlZW4nKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVuZW15RE9NKFt4LHldLCAnZ3JlZW4nKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzW2hpdGJveEtleV07XG4gICAgICAgIH0sXG4gICAgICAgIHJlY2VpdmVBdHRhY2soY29vcmQpIHtcbiAgICAgICAgICAgIHRoaXMuYXR0YWNrZWQucHVzaChjb29yZCk7XG4gICAgICAgICAgICBjb25zdCBzaGlwSGl0Ym94ZXMgPSBbdGhpcy5jYXJyaWVySGl0Ym94LCB0aGlzLmJhdHRsZXNoaXBIaXRib3gsIHRoaXMuZGVzdHJveWVySGl0Ym94LFxuICAgICAgICAgICAgdGhpcy5zdWJtYXJpbmVIaXRib3gsIHRoaXMucGF0cm9sYm9hdEhpdGJveF1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yKGxldCBzaGlwIG9mIHNoaXBIaXRib3hlcyl7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBoaXRib3hlcyBvZiBzaGlwKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoaGl0Ym94ZXNbMF0gPT0gY29vcmRbMF0gJiYgaGl0Ym94ZXNbMV0gPT0gY29vcmRbMV0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbG9yID0gJ3JlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllckRPTShjb29yZCwgY29sb3IpXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3JldHVybiBzaGlwSGl0Ym94ZXMuaW5kZXhPZihzaGlwKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb2xvciA9ICd3aGl0ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllckRPTShjb29yZCwgY29sb3IpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29vcmRcbiAgICAgICAgfSxcbiAgICAgICAgYWxsU2hpcHNTdW5rKHNoaXBzKXtcbiAgICAgICAgICAgIHJldHVybiBzaGlwcy5ldmVyeShzaGlwID0+IHNoaXAuaXNTdW5rKCkpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2FtZUJvYXJkIiwiZnVuY3Rpb24gcGxheWVyRE9NKGNvb3JkLCBjb2xvcil7XG4gICAgbGV0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbGVmdCR7Y29vcmRbMF19LCR7Y29vcmRbMV19YClcbiAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yXG59XG5tb2R1bGUuZXhwb3J0cyA9IHBsYXllckRPTVxuIiwiZnVuY3Rpb24gZW5lbXlET00oY29vcmQsY29sb3IpIHtcbiAgICBcbiAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGByaWdodCR7Y29vcmRbMF19LCR7Y29vcmRbMV19YClcbiAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yXG59XG4gIFxuXG4vKlxuZnVuY3Rpb24gY3B1RE9NKGdhbWVCb2FyZCwgc2hpcHNBcnJheSwgb3ZlcmFsbEhpdGJveCl7XG4gICAgbGV0IGRvbUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJpZ2h0R3JpZCcpXG4gICAgZ2FtZUJvYXJkLmZvckVhY2goZSA9PntcbiAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3JpZ2h0Q2VsbHMnKVxuICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtbZVswXSwgZVsxXV19YClcbiAgICAgICAgZG9tQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbClcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhvdmVyYWxsSGl0Ym94KVxuICAgICAgICAgICAgb3ZlcmFsbEhpdGJveC5mb3JFYWNoKGUgPT57XG4gICAgICAgICAgICAgICAgaWYoY2VsbC5pZCA9PSBgJHtlWzBdfSwke2VbMV19YCl7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUub3BhY2l0eSA9ICcwLjYnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgICAgICBcbiAgICB9KVxuICAgIFxufVxuKi9cblxubW9kdWxlLmV4cG9ydHMgPSBlbmVteURPTSIsImZ1bmN0aW9uIHNoaXBGYWN0b3J5KGxlbmd0aCwgbmFtZSwgaGl0KXtcbiAgICByZXR1cm57XG4gICAgICAgIGxlbmd0aCxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgaGl0LFxuICAgICAgICBnb3RIaXQoKXtcbiAgICAgICAgICAgIGlmKGxlbmd0aCA+IGhpdCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Rlc3QnKVxuICAgICAgICAgICAgICAgIHRoaXMuaGl0ICs9IDFcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oaXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGlzU3Vuaygpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoIDw9IHRoaXMuaGl0O1xuICAgICAgICB9XG4gICAgfSAgIFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNoaXBGYWN0b3J5XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiY29uc3Qgc2hpcEZhY3RvcnkgPSByZXF1aXJlKCcuL3NoaXBGYWN0b3J5JylcbmNvbnN0IGdhbWVCb2FyZCA9IHJlcXVpcmUoJy4vZ2FtZUJvYXJkJylcbi8vY29uc3QgcGxheWVyID0gcmVxdWlyZSgnLi9wbGF5ZXInKVxuLy9jb25zdCBjcHUgPSByZXF1aXJlKCcuL3BsYXllcicpXG5jb25zdCBwbGF5ZXJET00gPSByZXF1aXJlKCcuL2xlZnRET00nKVxuY29uc3QgZW5lbXlET00gPSByZXF1aXJlKCcuL3JpZ2h0RE9NJyk7XG5cbmNsYXNzIFBsYXllcntcbiAgICBjb25zdHJ1Y3Rvcihib2FyZCxlbmVteUJvYXJkKXtcbiAgICAgICAgdGhpcy5uYW1lID0gJ3BsYXllcic7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBib2FyZDsgXG5cbiAgICAgICAgdGhpcy5jYXJyaWVyID0gdGhpcy5jcmVhdGVDYXJyaWVyKClcbiAgICAgICAgdGhpcy5iYXR0bGVzaGlwID0gdGhpcy5jcmVhdGVCYXR0bGVzaGlwKClcbiAgICAgICAgdGhpcy5kZXN0cm95ZXIgPSB0aGlzLmNyZWF0ZURlc3Ryb3llcigpXG4gICAgICAgIHRoaXMuc3VibWFyaW5lID0gdGhpcy5jcmVhdGVTdWJtYXJpbmUoKVxuICAgICAgICB0aGlzLnBhdHJvbGJvYXQgPSB0aGlzLmNyZWF0ZVBhdHJvbGJvYXQoKVxuXG4gICAgICAgIHRoaXMuc2hpcHMgPSBbdGhpcy5jYXJyaWVyLCB0aGlzLmJhdHRsZXNoaXAsIHRoaXMuZGVzdHJveWVyLCB0aGlzLnN1Ym1hcmluZSwgdGhpcy5wYXRyb2xib2F0XVxuXG4gICAgICAgIHRoaXMuZW5lbXkgPSAnZW5lbXknXG4gICAgICAgIHRoaXMuZW5lbXlCb2FyZCA9IGVuZW15Qm9hcmQ7XG5cbiAgICAgICAgdGhpcy5lbmVteUNhcnJpZXIgPSB0aGlzLmNyZWF0ZUNhcnJpZXIoKVxuICAgICAgICB0aGlzLmVuZW15QmF0dGxlc2hpcCA9IHRoaXMuY3JlYXRlQmF0dGxlc2hpcCgpXG4gICAgICAgIHRoaXMuZW5lbXlEZXN0cm95ZXIgPSB0aGlzLmNyZWF0ZURlc3Ryb3llcigpXG4gICAgICAgIHRoaXMuZW5lbXlTdWJtYXJpbmUgPSB0aGlzLmNyZWF0ZVN1Ym1hcmluZSgpXG4gICAgICAgIHRoaXMuZW5lbXlQYXRyb2xib2F0ID0gdGhpcy5jcmVhdGVQYXRyb2xib2F0KClcblxuICAgICAgICB0aGlzLmVuZW15U2hpcHMgPSBbdGhpcy5lbmVteUNhcnJpZXIsIHRoaXMuZW5lbXlCYXR0bGVzaGlwLCB0aGlzLmVuZW15RGVzdHJveWVyLFxuICAgICAgICB0aGlzLmVuZW15U3VibWFyaW5lLCB0aGlzLmVuZW15UGF0cm9sYm9hdF1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuZW5lbXlIaXRib3hlcyA9IFt0aGlzLmVuZW15Qm9hcmQuY2FycmllckhpdGJveCwgdGhpcy5lbmVteUJvYXJkLmJhdHRsZXNoaXBIaXRib3gsXG4gICAgICAgICAgICB0aGlzLmVuZW15Qm9hcmQuZGVzdHJveWVySGl0Ym94LCB0aGlzLmVuZW15Qm9hcmQuc3VibWFyaW5lSGl0Ym94LFxuICAgICAgICAgICAgdGhpcy5lbmVteUJvYXJkLnBhdHJvbGJvYXRIaXRib3hdXG4gICAgfVxuICAgIGF0dGFjaygpe1xuICAgICAgICBpZih0aGlzLm5hbWUgPT0gJ3BsYXllcicpe1xuICAgICAgICAgICAgY29uc3QgY3B1Q2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmlnaHRDZWxscycpO1xuICAgICAgICAgICAgY3B1Q2VsbHMuZm9yRWFjaChjZWxsID0+e1xuICAgICAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2QgPSB0aGlzLmNvbnZlcnRJZFRvQ29vcmQoY2VsbClcbiAgICAgICAgICAgICAgICAgICAgbGV0IGF0dGFja2VkQ29vcmQgPSB0aGlzLmVuZW15Qm9hcmQuYXR0YWNrZWRcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3ZlcmFsbEhpdGJveGVzID0gdGhpcy5lbmVteUhpdGJveGVzLnJlZHVjZSgoYWNjLCBhcnIpID0+IGFjYy5jb25jYXQoYXJyKSwgW10pO1xuICAgICAgICAgICAgICAgICAgICBpZihhdHRhY2tlZENvb3JkLmxlbmd0aCA8IDEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBoYiBvZiBvdmVyYWxsSGl0Ym94ZXMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGhiWzBdID09IGNkWzBdICYmIGhiWzFdID09IGNkWzFdKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXlET00oY2QsICdyZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmRBdHRhY2tlZFNoaXAoY2QpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15RE9NKGNkLCAnd2hpdGUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFja2VkQ29vcmQucHVzaChjZClcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKGF0dGFja2VkQ29vcmQuc29tZShlID0+IGVbMF0gPT0gY2RbMF0gJiYgZVsxXSA9PSBjZFsxXSkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGhiIG9mIG92ZXJhbGxIaXRib3hlcyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaGJbMF0gPT0gY2RbMF0gJiYgaGJbMV0gPT0gY2RbMV0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmVteURPTShjZCwgJ3JlZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmluZEF0dGFja2VkU2hpcChjZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXlET00oY2QsICd3aGl0ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNrZWRDb29yZC5wdXNoKGNkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmVuZW15Qm9hcmQuYXR0YWNrZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkLnJlY2VpdmVBdHRhY2sodGhpcy5jcHVBdHRhY2tDb29yZCgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjAwKVxuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBjcHVBdHRhY2tDb29yZCgpe1xuICAgICAgICBsZXQgZ2VuID0gdGhpcy5nZW5lcmF0ZUNvb3JkKCk7XG4gICAgICAgIHdoaWxlICh0aGlzLmJvYXJkLmF0dGFja2VkLnNvbWUoZSA9PiBlWzBdID09IGdlblswXSAmJiBlWzFdID09IGdlblsxXSkpIHtcbiAgICAgICAgICAgIGdlbiA9IHRoaXMuZ2VuZXJhdGVDb29yZCgpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdlblxuICAgIH1cbiAgICBnZW5lcmF0ZUNvb3JkKCl7XG4gICAgICAgIHJldHVybiBbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCldXG4gICAgfVxuICAgIGdlbmVyYXRlU2hpcENvb3JkKHNoaXApe1xuICAgICAgICByZXR1cm4gW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwIC0gc2hpcC5sZW5ndGgpKV1cbiAgICB9XG4gICAgY29udmVydElkVG9Db29yZChlbCl7XG4gICAgICAgIHJldHVybiBbcGFyc2VJbnQoZWwuaWQuY2hhckF0KDUpKSwgcGFyc2VJbnQoZWwuaWQuY2hhckF0KDcpKV1cbiAgICB9XG4gICAgZmluZEF0dGFja2VkU2hpcChjb29yZCl7XG4gICAgICAgIHRoaXMuZW5lbXlIaXRib3hlcy5zb21lKChzaGlwLCBpbmRleCkgPT57XG4gICAgICAgICAgICBmb3IobGV0IGhiIG9mIHNoaXApe1xuICAgICAgICAgICAgICAgIGlmKGhiWzBdID09IGNvb3JkWzBdICYmIGhiWzFdID09IGNvb3JkWzFdKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmVteVNoaXBzW2luZGV4XS5nb3RIaXQoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgY2hlY2tBdHRhY2tlZENvb3JkKGNvb3JkKXtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIHBsYWNlQ3B1U2hpcHMoKXtcbiAgICAgICAgbGV0IGVuZW15U2hpcHMgPSBbdGhpcy5lbmVteUNhcnJpZXIsIHRoaXMuZW5lbXlCYXR0bGVzaGlwLCB0aGlzLmVuZW15RGVzdHJveWVyLFxuICAgICAgICB0aGlzLmVuZW15U3VibWFyaW5lLCB0aGlzLmVuZW15UGF0cm9sYm9hdF1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBmb3IobGV0IHNoaXAgb2YgZW5lbXlTaGlwcyl7XG4gICAgICAgICAgICBsZXQgb2NjdXBpZWQgPSBbdGhpcy5lbmVteUJvYXJkLmNhcnJpZXJIaXRib3gsIHRoaXMuZW5lbXlCb2FyZC5iYXR0bGVzaGlwSGl0Ym94LFxuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlCb2FyZC5kZXN0cm95ZXJIaXRib3gsIHRoaXMuZW5lbXlCb2FyZC5zdWJtYXJpbmVIaXRib3gsIFxuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlCb2FyZC5wYXRyb2xib2F0SGl0Ym94XVxuICAgICAgICAgICAgbGV0IG9jY3VwaWVkVG90YWwgPSBbXS5jb25jYXQoLi4ub2NjdXBpZWQpXG4gICAgICAgICAgICBsZXQgZ2VuID0gdGhpcy5nZW5lcmF0ZVNoaXBDb29yZChzaGlwKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB3aGlsZShvY2N1cGllZFRvdGFsLnNvbWUob2NjID0+IG9jY1swXSA9PSBnZW5bMF0gJiYgb2NjWzFdID09IChnZW5bMV0gKyBzaGlwLmxlbmd0aCkgfHxcbiAgICAgICAgICAgIG9jY1swXSA9PSBnZW5bMF0gJiYgb2NjWzFdID09IGdlblsxXSkpe1xuICAgICAgICAgICAgICAgIGdlbiA9IHRoaXMuZ2VuZXJhdGVTaGlwQ29vcmQoc2hpcClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5lbmVteUJvYXJkLnBsYWNlU2hpcChzaGlwLCBnZW4sICdlbmVteScpXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgY2hlY2tHYW1lT3Zlcigpe1xuICAgICAgICBpZih0aGlzLmJvYXJkLmFsbFNoaXBzU3Vuayh0aGlzLnNoaXBzKSl7XG4gICAgICAgICAgICBhbGVydCgnWW91IGxvc3QgdSBma24gbm9vYicpXG4gICAgICAgIH1cbiAgICB9XG4gICAgY3JlYXRlUGxheWVyQm9hcmQoKXtcbiAgICAgICAgdGhpcy5ib2FyZC5jcmVhdGVCb2FyZCh0aGlzLm5hbWUpXG4gICAgfVxuICAgIGNyZWF0ZUVuZW15Qm9hcmQoKXtcbiAgICAgICAgdGhpcy5lbmVteUJvYXJkLmNyZWF0ZUJvYXJkKCdlbmVteScpXG4gICAgfVxuICAgIGNyZWF0ZUNhcnJpZXIoKXtcbiAgICAgICAgY29uc3QgY2FycmllciA9IHNoaXBGYWN0b3J5KDUsICdjYXJyaWVyJywgMClcbiAgICAgICAgcmV0dXJuIGNhcnJpZXJcbiAgICB9XG4gICAgY3JlYXRlQmF0dGxlc2hpcCgpe1xuICAgICAgICBjb25zdCBiYXR0bGVzaGlwID0gc2hpcEZhY3RvcnkoNCwgJ2JhdHRsZXNoaXAnLCAwKVxuICAgICAgICByZXR1cm4gYmF0dGxlc2hpcFxuICAgIH1cbiAgICBjcmVhdGVEZXN0cm95ZXIoKXtcbiAgICAgICAgY29uc3QgZGVzdHJveWVyID0gc2hpcEZhY3RvcnkoMywgJ2Rlc3Ryb3llcicsIDApXG4gICAgICAgIHJldHVybiBkZXN0cm95ZXJcbiAgICB9XG4gICAgY3JlYXRlU3VibWFyaW5lKCl7XG4gICAgICAgIGNvbnN0IHN1Ym1hcmluZSA9IHNoaXBGYWN0b3J5KDMsICdzdWJtYXJpbmUnLCAwKVxuICAgICAgICByZXR1cm4gc3VibWFyaW5lXG4gICAgfVxuICAgIGNyZWF0ZVBhdHJvbGJvYXQoKXtcbiAgICAgICAgY29uc3QgcGF0cm9sYm9hdCA9IHNoaXBGYWN0b3J5KDIsICdwYXRyb2xib2F0JywgMClcbiAgICAgICAgcmV0dXJuIHBhdHJvbGJvYXRcbiAgICB9XG5cblxufVxuZnVuY3Rpb24gZ2FtZUxvb3AoKXtcbiAgICBsZXQgZW5lbXlCb2FyZCA9IGdhbWVCb2FyZCgpXG4gICAgbGV0IHBsYXllckJvYXJkID0gZ2FtZUJvYXJkKClcbiAgICBsZXQgcGxheWVyID0gbmV3IFBsYXllcihwbGF5ZXJCb2FyZCwgZW5lbXlCb2FyZClcbiAgICBwbGF5ZXIuY3JlYXRlUGxheWVyQm9hcmQoKVxuICAgIHBsYXllci5jcmVhdGVFbmVteUJvYXJkKClcbiAgICBcbiAgICBwbGF5ZXIucGxhY2VDcHVTaGlwcygpXG4gICAgcGxheWVyLmJvYXJkLnBsYWNlU2hpcChwbGF5ZXIuY2FycmllciwgWzUsNF0sICdwbGF5ZXInKVxuICAgIHBsYXllci5hdHRhY2soKVxuICAgIFxuICAgIFxufVxuZ2FtZUxvb3AoKVxuLypcbmZ1bmN0aW9uIGdhbWVMb29wKCl7XG4gICAgbGV0IGVuZW15Qm9hcmQgPSBnYW1lQm9hcmQoKVxuICAgIGxldCBwbGF5ZXJCb2FyZCA9IGdhbWVCb2FyZCgpXG4gICAgbGV0IHBsYXllciA9IG5ldyBQbGF5ZXIoJ3BsYXllcicsIHBsYXllckJvYXJkLCBlbmVteUJvYXJkKVxuICAgIHBsYXllci5jcmVhdGVQbGF5ZXJCb2FyZCgpXG4gICAgcGxheWVyLmJvYXJkLnBsYWNlU2hpcChwbGF5ZXIuY2FycmllciwgWzUsNF0pXG4gICAgXG4gICAgbGV0IGNwdUJvYXJkID0gZ2FtZUJvYXJkKClcbiAgICBsZXQgY3B1ID0gbmV3IFBsYXllcignY3B1JywgY3B1Qm9hcmQpXG4gICAgY3B1LmNyZWF0ZVBsYXllckJvYXJkKClcbiAgICBwbGF5ZXIuYXR0YWNrKClcbn1cbmdhbWVMb29wKClcbiovXG5cbi8qXG5mdW5jdGlvbiBwbGF5ZXIoKXtcbiAgICBjb25zb2xlLmxvZygncHBwcCcpO1xuICAgIGxldCB0ZXN0Q29vcmQgPSBbNSw0XVxuICAgIGxldCBkb21Cb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0R3JpZCcpXG4gICAgbGV0IHBsYXllck5hbWUgPSAncGxheWVyJ1xuICAgIGNvbnN0IGNhcnJpZXIgPSBzaGlwRmFjdG9yeSg1LCAnY2FycmllcicsIDApXG4gICAgY29uc3QgYmF0dGxlc2hpcCA9IHNoaXBGYWN0b3J5KDQsICdiYXR0bGVzaGlwJywgMClcbiAgICBjb25zdCBkZXN0cm95ZXIgPSBzaGlwRmFjdG9yeSgzLCAnZGVzdHJveWVyJywgMClcbiAgICBjb25zdCBzdWJtYXJpbmUgPSBzaGlwRmFjdG9yeSgzLCAnc3VibWFyaW5lJywgMClcbiAgICBjb25zdCBwYXRyb2xib2F0ID0gc2hpcEZhY3RvcnkoMiwgJ3BhdHJvbGJvYXQnLCAwKVxuICAgIGNvbnN0IHBsYXllckdhbWVCb2FyZCA9IGdhbWVCb2FyZCgpXG4gICAgcGxheWVyR2FtZUJvYXJkLmNyZWF0ZUJvYXJkKGRvbUJvYXJkLHBsYXllck5hbWUpXG4gICAgcGxheWVyR2FtZUJvYXJkLnBsYWNlU2hpcChjYXJyaWVyLCBbNSw0XSlcbiAgICBwbGF5ZXJHYW1lQm9hcmQucGxhY2VTaGlwKGJhdHRsZXNoaXAsIFsyLDZdKVxuICAgIHBsYXllckdhbWVCb2FyZC5wbGFjZVNoaXAoZGVzdHJveWVyLCBbMSw1XSlcbiAgICBwbGF5ZXJHYW1lQm9hcmQucGxhY2VTaGlwKHN1Ym1hcmluZSwgWzQsNF0pXG4gICAgcGxheWVyR2FtZUJvYXJkLnBsYWNlU2hpcChwYXRyb2xib2F0LCBbNiw0XSlcbiAgICBjb25zdCBzaGlwcyA9IFtjYXJyaWVyLCBiYXR0bGVzaGlwLCBkZXN0cm95ZXIsIHN1Ym1hcmluZSwgcGF0cm9sYm9hdF07XG4gICAgY29uc3Qgc2hpcEhpdGJveCA9IFtdXG4gICAgbGV0IGNwdUF0dGFja0Nvb3JkID0gW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpLE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpXVxuICAgIGxldCBhdHRhY2tlZENvb3JkID0gcGxheWVyR2FtZUJvYXJkLnJlY2VpdmVBdHRhY2sodGVzdENvb3JkLCBzaGlwcylcbiAgICBzaGlwc1thdHRhY2tlZENvb3JkXS5nb3RIaXQoKVxuICAgIFxuXG59XG5mdW5jdGlvbiBjcHUoKXtcbiAgICBjb25zdCBkb21Cb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaWdodEdyaWQnKVxuICAgIGxldCBwbGF5ZXJOYW1lID0gJ2NwdSdcbiAgICBjb25zdCBjYXJyaWVyID0gc2hpcEZhY3RvcnkoNSwgJ2NhcnJpZXInKVxuICAgIGNvbnN0IGJhdHRsZXNoaXAgPSBzaGlwRmFjdG9yeSg0LCAnYmF0dGxlc2hpcCcpXG4gICAgY29uc3QgZGVzdHJveWVyID0gc2hpcEZhY3RvcnkoMywgJ2Rlc3Ryb3llcicpXG4gICAgY29uc3Qgc3VibWFyaW5lID0gc2hpcEZhY3RvcnkoMywgJ3N1Ym1hcmluZScpXG4gICAgY29uc3QgcGF0cm9sYm9hdCA9IHNoaXBGYWN0b3J5KDIsICdwYXRyb2xib2F0JylcbiAgICBjb25zdCBjcHVHYW1lQm9hcmQgPSBnYW1lQm9hcmQoKVxuICAgIGNwdUdhbWVCb2FyZC5jcmVhdGVCb2FyZChkb21Cb2FyZCwgcGxheWVyTmFtZSlcbiAgICBjcHVHYW1lQm9hcmQucGxhY2VTaGlwKGNhcnJpZXIsIFs1LDRdKVxuICAgIGNwdUdhbWVCb2FyZC5wbGFjZVNoaXAoYmF0dGxlc2hpcCwgWzIsNl0pXG4gICAgY3B1R2FtZUJvYXJkLnBsYWNlU2hpcChkZXN0cm95ZXIsIFsxLDVdKVxuICAgIGNwdUdhbWVCb2FyZC5wbGFjZVNoaXAoc3VibWFyaW5lLCBbNCw0XSlcbiAgICBjcHVHYW1lQm9hcmQucGxhY2VTaGlwKHBhdHJvbGJvYXQsIFs1LDRdKVxuICAgIFxuICAgXG5cbn1cbiovXG4iXSwibmFtZXMiOlsicGxheWVyRE9NIiwiZW5lbXlET00iLCJtb2R1bGUiLCJleHBvcnRzIiwiYXR0YWNrZWQiLCJjYXJyaWVySGl0Ym94IiwiYmF0dGxlc2hpcEhpdGJveCIsImRlc3Ryb3llckhpdGJveCIsInN1Ym1hcmluZUhpdGJveCIsInBhdHJvbGJvYXRIaXRib3giLCJjcmVhdGVCb2FyZCIsInBsYXllck5hbWUiLCJsZWZ0R3JpZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInJpZ2h0R3JpZCIsImNvb3JkcyIsInhBeGlzIiwiZm9yRWFjaCIsImVsIiwiaSIsImxlbmd0aCIsInB1c2giLCJlIiwiY2VsbCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsInBsYWNlU2hpcCIsInNoaXAiLCJjb29yZCIsIm5hbWUiLCJoaXRib3hLZXkiLCJ4IiwieSIsInRoaXMiLCJyZWNlaXZlQXR0YWNrIiwic2hpcEhpdGJveGVzIiwiaGl0Ym94ZXMiLCJhbGxTaGlwc1N1bmsiLCJzaGlwcyIsImV2ZXJ5IiwiaXNTdW5rIiwiY29sb3IiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiaGl0IiwiZ290SGl0IiwiY29uc29sZSIsImxvZyIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsInVuZGVmaW5lZCIsIl9fd2VicGFja19tb2R1bGVzX18iLCJzaGlwRmFjdG9yeSIsImdhbWVCb2FyZCIsIlBsYXllciIsImNvbnN0cnVjdG9yIiwiYm9hcmQiLCJlbmVteUJvYXJkIiwiY2FycmllciIsImNyZWF0ZUNhcnJpZXIiLCJiYXR0bGVzaGlwIiwiY3JlYXRlQmF0dGxlc2hpcCIsImRlc3Ryb3llciIsImNyZWF0ZURlc3Ryb3llciIsInN1Ym1hcmluZSIsImNyZWF0ZVN1Ym1hcmluZSIsInBhdHJvbGJvYXQiLCJjcmVhdGVQYXRyb2xib2F0IiwiZW5lbXkiLCJlbmVteUNhcnJpZXIiLCJlbmVteUJhdHRsZXNoaXAiLCJlbmVteURlc3Ryb3llciIsImVuZW15U3VibWFyaW5lIiwiZW5lbXlQYXRyb2xib2F0IiwiZW5lbXlTaGlwcyIsImVuZW15SGl0Ym94ZXMiLCJhdHRhY2siLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNkIiwiY29udmVydElkVG9Db29yZCIsImF0dGFja2VkQ29vcmQiLCJvdmVyYWxsSGl0Ym94ZXMiLCJyZWR1Y2UiLCJhY2MiLCJhcnIiLCJjb25jYXQiLCJoYiIsImZpbmRBdHRhY2tlZFNoaXAiLCJzb21lIiwic2V0VGltZW91dCIsImNwdUF0dGFja0Nvb3JkIiwiZ2VuIiwiZ2VuZXJhdGVDb29yZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImdlbmVyYXRlU2hpcENvb3JkIiwicGFyc2VJbnQiLCJpZCIsImNoYXJBdCIsImluZGV4IiwiY2hlY2tBdHRhY2tlZENvb3JkIiwicGxhY2VDcHVTaGlwcyIsIm9jY3VwaWVkIiwib2NjdXBpZWRUb3RhbCIsIm9jYyIsImNoZWNrR2FtZU92ZXIiLCJhbGVydCIsImNyZWF0ZVBsYXllckJvYXJkIiwiY3JlYXRlRW5lbXlCb2FyZCIsInBsYXllckJvYXJkIiwicGxheWVyIiwiZ2FtZUxvb3AiXSwic291cmNlUm9vdCI6IiJ9