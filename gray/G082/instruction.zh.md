[图 1] 所示的 MOS 共源共栅电流镜（cascode current mirror）由四个相同的 n 沟道晶体管组成，版图尺寸为 $W = 100$ µm、$L = 1$ µm，输入电流为 $I_{IN} = 100$ µA。器件参数：$k' = \mu_nC_{ox} = 194\ \mu\mathrm{A/V^2}$，$V_t = 0.6$ V，$L_d = 0.09$ µm，$X_d = 0$，故 $L_{\text{eff}} = 0.82$ µm，$\lambda = (0.02\ \mu\mathrm{m/V})/L_{\text{eff}} = 0.0244\ \mathrm{V^{-1}}$。忽略体效应（body effect）。

工作在有源区的 NMOS 晶体管漏极耗尽区中的碰撞电离（impact ionization）会产生漏极到衬底的电流
$I_{DB} = K_1\,(V_{DS} - V_{DS(\text{act})})\,I_D\,\exp\!\left[-\dfrac{K_2}{V_{DS} - V_{DS(\text{act})}}\right]$，
其中 $V_{DS(\text{act})}$ 是晶体管工作在有源区所需的最小 $V_{DS}$，$K_1 = 5\ \mathrm{V^{-1}}$，$K_2 = 30$ V。衬底接地。

计入这一衬底漏电流的影响，分别计算 $V_{OUT} = 2$ V 和 $V_{OUT} = 3$ V 时电流镜的小信号输出电阻（output resistance）。
