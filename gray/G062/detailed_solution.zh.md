# 详细步骤 - G062

由 200 µA 电流源确定漏极电流，反解平方律求出 $V_{GS}$ 得到直流输出，再用源极节点的小信号电阻计算跟随器增益。

### 第 1 步 — 漏极电流与栅源电压

$R\to\infty$ 时电阻中没有电流，电流源的 200 µA 全部流过晶体管：$I_D=200\ \mu$A。忽略体效应，故 $V_t=V_{t0}=0.7$ V。在饱和区

$$
I_D=\frac{\mu_nC_{ox}}2\frac WL(V_{GS}-V_t)^2
\quad\Rightarrow\quad
V_{GS}=V_t+\sqrt{\frac{2I_D}{\mu_nC_{ox}(W/L)}} .
$$

$$
V_{GS}=0.7\ \mathrm V+\sqrt{\frac{2(200\ \mu\mathrm A)}{(90\ \mu\mathrm{A/V^2})(10)}}=0.7\ \mathrm V+0.667\ \mathrm V=1.367\ \mathrm V .
$$

### 第 2 步 — 直流输出电压与工作区检查

栅极处于 3 V 偏置（$v_i=0$），因此

$$
V_O=V_G-V_{GS}=3\ \mathrm V-1.367\ \mathrm V=1.633\ \mathrm V .
$$

工作区检查：$V_{DS}=5\ \mathrm V-1.633\ \mathrm V=3.37$ V 大于 $V_{GS}-V_t=0.667$ V，晶体管处于饱和区，与假设一致。

### 第 3 步 — 小信号增益

该偏置下的跨导为

$$
g_m=\sqrt{2\mu_nC_{ox}\frac WL I_D}=\sqrt{2(90\ \mu\mathrm{A/V^2})(10)(200\ \mu\mathrm A)}=0.60\ \mathrm{mA/V}.
$$

源极节点的负载为 $R_{\mathrm{eff}}$，即 $R$、电流源输出电阻与 $r_o$ 的并联。由 $v_{gs}=v_i-v_o$ 且漏极为交流地，源极的 KCL 给出 $g_m(v_i-v_o)=v_o/R_{\mathrm{eff}}$，所以

$$
\frac{v_o}{v_i}=\frac{g_mR_{\mathrm{eff}}}{1+g_mR_{\mathrm{eff}}} .
$$

此处 $R\to\infty$、电流源理想且 $\lambda=0$，故 $R_{\mathrm{eff}}\to\infty$；不计体效应，也没有 $g_{mb}$ 项。因此

$$
\frac{v_o}{v_i}=1 .
$$

由于晶体管电流不能变化，$v_{gs}$ 保持不变，源极严格跟随栅极；结果与 $g_m$ 的数值无关。答案为 $V_O=1.63$ V，$v_o/v_i=1$。
