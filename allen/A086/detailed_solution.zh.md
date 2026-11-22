# 详细步骤 - A086

两个电路中的输出管 M1 和 M2 相同，因此只要它们的栅压相同，输出特性就完全相同。这些栅压由二极管连接的 M3 和 M4 确定；偏置电流减半时，M3 和 M4 的宽长比也须减半，才能保持相同的 $V_{GS}$，即相同的电流密度。

### 第 1 步 — [图 2] 中的栅压

流过电流 $I$ 的二极管连接晶体管有 $V_{GS}=V_T+\sqrt{2I/[K'(W/L)]}$，它只取决于电流密度 $I/(W/L)$。在 [图 2] 中：

$$
V_{GS3}=0.7\ \mathrm V+\sqrt{\frac{2(10\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(4)}}=0.7+0.213=0.913\ \mathrm V,
\qquad
V_{GS4}=0.7\ \mathrm V+\sqrt{\frac{2(10\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(1)}}=0.7+0.426=1.126\ \mathrm V .
$$

M1（4/1）与 M3 的 $V_{GS}$ 相同，因此流过 $i_{OUT}=10\ \mu$A。M2（4/1）在 10 µA 下需要 $V_{GS2}=0.913$ V，因此其源极（即 M1 的漏极）位于 $1.126-0.913=0.213\ \mathrm V=V_{ON}$：M1 恰好饱和，该电路是一个高摆幅共源共栅电路，$v_{OUT}(\min)=2V_{ON}=0.43$ V。

### 第 2 步 — 输出特性相同的条件

在 [图 1] 中，M1 和 M2 不变（4/1）。若它们的栅极得到同样的 0.913 V 和 1.126 V，输出支路的每个工作点（包括 $i_{OUT}$、最小输出电压和输出电阻）都与 [图 2] 相同。因此 M3 和 M4 必须在 5 µA 下产生与原来 10 µA 时相同的 $V_{GS}$，这要求电流密度相同：

$$
\frac{I_{new}}{(W/L)_{new}}=\frac{I_{old}}{(W/L)_{old}}
\quad\Rightarrow\quad
\Big(\frac WL\Big)_{new}=\frac{5\ \mu\mathrm A}{10\ \mu\mathrm A}\Big(\frac WL\Big)_{old}.
$$

### 第 3 步 — M3 和 M4 的尺寸

$$
\Big(\frac WL\Big)_3=\frac12\Big(\frac41\Big)=\frac21,\qquad
\Big(\frac WL\Big)_4=\frac12\Big(\frac11\Big)=\frac12 .
$$

校验：M3（2/1）在 5 µA 下 $V_{GS3}=0.7+\sqrt{2(5)/(110\times2)}=0.913$ V，因此 M1（4/1）以 2 倍电流增益镜像出 $10\ \mu$A；M4（1/2）在 5 µA 下 $V_{GS4}=0.7+\sqrt{2(5)(2)/110}=1.126$ V。M3 取 $L=1\ \mu$m 时 $W_3=2\ \mu$m；M4 可画成 $W_4=1\ \mu$m、$L_4=2\ \mu$m。输出仍为 $i_{OUT}=10\ \mu$A，最小输出电压和输出电阻与 [图 2] 相同，而两条参考支路的电流减半。
