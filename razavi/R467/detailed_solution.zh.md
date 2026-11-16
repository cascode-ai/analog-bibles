# 详细步骤 - R467

**思路。** 先求第一级到 X 和 Y 的增益，再求第二级到每个输出端的增益。上拉管 $M_7$ 不是固定的电流源：经过电流镜 $M_9 \to M_{11} \to M_7$，它的电流跟随 Y 变化，而 Y 与 X 反向变化。当 $M_5$ 下拉得更强（X 升高）时，$M_7$ 上推的电流减小（Y 下降），因此两个信号电流**相加**，输出级的等效跨导变为 $g_{m5} + Kg_{m9}$。

### 第 1 步 — 第一级增益

$M_7$ 以比例 $K$ 镜像二极管连接的 $M_{11}$，其电流由栅极接 **Y** 的 $M_9$ 决定；对称地，$M_8$ 镜像 $M_{12}$，后者的电流由栅极接 **X** 的 $M_{10}$ 决定。在低频下 X 和 Y 只驱动栅极，因此第二级不会对第一级构成负载。

当 $v_{g1} = +v_{in}/2$、$v_{g2} = -v_{in}/2$ 时，PMOS 差分对（differential pair）的源极公共节点为虚地（virtual ground），每个漏极看到的电阻为 $r_{O1}\parallel r_{O3}$（$M_3$、$M_4$ 是电流源）。对节点 X 列 KCL 方程：

$$
\begin{aligned}
g_{m1}v_{sg1} &= \frac{v_X}{r_{O1}\parallel r_{O3}}, \qquad v_{sg1} = 0 - \frac{v_{in}}{2}\\
v_X &= -g_{m1}(r_{O1}\parallel r_{O3})\,\frac{v_{in}}{2},\\
v_Y &= +g_{m1}(r_{O1}\parallel r_{O3})\,\frac{v_{in}}{2} = -v_X .
\end{aligned}
$$

对第二级而言，关键的事实是 **$v_Y = -v_X$**。

### 第 2 步 — 有源上拉通路（$M_9$、$M_{11}$、$M_7$）

$M_9$（栅极接 Y）使其漏极电流变化 $g_{m9}v_Y$，这一电流取自二极管连接的 $M_{11}$。二极管的电阻约为 $1/g_{m11}$，远小于 $r_{O9}$，因此该电流基本上全部流过 $M_{11}$，$M_{11}$ 与 $M_7$ 的公共栅极节点 A 变化

$$v_A \approx -\frac{g_{m9}v_Y}{g_{m11}} .$$

$M_7$ 与 $M_{11}$ 的源栅电压相同，尺寸大 $K$ 倍，因此 $g_{m7} = Kg_{m11}$，它流入 $V_{out1}$ 的电流变化为

$$i_7 = g_{m7}(-v_A) = Kg_{m11}\cdot\frac{g_{m9}v_Y}{g_{m11}} = Kg_{m9}v_Y .$$

### 第 3 步 — $V_{out1}$ 处的第二级增益

在 $V_{out1}$ 处，$M_5$ 向地抽取 $g_{m5}v_X$，$M_7$ 注入 $Kg_{m9}v_Y$，$r_{O5}$、$r_{O7}$ 把该节点接到交流地。

<!-- diagram: diagram-01.cir -->

对 $V_{out1}$ 列 KCL 方程：

$$
\begin{aligned}
Kg_{m9}v_Y &= g_{m5}v_X + \frac{v_{out1}}{r_{O5}\parallel r_{O7}}\\
v_{out1} &= (r_{O5}\parallel r_{O7})\left(Kg_{m9}v_Y - g_{m5}v_X\right).
\end{aligned}
$$

代入 $v_Y = -v_X$：

$$v_{out1} = -(g_{m5} + Kg_{m9})(r_{O5}\parallel r_{O7})\,v_X .$$

两个跨导**相加**：X 升高时，$M_5$ 吸收更多电流，**同时** $M_7$ 提供的电流减小，两者都把 $V_{out1}$ 拉低；若采用固定的电流源负载，则只剩下 $g_{m5}$。由对称性（$M_6$ 由 Y 驱动，$M_8$ 受 X 控制）：

$$v_{out2} = -(g_{m6} + Kg_{m10})(r_{O6}\parallel r_{O8})\,v_Y = +(g_{m5} + Kg_{m9})(r_{O5}\parallel r_{O7})\,v_X .$$

### 第 4 步 — 总差模增益

$$
\begin{aligned}
v_{out1} - v_{out2} &= -2(g_{m5} + Kg_{m9})(r_{O5}\parallel r_{O7})\,v_X\\
&= -2(g_{m5} + Kg_{m9})(r_{O5}\parallel r_{O7})\left[-g_{m1}(r_{O1}\parallel r_{O3})\frac{v_{in}}{2}\right]\\
&= g_{m1}(r_{O1}\parallel r_{O3})\,(g_{m5} + Kg_{m9})(r_{O5}\parallel r_{O7})\,v_{in} ,
\end{aligned}
$$

因此

$$A_v = \frac{v_{out1} - v_{out2}}{v_{in}} = g_{m1}(r_{O1}\parallel r_{O3})\cdot(g_{m5} + Kg_{m9})(r_{O5}\parallel r_{O7}).$$

若 $M_9$ 与 $M_5$ 的过驱动电压（overdrive voltage）相同，且 $K$ 使 $M_7$ 的偏置电流 $KI_{D9}$ 等于 $I_{D5}$，则 $Kg_{m9} = K(2I_{D9}/V_{ov}) = 2I_{D5}/V_{ov} = g_{m5}$，并且

$$A_v = 2\,g_{m1}(r_{O1}\parallel r_{O3})\,g_{m5}(r_{O5}\parallel r_{O7}),$$

这是采用普通电流源负载时增益的两倍，而且不以牺牲输出电阻（output resistance）为代价。

### 结果

$$|A_v| = g_{m1}(r_{O1}\parallel r_{O3})\cdot(g_{m5} + Kg_{m9})(r_{O5}\parallel r_{O7}),$$

当 $Kg_{m9} = g_{m5}$ 时，第二级的跨导加倍：$|A_v| = 2g_{m1}(r_{O1}\parallel r_{O3})\,g_{m5}(r_{O5}\parallel r_{O7})$。（$i_9$ 全部到达 $M_{11}$ 这一近似用到了 $1/g_{m11} \ll r_{O9}$；在低频下忽略电流镜节点 A 处的极点。）

**常见错误。** 把 $M_7$ 当作固定的电流源，将第二级增益写成 $g_{m5}(r_{O5}\parallel r_{O7})$，而这正是该电路所要避免的。

**常见错误。** 减去 $Kg_{m9}$；只有当 $M_9$ 由 X 驱动时这样做才对。交叉连接使 $M_9$ 由 Y 驱动，而 Y 与 X 反向变化，因此两者的作用相加。

**常见错误。** 把第一级的负载当作二极管连接器件（$1/g_{m3}$）。$M_3$ 和 $M_4$ 是电流源，因此负载为 $r_{O1}\parallel r_{O3}$。
