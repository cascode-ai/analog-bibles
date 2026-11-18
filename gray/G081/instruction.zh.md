设计一个 [图 1] 所示类型的简单 MOS 电流镜（current mirror）（两个 n 沟道晶体管，$M_1$ 为二极管连接，两者源极均接地），满足以下约束：

(i) 当 $V_{OUT}$ 低至距地 0.2 V 以内时，晶体管 $M_2$ 仍必须工作在有源区（active region，即饱和区）。
(ii) 输出电流必须为 50 µA。
(iii) 输出电压变化 1 V 时，输出电流的变化必须小于 1%。

令 $M_1$ 和 $M_2$ 相同。要求在给定约束下使器件总面积最小；这里器件面积取总栅面积（$W \times L$ 乘积）。给出 $W$、$L$ 以及所得面积。

器件参数：$k' = \mu_nC_{ox} = 194\ \mu\mathrm{A/V^2}$（$\mu_n = 450$ cm²/V·s，$t_{ox} = 80$ Å，$C_{ox} = 4.32$ fF/µm²），$V_t = 0.6$ V，源/漏横向扩散 $L_d = 0.09$ µm，沟道长度调制（channel-length modulation）$dX_d/dV_{DS} = 0.02$ µm/V。假设 $X_d = 0$，使 $L_{\text{eff}} = L_{\text{drwn}} - 2L_d$，且 $\lambda = (dX_d/dV_{DS})/L_{\text{eff}}$。饱和区采用 $I_D = \frac{k'}{2}\frac{W}{L_{\text{eff}}}(V_{GS}-V_t)^2(1+\lambda V_{DS})$。
