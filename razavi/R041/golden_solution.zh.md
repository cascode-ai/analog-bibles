# Golden Solution - R041

## 参考答案

- 平方律：$g_m = \mu_nC_{ox}(W/L)(V_{GS} - V_{TH})$。
- 栅极电容：忽略交叠电容（overlap capacitance），总沟道电容 $C_{GS} + C_{GD} \approx WLC_{ox}$。
- $f_T = \dfrac{\mu_nC_{ox}(W/L)(V_{GS}-V_{TH})}{2\pi WLC_{ox}} = \dfrac{\mu_n(V_{GS}-V_{TH})}{2\pi L^2}$；$W$ 与 $C_{ox}$ 相互抵消。
- 若采用饱和区中的电容分配 $C_{GS} = \tfrac23WLC_{ox}$、$C_{GD} \approx 0$，同样的推导得到 $\tfrac32\mu_n(V_{GS}-V_{TH})/(2\pi L^2)$：标度关系相同，只是常数不同。
- 解释：饱和区中的最小 $V_{DS}$ 为 $V_{GS} - V_{TH}$。在 $I_D$ 固定时要降低它，需要 $W \propto 1/(V_{GS}-V_{TH})^2$，这使电容比 $g_m$ 增长得更快（$g_m = 2I_D/(V_{GS}-V_{TH})$ 只按 $1/(V_{GS}-V_{TH})$ 增大），因此 $f_T \propto (V_{GS}-V_{TH})/L^2$ 随允许的电压余度（headroom）成比例地下降。

## 评分说明

- +2 分。由平方律求得 $g_m$，说明总栅极电容近似为 $WLC_{ox}$，展示 $W$ 和 $C_{ox}$ 消去，得到 $f_T\propto\mu_n(V_{GS}-V_{TH})/L^2$。若采用 $C_{GS}=\tfrac23WLC_{ox}$ 得到 $3/2$ 系数，说明取总栅极电容约为 $WLC_{ox}$ 时如何得到题给公式，同样可得满分。
- +1 分。标度关系正确，但未解释系数差异，或未说明该关系与低电压设计的联系。
- 0 分。推导有缺漏，例如未说明栅极电容与 $W$、$L$ 的关系。
- −2 分。断言 $f_T\propto1/L$，或断言降低过驱动电压会提高 $f_T$，或断言 $W$ 无法消去。
