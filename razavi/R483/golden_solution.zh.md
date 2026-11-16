$C_{X,max} \approx 0.20$ pF（100 fF 时 PM = 55°）。
- 在 X 处断开环路，环路增益（loop gain）为 $T(s) = \dfrac{10}{(1 + sR_DC_X)\left[(1 + sC_Y/g_{m2})(1 + sR_FC_A) + sC_A/g_{m2}\right]}$。$C_X$ 决定第一个次极点（non-dominant pole）$1/R_DC_X$（100 fF 时为 10¹⁰ rad/s）。
- 增大 $C_X$ 会使该极点向增益交点（gain crossover）靠近。当 $C_X \approx 196$ fF 时 PM = 45°（极点位于 5.1×10⁹ rad/s，$\omega_u \approx 6.2\times10^9$ rad/s）。按独立极点近似计算得 ≈ 193 fF。
- 这种依赖关系并不单调：PM 在 $C_X$ ≈ 1 pF 附近降到最低的 ≈ 35°，此时两个最低的极点重合；只有当 $C_X \gtrsim 4.2$ pF、节点 X 成为主极点（dominant pole）时，PM 才回升到 45° 以上。按题目的提法、从 100 fF 出发，答案为 ≈ 0.2 pF。
