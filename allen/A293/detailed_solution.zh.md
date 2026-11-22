# 详细步骤 - A293

采用直观方法：输入对管向输出节点送出电流，增益等于该电流乘以输出电阻。每个增益增强放大器调节其共源共栅管的源极：源极的变化被放大 $-A$ 倍后加到栅极，因此共源共栅器件看到的栅源信号增大 $A$ 倍，其源极阻抗显得硬 $A$ 倍。这使普通共源共栅输出电阻约乘以 $A$。按题目的描述，每个受调节的共源共栅结构单独处理。

### 第 1 步 — 输出电流

输入分为 $\pm v_{IN}/2$，M1 和 M2 的电流变化 $\pm g_{m1}v_{IN}/2$。共源共栅管原样传递这些电流。左边的电流经 M5 流入 M7，M7 的栅极（接 M5 漏极）作为电流镜驱动 M8；M8 把它送到输出，与右半边的电流相加。因此短路输出电流为 $g_{m1}v_{IN}$，

$$
A_v=\frac{v_{OUT}}{v_{IN}}=g_{m1}R_{out}.
$$

### 第 2 步 — 受调节共源共栅的输出电阻

普通共源共栅有 $R=g_mr_{ds}\,r_{ds,\mathrm{lower}}$。加入增强放大器后，共源共栅源极的电压变化 $v_s$ 产生的栅源变化为 $-(1+A)v_s\approx-Av_s$，而不是 $-v_s$，因此

$$
R_{\mathrm{reg}}\approx A\,g_mr_{ds}\,r_{ds,\mathrm{lower}} .
$$

从输出端向上、向下看：

$$
R_{out}\approx(A\,g_{m6}r_{ds6}r_{ds8})\parallel(A\,g_{m4}r_{ds4}r_{ds2}) .
$$

### 第 3 步 — 代入题给比例

由 $g_{mP}=g_{mN}/2$、$r_{dsP}=r_{dsN}/2$、$A=0.5g_{mN}r_{dsP}=0.25\,g_{mN}r_{dsN}$：

$$
\begin{aligned}
R_{up}&=A\,g_{mP}r_{dsP}^2=(0.25g_{mN}r_{dsN})\frac{g_{mN}}2\frac{r_{dsN}^2}4=\frac{g_{mN}^2r_{dsN}^3}{32},\\
R_{down}&=A\,g_{mN}r_{dsN}^2=\frac{g_{mN}^2r_{dsN}^3}{4},\qquad
R_{out}=R_{up}\parallel R_{down}=\frac{g_{mN}^2r_{dsN}^3}{36},
\end{aligned}
$$
$$
A_v=g_{mN}R_{out}=\frac{(g_{mN}r_{dsN})^3}{36} .
$$

### 第 4 步 — 数值估计

$g_{mN}r_{dsP}=100$ 给出 $g_{mN}r_{dsN}=200$，$A=50$：

$$
R_{out}=\frac{200^2}{36}\,r_{dsN}=1.1\times10^3\,r_{dsN},\qquad A_v=\frac{200^3}{36}=2.2\times10^5\ \mathrm{V/V}.
$$

（用 $1+A$ 代替 $A$，约为 $2.27\times10^5$。）

### 第 5 步 — 按图中实际连接

直观结果假设上方放大器只调节 M6。按图中连接，它还驱动 M5 的栅极，而 M5 的漏极决定 M7/M8 的栅极。M8 漏极的变化 $v_x$ 使 M7 漏极变化约 $-Av_x$；由于左支路电流固定，电流镜栅极随之移动，使 M8 的等效输出电导增大到 $(1+A)/r_{ds8}$，抵消了 p 侧的增强。对该连接作精确分析，得 $R_{out}\approx g_{mP}r_{dsP}^2\parallel(1+A)g_{mN}r_{dsN}^2\approx52\,r_{dsP}$，$A_v\approx5.2\times10^3$；若 M5 的栅极接固定偏置，则回到直观结果 $2.2\times10^5$。
