// 小扣当前位于魔塔游戏第一层，共有 N 个房间，编号为 0 ~ N-1。每个房间的补血道具/怪物对于血量影响记于数组 nums，其中正数表示道具补血数值，即血量增加对应数值；
// 负数表示怪物造成伤害值，即血量减少对应数值；0 表示房间对血量无影响。

// 小扣初始血量为 1，且无上限。假定小扣原计划按房间编号升序访问所有房间补血/打怪，为保证血量始终为正值，小扣需对房间访问顺序进行调整，每次仅能将一个怪物房间（负数的房间）调整至访问顺序末尾。
// 请返回小扣最少需要调整几次，才能顺利访问所有房间。若调整顺序也无法访问完全部房间，请返回 - 1。

// 示例 1：

// 输入：nums = [100,100,100,-250,-60,-140,-50,-50,100,150]

// 输出：1

// 解释：初始血量为 1。至少需要将 nums[3] 调整至访问顺序末尾以满足要求。

// 示例 2：

// 输入：nums = [-200,-300,400,0]

// 输出：-1

// 解释：调整访问顺序也无法完成全部房间的访问。

// 提示：

// 1 <= nums.length <= 10^5
// -10^5 <= nums[i] <= 10^5
/**
 * @param {number[]} nums
 * @return {number}
 */
var magicTower = function (nums) {
  let minCount = 0;

  const deep = (curArr, curCount) => {
    if (curArr.length === nums.length) {
      if (curArr.reduce((a, b) => a + b, 0) > 0) {
        minCount = Math.min(minCount, curCount);
      }
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] < 0) {
        const newArr = [...curArr];
        newArr.push(...nums.slice(i + 1));
        newArr.push(nums[i]);
        deep(newArr, curCount + 1);
      } else {
        const newArr = [...curArr];
        newArr.push(nums[i]);
        deep(newArr, curCount);
      }
    }
  };

  deep([], 0);

  return minCount;
};

nums = [100, 100, 100, -250, -60, -140, -50, -50, 100, 150];

console.log(magicTower(nums));
