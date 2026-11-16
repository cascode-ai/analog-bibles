# 详细步骤 - R532

**思路。** 按 α 进行线性缩放会使每个 $g_m$、$r_O$ 和器件电容按已知方式变化，因此内部节点的极点保持不动，而输出极点（它面对的是固定的 $C_L$）上移 α 倍。补偿可以随之调整，因此环路增益保持形状不变，在频率上整体上移 α 倍：带宽最多提高 α 倍，其限制将在最后讨论。

### 第 1 步 — 放大 α 倍对各器件参数的影响

把每个 $W$ 和 $I_D$ 都乘以 α（$L$ 不变），相当于把 α 个相同的器件并联。电流密度不变，因此每个 $V_{GS}$、过驱动电压（overdrive voltage）和偏置电压都不变，并且

$$g_m' = \sqrt{2\mu C_{ox}\frac{\alpha W}{L}\,\alpha I_D} = \alpha\,g_m ,\qquad r_O' = \frac{r_O}{\alpha},\qquad C' = \alpha C\ \ (\text{all device capacitances}).$$

每个本征增益（intrinsic gain）$g_mr_O$ 都不变，因此 $A_0$ 不变，电压余度和摆幅也不变。

### 第 2 步 — 内部极点不动，输出极点移动

内部节点的电阻由若干 $1/g_m$ 和 $r_O$ 构成，电容由器件电容构成：

$$\omega_{int}' = \frac{1}{(R/\alpha)(\alpha C)} = \frac{1}{RC} = \omega_{int}.$$

输出节点的电阻为 $R_{out}/\alpha$，但其电容是固定的 $C_L$ 加上输出器件自身随缩放变化的电容 $C_p$：

$$\omega_{p2} = \frac{1}{R_{out}(C_L + C_p)}\quad\longrightarrow\quad \omega_{p2}' = \frac{\alpha}{R_{out}(C_L + \alpha C_p)} .$$

如果负载占主导（$C_L \gg \alpha C_p$），

$$\omega_{p2}' \approx \alpha\,\omega_{p2},$$

这与子图 (b) 相反：在那里，**缩小**使输出极点降到 $\omega_{p2}/\alpha$。

### 第 3 步 — 补偿可以随之调整

在子图 (a) 中，$|\beta H|$ 在 $\omega_{p2}$ 处降到单位增益；按渐近线规则，$\beta A_0\,\omega'_{p1} \approx \omega_{p2}$。由于 $\beta$ 和 $A_0$ 不变，缩放后要获得相同的相位裕度（phase margin），需要

$$\beta A_0\,\omega''_{p1} \approx \alpha\,\omega_{p2}\quad\Longrightarrow\quad \omega''_{p1} = \alpha\,\omega'_{p1} .$$

于是新的环路增益就是把旧环路增益的每个频率都乘以 α：

$$\beta H_{new}(s) = \beta H_{old}\!\left(\frac{s}{\alpha}\right),$$

因此增益交点（gain crossover）从 $\omega_{p2}$ 移到 $\alpha\omega_{p2}$，相位裕度不变。

**采用密勒补偿时，这几乎是自动发生的**（$C_C$ 不变）：
- $\omega_{p1} \approx 1/(R_1g_{m2}R_LC_C)$：$R_1 \to R_1/\alpha$，$g_{m2} \to \alpha g_{m2}$，$R_L \to R_L/\alpha$，因此 $R_1g_{m2}R_L \to R_1g_{m2}R_L/\alpha$，$\omega_{p1} \to \alpha\omega_{p1}$。
- $\omega_T = \beta g_{m1}/C_C \to \alpha\,\omega_T$。
- 右半平面零点（right-half-plane zero）$g_{m2}/C_C \to \alpha\,g_{m2}/C_C$，与其他各量一起上移。
- 调零电阻（nulling resistor）应除以 α（$R_z \to R_z/\alpha$），使其零点 $1/[C_C(R_z - 1/g_{m2})]$ 也上移 α 倍，并保持在输出极点上。

### 第 4 步 — 带宽的提高

闭环带宽（以及建立时间常数的倒数）跟随环路的增益交点，而增益交点已从 $\omega_{p2}$ 移到 $\alpha\omega_{p2}$：

$$\boxed{\frac{BW_{new}}{BW_{old}} \approx \alpha}$$

功耗也提高 α 倍，因此单位功耗的带宽保持不变：速度是用功耗线性换来的。

### 第 5 步 — 为什么实际中提高幅度小于 α

1. **输出端的自负载。** 计入 $C_p$ 后，提高倍数为
$$\frac{\omega'_{p2}}{\omega_{p2}} = \frac{\alpha(C_L + C_p)}{C_L + \alpha C_p},$$
当 $\alpha \to \infty$ 时，它趋近 $(C_L + C_p)/C_p$。例如，取 $C_p = 0.1\,C_L$、$\alpha = 4$：
$$\frac{4\times1.1}{1 + 0.4} = 3.14\ \text{instead of } 4 .$$
在密勒补偿的级中，不断增大的第一级电容 $C_E$ 同样会进入 $\omega_{p2} \approx g_{m2}C_C/(C_EC_C + C_EC_L + C_CC_L)$。
2. **固定的内部极点。** 电流镜（current mirror）、共源共栅（cascode）和第一级的寄生极点都不移动；一旦 $\alpha\omega_{p2}$ 接近它们，它们就会成为起限制作用的次极点，并限制带宽。
3. **反馈网络。** 采用电容反馈时，运放的输入电容增大 α 倍，使 $\beta$ 降低，从而减小环路增益和闭环带宽。

### 结果

把所有宽度和偏置电流放大 α 倍，会使每个 $g_m$（以及器件电容）乘以 α，每个 $r_O$ 除以 α。各增益和内部极点不变，但由于输出电阻减小 α 倍而 $C_L$ 固定，输出极点升高到 $\alpha\omega_{p2}$。补偿可以随之调整（在 $C_C$ 不变时，主极点和 $\omega_T \propto g_{m1}/C_C$ 都提高 α 倍；$R_z$ 除以 α），因此 $|\beta H|$ 在 $\alpha\omega_{p2}$ 处穿越单位增益，相位裕度不变。

**带宽最多可提高 α 倍，功耗为原来的 α 倍**，前提是固定的负载电容在输出节点上占主导。实际上提高幅度会略小一些，为 $\alpha(C_L + C_p)/(C_L + \alpha C_p)$，并且由于器件电容随之增大而内部极点保持不变，它会随着 α 增大而趋于饱和。

**常见错误。** 类比于所有极点都不动的自负载电路，回答“没有提高”。这里 $C_L$ 是固定的，因此输出节点，而且只有输出节点，速度提高 α 倍。

**常见错误。** 声称提高 α² 倍（“$g_m$ 增大 α 倍，$r_O$ 减小 α 倍”）或 $\sqrt\alpha$ 倍（“$g_m \propto \sqrt{I_D}$”）。在电流密度不变时，$g_m$ 恰好按 α 缩放，而输出极点 $1/(R_{out}C_L)$ 只取决于 $R_{out} \propto 1/\alpha$。

**常见错误。** 把补偿电容也随晶体管一起放大 α 倍。这样 $\omega_T = \beta g_{m1}/C_C$ 和主极点都保持不动，增益交点不移动，更快的输出极点就被浪费了。
