# 详细步骤 - A432

运放增益有限时，反相输入端不再是严格的虚地，输出比理想值小一个因子 $A\beta/(1+A\beta)$。反馈系数 $\beta$ 取决于接入的输入电阻数目，因此误差随码变化；最坏情况在满量程处，要求该误差不超过半个 LSB 即得最小增益。

### 第 1 步 — 有限增益下的输出

同相输入端接地，故 $v_{out}=-A\,v_-$，即 $v_-=-v_{out}/A$。闭合的开关把其电阻接到 $V_{REF}$；断开的开关使电阻悬空。反相输入端的 KCL：

$$
(V_{REF}-v_-)\sum_{i=0}^{3}\frac{b_i}{R_{i+1}}=\frac{v_--v_{out}}{R_0} .
$$

由 $R_0\sum b_i/R_{i+1}=D=\sum b_i/2^{i+1}=k/16$ 得

$$
D\,V_{REF}=(1+D)\,v_--v_{out}=-v_{out}\Bigl(1+\frac{1+D}A\Bigr)
\quad\Rightarrow\quad
v_{out}=-D\,V_{REF}\,\frac{A\beta}{1+A\beta},\qquad \beta=\frac1{1+D} .
$$

$\beta=R_0^{-1}/(R_0^{-1}+\sum b_i/R_{i+1})$ 是输出经 $R_0$ 与闭合输入电阻反馈到反相输入端的比例。

### 第 2 步 — 误差随码的变化

与理想输出 $-DV_{REF}$ 相比的差额为

$$
\varepsilon(D)=\frac{D\,V_{REF}}{1+A\beta}=\frac{D\,V_{REF}}{1+A/(1+D)} ,
$$

它随 $D$ 增大：码越大，理想输出越大，同时反馈系数越小。最大误差出现在码 1111，$D=15/16$，$\beta=16/31$。

### 第 3 步 — 最小增益

要求满量程处 $\varepsilon\le\tfrac12\,\mathrm{LSB}=V_{REF}/32$：

$$
\frac{15/16}{1+16A/31}\le\frac1{32}
\quad\Rightarrow\quad
1+\frac{16A}{31}\ge30
\quad\Rightarrow\quad
A_{vd}(0)\ge\frac{29\cdot31}{16}=56.2\ \mathrm{V/V}.
$$

该要求并不高，因为环路增益 $A\beta$ 只需把满量程误差减小到约 1/30。由于 $A$ 较大时 $\varepsilon\approx D(1+D)V_{REF}/A$，误差中含有随码二次变化的分量，即除增益误差外还有真正的非线性，因此要按 INL 检验，而不能靠修调增益消除。
