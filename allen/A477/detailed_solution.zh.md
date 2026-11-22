# 详细步骤 - A477

跟踪 φ2 期间由求和节点、总线和被选中电容右极板构成的孤立节点上的电荷。每个被选中的电容在 φ1 中充电到其参考电压，在 φ2 中放电，其电荷最终转移到反馈电容 $C$ 上。然后以 LSB 为单位计算 $k=2$ 时的输出，读出 INL 和 DNL。

### 第 1 步 — 两相中的电容状态

- φ1：上方 $C/2$ 和 $C/4$ 的左极板接 $V_{REF}$，下方 $C/2$ 和 $C/4$ 的左极板接 $V_{REF}/k$；所有右极板经 φ1 开关接地；反馈电容 $C$ 被短路，所以 $v_{OUT}=0$，$C$ 上没有电荷。
- φ2：所有左极板接地；总线与位为 1 的电容的右极板相连，并接到虚地（0 V）。

因此被选中的电容 $C_i$（参考电压为 $V_{ref,i}$）两端电压从 $V_{ref,i}$ 变为 0 V。

### 第 2 步 — 电荷守恒与 $v_{OUT}$

从 φ1 结束起，该孤立节点（总线、被选中电容的右极板、$C$ 的左极板）与外界隔离。φ1 结束时其电荷为 $\sum b_iC_i(0-V_{ref,i})$；φ2 期间被选中的电容不带电荷，$C$ 带电荷 $C(0-v_{OUT})$：

$$
-\sum_i b_iC_iV_{ref,i}=-C\,v_{OUT}
\quad\Longrightarrow\quad
v_{OUT}=\sum_i b_i\frac{C_i}{C}V_{ref,i}.
$$

由 $C_0=C_2=C/2$、$C_1=C_3=C/4$：

$$
v_{OUT}(\varphi_2)=V_{REF}\left(\frac{b_0}{2}+\frac{b_1}{4}\right)+\frac{V_{REF}}{k}\left(\frac{b_2}{2}+\frac{b_3}{4}\right),
$$

$k=4$ 时即为理想的 4 位特性。

### 第 3 步 — $k=2$ 时以 LSB 表示的输出

$k=2$ 时 $v_{OUT}=V_{REF}(b_0/2+b_1/4+b_2/4+b_3/8)$。令 $1\,\mathrm{LSB}=V_{REF}/16$，码字为 $4m+n$（$m=2b_0+b_1$，$n=2b_2+b_3$，取值均为 0–3）：

$$
v_{OUT}=4m+2n\ \mathrm{LSB},\qquad v_{OUT,ideal}=4m+n\ \mathrm{LSB},\qquad \mathrm{INL}=n\ \mathrm{LSB}.
$$

| 码字 | 0000–0011 | 0100–0111 | 1000–1011 | 1100–1111 |
|---|---|---|---|---|
| $v_{OUT}$（LSB） | 0, 2, 4, 6 | 4, 6, 8, 10 | 8, 10, 12, 14 | 12, 14, 16, 18 |

### 第 4 步 — INL、DNL 与单调性

$$
\mathrm{INL}=0\ \text{to}\ {+3}\ \mathrm{LSB};\qquad
\text{steps: }2\ \mathrm{LSB}\ (\mathrm{DNL}=+1)\ \text{inside a group},\quad 4-6=-2\ \mathrm{LSB}\ (\mathrm{DNL}=-3)\ \text{at a group transition}.
$$

因此 INL 为 $+3$ LSB 和 $0$ LSB，DNL 为 $+1$ LSB 和 $-3$ LSB。在 $0011\to0100$、$0111\to1000$ 和 $1011\to1100$ 处输出下降 2 LSB，所以该转换器**不单调**。
