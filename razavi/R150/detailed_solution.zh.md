# 详细步骤 - R150

**思路。** 每条模拟线都通过各自的电容分压器（capacitive divider）与时钟线耦合。两个毛刺极性相同，因此在 $V_X - V_Y$ 中相互抵消，只剩下两个耦合电容之间的失配所造成的部分。

### 第 1 步 — 时钟边沿期间各模拟节点的等效电路

驱动 $L_1$ 的反相器（inverter）是低阻抗驱动器，因此每个边沿 $L_1$ 都摆动完整的 $\Delta V_{CK} = 3$ V。把耦合电容记为 $C_{c2} = 9$ fF（$L_1$–$L_2$）和 $C_{c3} = 10$ fF（$L_1$–$L_3$）；每个漏极还有 $C_g = 100$ fF 的对地电容。$L_2$ 和 $L_3$ 位于 $L_1$ 的两侧，因此不需要考虑 $L_2$–$L_3$ 之间的直接电容。

在快速的时钟边沿期间，每个节点上的电阻（$R_D\parallel r_O$）都来不及搬移电荷，因为边沿远短于节点时间常数 $(R_D\parallel r_O)(C_c + C_g)$。所以每个节点都保持其电荷不变。

### 第 2 步 — 每条线上的毛刺（电荷守恒）

对于到时钟的耦合电容为 $C_c$、对地电容为 $C_g$ 的节点，由电荷 $Q = C_c(V_{node} - V_{CK}) + C_gV_{node}$ 守恒得

$$
\begin{aligned}
C_c\,(\Delta V_{node} - \Delta V_{CK}) + C_g\,\Delta V_{node} &= 0\\
\Delta V_{node} &= \Delta V_{CK}\,\frac{C_c}{C_c + C_g}.
\end{aligned}
$$

**线 $L_2$（节点 $X$）：**

$$\Delta V_X = (3\ \mathrm{V})\frac{9\ \mathrm{fF}}{9\ \mathrm{fF} + 100\ \mathrm{fF}} = (3\ \mathrm{V})(0.08257) = 0.2477\ \mathrm{V}.$$

**线 $L_3$（节点 $Y$）：**

$$\Delta V_Y = (3\ \mathrm{V})\frac{10\ \mathrm{fF}}{10\ \mathrm{fF} + 100\ \mathrm{fF}} = (3\ \mathrm{V})(0.09091) = 0.2727\ \mathrm{V}.$$

每个单端毛刺约为四分之一伏。

### 第 3 步 — 差分毛刺

两个毛刺来自同一个时钟边沿，因此**符号相同**（上升沿时两个节点都向上跳），在差分输出中相减：

$$
\begin{aligned}
\Delta(V_X - V_Y) &= \Delta V_X - \Delta V_Y\\
&= 0.2477\ \mathrm{V} - 0.2727\ \mathrm{V}\\
&= -0.0250\ \mathrm{V}.
\end{aligned}
$$

差分毛刺的幅度**约为 25 mV**：在时钟上升沿为负（耦合较强的线 $L_3$ 跳得更多），在下降沿为正。

**一阶验证。** 把两个耦合电容写成 $C_c \pm \Delta C/2$，其中 $\Delta C = 1$ fF。由于 $\Delta C \ll C_c + C_g$，

$$
\begin{aligned}
|\Delta V_X - \Delta V_Y| &\approx \Delta V_{CK}\,\frac{\partial}{\partial C_c}\!\left(\frac{C_c}{C_c + C_g}\right)\Delta C = \Delta V_{CK}\,\frac{C_g\,\Delta C}{(C_c + C_g)^2}\\
&= (3\ \mathrm{V})\frac{(100\ \mathrm{fF})(1\ \mathrm{fF})}{(109.5\ \mathrm{fF})^2} = 25.0\ \mathrm{mV},
\end{aligned}
$$

这验证了上面的结果。（更粗略的估计 $3\ \mathrm{V}\times 1\ \mathrm{fF}/110\ \mathrm{fF} = 27$ mV 给出相同的数量级。）

### 第 4 步 — 解释

- **共模**（common-mode）部分 $(\Delta V_X + \Delta V_Y)/2 \approx 0.26$ V 不能被差分版图（layout）消除，只能靠后级电路的共模抑制来去除。
- **差分**部分只是不对称留下的残余：单端线上为 273 mV，这里只有 25 mV，约小 11 倍：
$$\frac{0.273\ \mathrm{V}}{0.025\ \mathrm{V}} \approx 11 .$$
- 若完全对称（$C_{c2} = C_{c3}$），差分毛刺将消失。10 % 的耦合失配大约留下单端毛刺的 10 %，再减去一个小的修正量，因为较大的耦合电容也加重了它自己节点的负载。
- 两个毛刺以几乎相等的时间常数 $(R_D\parallel r_O)(109\ \mathrm{fF})$ 和 $(R_D\parallel r_O)(110\ \mathrm{fF})$ 衰减，因此差分残余也以同样的方式衰减。

### 结果

$$|\Delta(V_X - V_Y)| = 3\ \mathrm{V}\left(\frac{10}{110} - \frac{9}{109}\right) = 0.2727\ \mathrm{V} - 0.2477\ \mathrm{V} \approx 25\ \mathrm{mV}$$

这是每个时钟边沿的结果。每条线各自跳变约 0.25–0.27 V，但两次跳变极性相同，所以差分输出中只出现它们 25 mV 的差值，约比单端情况小 11 倍。

**常见错误。** 把两个毛刺相加（≈ 0.52 V），好像它们极性相反一样。时钟上升沿会把**两条**线都推高，因此干扰主要是共模的。

**常见错误。** 声称因为该布置“是差分的”，所以差分毛刺为零。这里两个耦合电容相差 1 fF，会留下 25 mV。

**常见错误。** 只用 $C_g = 100$ fF 作分压器的分母（$3\ \mathrm{V}\times 1/100 = 30$ mV），或者把 0.27 V 的单端毛刺当作差分毛刺。分母应为 109 fF 和 110 fF。
