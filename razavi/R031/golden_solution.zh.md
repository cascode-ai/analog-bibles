当 $t < 0$ 时，$V_X$ 保持 1 V（$M_1$ 截止）。阶跃之后，源极跟随器（source follower）对 $C_1$ 充电：$V_X$ 从 1 V 开始上升，起初很快，然后越来越慢，渐近地趋向 ≈ 1.97 V（此处 $3 - V_X = V_{TH}(V_X)$）；若没有体效应（body effect），极限值将为 2.3 V。
- 在 $t = 0^+$ 时：$V_{GS} = 2$ V，$V_{TH}(V_{SB} = 1\ \mathrm{V}) = 0.89$ V，由于 $V_{DS} = 2$ V，器件处于饱和区（saturation region）；初始电流为 $\tfrac12\beta(1.11)^2 = 0.61\beta$，初始斜率为 $0.61\beta/C_1$。
- $C_1\,dV_X/dt = \tfrac12\beta[3 - V_X - V_{TH}(V_X)]^2$：过驱动电压（overdrive voltage）缩小到零，因此趋近过程是双曲线型的（∝ 1/t），而不是指数型的；$M_1$ 始终保持饱和。
- 最终值：$V_X + 0.7 + 0.45(\sqrt{0.9 + V_X} - \sqrt{0.9}) = 3$ → $V_X \approx 1.965$ V（$V_{TH} \approx 1.03$ V）。
