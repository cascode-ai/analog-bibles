PMOS（源极在 X）与 NMOS（源极接地）串联，栅极都接 $V_G$，因此两者都必须导通：除非 $V_G > 0.7$ V 且 $V_X > V_G + 0.8$ V，否则 $I_X = 0$。
- 刚超过 $V_X = V_G + 0.8$ 时，PMOS 的过驱动电压（overdrive voltage）很小，由它限制电流：PMOS 处于饱和区（saturation region），NMOS 处于线性区（triode region），中间节点接近地电位；$I_X = \tfrac12\beta_p(V_X - V_G - 0.8)^2$，按抛物线上升。
- 当该电流达到 NMOS 的饱和电流时，即在 $V_X = V_G + 0.8 + \sqrt{\beta_n/\beta_p}\,(V_G - 0.7)$ 处，NMOS 进入饱和，PMOS 进入线性区：$I_X = \tfrac12\beta_n(V_G - 0.7)^2$，为常数（λ = 0）。
- 曲线族：较大的 $V_G$ 使导通点右移并抬高上限；当 $V_G < 0.7$ V 或 $V_G > V_X - 0.8$ 时电流为零。
- 等效跨导：在 PMOS 限流区，$\partial I_X/\partial V_G = -\beta_p(V_X - V_G - 0.8)$，为负值且幅度不断增大；在 NMOS 限流区为 $+\beta_n(V_G - 0.7)$，为常数；在转折点处它从负值跳变为正值（λ = 0 时）；在 $I_X = 0$ 处为零。
