# 详细步骤 - R564

**思路。** 增益极高的运放调节 PMOS 的公共栅极，使 X 与 Y 之间的电压差等于其自身的输入噪声。通过节点阻抗写出 $v_X$ 和 $v_Y$，并求解这一约束，就得到栅极驱动电流 $g$；$M_5$ 把它连同自身的噪声一起复制到 $R_4$ 中。然后把所有独立噪声源的功率相加。

### 第 1 步 — 节点阻抗与噪声源

忽略 PMOS 的 $r_O$，从 X 和 Y 到地的小信号阻抗为

$$Z_X = R_3 \parallel \frac{1}{g_{m1}}, \qquad Z_Y = R_2 \parallel \left(R_1 + \frac{1}{g_{m2}}\right).$$

各噪声源彼此互不相关：

| 噪声源 | 模型 | 谱密度 |
|---|---|---|
| $M_3$, $M_4$, $M_5$ | 分别注入 X、Y、$V_{BG}$ 的漏极电流 $i_3$、$i_4$、$i_5$ | 各为 $\overline{i_n^2} = 4kT\gamma g_{mP} + \dfrac{K_Pg_{mP}^2}{C_{ox}WLf}$ |
| $R_2$, $R_3$, $R_4$ | 并联的诺顿电流 $i_{R2}$、$i_{R3}$、$i_{R4}$ | $4kT/R$ |
| $R_1$ | 与 $R_1$ 串联的戴维南电压 $v_{R1}$ | $4kTR_1$ |
| 运放 | 输入参考电压 $v_n$ | $\overline{V_{n,op}^2}$ |

### 第 2 步 — 小信号模型与运放约束

设 $g$ 为公共栅极电压变化时注入每个漏极的电流（三个相同的 PMOS 器件都相同）。于是网络中有注入 X、Y 和 $V_{BG}$ 的受控电流 $g$、上述噪声电流，以及节点阻抗 $Z_X$、$Z_Y$ 和 $R_4$。

<!-- diagram: diagram-01.cir -->

由于运放增益非常大，栅极电压会取使等效差分输入为零的值，因此当 $v_n$ 与某个输入端串联时

$$v_X - v_Y = v_n$$

（$v_n$ 的符号约定无关紧要，因为结果中只出现它的功率）。

### 第 3 步 — X 和 Y 处的节点电压

流入 X 的所有电流都流入 $Z_X$。在 Y 处，与支路 $R_1 + 1/g_{m2}$ 串联的 $v_{R1}$ 等效于（戴维南—诺顿变换）注入 Y 的电流 $v_{R1}/(R_1 + 1/g_{m2})$：

$$v_X = \left(g + i_3 + i_{R3}\right)Z_X, \qquad v_Y = Z_Y\left[g + i_4 + i_{R2} + \frac{v_{R1}}{R_1 + 1/g_{m2}}\right].$$

### 第 4 步 — 求解栅极驱动电流 $g$

代入 $v_X - v_Y = v_n$：

$$\left(g + i_3 + i_{R3}\right)Z_X - Z_Y\left[g + i_4 + i_{R2} + \frac{v_{R1}}{R_1 + 1/g_{m2}}\right] = v_n ,$$

$$g\,(Z_X - Z_Y) = v_n - (i_3 + i_{R3})Z_X + (i_4 + i_{R2})Z_Y + \frac{Z_Y\,v_{R1}}{R_1 + 1/g_{m2}} ,$$

$$g = \frac{(i_3 + i_{R3})Z_X - (i_4 + i_{R2})Z_Y - \dfrac{Z_Y\,v_{R1}}{R_1 + 1/g_{m2}} - v_n}{Z_Y - Z_X}.$$

分母 $Z_Y - Z_X$ 也决定了环路的负反馈（经 Y）是否强于正反馈（经 X）；在稳定的设计中 $Z_Y > Z_X$。

### 第 5 步 — 输出电压及其谱密度

$M_5$ 把 $g + i_5$ 送到 $V_{BG}$，$R_4$ 的噪声电流也叠加在这里：

$$v_{BG} = R_4\left(g + i_5 + i_{R4}\right).$$

代入 $g$，并把各独立噪声源的功率相加：

$$\boxed{\overline{V_{n,BG}^2} = R_4^2\left\{\frac{Z_X^2\left(\overline{i_n^2} + \dfrac{4kT}{R_3}\right) + Z_Y^2\left(\overline{i_n^2} + \dfrac{4kT}{R_2}\right) + \left(\dfrac{Z_Y}{R_1 + 1/g_{m2}}\right)^2 4kTR_1 + \overline{V_{n,op}^2}}{(Z_Y - Z_X)^2} + \overline{i_n^2} + \frac{4kT}{R_4}\right\}}$$

最后一项给出 $R_4^2\cdot4kT/R_4 = 4kTR_4$，即 $R_4$ 通常的噪声。

### 第 6 步 — 各噪声源的传输增益

| 噪声源 | 到 $V_{BG}$ 的增益 |
|---|---|
| 运放 $v_n$ | $\dfrac{R_4}{Z_Y - Z_X}$ |
| $M_4$（以及作为电流源的 $R_2$） | $\dfrac{R_4Z_Y}{Z_Y - Z_X}$ |
| $M_3$（以及作为电流源的 $R_3$） | $\dfrac{R_4Z_X}{Z_Y - Z_X}$ |
| $R_1$（作为电压源） | $\dfrac{R_4}{Z_Y - Z_X}\cdot\dfrac{Z_Y}{R_1 + 1/g_{m2}}$ |
| $M_5$、$R_4$（作为电流源） | $R_4$ |

X 或 Y 处的噪声电流会使运放输入失去平衡，而环路只能通过节点阻抗之**差**来消除这一不平衡，因此每个不平衡量都要除以 $Z_Y - Z_X$，所得电流再被复制到 $R_4$。环路会传递 PMOS 噪声，甚至部分地将其放大，而不会抑制它。

### 第 7 步 — 特例：把双极型晶体管看作理想电压源

若 $1/g_{m1}, 1/g_{m2} \to 0$，则 $Z_X \to 0$，$Z_Y \to R_2 \parallel R_1$：$M_3$ 和 $R_3$ 的项消失（X 被 $Q_1$ 钳定），$M_4$ 和 $R_2$ 的噪声电流以增益 $R_4$ 传到输出，$v_{R1}$ 贡献 $(R_4/R_1)^2\cdot4kTR_1 = R_4^2\cdot4kT/R_1$，运放噪声的增益为 $R_4/(R_1 \parallel R_2)$。利用 $4kT/R_1 + 4kT/R_2 = 4kT/(R_1 \parallel R_2)$：

$$\overline{V_{n,BG}^2} \approx 2R_4^2\,\overline{i_n^2} + \left(\frac{R_4}{R_1 \parallel R_2}\right)^2\left[\overline{V_{n,op}^2} + 4kT(R_1 \parallel R_2)\right] + 4kTR_4 .$$

运放噪声被放大 $R_4/(R_1 \parallel R_2)$ 倍，这一增益可能远大于单位增益。

### 第 8 步 — 典型数值

在通常的设计中 $R_2 = R_3$，集电极电流相等，因此 $g_{m1} = g_{m2} = g_m$，$g_mR_1 = \ln n$（由 $I_CR_1 = V_T\ln n$ 得到），并且为实现零 TC，$g_mR_2 = (R_2/R_1)\ln n \approx 17.2$。对 $n = 8$（$\ln n = 2.08$）：

$$
\begin{aligned}
Z_X &= \frac{1}{g_m}\cdot\frac{17.2\times1}{17.2 + 1} = \frac{0.945}{g_m},\\
Z_Y &= \frac{1}{g_m}\cdot\frac{17.2\times3.08}{17.2 + 3.08} = \frac{2.61}{g_m},\\
Z_Y - Z_X &= \frac{1.67}{g_m}.
\end{aligned}
$$

由此得到的增益为：$M_4$ 为 $R_4\times2.61/1.67 = 1.57R_4$，$M_3$ 为 $R_4\times0.945/1.67 = 0.57R_4$，$M_5$ 为 $R_4$，运放为 $R_4g_m/1.67 = 0.60\,g_mR_4$；后者很大，因为 $g_mR_4$ 通常在 10 的量级。

因此，运放噪声和 PMOS 噪声（尤其是 $M_4$ 的噪声）通常占主导。低频时，闪烁噪声项 $K_Pg_{mP}^2/(C_{ox}WLf)$ 在 $\overline{i_n^2}$ 中占主导，因此需要大面积的 PMOS 器件。大的 $R_4$（较高的输出电平）会使每一项都增大，而 $V_{BG}$ 处的旁路电容只在高频时有帮助。保留 $1/g_m$ 很重要：$M_4$ 的增益是 $1.57R_4$，而不是简化模型中的 $R_4$。

### 结果

设 $Z_X = R_3 \parallel (1/g_{m1})$，$Z_Y = R_2 \parallel (R_1 + 1/g_{m2})$（通常 $Z_Y > Z_X$）：

$$\overline{V_{n,BG}^2} = R_4^2\left\{\frac{Z_X^2\left(\overline{i_n^2} + \frac{4kT}{R_3}\right) + Z_Y^2\left(\overline{i_n^2} + \frac{4kT}{R_2}\right) + \left(\frac{Z_Y}{R_1 + 1/g_{m2}}\right)^2 4kTR_1 + \overline{V_{n,op}^2}}{(Z_Y - Z_X)^2} + \overline{i_n^2} + \frac{4kT}{R_4}\right\},$$

其中 $\overline{i_n^2} = 4kT\gamma g_{mP} + K_Pg_{mP}^2/(C_{ox}WLf)$。

若把双极型晶体管当作固定电压源（$1/g_m \to 0$），上式简化为

$$\overline{V_{n,BG}^2} \approx 2R_4^2\,\overline{i_n^2} + \left(\frac{R_4}{R_1 \parallel R_2}\right)^2\left[\overline{V_{n,op}^2} + 4kT(R_1 \parallel R_2)\right] + 4kTR_4,$$

因此运放噪声被放大 $R_4/(R_1 \parallel R_2)$ 倍。对于典型设计（$n = 8$，零 TC），$M_4$ 的噪声以约 $1.57R_4$ 的增益传到输出端，$M_3$ 的为 $0.57R_4$，$M_5$ 的为 $R_4$，运放噪声约为 $0.6g_mR_4$。

**常见错误。** 认为运放噪声像在跟随器中那样以单位增益出现在输出端。运放并不直接驱动 $V_{BG}$；它的噪声是通过 PMOS 电流的变化来抵消的，而 $R_4$ 把这一电流变化转换为电压，因此增益为 $R_4/(Z_Y - Z_X)$（在简化模型中为 $R_4/(R_1 \parallel R_2)$）。

**常见错误。** 声称反馈环路会抑制 $M_3$ 和 $M_4$ 的噪声。环路迫使的是 $v_X - v_Y = v_n$，而不是 $g = 0$：它通过改变电流来消除**电压**的不平衡，而 $M_5$ 恰好把这一电流复制到输出端。

**常见错误。** 把各项贡献当作电压相加，或者因为 $M_3$ 和 $M_4$ 的噪声以相反符号进入而让它们“相互抵消”。这些噪声源相互独立，因此应当把功率相加。
