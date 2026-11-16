证明（连续时间平均模型）：
1. PFD 与电荷泵：对于周期为 $T_{in}$ 的两个输入之间的恒定相位差 Δφ，PFD 的一个输出在每个周期内产生宽度为 $\Delta\phi\,T_{in}/2\pi$ 的脉冲，电荷泵在此期间输出 ±$I_P$。在一个周期内取平均，$\bar I_{CP} = I_P\Delta\phi/2\pi$，因此 $I_{CP}(s)/\Delta\phi(s) = I_P/2\pi$，不含任何动态。（等价地，对于相位阶跃 $\phi_0u(t)$，每个周期的电荷为 $I_P\phi_0T_{in}/2\pi$，即平均电流为 $I_P\phi_0/2\pi$。）
2. 环路滤波器：泵电流流过 $R_P$–$C_P$ 串联支路，其阻抗为 $Z(s) = R_P + 1/(C_Ps)$，因此 $V_{cont} = I_{CP}Z$。
3. 因此 $V_{cont}/\Delta\phi = (I_P/2\pi)(R_P + 1/(C_Ps))$。

时域验证：
- 对于 $\Delta\phi = \phi_0u(t)$，平均响应为 $V_{cont}(t) = \dfrac{I_P\phi_0}{2\pi}\left(R_P + \dfrac{t}{C_P}\right)$：一个幅度为 $I_P\phi_0R_P/2\pi$ 的阶跃加上一个斜坡。
- 对其求导得到冲激响应 $h(t) = \dfrac{I_P}{2\pi}\left[R_P\delta(t) + \dfrac{u(t)}{C_P}\right]$，其拉普拉斯变换正是题中给出的结果。
- $I_PR_P/2\pi$ 项是比例通路，它产生了位于 $-1/(R_PC_P)$ 的环路零点。
- 该近似在环路带宽（loop bandwidth）远低于输入频率时成立，并且忽略了窄的复位脉冲。
