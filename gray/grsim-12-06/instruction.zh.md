[图 1] 中的全差分（fully differential）运放的所有晶体管都工作在有源区，$|V_{ov}| = 0.1$ V，$I_{D5} = 100\ \mu$A（$I_{D1} = I_{D2} = |I_{D3}| = |I_{D4}| = 50\ \mu$A），$V_{An} = 10$ V，$|V_{Ap}| = 20$ V，无体效应，所有晶体管的 $C_{gs} = 180$ fF，$C_{gd} = 20$ fF。取 $V_{DD} = V_{SS} = 2.5$ V，输入共模电平为 0 V。仿真时采用 $L_{\text{eff}} = 0.8\ \mu$m 的 0.8-μm CMOS 工艺：$\mu_nC_{ox} = 127\ \mu\text{A/V}^2$，$\mu_pC_{ox} = 57.5\ \mu\text{A/V}^2$，$V_{tn} = 0.7$ V，$V_{tp} = -0.7$ V，$\lambda_n = 0.1\ \text{V}^{-1}$，$\lambda_p = 0.05\ \text{V}^{-1}$。由此得到 $(W/L)_{1,2} \approx 79$，$(W/L)_{3,4} \approx 174$，$(W/L)_5 \approx 157$。

采用 [图 2] 的共模反馈（CMFB）方案：源极跟随器（source follower）缓冲两个输出，两个相等的电阻 $R_{cs}$ 对其取平均，共模检测放大器把平均值与（同样经过电平移位的）参考电压比较，并驱动 CMC 输入端（$M_5$ 的栅极）。从 $v_{oc}$ 到 $v_{cmc}$ 的总共模检测增益为 $a_{cms} = 1$；仿真中可用理想受控源搭建。

(a) 计算 CMFB 环路工作时的 $a'_{cm} = v_{oc}/v_{ic}$。

(b) 用 SPICE 画出 $|a'_{cm}|$ 从 100 Hz 到 100 MHz 的曲线。
