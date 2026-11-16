(c)，即源/漏注入时的沟道效应。

- 该电路是一个单位增益采样器（unity-gain sampler）。标称情况下 $V_{out} = V_{in}$。其增益误差约为 $(1 + C_{in}/C_1)/A$，其中 $A$ 是运放的开环增益（open-loop gain），$C_{in}$ 是反相输入端的电容。
- (c) 沟道效应使源/漏结异常地深，横向扩展也很大。结果是有效沟道变短，短沟道效应（short-channel effect）大大增强，包括漏致势垒降低（DIBL）、沟道长度调制（channel-length modulation）以及趋向穿通（punch-through），因此 $r_O$ 下降。在相同的偏置电流下，运放增益急剧下降，该增益 $\propto g_m r_O$，对于共源共栅（cascode）结构则为 $g_m r_O^2$。更深的结还会在反相输入节点增加结电容（junction capacitance），使 $C_{in}$ 增大。这两种效应都会增大增益误差。
- (b) 底极板位于 $P$，该节点在采样期间由 $V_{in}$ 驱动，在放大期间由 $V_{out}$ 驱动。无论重掺杂使底极板对衬底的寄生电容变得多大，它都不会改变经 $C_1$ 转移的电荷。因此在完全建立（settling）之后，它不会造成增益误差，只会增加运放输出端的负载并使建立变慢；只有当某个相位太短而来不及建立时，例如 $S_1$ 通过其导通电阻（on-resistance）对 $C_1 + C_P$ 充电的情况，较大的负载才会表现为采样幅度误差。
- (a) 阈值调整注入剂量过大会使阈值移动。在运放偏置电流保持为目标值的情况下，平方律（square-law）的 $g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$ 和 $r_O = 1/(\lambda I_D)$ 在一阶近似下不变；沟道掺杂加重会使迁移率（mobility）有所下降，$g_m \propto \sqrt\mu$，但这不是大的影响。因此仅就阈值移动而言，$A$ 基本不变。它只可能间接地产生影响：较大的 $V_{GS}$ 会占用电压余度（headroom），使运放中的器件退出饱和区（saturation region）；或者开关的过驱动电压（overdrive voltage）减小，导致导通电阻增大、建立不完全。在这种拓扑中，它对电荷注入（charge injection）的影响表现为失调（offset），而不是增益误差：$S_2$ 位于虚地（virtual ground）处，因此其注入的电荷与输入无关。
