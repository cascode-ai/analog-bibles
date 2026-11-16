# 详细步骤 - R432

**思路。** $V_{b2}$ 决定 PMOS 共源共栅（cascode）管 $M_5$ 的源极电压，也就是电流源（current source）$M_7$ 的漏极电压。$V_{b2}$ 太高，会把 $M_5$ 的源极抬向 $V_{DD}$，把 $M_7$ 挤进线性区（triode region）；$V_{b2}$ 太低，会使 $M_5$ 的栅极比其漏极（节点 X，由 $M_7$ 钳定）低得太多，使 $M_5$ 进入线性区。这两个条件给出所求的窗口。

### 第 1 步 — PMOS 的栅源电压与 X 点的电压

每条支路的电流为 0.5 mA，所有器件的 $W/L = 200$，且 $\gamma = 0$：

$$
\begin{aligned}
|V_{OD}| &= \sqrt{\frac{2(0.5\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(200)}} = \sqrt{0.1302}\ \mathrm{V} = 0.361\ \mathrm{V},\\
|V_{GS}| &= 0.8 + 0.361 = 1.161\ \mathrm{V}\quad(\text{same for } M_5\text{–}M_8).
\end{aligned}
$$

$M_7$ 的栅极接 X（$M_3$/$M_5$ 的漏极），源极接 $V_{DD}$：

$$V_X = V_{DD} - |V_{GS7}| = 3 - 1.161 = 1.839\ \mathrm{V}.$$

$M_5$ 的源极（即 $M_7$ 的漏极）比其栅极高一个 $|V_{GS5}|$：

$$V_{S5} = V_{D7} = V_{b2} + |V_{GS5}| = V_{b2} + 1.161\ \mathrm{V}.$$

### 第 2 步 — 上限：$M_7$ 必须保持饱和

$$
\begin{aligned}
V_{DD} - (V_{b2} + 1.161) &\ge 0.361\\
V_{b2} &\le 3 - 0.361 - 1.161 = 1.478\ \mathrm{V}.
\end{aligned}
$$

### 第 3 步 — 下限：$M_5$ 必须保持饱和

PMOS 的漏极最多可以比其栅极高一个阈值电压。对于 $M_5$（栅极接 $V_{b2}$，漏极接 X）：

$$
\begin{aligned}
V_X &\le V_{b2} + |V_{THP}|\\
V_{b2} &\ge V_X - |V_{THP}| = 1.839 - 0.8 = 1.039\ \mathrm{V}.
\end{aligned}
$$

### 第 4 步 — 右侧支路与窗口

$M_8$ 的栅极电压和电流都与 $M_7$ 相同，因此给出相同的上限。$M_6$ 还要求 $V_{out} \le V_{b2} + 0.8$ V；对于不超过约 $V_X$ 的输出电平，这一条件并不比 $M_5$ 的条件更严格。因此

$$1.04\ \mathrm{V} \lesssim V_{b2} \lesssim 1.48\ \mathrm{V},$$

窗口宽度为

$$1.478 - 1.039 = 0.44\ \mathrm{V} = |V_{THP}| - |V_{OD}|,$$

这是因为上限为 $V_{DD} - |V_{OD}| - |V_{GS}| = V_{DD} - |V_{TH}| - 2|V_{OD}|$，下限为 $V_{DD} - |V_{GS}| - |V_{TH}| = V_{DD} - 2|V_{TH}| - |V_{OD}|$。低电压共源共栅（low-voltage cascode）结构之所以能工作，正是因为 $|V_{TH}|$ 大于 $|V_{OD}|$。

### 结果

$$V_X - |V_{THP}| \le V_{b2} \le V_{DD} - |V_{OD7}| - |V_{GS5}|\ \Longrightarrow\ 1.04\ \mathrm{V} \lesssim V_{b2} \lesssim 1.48\ \mathrm{V},$$

窗口宽度为 $|V_{THP}| - |V_{OD}| \approx 0.44$ V。下限保证 $M_5$ 饱和（其漏极 X 为 1.84 V），上限保证 $M_7$ 饱和。

**常见错误。** 给出单一的“正确”$V_{b2}$ 值。窗口内的任何值都可以；$V_{b2}$ 只是改变 $M_7$/$M_5$ 连接点的电压。

**常见错误。** 按标准的双二极管共源共栅电流镜（cascode current mirror）推导界限。这里 X 直接驱动 $M_7$ 的栅极，因此 $V_X = 1.84$ V，而 $M_5$ 由 $V_{b2}$ 偏置。

**常见错误。** 把上下限弄反。升高 $V_{b2}$ 威胁的是 $M_7$（上限）；降低它威胁的是 $M_5$（下限）。
