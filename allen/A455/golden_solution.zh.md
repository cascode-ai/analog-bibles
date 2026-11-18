$A_{vd}(0) \ge 1022$。

- 理想输出：$v_{out} = -(C/C)(-V_{REF}) = +V_{REF}$（满量程）。
- 反馈系数（feedback factor）$\beta = C/(C + C) = 1/2$，环路增益为 $A/2$：$v_{out} = V_{REF}\dfrac{A/2}{1 + A/2}$，相对误差为 $1/(1 + A/2)$。
- 8 位 DAC 的 0.5 LSB 为 $V_{REF}/2^9$：$1/(1 + A/2) \le 1/512$ → $A \ge 2(512 - 1) = 1022$。
