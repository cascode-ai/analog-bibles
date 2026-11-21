# 详细步骤 - A455

当 $\omega_a\to\infty$ 时运放是一个纯增益 $A=A_{vd}(0)$，只需考虑静态误差。在有限增益下对反相输入端应用电荷守恒求出输出，写出相对误差，并要求它在满量程处小于 8 位转换器的 0.5 LSB。

### 第 1 步 — 理想输出

开关把 $-V_{REF}$（正端接地）加到输入电容上。运放理想时反相输入端保持 0 V，输入电容内侧极板上的电荷 $C(0-(-V_{REF}))=CV_{REF}$ 必须由反馈电容平衡，因此

$$
v_{out,ideal}=-\frac{C}{C}\left(-V_{REF}\right)=+V_{REF},
$$

这就是该等效电路的满量程输出。

### 第 2 步 — 有限增益下的输出

两个电容初始都已放电，反相输入节点不取电流，其总电荷保持为零。利用 $v_-=-v_{out}/A$：

$$
C\left(v_--(-V_{REF})\right)+C\left(v_--v_{out}\right)=0
\;\Longrightarrow\;
2v_-+V_{REF}-v_{out}=0
\;\Longrightarrow\;
v_{out}=\frac{V_{REF}}{1+2/A}=V_{REF}\,\frac{A\beta}{1+A\beta},\quad \beta=\frac{C}{C+C}=\frac12 .
$$

相对误差为

$$
\frac{v_{out,ideal}-v_{out}}{v_{out,ideal}}=\frac{1}{1+A\beta}=\frac{1}{1+A/2}.
$$

### 第 3 步 — 满足 ±0.5 LSB 的最小增益

对 8 位 DAC，$0.5\,\mathrm{LSB}=V_{REF}/2^9=V_{REF}/512$。满量程输出处的误差不得超过它：

$$
\frac{1}{1+A/2}\le\frac{1}{512}
\;\Longrightarrow\;
\frac A2\ge511
\;\Longrightarrow\;
A_{vd}(0)\ge1022 .
$$

电容反馈的反馈系数为 1/2，所需增益是按单位反馈（$\beta=1$）估算的两倍。
