#include <iostream>

class Solution
{
public:
    int alternateDigitSum(int n)
    {
        int ans = 0, sign = 1;
        for (; n; n /= 10)
        {
            ans += n % 10 * sign;
            sign = -sign;
        }
        return ans * -sign;
    }
};

int main()
{
    Solution Solution1;
    int n = 512;
    int res = Solution1.alternateDigitSum(n);
    std::cout << "Res: " << res << std::endl;
    return 0;
}