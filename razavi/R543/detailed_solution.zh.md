# 详细步骤 - R543

**思路。** 用注入节点 A 和 B 的电流源 $i_{n1}$ 和 $i_{n2}$ 表示 $M_1$ 和 $M_2$ 的噪声。联立两个节点方程和运放方程解出 $v_B$，再把两个互不相关的贡献按功率相加。大增益极限表明，环路无法消除两个噪声电流的**差值**。

### 第 1 步 — 含噪声源的小信号模型

- 运放给出 $v_P = A_0(v_+ - v_-) = A_0(v_B - v_A)$（$V_{n,op} = 0$）。
- 在 A 点（$M_1$ 的漏极），$M_1$ 的小信号电流 $g_{mP}v_P$ 从 A 抽出，即一个从 A 流向地的电流源（抬高 PMOS 栅极会减小流入 A 的电流）；双极器件相当于对地的 $1/g_{mN}$，且 $i_{n1}$ 注入 A。
- 在 B 点（$M_2$ 的漏极，即输出端），同样的 $g_{mP}v_P$ 从 B 抽出，该支路对地电阻为 $R_1 + 1/g_{mN}$，且 $i_{n2}$ 注入 B。

每个噪声电流都具有给定的谱密度 $\overline{i_n^2}$；$i_{n1}$ 和 $i_{n2}$ 来自不同的器件，互不相关。

<!-- diagram: diagram-01.cir -->

### 第 2 步 — 节点方程

流入每个节点的净电流经该支路的电阻流向地：

$$v_A = \frac{i_{n1} - g_{mP}v_P}{g_{mN}} ,\qquad v_B = \left(i_{n2} - g_{mP}v_P\right)\left(R_1 + \frac{1}{g_{mN}}\right),\qquad v_P = A_0\,(v_B - v_A).$$

### 第 3 步 — 求解 $v_B$

令 $u = g_{mP}v_P$（公共的 PMOS 信号电流），$r_A = 1/g_{mN}$，$r_B = R_1 + 1/g_{mN}$，于是 $r_B - r_A = R_1$。将运放方程乘以 $g_{mP}$ 并代入节点电压：

$$u = A_0g_{mP}\left[r_B(i_{n2} - u) - r_A(i_{n1} - u)\right] = A_0g_{mP}\left[r_Bi_{n2} - r_Ai_{n1} - R_1u\right],$$

$$u\,(1 + A_0g_{mP}R_1) = A_0g_{mP}\,(r_Bi_{n2} - r_Ai_{n1}),\qquad u = \frac{A_0g_{mP}(r_Bi_{n2} - r_Ai_{n1})}{1 + A_0g_{mP}R_1}.$$

再由 $v_B = r_B(i_{n2} - u)$：

$$
\begin{aligned}
v_B &= \frac{r_B}{1 + A_0g_{mP}R_1}\left[i_{n2}(1 + A_0g_{mP}R_1) - A_0g_{mP}r_Bi_{n2} + A_0g_{mP}r_Ai_{n1}\right]\\
&= \frac{r_B}{1 + A_0g_{mP}R_1}\left[A_0g_{mP}r_A\,i_{n1} + (1 - A_0g_{mP}r_A)\,i_{n2}\right],
\end{aligned}
$$

这里利用了 $1 + A_0g_{mP}R_1 - A_0g_{mP}r_B = 1 - A_0g_{mP}r_A$。代入 $r_A = 1/g_{mN}$ 和 $r_B/g_{mN} = (1 + g_{mN}R_1)/g_{mN}^2$：

$$\boxed{V_{n,out} = v_B = \frac{(1 + g_{mN}R_1)\left[A_0g_{mP}\,(i_{n1} - i_{n2}) + g_{mN}\,i_{n2}\right]}{g_{mN}^2\,(1 + A_0g_{mP}R_1)}}$$

### 第 4 步 — 输出噪声功率（精确）

$i_{n1}$ 和 $i_{n2}$ 的系数为

$$K_1 = \frac{(1 + g_{mN}R_1)A_0g_{mP}}{g_{mN}^2(1 + A_0g_{mP}R_1)},\qquad K_2 = \frac{(1 + g_{mN}R_1)(g_{mN} - A_0g_{mP})}{g_{mN}^2(1 + A_0g_{mP}R_1)},$$

两个互不相关、谱密度相等的噪声源按功率相加：

$$\overline{V_{n,out}^2} = (K_1^2 + K_2^2)\,\overline{i_n^2} = \left[\frac{1 + g_{mN}R_1}{g_{mN}^2(1 + A_0g_{mP}R_1)}\right]^2\left[(A_0g_{mP})^2 + (A_0g_{mP} - g_{mN})^2\right]\overline{i_n^2}.$$

### 第 5 步 — 大增益近似

当 $A_0g_{mP}R_1 \gg 1$ 且 $A_0g_{mP} \gg g_{mN}$ 时，$g_{mN}i_{n2}$ 项和分母中的“1”可以忽略：

$$V_{n,out} \approx \frac{(1 + g_{mN}R_1)(i_{n1} - i_{n2})}{g_{mN}^2R_1} = (i_{n1} - i_{n2})\,\frac{1}{g_{mN}}\left(1 + \frac{1}{g_{mN}R_1}\right).$$

在增益无穷大时，环路强制 $v_A = v_B$，但它只能改变**公共**电流 $u$，因此差值 $i_{n1} - i_{n2}$ 依然存在。设支路 B 中向下流过 $i_B$，支路 A 中向下流过 $i_B + (i_{n1} - i_{n2})$，电压相等要求

$$\frac{i_B + i_{n1} - i_{n2}}{g_{mN}} = i_B\left(R_1 + \frac{1}{g_{mN}}\right)\quad\Longrightarrow\quad i_B = \frac{i_{n1} - i_{n2}}{g_{mN}R_1},$$

再由 $v_B = i_B(R_1 + 1/g_{mN})$ 即可得到上面的结果。由于两条支路只有很小的 $R_1$ 不同，很小的电流差就会产生很大的支路电流：**PMOS 噪声不会被环路增益抑制。** 两个互不相关的噪声源合起来：

$$\boxed{\overline{V_{n,out}^2} \approx 2\left(\frac{1}{g_{mN}}\right)^2\left(1 + \frac{1}{g_{mN}R_1}\right)^2\left[4kT\gamma g_{mP} + \frac{K_P}{C_{ox}WLf}\,g_{mP}^2\right]}$$

方括号中的第一项是热噪声，第二项是闪烁噪声，后者在低频时占主导。

### 第 6 步 — 对实际带隙核心电路的解读

双极管电流为 $I$ 时，$g_{mN} = I/V_T$；发射极面积比为 $n$ 时，$IR_1 = V_T\ln n$，因此 $g_{mN}R_1 = \ln n$，且

$$\overline{V_{n,out}^2} \approx 2\left(\frac{V_T}{I}\right)^2\left(1 + \frac{1}{\ln n}\right)^2\overline{i_n^2}.$$

**示例（仅热噪声部分）。** $I = 10\ \mu$A，$n = 8$，PMOS 过驱动电压（overdrive voltage）为 0.2 V，因此 $g_{mP} = 2I/V_{ov} = 0.1$ mS，$\gamma = 2/3$，$T = 300$ K：

$$
\begin{aligned}
\frac{1}{g_{mN}} &= \frac{26\ \mathrm{mV}}{10\ \mu\mathrm{A}} = 2.6\ \mathrm{k\Omega},\qquad 1 + \frac{1}{\ln8} = 1.48,\\
4kT\gamma g_{mP} &= 4(1.38\times10^{-23})(300)\tfrac23(10^{-4}) = 1.10\times10^{-24}\ \mathrm{A^2/Hz},\\
\overline{V_{n,out}^2} &\approx 2\,(2.6\ \mathrm{k\Omega})^2(1.48)^2(1.10\times10^{-24}) = 3.3\times10^{-17}\ \mathrm{V^2/Hz},
\end{aligned}
$$

即仅 PMOS 热噪声就约为 5.7 nV/√Hz。在 PMOS 过驱动电压固定时 $g_{mP} \propto I$，因此热噪声部分的功率按 $1/I$ 变化，其均方根（rms）值按 $1/\sqrt I$ 变化；采用大面积 PMOS 器件可以减小闪烁噪声部分。

### 结果

当 $i_{n1}$、$i_{n2}$ 分别注入 A 和 B 时：

$$V_{n,out} = \frac{(1 + g_{mN}R_1)\left[A_0g_{mP}(i_{n1} - i_{n2}) + g_{mN}i_{n2}\right]}{g_{mN}^2(1 + A_0g_{mP}R_1)},$$

$$\overline{V_{n,out}^2} = \left[\frac{1 + g_{mN}R_1}{g_{mN}^2(1 + A_0g_{mP}R_1)}\right]^2\left[(A_0g_{mP})^2 + (A_0g_{mP} - g_{mN})^2\right]\overline{i_n^2}.$$

当运放增益很大时（$A_0g_{mP} \gg g_{mN}$，$A_0g_{mP}R_1 \gg 1$）：

$$\overline{V_{n,out}^2} \approx 2\left(\frac{1}{g_{mN}}\right)^2\left(1 + \frac{1}{g_{mN}R_1}\right)^2\left[4kT\gamma g_{mP} + \frac{K_P}{C_{ox}WLf}g_{mP}^2\right].$$

PMOS 噪声不会被环路增益抑制。在实际的核心电路中，$g_{mN}R_1 = \ln n$，$1/g_{mN} = V_T/I$。

**常见错误。** 认为当 $A_0 \to \infty$ 时反馈环路会抑制 PMOS 噪声。环路只控制**公共**的 PMOS 电流；差值 $i_{n1} - i_{n2}$ 依然存在，并以增益 $(1/g_{mN})(1 + 1/(g_{mN}R_1))$ 转换为电压。

**常见错误。** 因为两个晶体管完全相同，就让 $i_{n1}$ 和 $i_{n2}$ 相互抵消。它们的频谱相同，但波形相互独立，因此它们之差的功率是任一个的两倍：这就是因子 2 的来源。

**常见错误。** 用双极管的跨导写 PMOS 的噪声电流，例如 $4kT\gamma g_{mN}$。每个噪声电流都使用其自身器件的 $g_{mP}$；$g_{mN}$ 只出现在阻抗中。
