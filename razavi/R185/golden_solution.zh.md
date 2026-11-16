一条以 $V_{in1} = 1.5$ V 为中心的反相 S 形曲线，从 $+I_{SS}R_1/2$ 变化到 $-I_{SS}R_1/2$，中心斜率为 $dV_{out}/d(V_{in1} - V_{in2}) = -g_{m1}R_1/2$；在电流导引（current steering）窗口 $|V_{in1} - V_{in2}| < \sqrt{2I_{SS}/\beta_n}$ 之外曲线是平坦的。
- $M_3$、$M_4$ 是 PMOS 电流源（current source），各提供 $I_P$；所有器件都饱和且 $2I_P = I_{SS}$ 时，对左输出端应用基尔霍夫电流定律（KCL）得 $(V_{X} - V_{Y})/R_1 = I_P - I_{D1}$，因此 $V_{out} = -R_1(I_{D1} - I_{D2})/2$。
- 完全导引时（$I_{D1} = 0$ 或 $I_{SS}$）：$V_{out} = \pm I_{SS}R_1/2$，此时一个 PMOS 的全部电流 $I_P$ 经 $R_1$ 流到另一边。
- 若 $I_{SS}R_1/2$ 超过可用的电压余度（headroom），曲线会更早被限幅：在高端，PMOS 在 $V_{DD} - |V_{GS3} - V_{TH3}|$ 附近退出饱和区（saturation region）；在低端，尾电流管 $M_5$ 退出饱和区。导通的输入器件进入线性区（triode region）本身并不会限制电平，因为 $M_5$ 仍然迫使其电流为 $I_{SS}$。输出共模电平（common-mode level）只由电流平衡 $2I_P = I_{SS}$ 决定；失配（mismatch）会把两个输出都推向某一电源轨。
