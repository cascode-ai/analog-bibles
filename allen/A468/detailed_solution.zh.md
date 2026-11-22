# 详细步骤 - A468

每个支路电阻的一端都处于 0 V（地或运放的虚地），因此支路电流与开关位置无关。求出两个梯形网络节点的电压和四个支路电流，选择 $R_x$ 使这些电流构成二进制序列；最大的电流属于 MSB。

### 第 1 步 — 节点电压

电源正端接地，所以左下节点（记为 A）的电压为 $V_A=-V_{REF}$。无论各位取值如何，其 2R 和 4R 支路都接到 0 V。$R_x$ 右侧的节点（记为 B）有三条到 0 V 的电阻：它的 2R 支路、4R 支路以及右端接地的 4R：

$$
R_B=2R\parallel4R\parallel4R=2R\parallel2R=R .
$$

$R_x$ 与 $R_B$ 构成从节点 A 出发的分压器：

$$
V_B=-V_{REF}\,\frac{R}{R_x+R}.
$$

### 第 2 步 — 支路电流

每条支路的电流从 0 V 一端流向负电压节点：

$$
I_{A,2R}=\frac{V_{REF}}{2R},\qquad I_{A,4R}=\frac{V_{REF}}{4R},\qquad
I_{B,2R}=\frac{|V_B|}{2R},\qquad I_{B,4R}=\frac{|V_B|}{4R}.
$$

节点 A 的两条电流之比为 2 : 1，节点 B 的也是如此。因此要构成二进制序列 $V_{REF}/2R,\ V_{REF}/4R,\ V_{REF}/8R,\ V_{REF}/16R$，需要

$$
\frac{|V_B|}{2R}=\frac{V_{REF}}{8R}\ \Longrightarrow\ |V_B|=\frac{V_{REF}}{4}
\ \Longrightarrow\ \frac{R}{R_x+R}=\frac14\ \Longrightarrow\ R_x=3R .
$$

### 第 3 步 — 开关分配与输出

从左到右各开关流过的电流为 $V_{REF}/2R$、$V_{REF}/4R$、$V_{REF}/8R$ 和 $V_{REF}/16R$，因此它们依次为 $b_0$（节点 A 的 2R）、$b_1$（节点 A 的 4R）、$b_2$（节点 B 的 2R）和 $b_3$（节点 B 的 4R）。置 1 的开关把其支路电流从求和节点抽出；理想运放经反馈电阻 $R$ 提供该电流，使 $v_{OUT}$ 升高：

$$
v_{OUT}=R\left(b_0\frac{V_{REF}}{2R}+b_1\frac{V_{REF}}{4R}+b_2\frac{V_{REF}}{8R}+b_3\frac{V_{REF}}{16R}\right)
=V_{REF}\left(\frac{b_0}{2}+\frac{b_1}{4}+\frac{b_2}{8}+\frac{b_3}{16}\right).
$$
