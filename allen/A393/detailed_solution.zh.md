# 详细步骤 - A393

当同相输入端越过 $V_{REF}$ 时比较器翻转。该输入是 $v_{IN}$ 与当前输出电平的电阻加权组合，因此翻转所对应的输入电压取决于输出为低还是为高。写出两个翻转点并代入两项指标求解，即得 $R_2$ 和 $V_{REF}$。

### 第 1 步 — 同相输入端电压

比较器没有输入电流，$v_+$ 由分压器 $R_1$、$R_2$ 按叠加原理决定：

$$
v_+=\frac{R_2}{R_1+R_2}v_{IN}+\frac{R_1}{R_1+R_2}v_{OUT}.
$$

当 $v_+=V_{REF}$ 时输出改变状态。

### 第 2 步 — 两个翻转点

由 $v_+=V_{REF}$ 解出 $v_{IN}$：

$$
v_{IN}=\frac{R_1+R_2}{R_2}V_{REF}-\frac{R_1}{R_2}v_{OUT}.
$$

- 输出为低（$v_{OUT}=V_{OL}$）时，$v_{IN}$ 须上升到使 $v_+$ 达到 $V_{REF}$，随后输出跳变为高：
$$
V_{TRP}^+=\frac{R_1+R_2}{R_2}V_{REF}-\frac{R_1}{R_2}V_{OL}.
$$
- 输出为高（$v_{OUT}=V_{OH}$）时，反馈把 $v_+$ 抬高，$v_{IN}$ 必须降得更低，输出才跳变为低：
$$
V_{TRP}^-=\frac{R_1+R_2}{R_2}V_{REF}-\frac{R_1}{R_2}V_{OH}.
$$

正反馈使跳变具有再生性，且输出与输入同向变化（同相环路）。

### 第 3 步 — 求 $R_2$

迟滞宽度只取决于电阻比和输出摆幅：

$$
V_{TRP}^+-V_{TRP}^-=\frac{R_1}{R_2}(V_{OH}-V_{OL})
\quad\Rightarrow\quad
1\ \mathrm V=\frac{R_1}{R_2}(2\ \mathrm V)
\quad\Rightarrow\quad
R_2=2R_1=200\ \mathrm{k\Omega}.
$$

### 第 4 步 — 求 $V_{REF}$ 并验证

取 $R_1/R_2=1/2$、$V_{OL}=0$：

$$
V_{TRP}^+=1.5\,V_{REF}-0.5(0\ \mathrm V)=1\ \mathrm V
\quad\Rightarrow\quad
V_{REF}=\frac23\ \mathrm V=0.667\ \mathrm V .
$$

验证另一个翻转点：$V_{TRP}^-=1.5(0.667\ \mathrm V)-0.5(2\ \mathrm V)=0$ V，符合要求。

![同相迟滞回线：vIN 上升到 1 V 之前输出为低，vIN 下降到 0 V 之前输出为高](/q/A393/solution-curves.zh.svg)

$v_{IN}$ 上升时输出保持 $V_{OL}=0$ V，直到 1 V 处跳变为 $V_{OH}=2$ V；$v_{IN}$ 下降时输出保持为高，直到 0 V 处跳回。在 0 与 1 V 之间，输出取决于其历史状态。
